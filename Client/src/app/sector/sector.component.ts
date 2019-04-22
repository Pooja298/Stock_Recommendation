import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  

  constructor(private httpService: HttpClient) { }
  selectedOption: string;
  title = ' My Portfolio';
  arrBirds: string [];
  arrayBirds: string [];
  price: any;
  symbol: any;
  name:any;
  currency:any;
  price_open:number;
  day_high:number;
  day_low:number;
  change_pct:number;
  close_yesterday:number;
  market_cap:number;
  volume:number;
  shares:number;
  stock_exch_long:number;
  stock_exch_short:number;
  last_trade_time:number;
  i:number=1;
  demo:any;
  arr: string [];
  autourl='./assets/automotive.json';
bankurl='./assets/bank.json';
chemurl='./assets/chemical.json';
  ngOnInit() {
    this.httpService.get('./assets/Birds.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        console.log(this.arrBirds);
        this.demo=this.arrBirds;
        
      
          //var num = this.arrBirds[_i];
          for(let x of this.arrBirds){
            this.demo=x;
          }
  
           
           
          //this.arrayBirds=sorted;
        
         
        
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  Automotive()
  {
    this.httpService.get(this.autourl).subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  Banking_Finance()
  {
    this.httpService.get(this.bankurl).subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  Chemical()
  {
    this.httpService.get(this.chemurl).subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
 
 

 
 
}
