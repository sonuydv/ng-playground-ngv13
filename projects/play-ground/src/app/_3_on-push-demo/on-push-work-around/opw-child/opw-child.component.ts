import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OnPushDemoService} from "../../on-push-demo.service";
import {PersonDetail} from "../../model/on-push-demo.model";

@Component({
  selector: 'app-opw-child',
  templateUrl: './opw-child.component.html',
  styleUrls: ['./opw-child.component.scss']
})
export class OpwChildComponent implements OnInit {
  person : PersonDetail | undefined
  constructor(
    public srv : OnPushDemoService,
    private cd : ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.srv.personStream$.subscribe(
      person =>{
        this.cd.markForCheck();
        this.person = person
      }
    )

  }

}
