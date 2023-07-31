import { client } from '../utils/fetchClient';
import { Phone } from '../types/phone';

export const getProducts = () => {
  return client.get<Phone[]>('/products');
};
