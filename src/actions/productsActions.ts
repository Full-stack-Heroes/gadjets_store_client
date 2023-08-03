import { AnyAction, Dispatch } from 'redux';
import { Product } from '../types/product';
import { getProducts } from '../api/products';
import { ThunkAction } from 'redux-thunk';
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

type ProductAction = SetProductsAction | SetLoadingAction;

export const setProducts = (products: Product[]): SetProductsAction => ({
  type: ProductActionTypes.SET_PRODUCTS,
  payload: products,
});

export const setLoading = (isLoading: boolean): SetLoadingAction => ({
  type: ProductActionTypes.SET_LOADING,
  payload: isLoading,
});

export const fetchProducts = (endpoint: string): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch: Dispatch<ProductAction | AnyAction>) => {
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
