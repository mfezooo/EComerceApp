import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {

  constructor(private elementRef : ElementRef)
   { 
    elementRef.nativeElement.style.border="2px solid darkblue";
  }
@HostListener('mouseover') onMouseOver(){
 this.elementRef.nativeElement.style.border="2px solid yellow";
}
@HostListener('mouseout') onMouseOut(){
  this.elementRef.nativeElement.style.border="2px solid darkblue";
 }
}
