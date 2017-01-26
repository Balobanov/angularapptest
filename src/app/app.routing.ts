import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "./routes/home.component";
import {UserComponent} from "./routes/user.component";
import {USER_ROUTES} from "./routes/user.routes";
import {ErrorPageComponent} from "./routes/error-page.component";
import {TemplateFormComponent} from "./forms/template-form/template-form.component";
import {DataFormComponent} from "./forms/data-form/data-form.component";
import {MyPipeComponent} from "./my-pipe/my-pipe.component";
import {HttpComponent} from "./http/http.component";
import {HeaderComponent} from "./auth/header.component";
import {AUTH_ROUTES} from "./auth/auth.routes";
import {AuthContainerComponent} from "./auth/auth-container.component";
import {AuthGuard} from "./auth/auth.guard";

const APP_ROUTES: Route[] = [
  {path: 'user', component: UserComponent},
  {path: 'pipes', component: MyPipeComponent},
  {path: 'http', component: HttpComponent},
  {path: 'auth', component: AuthContainerComponent, children: AUTH_ROUTES},
  {path: 'temp-form', component: TemplateFormComponent},
  {path: 'data-form', component: DataFormComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'user/:id', component: UserComponent, children: USER_ROUTES},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: 'error', pathMatch: 'full'}
]

export const ROUTES = RouterModule.forRoot(APP_ROUTES);
