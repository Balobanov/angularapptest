import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipe',
  templateUrl: './my-pipe.component.html'
})
export class MyPipeComponent implements OnInit {

  value: string = "Denis";
  date: Date = new Date();

  num: number = 12;

  inputVal ='';

  strings: string[] = ['Milk', 'Bread', 'Beans'];

  asyncVal = new Promise((res, rej)=>{
    setTimeout(()=> res('Async data!!!'), 2000);
  });

  constructor() { }

  ngOnInit() {
  }

}
