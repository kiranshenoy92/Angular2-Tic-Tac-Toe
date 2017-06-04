import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';


@Component({
  selector: 'app-battelfield',
  templateUrl: './battelfield.component.html',
  styleUrls: ['./battelfield.component.scss']
})
export class BattelfieldComponent implements OnInit {
  
  private currentPlayerLabel: string;
  private currentPlayer: boolean;
  private winnerPlayer:string;

  constructor( private gameService : GameService) {
    this.init();
  }

  ngOnInit() {
    
  }

  changeTurn():void {
    this.currentPlayer = !this.currentPlayer;
  }

  init(){
    this.gameService.reset();
    this.currentPlayerLabel ='<img class="xo-tick" src="./images/ic_X.svg" alt="X">';
    this.currentPlayer = true;
  }


  clicked(index : number):void{
      index = index-1;
      if(this.gameService.isBlockAvailable(index)){
        if(this.currentPlayer){
          this.currentPlayerLabel= '<img class="xo-tick" src="./images/ic_O.svg" alt="O">';
          this.gameService.setValue(index,this.currentPlayer);
        } else {
          this.currentPlayerLabel='<img class="xo-tick" src="./images/ic_X.svg" alt="X">';
          this.gameService.setValue(index,this.currentPlayer);
        }
        if( this.gameService.gameComplete()){
          this.currentPlayer ? this.winnerPlayer='<img class="xo-tick" src="./images/ic_X.svg" alt="X">':this.winnerPlayer='<img class="xo-tick" src="./images/ic_O.svg" alt="O">';
          this.currentPlayer=null
          this.currentPlayerLabel=''
          return
        }
        if(this.gameService.gameDraw()){
          return
        }
        this.changeTurn();
      } else {

      }    
  }
}
