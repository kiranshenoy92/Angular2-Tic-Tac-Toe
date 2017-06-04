import { Component, OnInit} from '@angular/core';
import { GameService } from '../../service/game.service';

@Component({
  selector: 'app-battelfield-2player',
  templateUrl: './battelfield-2player.component.html',
  styleUrls: ['./battelfield-2player.component.scss']
})
export class Battelfield2playerComponent implements OnInit {
 
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
    if(!this.currentPlayer){
      this.botTurn();

    }
  }

  botTurn():void{
    let index = this.gameService.bitTickIndex(this.currentPlayer);
    this.clicked(index);
  }

  init(){
    this.gameService.reset();
    this.currentPlayerLabel ='<img class="xo-tick" src="./images/ic_X.svg" alt="X">';
    this.currentPlayer = true;
  }


  clicked(index : number):void{
      index = index;
      if(this.gameService.isBlockAvailable(index)){
        if(this.currentPlayer){
          this.currentPlayerLabel= '<img class="xo-tick" src="./images/ic_O.svg" alt="O">';
          this.gameService.setValue(index,this.currentPlayer);
        } else {
          this.gameService.botClick(index,this.currentPlayerLabel);
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
