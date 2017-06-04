import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  private blocks:boolean[];
  private freeBocks: number=9;
  constructor() { }

  reset():void{
    this.blocks =   [null, null, null,null, null, null,null, null, null];
    this.freeBocks = 9;
  }

  setValue(index:number, player:boolean):void{
    this.blocks[index] = player;
    this.freeBocks = this.freeBocks - 1;
  }

  gameDraw():boolean{
    if(this.freeBocks<=0){
      return true;
    }
    return false;
  }

  isBlockAvailable(index:number):boolean{
    if(this.blocks[index]==true || this.blocks[index] == false || this.freeBocks<=0){
      return false;
    }
    return true;
  }

  checkForWin(currentplayer : boolean):number{
    if(this.blocks[0]==currentplayer && this.blocks[1]==currentplayer && this.blocks[2]==(null)){
      return 3;
    }
    else if(this.blocks[3]==currentplayer && this.blocks[4]==currentplayer && this.blocks[5]==(null)){
      return 5;
    }
    else if(this.blocks[6]==currentplayer && this.blocks[7]==currentplayer && this.blocks[8]==(null)){
      return 8;
    }

    else if(this.blocks[0]==currentplayer && this.blocks[1]==null && this.blocks[2]==(currentplayer)){
      return 1;
    }
    else if(this.blocks[3]==currentplayer && this.blocks[4]==null && this.blocks[5]==(currentplayer)){
      return 4;
    }
    else if(this.blocks[6]==currentplayer && this.blocks[7]==null && this.blocks[8]==(currentplayer)){
      return 7;
    }

    else if(this.blocks[0]==null && this.blocks[1]==currentplayer && this.blocks[2]==(currentplayer)){
      return 0;
    }
    else if(this.blocks[3]==null && this.blocks[4]==currentplayer && this.blocks[5]==(currentplayer)){
      return 3;
    }
    else if(this.blocks[6]==null && this.blocks[7]==currentplayer && this.blocks[8]==(currentplayer)){
      return 6;
    }


    else if(this.blocks[0]==currentplayer && this.blocks[3]==currentplayer && this.blocks[6]==(null)){
      return 6;
    }
    else if(this.blocks[1]==currentplayer && this.blocks[4]==currentplayer && this.blocks[7]==(null)){
      return 7;
    }
    else if(this.blocks[2]==currentplayer && this.blocks[5]==currentplayer && this.blocks[8]==(null)){
      return 8;
    }


    else if(this.blocks[0]==currentplayer && this.blocks[3]==(null) && this.blocks[6]==currentplayer){
      return 3;
    }
    else if(this.blocks[1]==currentplayer && this.blocks[4]==(null) && this.blocks[7]==currentplayer){
      return 4;
    }
    else if(this.blocks[2]==currentplayer && this.blocks[5]==(null) && this.blocks[8]==currentplayer){
      return 5;
    }


    else if(this.blocks[0]==(null) && this.blocks[3]==currentplayer && this.blocks[6]==currentplayer){
      return 0;
    }
    else if(this.blocks[1]==(null) && this.blocks[4]==currentplayer && this.blocks[7]==currentplayer){
      return 1;
    }
    else if(this.blocks[2]==(null) && this.blocks[5]==currentplayer && this.blocks[8]==currentplayer){
      return 2;
    }


    else if(this.blocks[0]==(null) && this.blocks[4]==currentplayer && this.blocks[8]==currentplayer){
      return 0;
    }
    else if(this.blocks[0]==currentplayer && this.blocks[4]==(null) && this.blocks[8]==currentplayer){
      return 4;
    }
    else if(this.blocks[0]==currentplayer && this.blocks[4]==currentplayer && this.blocks[8]==(null)){
      return 8;
    }

    else if(this.blocks[6]==(null) && this.blocks[4]==currentplayer && this.blocks[2]==currentplayer){
      return 6;
    }
    else if(this.blocks[6]==currentplayer && this.blocks[4]==(null) && this.blocks[2]==currentplayer){
      return 4;
    }
    else if(this.blocks[6]==currentplayer && this.blocks[4]==currentplayer && this.blocks[2]==(null)){
      return 2;
    } 
    else{
      return -1;
    }
  }

  checkForBlock(currentplayer : boolean):number{
    let opponent:boolean = !currentplayer;
     if(this.blocks[0]==opponent && this.blocks[1]==opponent && this.blocks[2]==(null)){
      return 2;
    }
    else if(this.blocks[3]==opponent && this.blocks[4]==opponent && this.blocks[5]==(null)){
      return 5;
    }
    else if(this.blocks[6]==opponent && this.blocks[7]==opponent && this.blocks[8]==(null)){
      return 8;
    }

    else if(this.blocks[0]==opponent && this.blocks[1]==null && this.blocks[2]==(opponent)){
      return 1;
    }
    else if(this.blocks[3]==opponent && this.blocks[4]==null && this.blocks[5]==(opponent)){
      return 4;
    }
    else if(this.blocks[6]==opponent && this.blocks[7]==null && this.blocks[8]==(opponent)){
      return 7;
    }

    else if(this.blocks[0]==null && this.blocks[1]==opponent && this.blocks[2]==(opponent)){
      return 0;
    }
    else if(this.blocks[3]==null && this.blocks[4]==opponent && this.blocks[5]==(opponent)){
      return 3;
    }
    else if(this.blocks[6]==null && this.blocks[7]==opponent && this.blocks[8]==(opponent)){
      return 6;
    }

    else if(this.blocks[0]==(null) && this.blocks[4]==opponent && this.blocks[8]==opponent){
      return 0;
    }
    else if(this.blocks[0]==opponent && this.blocks[4]==(null) && this.blocks[8]==opponent){
      return 4;
    }
    else if(this.blocks[0]==opponent && this.blocks[4]==opponent && this.blocks[8]==(null)){
      return 8;
    }

    else if(this.blocks[6]==(null) && this.blocks[4]==opponent && this.blocks[2]==opponent){
      return 6;
    }
    else if(this.blocks[6]==opponent && this.blocks[4]==(null) && this.blocks[2]==opponent){
      return 4;
    }
    else if(this.blocks[6]==opponent && this.blocks[4]==opponent && this.blocks[2]==(null)){
      return 2;
    }

    else if(this.blocks[0]==opponent && this.blocks[3]==opponent && this.blocks[6]==(null)){
      return 6;
    }
    else if(this.blocks[1]==opponent && this.blocks[4]==opponent && this.blocks[7]==(null)){
      return 7;
    }
    else if(this.blocks[2]==opponent && this.blocks[5]==opponent && this.blocks[8]==(null)){
      return 8;
    }


    else if(this.blocks[0]==opponent && this.blocks[3]==(null) && this.blocks[6]==opponent){
      return 3;
    }
    else if(this.blocks[1]==opponent && this.blocks[4]==(null) && this.blocks[7]==opponent){
      return 4;
    }
    else if(this.blocks[2]==opponent && this.blocks[5]==(null) && this.blocks[8]==opponent){
      return 5;
    }


    else if(this.blocks[0]==(null) && this.blocks[3]==opponent && this.blocks[6]==opponent){
      return 0;
    }
    else if(this.blocks[1]==(null) && this.blocks[4]==opponent && this.blocks[7]==opponent){
      return 1;
    }
    else if(this.blocks[2]==(null) && this.blocks[5]==opponent && this.blocks[8]==opponent){
      return 2;
    } else {
      return -1;
    }
  }

  goForWin(currentplayer:boolean):number{
    let opponent: boolean = !currentplayer;
    if(this.blocks[0] == currentplayer && this.blocks[1] == null && this.blocks[2] == null && this.blocks[4]==opponent){
      return 1;
    }
    if(this.blocks[0] == currentplayer && this.blocks[1] == null && this.blocks[2] == null && this.blocks[5]==opponent){
      return 5;
    }
    if(this.blocks[3] == currentplayer && this.blocks[4] == null && this.blocks[5] == null && (this.blocks[1]==opponent ||this.blocks[7]==opponent)){
      return 4;
    }
    if(this.blocks[3] == currentplayer && this.blocks[4] == null && this.blocks[5] == null && (this.blocks[2]==opponent ||this.blocks[8]==opponent)){
      return 5;
    }

    if(this.blocks[6] == currentplayer && this.blocks[7] == null && this.blocks[8] == null && this.blocks[4]==opponent){
      return 7;
    }
    if(this.blocks[6] == currentplayer && this.blocks[7] == null && this.blocks[8] == null && this.blocks[5]==opponent){
      return 8;
    }
    ///////////////////////////////////////////////////////////////////
    if(this.blocks[0] == currentplayer && this.blocks[1] == null && this.blocks[2] == null){
      return 1;
    }
    if(this.blocks[3] == currentplayer && this.blocks[4] == null && this.blocks[5] == null){
      return 4;
    }
    if(this.blocks[6] == currentplayer && this.blocks[7] == null && this.blocks[8] == null){
      return 7;
    }
    //////////////////////////////////////////////////////////////////
    if(this.blocks[0] == null && this.blocks[1] == currentplayer && this.blocks[2] == null && this.blocks[3]==opponent){
      return 0;
    }
    if(this.blocks[0] == null && this.blocks[1] == currentplayer && this.blocks[2] == null && this.blocks[5]==opponent){
      return 2;
    }
    if(this.blocks[3] == null && this.blocks[4] == currentplayer && this.blocks[5] == null && (this.blocks[0]==opponent || this.blocks[6]==opponent)){
      return 3;
    }
    if(this.blocks[3] == null && this.blocks[4] == currentplayer && this.blocks[5] == null && (this.blocks[2]==opponent || this.blocks[8]==opponent)){
      return 5;
    }
    if(this.blocks[6] == null && this.blocks[7] == currentplayer && this.blocks[8] == null && this.blocks[3]==opponent){
      return 6;
    }
    if(this.blocks[6] == null && this.blocks[7] == currentplayer && this.blocks[8] == null && this.blocks[5]==opponent){
      return 8;
    }
    //////////////////////////////////////////////////////////////////
    if(this.blocks[0] == null && this.blocks[1] == currentplayer && this.blocks[2] == null){
      return 2;
    }
    if(this.blocks[3] == null && this.blocks[4] == currentplayer && this.blocks[5] == null){
      return 5;
    }
    if(this.blocks[6] == null && this.blocks[7] == currentplayer && this.blocks[8] == null){
      return 8;
    }
    //////////////////////////////////////////////////////////////////
    if(this.blocks[0] == null && this.blocks[1] == null && this.blocks[2] == currentplayer && this.blocks[3]==opponent){
      return 0;
    }
    if(this.blocks[0] == null && this.blocks[1] == null && this.blocks[2] == currentplayer && this.blocks[4]==opponent){
      return 1;
    }
    if(this.blocks[3] == null && this.blocks[4] == null && this.blocks[5] == currentplayer && (this.blocks[0]==opponent||this.blocks[6]==opponent)){
      return 3;
    }
    if(this.blocks[3] == null && this.blocks[4] == null && this.blocks[5] == currentplayer && (this.blocks[1]==opponent||this.blocks[7]==opponent)){
      return 4;
    }
    if(this.blocks[6] == null && this.blocks[7] == null && this.blocks[8] == currentplayer && this.blocks[3]==opponent){
      return 6;
    }
    if(this.blocks[6] == null && this.blocks[7] == null && this.blocks[8] == currentplayer && this.blocks[4]==opponent){
      return 7;
    }      
    //////////////////////////////////////////////////////////////////
    if(this.blocks[0] == null && this.blocks[1] == null && this.blocks[2] == currentplayer){
      return 0;
    }
    if(this.blocks[3] == null && this.blocks[4] == null && this.blocks[5] == currentplayer){
      return 3;
    }
    if(this.blocks[6] == null && this.blocks[7] == null && this.blocks[8] == currentplayer){
      return 6;
    }   
    ///////////////////////////////////////////////////////////////////
    if(this.blocks[0] == currentplayer && this.blocks[3] == null && this.blocks[6] == null && this.blocks[4]==opponent){
      return 3;
    }
    if(this.blocks[0] == currentplayer && this.blocks[3] == null && this.blocks[6] == null && this.blocks[7]==opponent){
      return 6;
    }
    if(this.blocks[1] == currentplayer && this.blocks[4] == null && this.blocks[7] == null && (this.blocks[3]==opponent || this.blocks[5]==opponent)){
      return 4;
    }
    if(this.blocks[1] == currentplayer && this.blocks[4] == null && this.blocks[7] == null && (this.blocks[6]==opponent || this.blocks[8]==opponent)){
      return 7;
    }
    if(this.blocks[2] == currentplayer && this.blocks[5] == null && this.blocks[8] == null && this.blocks[4]==opponent){
      return 5;
    }
    if(this.blocks[2] == currentplayer && this.blocks[5] == null && this.blocks[8] == null && this.blocks[7]==opponent){
      return 8;
    }    
    /////////////////////////////////////////////////////////////////////
    if(this.blocks[0] == currentplayer && this.blocks[3] == null && this.blocks[6] == null){
      return 3;
    }
    if(this.blocks[1] == currentplayer && this.blocks[4] == null && this.blocks[7] == null){
      return 4;
    }
    if(this.blocks[2] == currentplayer && this.blocks[5] == null && this.blocks[8] == null){
      return 5;
    }
    //////////////////////////////////////////////////////////////////////
    if(this.blocks[0] == null && this.blocks[3] == currentplayer && this.blocks[6] == null && this.blocks[1] == opponent){
      return 9;
    }
    if(this.blocks[0] == null && this.blocks[3] == currentplayer && this.blocks[6] == null && this.blocks[7] == opponent){
      return 6;
    }
    if(this.blocks[1] == null && this.blocks[4] == currentplayer && this.blocks[7] == null && (this.blocks[0]==opponent || this.blocks[2]==opponent)){
      return 1;
    }
    if(this.blocks[1] == null && this.blocks[4] == currentplayer && this.blocks[7] == null && (this.blocks[6]==opponent || this.blocks[8]==opponent)){
      return 7;
    }
    if(this.blocks[2] == null && this.blocks[5] == currentplayer && this.blocks[8] == null && this.blocks[1]==opponent){
      return 2;
    }
    if(this.blocks[2] == null && this.blocks[5] == currentplayer && this.blocks[8] == null && this.blocks[7]==opponent){
      return 8;
    }           
    ////////////////////////////////////////////////////////////////////////
    if(this.blocks[0] == null && this.blocks[3] == currentplayer && this.blocks[6] == null){
      return 9;
    }
    if(this.blocks[1] == null && this.blocks[4] == currentplayer && this.blocks[7] == null){
      return 7;
    }
    if(this.blocks[2] == null && this.blocks[5] == currentplayer && this.blocks[8] == null){
      return 8;
    }
    ////////////////////////////////////////////////////////////////////////////
    if(this.blocks[0] == null && this.blocks[3] == null && this.blocks[6] == currentplayer && this.blocks[1]==opponent){
      return 0;
    }
    if(this.blocks[0] == null && this.blocks[3] == null && this.blocks[6] == currentplayer && this.blocks[4]==opponent){
      return 3;
    }
    if(this.blocks[1] == null && this.blocks[4] == null && this.blocks[7] == currentplayer && (this.blocks[0]==opponent||this.blocks[3]==opponent)){
      return 1;
    }
    if(this.blocks[1] == null && this.blocks[4] == null && this.blocks[7] == currentplayer && (this.blocks[3]==opponent||this.blocks[5]==opponent)){
      return 4;
    }
    if(this.blocks[2] == null && this.blocks[5] == null && this.blocks[8] == currentplayer && this.blocks[1]==opponent){
      return 2;
    }
    if(this.blocks[2] == null && this.blocks[5] == null && this.blocks[8] == currentplayer && this.blocks[4]==opponent){
      return 5;
    }    
    //////////////////////////////////////////////////////////////////////////////////
    if(this.blocks[0] == null && this.blocks[3] == null && this.blocks[6] == currentplayer){
      return 0;
    }
    if(this.blocks[1] == null && this.blocks[4] == null && this.blocks[7] == currentplayer){
      return 1;
    }
    if(this.blocks[2] == null && this.blocks[5] == null && this.blocks[8] == currentplayer){
      return 2;
    }
    /////////////////////////////////////////////////////////////////////////////////////////
    if(this.blocks[0] == null && this.blocks[4] == currentplayer && this.blocks[8] == null && (this.blocks[1]==opponent || this.blocks[3]==opponent)){
      return 0;
    }
    if(this.blocks[0] == null && this.blocks[4] == currentplayer && this.blocks[8] == null && (this.blocks[7]==opponent || this.blocks[5]==opponent)){
      return 8;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////
    if(this.blocks[0] == null && this.blocks[4] == null && this.blocks[8] == currentplayer){
      return 0;
    }
    if(this.blocks[0] == currentplayer && this.blocks[4] == null && this.blocks[8] == null){
      return 4;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    if(this.blocks[2] == null && this.blocks[4] == currentplayer && this.blocks[6] == null && (this.blocks[1]==opponent||this.blocks[5]==opponent)){
      return 2;
    }
    if(this.blocks[2] == null && this.blocks[4] == currentplayer && this.blocks[6] == null && (this.blocks[3]==opponent||this.blocks[7]==opponent)){
      return 6;
    }        

    ////////////////////////////////////////////////////////////////////////////////////////
    if(this.blocks[2] == null && this.blocks[4] == null && this.blocks[6] == currentplayer){
      return 2;
    }
    if(this.blocks[2] == currentplayer && this.blocks[4] == null && this.blocks[6] == null){
      return 4;
    }
    return -1
  }

  checkForTrickBlock(currentplayer:boolean):number{
    let opponent:boolean = !currentplayer;
    if(this.blocks[1]==opponent && this.blocks[4] == null && this.blocks[6] == null
      && this.blocks[0] == null && this.blocks[2] == null && this.blocks[3] == null 
      && this.blocks[5] == null && this.blocks[8] == null && this.blocks[7] == null  ){
        return 6;
    }
    if(this.blocks[1]==null && this.blocks[4] == null && this.blocks[6] == null
      && this.blocks[0] == null && this.blocks[2] == null && this.blocks[3] == opponent 
      && this.blocks[5] == null && this.blocks[8] == null && this.blocks[7] == null  ){
        return 5;
    }
    if(this.blocks[1]==null && this.blocks[4] == null && this.blocks[6] == null
      && this.blocks[0] == null && this.blocks[2] == null && this.blocks[3] == null 
      && this.blocks[5] == opponent && this.blocks[8] == null && this.blocks[7] == null  ){
        return 6;
    }
    if(this.blocks[1]==null && this.blocks[4] == null && this.blocks[6] == null
      && this.blocks[0] == null && this.blocks[2] == null && this.blocks[3] == null 
      && this.blocks[5] == null && this.blocks[8] == null && this.blocks[7] == opponent  ){
        return 0;
    }
    if(this.blocks[1] == opponent && this.blocks[4] == currentplayer && this.blocks[6] == opponent
      && this.blocks[0] == null && this.blocks[2] == null && this.blocks[3] == null 
      && this.blocks[5] == null && this.blocks[8] == null && this.blocks[7] == null){
        return 3;
    }
    if(this.blocks[1] == opponent && this.blocks[4] == currentplayer && this.blocks[8] == opponent
      && this.blocks[0] == null && this.blocks[2] == null && this.blocks[3] == null 
      && this.blocks[5] == null && this.blocks[6] == null && this.blocks[7] == null){
        return 5;
    }

    if(this.blocks[7] == opponent && this.blocks[4] == currentplayer && this.blocks[2] == opponent
      && this.blocks[0] == null && this.blocks[1] == null && this.blocks[3] == null 
      && this.blocks[5] == null && this.blocks[8] == null && this.blocks[6] == null){
        return 5;
    }
    if(this.blocks[7] == opponent && this.blocks[4] == currentplayer && this.blocks[0] == opponent
      && this.blocks[1] == null && this.blocks[2] == null && this.blocks[3] == null 
      && this.blocks[5] == null && this.blocks[8] == null && this.blocks[6] == null){
        return 3;
    }

    if(this.blocks[5] == opponent && this.blocks[4] == currentplayer && this.blocks[6] == opponent
      && this.blocks[1] == null && this.blocks[2] == null && this.blocks[3] == null 
      && this.blocks[0] == null && this.blocks[7] == null && this.blocks[8] == null){
        return 7;
    }
    if(this.blocks[5] == opponent && this.blocks[4] == currentplayer && this.blocks[0] == opponent
      && this.blocks[1] == null && this.blocks[2] == null && this.blocks[3] == null 
      && this.blocks[6] == null && this.blocks[7] == null && this.blocks[8] == null){
        return 1;
    }

    if(this.blocks[3] == opponent && this.blocks[4] == currentplayer && this.blocks[2] == opponent
      && this.blocks[1] == null && this.blocks[5] == null && this.blocks[6] == null 
      && this.blocks[0] == null && this.blocks[7] == null && this.blocks[8] == null){
        return 1;
    }
    if(this.blocks[3] == opponent && this.blocks[4] == currentplayer && this.blocks[8] == opponent
      && this.blocks[1] == null && this.blocks[5] == null && this.blocks[6] == null 
      && this.blocks[0] == null && this.blocks[7] == null && this.blocks[2] == null){
        return 7;
    }
    return -1;
  }
  bitTickIndex(currentplayer:boolean):number{
    let index:number=-1;
    index = this.checkForWin(currentplayer);
    if(index>=0){
      return index;
    } else {
      index = this.checkForBlock(currentplayer);
      if(index>=0){
        return index;
      } 
      else {
        index = this.checkForTrickBlock(currentplayer);
        if(index>=0){
          return index;
        } 
        else {
          index = this.goForWin(currentplayer);
          if(index>=0){
            return index;
          }
          else if(this.blocks[4]==(null||undefined)){
            return 4;
          }
          else if(this.blocks[4]==(!currentplayer) && this.blocks[0] == null && this.blocks[0] == null
              && this.blocks[1] == null && this.blocks[2] == null && this.blocks[3] == null
              && this.blocks[5] == null && this.blocks[6] == null && this.blocks[7] == null){
                  let set:number[]=[0,2,6,7]; 
                  index =  Math.floor(Math.random() * set.length);
                  return index;
          }
          else {
            index =  Math.floor(Math.random() * 8) + 1;
            if(this.blocks[index]==(null||undefined)){
              return index;
          }
          else{
            index= this.bitTickIndex(currentplayer);
            return index;
          }
        }  
      }
    }
  }
}
  botClick(index : number,currentLabel: string):void{

    let selectClass:string;
    index=index+1;
    switch(index) { 
      case 1: { 
          selectClass = '.block-one';
          break; 
      } 
      case 2: { 
          selectClass = '.block-two';
          break; 
      } 
      case 3: { 
          selectClass = '.block-three';
          break; 
      } 
      case 4: { 
          selectClass = '.block-four';
          break; 
      }
      case 5: { 
          selectClass = '.block-five';
          break; 
      } 
      case 6: { 
          selectClass = '.block-six';
          break; 
      }
      case 7: { 
          selectClass = '.block-seven';
          break; 
      } 
      case 8: { 
          selectClass = '.block-eight';
          break; 
      }
      case 9: { 
          selectClass = '.block-nine';
          break; 
      }
    } 
    let block = document.querySelector(selectClass);
    block.innerHTML=currentLabel;
    return
  }



  gameComplete():boolean {
    if(this.blocks[0]===this.blocks[1] && this.blocks[1] ===this.blocks[2] && 
      this.blocks[2]!=null && this.blocks[1]!=null && this.blocks[0]!=null){
        this.freeBocks = 0;
        return true;
    } else if(this.blocks[3]===this.blocks[4] && this.blocks[4]===this.blocks[5] && 
            this.blocks[5]!=null && this.blocks[4]!=null && this.blocks[3]!=null){
        this.freeBocks = 0;
        return true;
    } else if(this.blocks[6]===this.blocks[7] && this.blocks[7]===this.blocks[8] &&
           this.blocks[8]!=null && this.blocks[7]!=null && this.blocks[6]!=null){
        this.freeBocks = 0;
        return true;
    } else if(this.blocks[0]===this.blocks[3] && this.blocks[3]===this.blocks[6] &&
           this.blocks[6]!=null && this.blocks[3]!=null && this.blocks[0]!=null){
        this.freeBocks = 0;
        return true;
    } else if(this.blocks[1]===this.blocks[4] && this.blocks[4]===this.blocks[7] && 
            this.blocks[7]!=null && this.blocks[1]!=null && this.blocks[4]!=null){
        this.freeBocks = 0;
        return true;
    } else if(this.blocks[2]===this.blocks[5] && this.blocks[5]===this.blocks[8] && 
            this.blocks[8]!=null && this.blocks[5]!=null && this.blocks[2]!=null){
        this.freeBocks = 0;
        return true;
    } else if(this.blocks[0]===this.blocks[4] && this.blocks[4]===this.blocks[8] && 
            this.blocks[8]!=null && this.blocks[4]!=null && this.blocks[0]!=null){
        this.freeBocks = 0;
        return true;
    } else if(this.blocks[6]===this.blocks[4] && this.blocks[4]===this.blocks[2] && 
            this.blocks[2]!=null && this.blocks[4]!=null && this.blocks[6]!=null){
        this.freeBocks = 0;
        return true;
    } else{
      return false;
    }
  }

}
