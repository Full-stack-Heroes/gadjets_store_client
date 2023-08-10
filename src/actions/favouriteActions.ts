import { Product } from '../types/product';

export enum FavouritesActionTypes {
  ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES',
  REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES',
  REMOVE_ALL_FROM_FAVOURITES = 'REMOVE_ALL_FROM_FAVOURITES',
}

interface AddToFavouritesAction {
  type: FavouritesActionTypes.ADD_TO_FAVOURITES;
  payload: Product;
}

interface RemoveFromFavouritesAction {
  type: FavouritesActionTypes.REMOVE_FROM_FAVOURITES;
  payload: number;
}

interface RemoveALLFromFavouritesAction {
  type: FavouritesActionTypes.REMOVE_ALL_FROM_FAVOURITES;
}

export const addToFavourites = (product: Product): AddToFavouritesAction => ({
  type: FavouritesActionTypes.ADD_TO_FAVOURITES,
  payload: product,
});

export const removeFromFavourites = (
  productId: number,
): RemoveFromFavouritesAction => ({
  type: FavouritesActionTypes.REMOVE_FROM_FAVOURITES,
  payload: productId,
});

export const removeAllFromFavourites = (): RemoveALLFromFavouritesAction => ({
  type: FavouritesActionTypes.REMOVE_ALL_FROM_FAVOURITES,
});

export type FavouritesAction =
  | AddToFavouritesAction
  | RemoveFromFavouritesAction
  | RemoveALLFromFavouritesAction;
