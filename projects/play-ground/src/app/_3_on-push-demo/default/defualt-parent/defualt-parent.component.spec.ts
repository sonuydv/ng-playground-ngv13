import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefualtParentComponent } from './defualt-parent.component';

describe('DefualtParentComponent', () => {
  let component: DefualtParentComponent;
  let fixture: ComponentFixture<DefualtParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefualtParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefualtParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
