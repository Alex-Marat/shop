import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import {
  ProductListComponent,
  ProductComponent,
  ProductReviewsComponent } from './components';
import { ProductsService, ProductResolver } from './services';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductReviewsComponent
  ],
  providers: [
    ProductsService,
    ProductResolver
  ],
  exports: [ProductComponent, ProductListComponent, ProductReviewsComponent]
})
export class ProductsModule { }
