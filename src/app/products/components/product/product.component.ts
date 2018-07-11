import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ProductModel } from '../../product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data: ProductModel;
  @Output() public buy = new EventEmitter<ProductModel>();

  onClick() {
    console.log(`The product ${this.data.name}(${this.data.id}) is added to your cart`);
    this.buy.emit(this.data);
  }
}
