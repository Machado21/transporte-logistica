import { ObjectId } from 'mongodb';

export interface Product {
  id?: ObjectId;
  description: string;
  amount: number;
  price: number;
  group: string;
  brand: string;
  factory_code: number;
  sub_group: string;
  sys_code: number;
}

export interface GroupedProducts {
  [prodCode: number]: Product[];
}
