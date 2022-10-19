import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { ChildComponent } from './data communication/child/child.component';
import { FirstComponent } from './data communication/first/first.component';
import { ParentComponent } from './data communication/parent/parent.component';
import { SecondComponent } from './data communication/second/second.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ErrorComponent } from './error/error.component';
import { First2Component } from './first2/first2.component';
import { ObsComponent } from './obs/obs.component';
import { PipingComponent } from './piping/piping.component';
import { SampletestComponent } from './sampletest/sampletest.component';
import { Second2Component } from './second2/second2.component';
import { ServiceComponent } from './service/service.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: "angular", component: AngularComponent },
  { path: "data-binding", component: DataBindingComponent },
  { path: "directive", component: DirectiveComponent },
  { path: "piping", component: PipingComponent },
  { path: "template", component: TemplateComponent },
  { path: "service", component: ServiceComponent },
  { path: "obs", component: ObsComponent },
  { path: "parent", component: ParentComponent },
  { path: "child", component: ChildComponent },
  { path: "first", component: FirstComponent },
  { path: "second", component: SecondComponent },
  { path: "first2", component: First2Component },
  { path: "second2", component: Second2Component },
  { path: 'html', loadChildren: () => import('./html/html.module').then(mod => mod.HtmlModule) },
  {path:'javascript',loadChildren:()=>import('./javascript/javascript.module').then(mod=>mod.JavascriptModule)},
  {path:'sampletest',component:SampletestComponent}

  // {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
