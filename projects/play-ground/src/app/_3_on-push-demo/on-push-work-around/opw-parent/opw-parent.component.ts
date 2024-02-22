import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-opw-parent',
  templateUrl: './opw-parent.component.html',
  styleUrls: ['./opw-parent.component.scss']
})
export class OpwParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
