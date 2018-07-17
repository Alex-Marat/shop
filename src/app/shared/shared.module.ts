import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBorderDirective } from './add-border.directive';
import { CustomClickDirective } from './custom-click.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddBorderDirective,
    CustomClickDirective
  ],
  exports: [
    AddBorderDirective,
    CustomClickDirective
  ]
})
export class SharedModule { }
