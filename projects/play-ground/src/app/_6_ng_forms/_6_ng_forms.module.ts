import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {RouterModule, Routes} from "@angular/router";
import { NgFormComponent } from './ng-form/ng-form.component';
import {MatTabsModule} from "@angular/material/tabs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormService} from "./form.service";


const routes :  Routes = [
  {
    path: '',
    component: NgFormComponent
  },
]

@NgModule({
  declarations: [
    TemplateFormComponent,
    ReactiveFormComponent,
    NgFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
    FormService
  ]
})
export class _6_ng_formsModule { }
