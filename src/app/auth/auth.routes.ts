import {Route} from "@angular/router";
import {SigninComponent} from "./unprotected/signin.component";
import {SignupComponent} from "./unprotected/signup.component";
import {ProtectedComponent} from "./protected/protected.component";
import {AuthGuard} from "./auth.guard";

export const AUTH_ROUTES: Route[] = [
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
];
