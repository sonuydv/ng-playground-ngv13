import {Component, Input, OnInit} from '@angular/core';
import {PersonDetail} from "../../model/on-push-demo.model";

@Component({
  selector: 'app-defualt-child',
  templateUrl: './defualt-child.component.html',
  styleUrls: ['./defualt-child.component.scss']
})
export class DefualtChildComponent implements OnInit {

  @Input() person: PersonDetail | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
