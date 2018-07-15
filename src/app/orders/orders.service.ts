import { Injectable } from '@angular/core';

@Injectable()
export class OrdersService {

  confirmOrder(order) {
    console.clear();
    console.log('** your order: **');
    console.log(order);
  }
}
