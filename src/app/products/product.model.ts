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
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  count: number;
  isAvailable: boolean;
  discount?: number;

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    category: Category,
    count: number,
    isAvailable: boolean,
    discount?: number) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.category = category;
      this.count = count;
      this.isAvailable = isAvailable;
      this.discount = discount || 0;
  }
}
