import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_1_demo-index/demo-list.module').then(m => m.DemoListModule)
  },
  {
    path: 'onPushDemo',
    loadChildren: () => import('./_3_on-push-demo/on-push-demo.module').then(m => m.OnPushDemoModule)
  },
  {
    path: 'reactiveForm',
    loadChildren:() => import('./_4_reactive-form/_4_reactive-form.module').then(m=>m._4_reactiveFormModule)
  },
  {
    path: 'ngrxRedux',
    loadChildren: () => import('./_5_ngrx-redux/_5_ngrx-redux.module').then(m=>m.NgRxReduxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
