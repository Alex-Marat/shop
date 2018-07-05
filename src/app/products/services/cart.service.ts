import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Product } from '../product.model';

@Injectable()
export class CartService {
  private cart: Product[] = [];
  private subjectCartItemLength: Subject<number> = new Subject();

  addItemToCart(item) {
    if (item) {
      this.cart.push(item);
      this.subjectCartItemLength.next(this.cart.length);
    }
  }

  removeItemFromCart(id) {
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
}
