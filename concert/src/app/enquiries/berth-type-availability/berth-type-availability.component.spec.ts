import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerthTypeAvailabilityComponent } from './berth-type-availability.component';

describe('BerthTypeAvailabilityComponent', () => {
  let component: BerthTypeAvailabilityComponent;
  let fixture: ComponentFixture<BerthTypeAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerthTypeAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerthTypeAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
