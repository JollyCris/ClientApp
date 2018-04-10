import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachPositionComponent } from './coach-position.component';

describe('CoachPositionComponent', () => {
  let component: CoachPositionComponent;
  let fixture: ComponentFixture<CoachPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
