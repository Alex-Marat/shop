import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersService } from './orders.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [OrdersService]
})
export class OrdersModule { }
