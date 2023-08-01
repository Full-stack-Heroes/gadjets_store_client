/* eslint-disable indent */
import { AnyAction } from 'redux';
import { Product } from '../types/product';

interface PhonesState {
  phones: Product[];
  isLoading: boolean;
}

const initialState: PhonesState = {
  phones: [],
  isLoading: false,
};

const phonesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_PHONES':
      return { ...state, phones: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default phonesReducer;
