import { Component, OnInit } from '@angular/core';
import {PersonDetail} from "../model/on-push-demo.model";
import {FormControl} from "@angular/forms";
import {OnPushDemoService} from "../on-push-demo.service";

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  personDetail : PersonDetail = new PersonDetail('First name', 'last name')

  firstName = new FormControl(this.personDetail.firstName)
  lastName = new FormControl(this.personDetail.lastname)
  constructor(
    private srv : OnPushDemoService
  ) { }

  ngOnInit(): void {
  }

  onMutate(){
    this.personDetail.firstName = this.firstName.value
    this.personDetail.lastname = this.lastName.value
    this.srv.changePerson(this.personDetail)
  }

  onChangeRef(){
    this.personDetail = new PersonDetail(this.firstName.value, this.lastName.value)
    this.srv.changePerson(this.personDetail)
  }

}
