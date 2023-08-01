import { client } from '../utils/fetchClient';
import { Product } from '../types/product';

export const getProducts = () => {
  return client.get<Product[]>('/products');
};
