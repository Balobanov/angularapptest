import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = [];
    if(value.length === 0)
      return value;

    for(let item of value){
      if(item.match('^.*' + args[0] + '.*$')) {
        result.push(item);
      }
    }

    return result;
  }

}
