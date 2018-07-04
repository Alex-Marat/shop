import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponentComponent } from './products/components/product/product.component';
import { ProductsService } from './products/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
