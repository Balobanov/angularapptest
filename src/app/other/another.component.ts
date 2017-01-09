import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <p>
      <!-- Позволяет писать HTML теги между <app-another> 
          <app-another>
            <h1>HELLOOO</h1>
          </app-another>
      -->
      <ng-content></ng-content> 
    </p>
  `,
  styles: [`p {color: aqua; border: solid black 1px} `]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
