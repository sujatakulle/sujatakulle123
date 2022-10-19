import { Directive, ElementRef } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Directive({
  selector: '[appDirective2]'
})
export class Directive2Directive {

  constructor(private element: ElementRef) { 
    console.log(this.element.nativeElement);
    this.element.nativeElement.fontsize='15px';
    // this.element.nativeElement.background ="aqua";
  }

}
