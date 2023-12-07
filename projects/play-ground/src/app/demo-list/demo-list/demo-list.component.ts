import { Component, OnInit } from '@angular/core';
import {demoPathList} from "../model/demo-list.model";

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss']
})
export class DemoListComponent implements OnInit {

 demoRouteLists = demoPathList


  constructor() { }

  ngOnInit(): void {
  }

}

