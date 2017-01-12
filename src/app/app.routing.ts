import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "./routes/home.component";
import {UserComponent} from "./routes/user.component";
import {USER_ROUTES} from "./routes/user.routes";
import {ErrorPageComponent} from "./routes/error-page.component";

const APP_ROUTES: Route[] = [
  {path: 'user', component: UserComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'user/:id', component: UserComponent, children: USER_ROUTES},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: 'error', pathMatch: 'full'}
]

export const ROUTES = RouterModule.forRoot(APP_ROUTES);
