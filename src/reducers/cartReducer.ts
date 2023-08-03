/* eslint-disable no-case-declarations */
/* eslint-disable indent */

import { Product } from '../types/product';
import { CartAction, CartActionTypes } from '../actions/cartActions';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const getCartItemsFromLocalStorage = (): CartItem[] => {
  const cartItemsJson = localStorage.getItem('cartItems');
  return cartItemsJson ? JSON.parse(cartItemsJson) : [];
};

const saveCartItemsToLocalStorage = (cartItems: CartItem[]): void => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const initialState: CartState = {
  cartItems: getCartItemsFromLocalStorage(),
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      const newProduct = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newProduct.id,
      );

      if (existingItem) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === newProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        saveCartItemsToLocalStorage(updatedCartItems);
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        const newItem: CartItem = {
          ...newProduct,
          quantity: 1,
        };
        const updatedCartItems = [...state.cartItems, newItem];
        saveCartItemsToLocalStorage(updatedCartItems);
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
    case CartActionTypes.REMOVE_FROM_CART:
      const productIdToRemove = action.payload;
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== productIdToRemove,
      );
      saveCartItemsToLocalStorage(updatedCartItems);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    case CartActionTypes.UPDATE_QUANTITY:
      const { itemId, quantity } = action.payload;
      const updCartItems = state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item,
      );
      saveCartItemsToLocalStorage(updCartItems);
      return {
        ...state,
        cartItems: updCartItems,
      };
    case CartActionTypes.REMOVE_ALL_FROM_CART:
      saveCartItemsToLocalStorage([]);
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
