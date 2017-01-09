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

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    CustomDataBindingComponent,
    CustomEventBindingComponent,
    DirectiveComponent,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
