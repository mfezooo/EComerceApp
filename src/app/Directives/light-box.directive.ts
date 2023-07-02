import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges{

  @Input("LightBox") highlightColor:string = "yellow";
  @Input() backgroundColor:string = "blue";

  
  constructor(private elementRef : ElementRef)
   { 
  }
  ngOnChanges(): void {
    this.elementRef.nativeElement.style.border=`4px solid ${this.backgroundColor}`; 
  }
@HostListener('mouseover') onMouseOver(){
 this.elementRef.nativeElement.style.border=`4px solid ${this.highlightColor}`;
}
@HostListener('mouseout') onMouseOut(){
  this.elementRef.nativeElement.style.border=`4px solid ${this.backgroundColor}`;
 }
}
