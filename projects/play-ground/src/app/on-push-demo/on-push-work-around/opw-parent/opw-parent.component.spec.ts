import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpwParentComponent } from './opw-parent.component';

describe('OpwParentComponent', () => {
  let component: OpwParentComponent;
  let fixture: ComponentFixture<OpwParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpwParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpwParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
