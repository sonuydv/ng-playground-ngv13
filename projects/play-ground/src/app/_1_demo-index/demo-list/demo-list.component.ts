import { Component, OnInit } from '@angular/core';
import {demoPathList} from "../model/demo.const";

@Component({
  selector: 'app-_1_demo-index',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss']
})
export class DemoListComponent implements OnInit {

 demoRouteLists = demoPathList


  constructor() { }

  ngOnInit(): void {
  }

}

