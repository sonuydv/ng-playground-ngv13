import {TsRxSubject} from "./tmp/ts.rx";
import {Injectable} from "@angular/core";

@Injectable()
export class FormService{
  deliveryAgent = new TsRxSubject<string>()
}
