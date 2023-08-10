/* eslint-disable no-case-declarations */
/* eslint-disable indent */

import { Product } from '../types/product';
import {
  FavouritesAction,
  FavouritesActionTypes,
} from '../actions/favouriteActions';
import { addToUserFavorites, removeFromUserFavorites } from '../api/users';

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

const saveFavoritesItemsToDB = async(id: number) => {
  try {
    await addToUserFavorites(id);
  } catch (error) {
    console.log('Error while saving item to favorites', error);
  }
};

const removeFavoritesItemFromDB = async(id: number) => {
  try {
    await removeFromUserFavorites(id);
  } catch {
    console.log('Error while saving item to favorites');
  }
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
        saveFavoritesItemsToDB(newFavorite.id)
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
      removeFavoritesItemFromDB(favoriteIdToRemove)
      return {
        ...state,
        favoriteItems: updatedFavoriteItems,
      };
    case FavouritesActionTypes.REMOVE_ALL_FROM_FAVOURITES:
      saveFavoriteItemsToLocalStorage([]);
      return {
        ...state,
        favoriteItems: [],
      };
    default:
      return state;
  }
};

export default favoriteReducer;
