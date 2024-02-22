import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepTableComponent } from './dep-table/dep-table.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: DepTableComponent
  }
]

@NgModule({
  declarations: [
    DepTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class _4_reactiveFormModule { }
