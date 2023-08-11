import { Product } from './product';

export interface Order {
  id: number;
  createdAt: string;
  status: string;
  productsWithQuantity: Required<Product>[];
}
