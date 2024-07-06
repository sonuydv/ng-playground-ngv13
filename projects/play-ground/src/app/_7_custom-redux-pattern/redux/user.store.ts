import {ReduxAction} from "./redux.store";


export enum USER_ACTIONS{
  add = 'ADD_USER',
  remove = 'REMOVE_USER'
}


export interface User{
  id:number,
  name:string
}

const initialUserState:User[] = [];


export function userReducer(
  userState = initialUserState,
  action:ReduxAction<User>):User[]{
  switch (action.type){
    case USER_ACTIONS.add:
      return [...userState,action.payload!];
    case USER_ACTIONS.remove:
      return userState.filter(user =>
        user.id != action?.payload?.id);
    default:
      return userState;
  }
}
