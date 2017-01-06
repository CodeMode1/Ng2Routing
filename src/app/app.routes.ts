import { UserComponent } from './user/user.component';
import { HomeComponent } from './home-component.component';
import { RouterModule, Routes, RouterConfig} from '@angular/router';
import { USER_ROUTES } from './user/user.routes';

//APP_ROUTES is an array of objects
//each route is a JS object with key-value
//path is what comes after the domain in the URL (localhost)
//specify the correspondant component to the path to be loaded
const APP_ROUTES: RouterConfig = [
    { path: 'user/:id', component: UserComponent},
    { path: 'user/:id', component: UserComponent, children: USER_ROUTES},
    { path: 'user', component: UserComponent},
    { path: '', component: HomeComponent},
    { path: 'user', redirectTo: '/user/1', pathMatch: 'full'},
    { path: '**', redirectTo: '/user/1', pathMatch: 'full'}
];

//provide routes on an application/root level
export const routing = RouterModule.forRoot(APP_ROUTES);