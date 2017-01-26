import { Pipe, PipeTransform } from '@angular/core';
import {isNumber} from "util";

@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(isNumber(+value)){
      return value * 2;
    }
    else return value;
  }

}
