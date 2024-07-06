import {BehaviorSubject, distinct, map, Observable} from "rxjs";
import {Injectable} from "@angular/core";


export type ReduxAction<T> = {type:string,payload?:T};
export type ReduxState = {[prop:string]:any};
export type ReduxReducer = {[prop:string]:(state:any,action:ReduxAction<any>)=>any};


@Injectable()
export abstract class ReduxStore{
  abstract dispatch(action:ReduxAction<any>):void;
  abstract select<T>(stateProp:string):Observable<T>;
}

export class CustomStore implements ReduxStore{

  private readonly state:BehaviorSubject<ReduxState> = new BehaviorSubject<ReduxState>({});
  private readonly reducers:ReduxReducer = {};

  constructor(reducers:ReduxReducer) {
    this.reducers = reducers;
    this.dispatch({type:''});
    this.state.subscribe(state => {
      console.log('CustomStore : '+JSON.stringify(state));
    })
  }

  public dispatch(action:ReduxAction<any>){
    const newState = this.reduce(this.state.value,this.reducers,action);
    this.state.next(newState);
  }

  public select<T>(stateProp:string):Observable<T>{
    return this.state.pipe(
      map((state:ReduxState)=>state[stateProp] as T),
      distinct()
    );
  }

  private reduce(globalState:ReduxState,reducers:ReduxReducer,action:ReduxAction<any>):ReduxState{
    const newState:ReduxState = {};
    for(const prop in reducers){
      const propState = globalState[prop];
      newState[prop] = reducers[prop](propState,action);
    }
    return newState;
  }

}
