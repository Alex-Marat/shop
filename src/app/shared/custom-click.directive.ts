import {
  Directive, ElementRef,
  EventEmitter, HostListener,
  Input, Output, Renderer2
} from '@angular/core';

@Directive({
  selector: '[appCustomClick]'
})
export class CustomClickDirective {
  @Input() index: number;
  @Output() animate = new EventEmitter();

  defaultFontSize = 16;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click')
  onCustomClick() {
    const fontSize = this.index ?  this.index * this.defaultFontSize : this.defaultFontSize;
    this.renderer.setStyle(this.element.nativeElement, 'font-size', `${fontSize}px`);
    this.animate.emit();
  }
}
