import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCompComponent } from './root-comp.component';

describe('RootCompComponent', () => {
  let component: RootCompComponent;
  let fixture: ComponentFixture<RootCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
