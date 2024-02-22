import {BehaviorSubject} from "rxjs";
import {PersonDetail} from "./model/on-push-demo.model";
import {Injectable} from "@angular/core";

@Injectable()
export class OnPushDemoService{

  private personSource  = new BehaviorSubject<PersonDetail | undefined>(undefined)

  public personStream$ = this.personSource.asObservable()

  changePerson(person: PersonDetail){
    this.personSource.next(person)
  }



}
