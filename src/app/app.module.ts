import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductsService } from './products/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
