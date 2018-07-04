import { Component, Input } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data: Product;

  onClick() {
    console.log(`The product ${this.data.name}(${this.data.id}) is added to your cart`);
  }
}
