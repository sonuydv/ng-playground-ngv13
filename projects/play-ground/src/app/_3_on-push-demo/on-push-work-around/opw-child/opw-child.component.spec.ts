import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpwChildComponent } from './opw-child.component';

describe('OpwChildComponent', () => {
  let component: OpwChildComponent;
  let fixture: ComponentFixture<OpwChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpwChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpwChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
