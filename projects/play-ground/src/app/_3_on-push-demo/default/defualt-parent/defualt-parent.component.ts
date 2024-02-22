import {Component, Input, OnInit} from '@angular/core';
import {PersonDetail} from "../../model/on-push-demo.model";

@Component({
  selector: 'app-defualt-parent',
  templateUrl: './defualt-parent.component.html',
  styleUrls: ['./defualt-parent.component.scss']
})
export class DefualtParentComponent implements OnInit {

 @Input() person : PersonDetail | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
