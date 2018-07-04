import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { Category } from './product.categories';

@Injectable()
export class ProductsService {

  getProducts(): Array<Product> {
    let res = [];
    for (let i=0, end = 10; i < end; i++ ) {
      res.push({
        id: 'id-' + i,
        name: 'Name' + i,
        description: 'Description' + i,
        price: 100 + i,
        category: i%2 === 0 ? Category.eng: Category.zh,
        isAvailable: !!Math.round(Math.random())
      });
    }
    return res;
  }
}
