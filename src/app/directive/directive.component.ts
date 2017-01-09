import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  //for *ngFor
  items: string[] = ['str1', 'str2', 'str3'];

  isCoolColor: boolean = true;
  isCoolBorder: boolean = true;
  isCoolDimention: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  getParams(){
    return {coolBorder: this.isCoolBorder, coolColor: this.isCoolColor, coolDimention: this.isCoolDimention};
  }

  isNgIf: boolean = true;

  //ngSwitch
  isNgCase: number = 10;

}
