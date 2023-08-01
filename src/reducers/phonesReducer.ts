import { AnyAction } from 'redux';
import { Product } from '../types/product';

interface PhonesState {
  phones: Product[];
}

const initialState: PhonesState = {
  phones: [],
};

const phonesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_PHONES':
      return { ...state, phones: action.payload };
    default:
      return state;
  }
};

export default phonesReducer;
