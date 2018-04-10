import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersBookedAfterChartingComponent } from './passengers-booked-after-charting.component';

describe('PassengersBookedAfterChartingComponent', () => {
  let component: PassengersBookedAfterChartingComponent;
  let fixture: ComponentFixture<PassengersBookedAfterChartingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengersBookedAfterChartingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersBookedAfterChartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
