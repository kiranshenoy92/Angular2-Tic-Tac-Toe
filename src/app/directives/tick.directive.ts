import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTick]',
  host : {
    '(click)': 'writeMove()'
   }
})
export class TickDirective {

  constructor(private element : ElementRef) { }
  @Input() value: string;
  writeMove(){
    if(this.element.nativeElement.innerHTML == ''){
      this.element.nativeElement.innerHTML = this.value;
    }
  }

}
