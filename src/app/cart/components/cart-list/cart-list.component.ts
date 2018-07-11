import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ProductModel } from '../../../products/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  counter = 0;
  listIsShown: boolean;
  list: ProductModel[];

  counterSubscription: Subscription;

  constructor(
    public cartService: CartService
  ) {}

  ngOnInit() {
    this.counterSubscription = this.cartService.getCartItemsLength()
      .subscribe(count => {
        this.counter = count;
      });
  }

  showAll() {
    this.refreshList();
    this.toggleListVisibility();
  }

  toggleListVisibility() {
    this.listIsShown = !this.listIsShown;
  }

  refreshList() {
    this.list = this.cartService.getAllCartItems();
  }

  removeFromCart(id) {
    this.cartService.removeItemFromCart(id);
    this.refreshList();
  }

  increaseItems(id) {
    this.cartService.increaseItemCounter(id);
    this.refreshList();
  }

  decreaseItems(id) {
    this.cartService.decreaseItemCounter(id);
    this.refreshList();
  }

  // getTotalSum () {
  //   this.cartService.getTotalSum();
  // }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
