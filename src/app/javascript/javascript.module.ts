import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Es4Component } from './es4/es4.component';
import { Es5Component } from './es5/es5.component';
import { Es6Component } from './es6/es6.component';
import { Route, RouterModule, Routes, ROUTES, RoutesRecognized } from '@angular/router';
const routes: Routes = [
  { path: '', component: Es4Component },
{path:'es6',component:Es6Component}]


@NgModule({
  declarations: [
    Es4Component,
    Es5Component,
    Es6Component
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class JavascriptModule { }
