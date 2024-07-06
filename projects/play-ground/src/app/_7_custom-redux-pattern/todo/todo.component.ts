import { Component, OnInit } from '@angular/core';
import {ReduxStore} from "../redux/redux.store";
import {Todo, TODO_ACTIONS} from "../redux/todo.store";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  todos:Todo[]  = [];
  constructor(
    public store : ReduxStore
  ) { }

  ngOnInit(): void {
    this.store.select<Todo[]>('todos').subscribe(
      todos => {
        console.log('TodoComponent '+JSON.stringify(todos));
        this.todos = todos;
      }
    )
  }

  addNewTodo(){
    const todo:Todo = {id:this.todos.length,
      title:`Todo ${this.todos.length}`,
      desc:`Description ${this.todos.length}`,
      isCompleted: false
    }
    this.store.dispatch({type:TODO_ACTIONS.add,
    payload:todo})
  }

}
