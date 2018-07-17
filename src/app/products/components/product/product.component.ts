import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

import { ProductModel } from '../../product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('goals', [
      state('normal', style({
        backgroundColor: 'transparent',
        transform: 'scale(1)'
      })),
      state('active', style({
        height: '30px',
        backgroundColor: 'lightyellow',
        border: '1px solid green',
        borderRadius: '30px',
        padding: '15px 0 0 35px',
        transform: 'scale(2)'
      })),
      transition('*=>normal', animate('500ms')),
      transition('*=>active', animate('500ms')),
    ])
  ]
})
export class ProductComponent {
  @Input() data: ProductModel;
  @Output() public buy = new EventEmitter<ProductModel>();

  animationState = 'normal';

  onClick() {
    console.log(`The product ${this.data.name}(${this.data.id}) is added to your cart`);
    this.buy.emit(this.data);
  }

  logCountForDemo() {
    console.log(`From first component(demo): item ${this.data.name} has ${this.data.count} items`);
  }

  onAnimate() {
    this.animationState = (this.animationState === 'normal') ? 'active' : 'normal';
  }
}
