import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['/user']">User</a>
      <button (click)="onNavigate()">Go Home</button>
      <hr>
      {{id}}
      <hr>
      <a [routerLink]="['detail']">Detail</a>
      <a [routerLink]="['edit']">Edit</a>
      <router-outlet></router-outlet>
    `
})
export class UserComponent implements OnDestroy {
  id: string;
  private subscription: Subscription; 

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    //listening to params getting passed withtout recreating the component (without repassing constructor)
    //fetch params from the route 
    //subscribe to an observable
    this.subscription = activatedRoute.params.subscribe((param: any) => this.id = param['id']);
    this.id = activatedRoute.snapshot.params['id'];
  }
  onNavigate(){
      this.router.navigate(['/'], {queryParams: {'analytics' : 100}});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log("on destroy user component");
  }
}
