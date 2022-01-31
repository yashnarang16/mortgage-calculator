import { CurrencyPipe } from '@angular/common';
import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appCurrencyFormatter]'
})
export class CurrencyFormatterDirective {

private element: any | undefined;

  constructor(private currenyPipe: CurrencyPipe, private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
   }


   @HostListener('focus',['$event.target.value'])
     onFocus(value: string) {
       this.element.value = (value).replace(/[^0-9.-]+/g,"");
     }


  @HostListener('blur',['$event.target.value'])
     onBlur(value: string) {
       this.element.value = this.currenyPipe.transform(value);
     }

}
