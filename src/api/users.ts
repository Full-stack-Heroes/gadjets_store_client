/* eslint-disable @typescript-eslint/no-explicit-any */
import { Credentials } from '../types/authentification';
import { Order } from '../types/order';
import { Product } from '../types/product';
import { client } from '../utils/fetchClient';

export const login = (credentials: Credentials) => {
  return client.post<any>('/user/login', credentials);
};

export const getUserFavorites = () => {
  return client.get<Product[]>('/user/favorites');
};

export const addToUserFavorites = (itemId: number) => {
  return client.post<any>('/user/favorites', { itemId });
};

export const removeFromUserFavorites = (itemId: number) => {
  return client.delete('/user/favorites', { itemId });
};

export const getUserCart = () => {
  return client.get<Product[]>('/user/cart');
};

export const addToUserCart = ({
  id: itemId,
  quantity,
}: Pick<Product, 'id' | 'quantity'>) => {
  return client.post<any>('/user/cart', { itemId, quantity });
};

export const removeFromUserCart = (itemId: number) => {
  return client.delete('/user/cart', { itemId });
};

export const createOrder = () => {
  return client.post('/user/orders');
};

export const getOrders = () => {
  return client.get<Order[]>('/user/orders');
};
