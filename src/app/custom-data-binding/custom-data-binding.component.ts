import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-custom-data-binding',
  templateUrl: './custom-data-binding.component.html',
  styleUrls: ['./custom-data-binding.component.css'],
})
export class CustomDataBindingComponent{
  @Input() myProp: number = 0;

  dataClick(value: string){
    alert(value);
  }
}
