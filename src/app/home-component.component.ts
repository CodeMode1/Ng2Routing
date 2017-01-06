import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{param}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  private subscription: Subscription;

  param: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.queryParams.subscribe((queryParam: any) => this.param = queryParam['analytics']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log("on destroy home");
  }
}
