import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoListComponent } from './demo-list/demo-list.component';
import {RouterModule, Routes} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {
   path: '',
   component: DemoListComponent
  }
]

@NgModule({
  declarations: [
    DemoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatIconModule
  ]
})
export class DemoListModule { }
