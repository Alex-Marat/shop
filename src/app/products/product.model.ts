import { Category} from './product.categories';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  count: number;
  isAvailable: boolean;
  discount?: number;
}

export class ProductModel implements Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public count: number,
    public isAvailable: boolean,
    public discount: number = 0) {}
}
