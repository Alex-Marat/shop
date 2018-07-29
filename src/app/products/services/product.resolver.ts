import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { ProductsService } from './products.service';

@Injectable()
export class ProductResolver implements Resolve<any> {
  constructor(public productsService: ProductsService) {}

  public resolve(route: ActivatedRouteSnapshot) {
    return route.params.id ? this.productsService.getProductById(route.params.id) : null;
  }
}
