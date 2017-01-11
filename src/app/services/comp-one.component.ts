import { Component, OnInit } from '@angular/core';
import {LogService} from "./log.service";
import {DataProviderService} from "./data-provider.service";

@Component({
  selector: 'app-comp-one',
  template: `
    <h1>Component 1</h1>
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
    </div>
    <hr>
    <div>
      <button>Refresh Storage</button>
        <h3>Storage</h3>
          <ul>
            <li *ngFor="let item of getData()">{{item}}</li>
          </ul>
          <h3>Received value</h3>
          <p>{{value}}</p>
    </div>
  `,
  styles: [],
  providers: []
})
export class CompOneComponent implements OnInit {

  value: string = "";

  constructor(private logg: LogService, private dataService: DataProviderService) { }

  onLog(msg: string){
    this.logg.logMsg(msg);
  }

  ngOnInit() {
  }

  onStore(piece: string){
    this.dataService.storeData(piece);
  }

  getData(){
    return this.dataService.getAllData().slice(0);
  }

  onSend(piece: string){
    this.dataService.emitData(piece);
  }

}
