import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styles: []
})
export class TemplateFormComponent implements OnInit {

  jsonForm: string;

  userData = {
    name: 'Denis',
    email: 'be@mail.ru',
    pass: '',
    os: 'Ubuntu'
  }

  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm){
    this.jsonForm = JSON.stringify(form.value);
    console.log(form.value);
  }

  radios: string[] = [
    'Ubuntu',
    'Win 7',
    'Linux'
  ];

}
