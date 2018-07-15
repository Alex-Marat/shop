import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [ProductComponent, ProductListComponent],
  exports: [ProductComponent, ProductListComponent],

})
export class ProductsModule { }
