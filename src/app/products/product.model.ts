import { Category} from './product.categories';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}
