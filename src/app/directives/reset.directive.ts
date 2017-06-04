import { Directive } from '@angular/core';

@Directive({
  selector: '[appReset]',
  host: {
    '(click)': 'restartGame()'
   }
})
export class ResetDirective {

  constructor() { }

  restartGame(){
   let battleField:any = document.querySelectorAll('.square');

   for (let index:number = 0; index < battleField.length; index++)
    battleField[index].innerHTML = '';
  }
}
