import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationAvailabilityForADestinationComponent } from './accomodation-availability-for-a-destination.component';

describe('AccomodationAvailabilityForADestinationComponent', () => {
  let component: AccomodationAvailabilityForADestinationComponent;
  let fixture: ComponentFixture<AccomodationAvailabilityForADestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationAvailabilityForADestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationAvailabilityForADestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
