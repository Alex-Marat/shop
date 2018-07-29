import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-mini',
  templateUrl: './cart-mini.component.html',
  styleUrls: ['./cart-mini.component.css']
})
export class CartMiniComponent implements OnInit, OnDestroy {
  counter = 0;
  counterSubscription: Subscription;

  constructor(
    public cartService: CartService,
    public router: Router
  ) { }

  ngOnInit() {
    this.counterSubscription = this.cartService.getCartItemsLength()
      .subscribe(count => {
        this.counter = count;
      });
  }

  openCart() {
    this.router.navigate(['/cart']);
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
