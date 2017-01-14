import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styles: []
})
export class DataFormComponent implements OnInit {

  myForm: FormGroup;

  oss = [
    'Win 7',
    'Ubuntu',
    'Linux'
  ];

  constructor(private formBuilder: FormBuilder) {
    // this.myForm = new FormGroup({
    //     'userData': new FormGroup({
    //       'username': new FormControl('Denis', Validators.required),
    //       'email': new FormControl('be@mail.ru',
    //         [Validators.required,
    //          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
    //
    //     }),
    //     'password': new FormControl('', Validators.required),
    //     'os': new FormControl('Win 7'),
    //     'hobbies': new FormArray([
    //         new FormControl('', Validators.required)
    //     ])
    // });

    // Вnорой способ создания формы
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['Denis', [Validators.required, this.nameValidatior]],
        'email': ['be@mail.ru', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]]
      }),
      'password': ['', Validators.required],
      'os': ['Win 7'],
      'hobbies': formBuilder.array([
        ['', Validators.required]
      ])
    });

  }

  addHobbi(){
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required));
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.myForm.value);
  }

  nameValidatior(control: FormControl):{[s: string]: boolean}{
    if(control.value === 'Noob')
        return {name: true};
    return null;
  }

}
