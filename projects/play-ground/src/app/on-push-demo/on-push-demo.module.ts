import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import { DefualtParentComponent } from './default/defualt-parent/defualt-parent.component';
import { DefualtChildComponent } from './default/defualt-child/defualt-child.component';
import { OnPushParentComponent } from './on-push/on-push-parent/on-push-parent.component';
import { OnPushChildComponent } from './on-push/on-push-child/on-push-child.component';
import { OpwParentComponent } from './on-push-work-around/opw-parent/opw-parent.component';
import { OpwChildComponent } from './on-push-work-around/opw-child/opw-child.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {OnPushDemoService} from "./on-push-demo.service";


const routes : Routes = [
  {
    path: '',
    component: RootComponent
  }
]


@NgModule({
  declarations: [
    RootComponent,
    DefualtParentComponent,
    DefualtChildComponent,
    OnPushParentComponent,
    OnPushChildComponent,
    OpwParentComponent,
    OpwChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    OnPushDemoService
  ]
})
export class OnPushDemoModule { }
