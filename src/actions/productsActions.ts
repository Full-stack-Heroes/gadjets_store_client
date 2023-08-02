import { Dispatch } from 'redux';
import { Product } from '../types/product';
import { getProducts } from '../api/products';

export const setProducts = (products: Product[]) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

const setLoading = (isLoading: boolean) => ({
  type: 'SET_LOADING',
  payload: isLoading,
});

export const fetchProducts = (endpoint: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const fetchedProducts = await getProducts(endpoint);
      dispatch(setProducts(fetchedProducts));
      console.log(fetchedProducts);
    } catch (error) {
      console.error('Error fetching products', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
