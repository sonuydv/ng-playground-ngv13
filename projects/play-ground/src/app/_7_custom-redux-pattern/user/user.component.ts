import { Component, OnInit } from '@angular/core';
import {ReduxStore} from "../redux/redux.store";
import {User, USER_ACTIONS} from "../redux/user.store";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users:User[] = [];
  constructor(
    public store:ReduxStore
  ) { }

  ngOnInit(): void {
    this.store.select<User[]>('users')
      .subscribe(users => {
        console.log('UserComponent : '+JSON.stringify(users));
        this.users = users;
      })
  }

  addNewUser(){
    const user:User = {
      id:this.users.length,
      name: `User ${this.users.length}`
    }
    this.store.dispatch({
      type:USER_ACTIONS.add,
      payload:user
    })
  }

}
