import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() colorForHover!: string;
  defaultBackground = 'white'
  defaultColor = 'black'

  @HostBinding('style.background') background: string = this.defaultBackground
  @HostBinding('style.color') color: string = this.defaultColor
  @HostListener("mouseenter") onMouseEnter() {
    this.background = this.colorForHover;
    this.color = this.defaultBackground;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.background ="white";
    this.color = this.defaultColor;
  }

}
