import { Product } from '../types/product';

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
}

interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: Product;
}

interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: number;
}

interface UpdateQuantityAction {
  type: CartActionTypes.UPDATE_QUANTITY;
  payload: {
    itemId: number;
    quantity: number;
  };
}

export const addToCart = (product: Product): AddToCartAction => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId: number): RemoveFromCartAction => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: productId,
});

export const updateQuantity = (
  itemId: number,
  quantity: number,
): UpdateQuantityAction => ({
  type: CartActionTypes.UPDATE_QUANTITY,
  payload: {
    itemId,
    quantity,
  },
});

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateQuantityAction;
