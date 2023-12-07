import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {PersonDetail} from "../../model/on-push-demo.model";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-on-push-parent',
  templateUrl: './on-push-parent.component.html',
  styleUrls: ['./on-push-parent.component.scss']
})
export class OnPushParentComponent implements OnInit {

  @Input() person : PersonDetail | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
