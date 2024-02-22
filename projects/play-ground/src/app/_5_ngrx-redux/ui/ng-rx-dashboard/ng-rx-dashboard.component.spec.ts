import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxDashboardComponent } from './ng-rx-dashboard.component';

describe('NgRxDashboardComponent', () => {
  let component: NgRxDashboardComponent;
  let fixture: ComponentFixture<NgRxDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRxDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRxDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
