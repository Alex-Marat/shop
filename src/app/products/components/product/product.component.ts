import { Component, OnInit } from '@angular/core';

import { Category } from '../../product.categories';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponentComponent implements OnInit {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor(public productService: ProductsService) { }

  ngOnInit() {
    let { id, name, description, price, category, isAvailable } = this.productService.getProducts()[0];
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.isAvailable = isAvailable;
  }

  onClick() {
    console.log(`The product ${this.name}(${this.id}) is added to your cart`);
  }
}
