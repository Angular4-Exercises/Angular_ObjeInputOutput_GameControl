import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  GamePlayers =[{name:'Selva',Age:'30',Sex:'Male'},
                {name:'Pandy',Age:'30',Sex:'Male'}
               ];
  recievedCount:number;
  isEvenCheck:boolean;
  isOddCheck:boolean;

  oddnumbersArray:number[]=[]; //declare and assign value
  evennumbersArray:number[]=[];

 // recievedage:string;
    receivedStatus(recievedObj){
      console.log('App component !!'+recievedObj.gamecount);
         this.recievedCount=recievedObj.gamecount;
         this.isEvenCheck=this.isEven(recievedObj.gamecount);
         if(this.isEvenCheck)
         {
           console.log('inside the evencheck!');
           this.evennumbersArray.push(recievedObj.gamecount);
         }
        // this.isOddCheck=this.isOdd(recievedObj.gamecount);
         else{
           console.log('inside the oddcheck!');
           this.oddnumbersArray.push(recievedObj.gamecount);
         }
     //console.log('App component Even check !!'+this.isEven(recievedObj.gamecount));
     //console.log('App component Odd check !!'+this.isOdd(recievedObj.gamecount));  
    }


isEven(n) {
   return n % 2 == 0;
}

isOdd(n) {
   return Math.abs(n % 2) == 1;
}
}
