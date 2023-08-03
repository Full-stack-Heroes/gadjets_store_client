import { AnyAction } from 'redux';
import { Product } from '../types/product';
import { getProducts } from '../api/products';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';

enum ProductActionTypes {
  SET_PRODUCTS = 'SET_PRODUCTS',
  SET_LOADING = 'SET_LOADING',
}

interface SetProductsAction {
  type: ProductActionTypes.SET_PRODUCTS;
  payload: Product[];
}

interface SetLoadingAction {
  type: ProductActionTypes.SET_LOADING;
  payload: boolean;
}

export const setProducts = (products: Product[]): SetProductsAction => ({
  type: ProductActionTypes.SET_PRODUCTS,
  payload: products,
});

export const setLoading = (isLoading: boolean): SetLoadingAction => ({
  type: ProductActionTypes.SET_LOADING,
  payload: isLoading,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchProducts = (endpoint: string): any => {
  return async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
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
