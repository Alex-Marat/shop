import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddBorder]'
})
export class AddBorderDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2) {}

  @HostBinding('style.cursor')
  get getCursor() {
    return 'pointer';
  }

  @HostListener('mouseenter')
  addBorder() {
    this.setBorder('1px solid green');
  }

  @HostListener('mouseleave')
  removeBorder() {
    this.setBorder('none');
  }

  setBorder(borderStyle) {
    this.renderer.setStyle(this.element.nativeElement, 'border', borderStyle);
  }
}
