import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipingComponent } from './piping/piping.component';
import { ServiceComponent } from './service/service.component';
import { ObsComponent } from './obs/obs.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Directive1Directive } from './directive/directive1.directive';
import { Directive2Directive } from './directive2.directive';
import { TemplateComponent } from './template/template.component';
import { ParentComponent } from './data communication/parent/parent.component';
import { ChildComponent } from './data communication/child/child.component';
import { FirstComponent } from './data communication/first/first.component';
import { SecondComponent } from './data communication/second/second.component';
import { First2Component } from './first2/first2.component';
import { Second2Component } from './second2/second2.component';
import { FullnamePipe } from './piping/fullname.pipe';
import { SampletestComponent } from './sampletest/sampletest.component';
import { Directive2Component } from './directive2/directive2.component';
@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    DataBindingComponent,
    DirectiveComponent,
    PipingComponent,
    ServiceComponent,
    ObsComponent,
    ErrorComponent,
    Directive1Directive,
    Directive2Directive,
    TemplateComponent,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    First2Component,
    Second2Component,
    FullnamePipe,
    SampletestComponent,
    Directive2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
