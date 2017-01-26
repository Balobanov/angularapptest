import {Component, OnInit, OnDestroy} from '@angular/core';
import {Route, Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  template: `
    <h1>User component was loaded</h1>
    <a [routerLink]="['/user']">User</a>
    <a [routerLink]="['user']">Relative</a>
    <button (click)="goHome()">Go home</button>
    <hr>
    {{id}}
    <hr>
    <input [(ngModel)]="param">
    <router-outlet></router-outlet>
    <hr>
       <a [routerLink]="['detail']">Detail</a>
    <a [routerLink]="['edit']">Edit</a>
`,
  styles: []
})
export class UserComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  param: string;
  id: string;
  subscription: Subscription;

  goHome(){
    this.router.navigate([''], {queryParams: {'parameter': this.param}});
  }

  constructor(private router: Router, private activRouter: ActivatedRoute) {
    // this.id = activRouter.snapshot.params['id'];
    this.subscription = activRouter.params.subscribe(
      (data: any) => this.id = data['id']
    );
  }

  ngOnInit() {
  }

}
