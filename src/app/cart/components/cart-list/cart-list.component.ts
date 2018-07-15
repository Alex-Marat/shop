import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ProductModel } from '../../../products/product.model';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../../orders/orders.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  counter = 0;
  listIsShown: boolean;
  list: ProductModel[];
  total: number;

  counterSubscription: Subscription;

  constructor(
    public cartService: CartService,
    public ordersService: OrdersService
  ) {}

  ngOnInit() {
    this.counterSubscription = this.cartService.getCartItemsLength()
      .subscribe(count => {
        this.counter = count;
        this.total = this.cartService.getTotalSum();
      });

    this.total = this.cartService.getTotalSum();
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
    this.total = this.cartService.getTotalSum();
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

  confirm() {
    alert('Thank you! See your order details in console');
    this.ordersService.confirmOrder(this.list);
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
