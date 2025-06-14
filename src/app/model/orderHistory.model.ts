import { Product } from './product.model';

export interface orderHistory {
  orders: (Product & { quantity?: number })[];
  check: Date;
  status: string;
  total: number;
  id: string;
  payMethod: string;
}
