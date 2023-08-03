import { client } from '../utils/fetchClient';
import { Product } from '../types/product';
import { ProductDetails } from '../types/productDetails';
import { productWithCounter } from '../types/productWithCounter';

export const getProducts = (endpoint: string) => {
  return client.get<Product[]>(`/${endpoint}`);
};

export const getProductsWithCounter = (endpoint: string) => {
  return client.get<productWithCounter>(`/${endpoint}`);
};

export const getProductData = (endpoint: string) => {
  return client.get<ProductDetails>(endpoint);
};
