import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, ValidatorFn, Validators} from "@angular/forms";
import {FormService} from "../form.service";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {


  name = new FormControl('',{updateOn: 'blur'})
  email = new FormControl('',{updateOn: 'blur'})

  msg: string = ''

  constructor(
    public formSrv: FormService
  ) { }

  ngOnInit(): void {

    this.formSrv.deliveryAgent.subscribe('t1',value => this.msg = value )

    this.name.valueChanges.subscribe(
      value => {
        this.setValidation(this.email,[Validators.required,Validators.email])
      }
    )

    this.email.valueChanges.subscribe(
      value => console.log(value)
    )
  }


  onSubmit(ngform: NgForm){
    console.log(ngform.value)
  }

  setValidation(control: FormControl,validations: ValidatorFn[]){
    control.setValidators(validations)
    control.updateValueAndValidity()
  }

}

