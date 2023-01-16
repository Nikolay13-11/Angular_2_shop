import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeFontSize]'
})
export class ChangeFontSizeDirective {
  @Input() fontWeight: string | null = 'bold';
  active: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight',  this.active ? 'normal' : this.fontWeight);
    this.active = !this.active;
  };

}
