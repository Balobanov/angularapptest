import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `
   <div class="error">
   ERROR PAGE
  </div>
  `,
  styles: [`
      .error{
        background-color: red;
        font-size: xx-large;
        width: 200px;
        height: 200px;
      }
   `]
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
