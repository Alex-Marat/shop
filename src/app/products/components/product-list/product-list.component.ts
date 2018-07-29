import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

import { ProductModel } from '../../product.model';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductComponent) children: ProductComponent[];
  @ViewChild(ProductComponent) child;

  products: ProductModel[];

  constructor(
    public productsService: ProductsService,
    public cartService: CartService) { }

  ngOnInit() {
    this.productsService.getProducts()
      .then((results) => { this.products = results; });
  }

  onBuy(item) {
    const itemCopy = {...item, count: 1};
    this.cartService.addItemToCart(itemCopy);
  }
}
