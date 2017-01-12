import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  template: `
    <h1>This is the home page</h1>
    <p>param: {{param}}</p>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  param: string;
  subs: Subscription;

  constructor(private router: ActivatedRoute) {
    this.subs = router.queryParams.subscribe(
      (param: any) => this.param = param['parameter']
    );
  }

  ngOnInit() {
  }

}
