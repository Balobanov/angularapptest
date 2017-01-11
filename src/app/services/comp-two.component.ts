import { Component, OnInit } from '@angular/core';
import {LogService} from "./log.service";
import {logger} from "codelyzer/util/logger";
import {log} from "util";
import {DataProviderService} from "./data-provider.service";

@Component({
  selector: 'app-comp-two',
  template: `
    <h1>Component 2</h1>
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
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
export class CompTwoComponent implements OnInit {

  value: string = "";

  constructor(private logg: LogService, private dataService: DataProviderService) { }

  onLog(msg: string){
    this.logg.logMsg(msg);
  }

  ngOnInit() {
    this.dataService.event.subscribe(recievedData => this.value = recievedData);
  }

  onStore(piece: string){
    this.dataService.storeData(piece);
  }

  getData(){
    return this.dataService.getAllData().slice(0);
  }
}
