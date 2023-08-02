import { client } from '../utils/fetchClient';
import { Product } from '../types/product';
import { ProductDetails } from '../types/productDetails';

export const getProducts = (endpoint: string) => {
  return client.get<Product[]>(`/${endpoint}`);
};

export const getProductData = (endpoint: string) => {
  return client.get<ProductDetails>(endpoint);
};
