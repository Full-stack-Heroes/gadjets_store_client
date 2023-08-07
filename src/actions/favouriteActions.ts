import { Product } from '../types/product';

export enum FavouritesActionTypes {
  ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES',
  REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES',
}

interface AddToFavouritesAction {
  type: FavouritesActionTypes.ADD_TO_FAVOURITES;
  payload: Product;
}

interface RemoveFromFavouritesAction {
  type: FavouritesActionTypes.REMOVE_FROM_FAVOURITES;
  payload: string;
}

export const addToFavourites = (product: Product): AddToFavouritesAction => ({
  type: FavouritesActionTypes.ADD_TO_FAVOURITES,
  payload: product,
});

export const removeFromFavourites = (productId: string): RemoveFromFavouritesAction => ({
  type: FavouritesActionTypes.REMOVE_FROM_FAVOURITES,
  payload: productId,
});

export type FavouritesAction =
  | AddToFavouritesAction
  | RemoveFromFavouritesAction;
