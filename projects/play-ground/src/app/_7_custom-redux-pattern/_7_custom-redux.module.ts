import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduxPatternComponent } from './redux-pattern/redux-pattern.component';
import {RouterModule, Routes} from "@angular/router";
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import {CustomStore, ReduxStore} from "./redux/redux.store";
import {todoReducer} from "./redux/todo.store";
import {MatButtonModule} from "@angular/material/button";
import {userReducer} from "./redux/user.store";


const routes:Routes = [
  {
    path: '',
    component: ReduxPatternComponent
  }
]

@NgModule({
  declarations: [
    ReduxPatternComponent,
    TodoComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ],
  providers:[
    {
      provide:ReduxStore,
      useValue:new CustomStore({
        todos:todoReducer,
        users:userReducer
      })
    }
  ]
})
export class _7_customReduxModule { }
