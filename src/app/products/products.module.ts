import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsService } from './services/products.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule
  ],
  declarations: [ProductComponent, ProductListComponent],
  providers: [
    ProductsService,
  ],
  exports: [ProductComponent, ProductListComponent]
})
export class ProductsModule { }
