import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersBookedInEachCoachComponent } from './passengers-booked-in-each-coach.component';

describe('PassengersBookedInEachCoachComponent', () => {
  let component: PassengersBookedInEachCoachComponent;
  let fixture: ComponentFixture<PassengersBookedInEachCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengersBookedInEachCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersBookedInEachCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
