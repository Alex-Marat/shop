import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CoreModule } from './core/core.module';
import { ShopComponent } from './core/components/shop/shop.component';
import { DemoServicesWorkingComponent} from './core/components/demo-services-working/demo-services-working.component';


const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'demo', component: DemoServicesWorkingComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CartModule,
    ProductsModule,
    OrdersModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
