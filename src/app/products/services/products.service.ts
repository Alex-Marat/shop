import { Injectable } from '@angular/core';

import { ProductModel } from '../product.model';
import { Category } from '../product.categories';

@Injectable()
export class ProductsService {
  products: ProductModel[];

  constructor() {
    this.products = this._getProducts();
  }

  getProducts() {
    return Promise.resolve(this.products);
  }

  getProductById(id: string): ProductModel {
    return this.products.filter((p) => p.id === id)[0];
  }

  getReviews(id: string) {
    return Promise.resolve([
      {date: 1532880330602, author: 'Nick', text: 'cool'},
      {date: 1532880340602, author: 'Jack', text: 'Nice thing'},
      {date: 1532890330602, author: 'Robert', text: 'Amazing!'}
    ]);
  }

  private _getProducts(): Array<ProductModel> {
    const res = [];
    const getCount = (i) => i % 2 ? i : 0;

    for ( let i = 0, end = 10; i < end; i++ ) {
      res.push({
        id: 'id-' + i,
        name: 'Name' + i,
        description: 'Description' + i,
        price: 100 + i,
        category: i % 2 === 0 ? Category.eng : Category.zh,
        count: getCount(i),
        isAvailable: getCount(i) > 0
      });
    }
    return res;
  }
}
