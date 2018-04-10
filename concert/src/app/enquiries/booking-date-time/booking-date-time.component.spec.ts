import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDateTimeComponent } from './booking-date-time.component';

describe('BookingDateTimeComponent', () => {
  let component: BookingDateTimeComponent;
  let fixture: ComponentFixture<BookingDateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
