import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmpComponent } from './tmp/tmp.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: TmpComponent
  }
]

@NgModule({
  declarations: [
    TmpComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TmpModule { }
