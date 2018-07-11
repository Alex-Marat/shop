import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];

  constructor(
    public productsService: ProductsService,
    public cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(item) {
    const itemCopy = {...item}
    this.cartService.addItemToCart(itemCopy);
  }
}
