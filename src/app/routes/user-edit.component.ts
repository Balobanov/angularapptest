import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ComponentCanBeDeactivated} from "./user-edit.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-edit',
  template: `
    <p>
      user-edit Works!
      <button class="btn btn-alert" (click)="goHome()">Go home</button>
      <button (click)="done = true">Done</button>
    </p>
  `,
  styles: []
})
export class UserEditComponent implements OnInit, ComponentCanBeDeactivated{
  canDeactivate() : boolean | Observable<boolean>{
    if(this.done){
      return true;
    }
    else {
      return confirm('The work have not done yet, do you want leave this page?');
    }
  }

  done: boolean = false;

  goHome(){
    this.router.navigate(['']);
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
