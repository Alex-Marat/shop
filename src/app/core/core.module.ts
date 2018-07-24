import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService } from './services/constants.service';
import { DemoServicesWorkingComponent } from './components/demo-services-working/demo-services-working.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartModule } from '../cart/cart.module';
import { ProductsModule } from '../products/products.module';

@NgModule({
  imports: [
    CommonModule,
    CartModule,
    ProductsModule
  ],
  declarations: [
    DemoServicesWorkingComponent,
    ShopComponent
  ],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    { provide: ConstantsService, useValue:  { app: 'TaskManager', ver: '1.0' }}
  ]
})
export class CoreModule { }
