import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {OtherComponent} from "./other/other.component";
import {AnotherComponent} from "./other/another.component";
import {CustomDataBindingComponent} from "./custom-data-binding/custom-data-binding.component";
import {CustomEventBindingComponent} from "./custom-event-binding/custom-event-binding.component";
import {DirectiveComponent} from "./directive/directive.component";
import {HighlightDirective} from "./directive/highlight.directive";
import {UnlessDirective} from "./directive/unless.directive";
import {CompOneComponent} from "./services/comp-one.component";
import {CompTwoComponent} from "./services/comp-two.component";
import {ServAndDepsInjectComponent} from "./services/serv-and-deps-inject.component";
import {UserComponent} from "./routes/user.component";
import {HomeComponent} from "./routes/home.component";
import {ROUTES} from "./app.routing";
import { UserDetailComponent } from './routes/user-detail.component';
import { UserEditComponent } from './routes/user-edit.component';
import { ErrorPageComponent } from './routes/error-page.component';
import {UserDetailGuard} from "./routes/user.detail.guard";
import {UserEditGuard} from "./routes/user-edit.guard";
import {TemplateFormComponent} from "./forms/template-form/template-form.component";
import {DataFormComponent} from "./forms/data-form/data-form.component";
import { MyPipeComponent } from './my-pipe/my-pipe.component';
import { DoublePipe } from './my-pipe/double.pipe';
import { FilterPipe } from './my-pipe/filter.pipe';
import { HttpComponent } from './http/http.component';
import {HttpService} from "./http/http.service";
import { SigninComponent } from './auth/unprotected/signin.component';
import { SignupComponent } from './auth/unprotected/signup.component';
import { ProtectedComponent } from './auth/protected/protected.component';
import { HeaderComponent } from './auth/header.component';
import {AuthService} from "./auth/auth.service";
import { AuthContainerComponent } from './auth/auth-container.component';
import {AuthGuard} from "./auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    CustomDataBindingComponent,
    CustomEventBindingComponent,
    DirectiveComponent,
    HighlightDirective,
    UnlessDirective,
    CompOneComponent,
    CompTwoComponent,
    ServAndDepsInjectComponent,
    UserComponent,
    HomeComponent,
    UserDetailComponent,
    UserEditComponent,
    ErrorPageComponent,
    TemplateFormComponent,
    DataFormComponent,
    MyPipeComponent,
    DoublePipe,
    FilterPipe,
    HttpComponent,
    SigninComponent,
    SignupComponent,
    ProtectedComponent,
    HeaderComponent,
    AuthContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTES,
    ReactiveFormsModule
  ],

  // Если нужно чтобы сервис был синглтоном для ВСЕГО приложения
  // его нужно записать тут.
  providers: [UserDetailGuard, UserEditGuard, HttpService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
