import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Html3Component } from './html3/html3.component';
import { Html4Component } from './html4/html4.component';
import { Html2Component } from './html2/html2.component';
import { Html5Component } from './html5/html5.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';

const route: Routes= [
  { path: 'html2', component: Html2Component },
  { path: 'html3', component: Html3Component },
  { path: 'html4', component: Html4Component },
{path:'html5',component:Html5Component}]

@NgModule({
  declarations: [
    Html3Component,
    Html4Component,
    Html2Component,
    Html5Component,

   
    
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)],
    ButtonModule,
  ]
})
export class HtmlModule { }
