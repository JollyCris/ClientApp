import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBookingAvailabilityComponent } from './current-booking-availability.component';

describe('CurrentBookingAvailabilityComponent', () => {
  let component: CurrentBookingAvailabilityComponent;
  let fixture: ComponentFixture<CurrentBookingAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBookingAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBookingAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
