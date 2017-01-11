import {Injectable, EventEmitter} from '@angular/core';
import {LogService} from "./log.service";

@Injectable() // позволяет внедрить другие сервисы в этот сервис.
export class DataProviderService {

  data: string[] = [];

  event: EventEmitter<string> = new EventEmitter();

  storeData(piece: string){
    this.data.push(piece);
    this.logg.logMsg('Item was stored ' + piece);
  }

  emitData(piece: string){
    this.event.emit(piece);
  }

  getAllData(){
    return this.data;
  }

  constructor(private logg: LogService) {
    logg.logMsg('LogService was Injected into DataProvider service.');
  }

}
