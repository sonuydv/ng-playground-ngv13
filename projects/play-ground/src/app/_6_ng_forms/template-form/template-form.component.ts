import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {FormService} from "../form.service";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {


  user: any = {}

  msg: string = ''

  constructor(
    private formSrv: FormService

  ) { }

  ngOnInit(): void {

    this.formSrv.deliveryAgent.subscribe('t2',value => this.msg = value )
  }

  onSubmit(form: NgForm){
    console.log(form.value)
  }

}
