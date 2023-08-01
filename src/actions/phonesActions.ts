import { Dispatch } from 'redux';
// import { RootState } from '../store';
import { Product } from '../types/product';
import { getPhones } from '../utils/helpers';

export const setPhones = (phones: Product[]) => ({
  type: 'SET_PHONES',
  payload: phones,
});

export const fetchPhones = () => {
  return async (dispatch: Dispatch /* getState: () => RootState */) => {
    try {
      const fetchedPhones = await getPhones();
      dispatch(setPhones(fetchedPhones));
    } catch (error) {
      console.error('Error fetching phones', error);
    }
  };
};
