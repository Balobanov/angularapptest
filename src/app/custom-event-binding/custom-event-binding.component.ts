import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-custom-event-binding',
  template: `<button (click)="onClicked()">Click ME</button>`
})
export class CustomEventBindingComponent {

 @Output() clicked = new EventEmitter<string>();
  onClicked() {
    alert("Emmiter");
    this.clicked.emit("Custom click emmiter");
  }
}
