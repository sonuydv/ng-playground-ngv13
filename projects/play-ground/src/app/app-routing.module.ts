import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./demo-list/demo-list.module').then(m => m.DemoListModule)
  },
  {
    path: 'onPushDemo',
    loadChildren: () => import('./on-push-demo/on-push-demo.module').then(m => m.OnPushDemoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
