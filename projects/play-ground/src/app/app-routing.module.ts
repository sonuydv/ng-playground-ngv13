import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoRoutesPath} from "./_1_demo-index/model/demo.const";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_1_demo-index/demo-list.module').then(m => m.DemoListModule)
  },

  {
    path: DemoRoutesPath.tmp,
    loadChildren: () => import('./tmp/tmp.module').then(m=>m.TmpModule)
  },
  {
    path: DemoRoutesPath.onPushDemo,
    loadChildren: () => import('./_3_on-push-demo/on-push-demo.module').then(m => m.OnPushDemoModule)
  },
  {
    path: DemoRoutesPath.reactiveForm,
    loadChildren:() => import('./_4_reactive-form/_4_reactive-form.module').then(m=>m._4_reactiveFormModule)
  },
  {
    path: DemoRoutesPath.ngrxRedux,
    loadChildren: () => import('./_5_ngrx-redux/_5_ngrx-redux.module').then(m=>m.NgRxReduxModule)
  },
  {
   path: DemoRoutesPath.ngForms,
   loadChildren: () => import('./_6_ng_forms/_6_ng_forms.module').then(m=>m._6_ng_formsModule)
  },

  {
    path: DemoRoutesPath.customReduxImpl,
    loadChildren: () => import('./_7_custom-redux-pattern/_7_custom-redux.module').then(m=>m._7_customReduxModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
