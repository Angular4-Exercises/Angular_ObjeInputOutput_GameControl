import { Component, OnInit,Input,Output ,ElementRef,EventEmitter,ViewChild} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 
//  @Input('GamePlayers') public Players: [{name:string,Age:string,Sex:string}]; //Get (@Input()) the object from outside of the component
  //@Output('GameWork') workevent=new EventEmitter<{name:string,age:string}>(); //Pass the object(@Output()) to outside the component
@Output('GameWork') workevent=new EventEmitter<{gamecount:number}>(); //Pass the object(@Output()) to outside the component
  
  // @ViewChild('tmpName') localRefName:ElementRef; //Local reference 
  // @ViewChild('tmpAge') localRefAge:ElementRef; //Local reference
  //name: string;
  //status:string;
  incrementCount=1;
  stop;
  constructor() { }

  ngOnInit() {
  }
  start()
  {
    console.log('Game control!');
    //this.workevent.emit({name:this.localRefAge.nativeElement.value,age:this.localRefAge.nativeElement.value});
     this.incrementCount=this.incrementCount++;
     console.log('Game-control-component : : '+ this.incrementCount);
    this.stop=setInterval(() => { this.workevent.emit({gamecount:this.incrementCount++}); }, 1000);
//above implementation with FatArrow
//below implementation with - out FatArrow
//this.stop = setInterval(function () {console.log('helldfdo');this.gameStarted.emit(this.number);this.number++;}.bind(this), 1000);
  }

  clear(){

      clearInterval(this.stop);
    
  }
}
