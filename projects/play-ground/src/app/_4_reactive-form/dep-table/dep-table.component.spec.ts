import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepTableComponent } from './dep-table.component';

describe('DepTableComponent', () => {
  let component: DepTableComponent;
  let fixture: ComponentFixture<DepTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
