import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootCompComponent } from './ui/root-comp/root-comp.component';
import {RouterModule, Routes} from "@angular/router";
import { RootStoreModule } from './state/root-store/root-store.module';


const routes: Routes = [
  {
    path: '',
    component: RootCompComponent
  }
]

@NgModule({
  declarations: [
    RootCompComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RootStoreModule
  ]
})
export class _7_NgrxPatternModule { }
