import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBorderDirective } from './add-border.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddBorderDirective],
  exports: [AddBorderDirective]
})
export class SharedModule { }
