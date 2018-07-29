import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CartListComponent, CartItemComponent, CartMiniComponent } from './components';
import { CartService } from './services/cart.service';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ],
  declarations: [ CartListComponent, CartItemComponent, CartMiniComponent ],
  providers: [ CartService ],
  exports: [ CartListComponent, CartItemComponent, CartMiniComponent ]
})
export class CartModule { }
