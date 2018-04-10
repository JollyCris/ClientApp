import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirectJourneyComponent } from './indirect-journey.component';

describe('IndirectJourneyComponent', () => {
  let component: IndirectJourneyComponent;
  let fixture: ComponentFixture<IndirectJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndirectJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndirectJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
