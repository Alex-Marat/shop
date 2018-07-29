import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ProductComponent,
  ProductReviewsComponent
} from './components';
import { ProductResolver } from './services/product.resolver';

const routes: Routes = [
  {path: 'products/:id', component: ProductComponent, resolve: {data: ProductResolver},
    children: [
      {path: '', component: ProductReviewsComponent, outlet: 'reviews'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
