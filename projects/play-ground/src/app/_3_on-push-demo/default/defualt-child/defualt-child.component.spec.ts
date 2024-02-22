import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefualtChildComponent } from './defualt-child.component';

describe('DefualtChildComponent', () => {
  let component: DefualtChildComponent;
  let fixture: ComponentFixture<DefualtChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefualtChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefualtChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
