/* eslint-disable indent */
import { AnyAction } from 'redux';
import { Product } from '../types/product';

interface ProductState {
  products: Product[];
  isLoading: boolean;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
};

const productsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
