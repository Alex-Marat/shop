import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ProductModel } from '../../../products/product.model';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../../orders/orders.service';
import { OrderByPipe } from '../../../shared/order-by.pipe';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  counter = 0;
  list: ProductModel[];
  total: number;
  todayDate: number;
  sortAsc = false;
  sortField = 'name';

  counterSubscription: Subscription;

  constructor(
    public cartService: CartService,
    public ordersService: OrdersService,
    public orderByPipe: OrderByPipe
  ) {}

  ngOnInit() {
    this.todayDate = Date.now();
    this.list = this.cartService.getAllCartItems();
    this.counter = this.list ? this.list.length : 0;

    this.counterSubscription = this.cartService.getCartItemsLength()
      .subscribe(count => {
        this.counter = count;
        this.total = this.cartService.getTotalSum();
      });

    this.total = this.cartService.getTotalSum();
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

  clearCart() {
    const clear = confirm('Are you sure to remove all the cart items ? ');
    if (clear) {
      this.cartService.clearCart();
      this.refreshList();
    }
  }

  isSortBy(field: string) {
    return field && this.sortField === field;
  }

  sortBy(field: string) {
    this.toggleSortOrder();

    if (this.sortField !== field) {
      this.setActiveSortOption(field);
    }

    this.orderByPipe.transform(this.list, field, this.sortAsc);
  }

  setActiveSortOption(field: string) {
    this.sortAsc = false;
    this.sortField = field;
  }

  toggleSortOrder() {
    this.sortAsc = !this.sortAsc;
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
