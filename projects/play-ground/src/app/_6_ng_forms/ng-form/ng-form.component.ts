import { Component, OnInit } from '@angular/core';
import {FormService} from "../form.service";

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.scss']
})
export class NgFormComponent implements OnInit {



  constructor(
    public formSrv: FormService
  ) { }

  ngOnInit(): void {
  }

}
