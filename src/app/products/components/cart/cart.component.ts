import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Product } from '../../product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  counter = 0;
  listIsShown: boolean;
  list: Product[];
  counterSubscription: Subscription;

  constructor(public cartService: CartService) { }

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

  removeFromCart(id) {
    this.cartService.removeItemFromCart(id);
    this.refreshList();
  }

  refreshList() {
    this.list = this.cartService.getAllCartItems();
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
