import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/RX';

export interface ComponentCanDeactivate{
    canDeactivate:() => boolean | Observable<boolean>;
}

export class UserEditGuard implements CanDeactivate<ComponentCanDeactivate>{
    canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    } 
}