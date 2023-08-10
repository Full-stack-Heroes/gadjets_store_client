/* eslint-disable no-case-declarations */
/* eslint-disable indent */

import { Product } from '../types/product';
import {
  FavouritesAction,
  FavouritesActionTypes,
} from '../actions/favouriteActions';

interface FavoriteItem extends Product {}

interface FavoriteState {
  favoriteItems: FavoriteItem[];
}

const getFavoriteItemsFromLocalStorage = (): FavoriteItem[] => {
  const favoriteItemsJson = localStorage.getItem('favoriteItems');
  return favoriteItemsJson ? JSON.parse(favoriteItemsJson) : [];
};

const saveFavoriteItemsToLocalStorage = (
  favoriteItems: FavoriteItem[],
): void => {
  localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
};

const initialState: FavoriteState = {
  favoriteItems: getFavoriteItemsFromLocalStorage(),
};

const favoriteReducer = (
  state: FavoriteState = initialState,
  action: FavouritesAction,
): FavoriteState => {
  switch (action.type) {
    case FavouritesActionTypes.ADD_TO_FAVOURITES:
      const addToFavAction = action;
      const newFavorite = addToFavAction.payload;
      const existingFavorite = state.favoriteItems.find(
        (item) => item.id === newFavorite.id,
      );

      if (!existingFavorite) {
        const updatedFavoriteItems = [...state.favoriteItems, newFavorite];
        saveFavoriteItemsToLocalStorage(updatedFavoriteItems);
        return {
          ...state,
          favoriteItems: updatedFavoriteItems,
        };
      }
      return state;

    case FavouritesActionTypes.REMOVE_FROM_FAVOURITES:
      const removeFromFavAction = action;
      const favoriteIdToRemove = removeFromFavAction.payload;
      const updatedFavoriteItems = state.favoriteItems.filter(
        (item) => item.id !== favoriteIdToRemove,
      );
      saveFavoriteItemsToLocalStorage(updatedFavoriteItems);
      return {
        ...state,
        favoriteItems: updatedFavoriteItems,
      };

    default:
      return state;
  }
};

export default favoriteReducer;
