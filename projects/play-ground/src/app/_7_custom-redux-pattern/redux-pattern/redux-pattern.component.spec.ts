import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxPatternComponent } from './redux-pattern.component';

describe('ReduxPatternComponent', () => {
  let component: ReduxPatternComponent;
  let fixture: ComponentFixture<ReduxPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduxPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
