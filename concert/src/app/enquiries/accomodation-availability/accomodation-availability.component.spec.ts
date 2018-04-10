import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationAvailabilityComponent } from './accomodation-availability.component';

describe('AccomodationAvailabilityComponent', () => {
  let component: AccomodationAvailabilityComponent;
  let fixture: ComponentFixture<AccomodationAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
