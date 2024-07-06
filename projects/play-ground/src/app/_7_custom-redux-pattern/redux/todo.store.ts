import {ReduxAction} from "./redux.store";

/**
 * Actions - basically actions are like instructions that drive your intentions,
 * you need a type that describes what you want to do,
 * and if you need some data to perform your intentions,
 * it's necessary to provide a payload.*/
export enum TODO_ACTIONS{
  add= 'ADD_TODO',
  remove = 'REMOVE_TODO',
  complete = 'COMPLETE_TODO',
  reset = 'RESET_TODO'
}

export interface Todo {
  id:number
 title:string,
 desc:string
 isCompleted:boolean
}

const initialTodoState:Todo[] = [];

/**
 * Reducers - reducers are pure functions that perform your intentions in the application state,
 * that function receives the current state and the action,
 * that is running. For every action,
 * you should provide a reaction in your reducer.*/
export function todoReducer(todoState = initialTodoState,action:ReduxAction<Todo>):Todo[]{
    switch (action.type){
      case TODO_ACTIONS.add :
        return [...todoState,action.payload!]
      case TODO_ACTIONS.remove:
        return todoState.filter(todo =>
          todo.id != action?.payload?.id);
      case TODO_ACTIONS.complete:
        return todoState.map(todo => {
           if(todo.id == action?.payload?.id){
             return {...todo,isCompleted:true};
           }
           return todo;
          });
      case TODO_ACTIONS.reset:
        return todoState.map(todo => {
            if(todo.id == action?.payload?.id){
              return {...todo,isCompleted:false};
            }
            return todo;
          })
      default:
        return todoState;
    }
}


