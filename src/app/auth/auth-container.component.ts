import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-container',
  template: `
   <app-header></app-header>
   <router-outlet></router-outlet>
  `,
  styles: []
})
export class AuthContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
