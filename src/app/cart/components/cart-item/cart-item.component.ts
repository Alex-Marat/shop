import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProductModel } from '../../../products/product.model';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() data: ProductModel;
  @Output() increase = new EventEmitter<string>();
  @Output() decrease = new EventEmitter<string>();
  @Output() removeItem = new EventEmitter<string>();

  currentCounter: number;
  countInStore: number;
  tooltip: string;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.currentCounter = 1;
    this.countInStore = this.productsService.getProductById(this.data.id).count;
  }

  get noItem() {
    return this.currentCounter === 0;
  }

  get notEnough() {
    return this.currentCounter === this.countInStore;
  }

  onIncrease() {
    if (this.currentCounter < this.countInStore) {
      this.currentCounter = this.currentCounter + 1;
      this.increase.emit(this.data.id);
    }
  }

  onDecrease() {
    if (this.currentCounter > 0) {
      this.currentCounter = this.currentCounter - 1;
      this.decrease.emit(this.data.id);
    }
  }

  onRemove() {
    this.removeItem.emit(this.data.id);
  }

  setIncTooltip(show) {
    if (show) {
      this.tooltip =  this.notEnough ? 'Not enough items in the store' : 'Add item';
    } else {
      this.clearTooltip();
    }
  }

  setDecTooltip(show) {
    if (show) {
      this.tooltip = this.noItem ? '' : 'Decrease items';
    } else {
      this.clearTooltip();
    }
  }

  clearTooltip() {
    this.tooltip = '';
  }
}
