import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive {

  

    constructor(private ele: ElementRef) {
      console.log(this.ele.nativeElement);
      this.ele.nativeElement.style.fontSize = '20px';
      // this.ele.nativeElement.style.background = "aqua";
    }
   }


