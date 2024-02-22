import {Component, Input, OnInit} from '@angular/core';
import {PersonDetail} from "../../model/on-push-demo.model";
import {OnPushDemoService} from "../../on-push-demo.service";

@Component({
  selector: 'app-on-push-child',
  templateUrl: './on-push-child.component.html',
  styleUrls: ['./on-push-child.component.scss']
})
export class OnPushChildComponent implements OnInit {

  @Input()person: PersonDetail | undefined
  constructor(
    public srv : OnPushDemoService
  ) { }

  ngOnInit(): void {

    this.srv.personStream$.subscribe(
      person =>{
        this.person = person
        console.log(this.person)
      }
    )

  }

}
