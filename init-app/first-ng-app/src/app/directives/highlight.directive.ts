import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostBinding("style.backgroundColor") bgColor = "red";

  @HostListener("mouseenter")
  changeFontSize() {
    console.log("Mouse enter!");
    this.el.nativeElement.style.fontSize = "40px";
  }

  @HostListener("mouseleave")
  resetFontSize() {
    console.log("Mouse leave!");
    this.el.nativeElement.style.fontSize = "20px";
  }
}
