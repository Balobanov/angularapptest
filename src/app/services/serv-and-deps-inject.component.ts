import { Component, OnInit } from '@angular/core';
import {LogService} from "./log.service";
import {DataProviderService} from "./data-provider.service";

@Component({
  selector: 'app-serv-and-deps-inject',
  template: `
<h1>Servecies and Dependence injection</h1>
    <app-comp-one></app-comp-one>
    <app-comp-two></app-comp-two>
  `,
  styles: [],

  // компонент "app-serv-and-deps-inject" является родителем для компонента 1 и 2.
  // Что позволяет внедлить один экземпляр сервиса во все дочерние компоненты
  // В данном случае сервисы для компонента 1-2 будут сингтонами
  // Если нужно чтобы компоненты использовали разные объекты
  // необходимо их написать внутри самих компонентов в этом же параметре providers.
  providers:[LogService, DataProviderService]
})
export class ServAndDepsInjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
