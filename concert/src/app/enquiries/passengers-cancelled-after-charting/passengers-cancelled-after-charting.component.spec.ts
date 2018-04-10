import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersCancelledAfterChartingComponent } from './passengers-cancelled-after-charting.component';

describe('PassengersCancelledAfterChartingComponent', () => {
  let component: PassengersCancelledAfterChartingComponent;
  let fixture: ComponentFixture<PassengersCancelledAfterChartingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengersCancelledAfterChartingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersCancelledAfterChartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
