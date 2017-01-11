import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {OtherComponent} from "./other/other.component";
import { AnotherComponent } from './other/another.component';
import { CustomDataBindingComponent } from './custom-data-binding/custom-data-binding.component';
import { CustomEventBindingComponent } from './custom-event-binding/custom-event-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightDirective } from './directive/highlight.directive';
import { UnlessDirective } from './directive/unless.directive';
import { CompOneComponent } from './services/comp-one.component';
import { CompTwoComponent } from './services/comp-two.component';
import { ServAndDepsInjectComponent } from './services/serv-and-deps-inject.component';
import {LogService} from "./services/log.service";

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
    ServAndDepsInjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  // Если нужно чтобы сервис был синглтоном для ВСЕГО приложения
  // его нужно записать тут.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
