import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ProductModel } from '../../products/product.model';

@Injectable()
export class CartService {
  private cart: ProductModel[] = [];
  private subjectCartItemLength: Subject<number> = new Subject();

  addItemToCart(item: ProductModel) {
    if (item) {
      this.cart.push(item);
      this.subjectCartItemLength.next(this.cart.length);
    }
  }

  removeItemFromCart(id: string) {
    if (id) {
      this.cart = this.cart.filter(item => item.id !== id);
      this.subjectCartItemLength.next(this.cart.length);
    }
  }

  getCartItemsLength(): Observable<number> {
    return this.subjectCartItemLength;
  }

  getAllCartItems() {
    return this.cart;
  }

  increaseItemCounter(id: string) {
    if (id) {
      this.cart.map((item) => {
        item.id === id ? item.count++ : null;
      });
      this.subjectCartItemLength.next(this.cart.length);
    }
  }

  decreaseItemCounter(id: string) {
    if (id) {
      this.cart.map((item) => {
        item.id === id && item.count > 0 ? item.count-- : null;
      });
    }
  }

  // getTotalSum() {
  //   return this.cart.map((item) => item.count * item.price).reduce((a, b) => a + b, 0);
  // }
}
