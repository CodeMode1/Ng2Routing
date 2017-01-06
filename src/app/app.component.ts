import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`
    .active{
      border: 1px solid red;
    }
  `
  ]
})
export class AppComponent {
}
