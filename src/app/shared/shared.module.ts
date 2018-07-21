import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBorderDirective } from './add-border.directive';
import { CustomClickDirective } from './custom-click.directive';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddBorderDirective,
    CustomClickDirective,
    OrderByPipe
  ],
  providers: [OrderByPipe],
  exports: [
    AddBorderDirective,
    CustomClickDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
