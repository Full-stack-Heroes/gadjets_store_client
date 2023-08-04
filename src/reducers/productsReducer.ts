/* eslint-disable indent */
import { AnyAction } from 'redux';
import { productWithCounter } from '../types/productWithCounter';

interface ProductState {
  products: productWithCounter;
  isLoading: boolean;
}

const initialState: ProductState = {
  products: {count: 0, rows: []},
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
