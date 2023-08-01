import { client } from '../utils/fetchClient';
import { Product } from '../types/product';

export const getProducts = (endpoint: string) => {
  return client.get<Product[]>(`/${endpoint}`);
};
