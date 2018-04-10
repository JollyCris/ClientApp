import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsForADestinationComponent } from './trains-for-a-destination.component';

describe('TrainsForADestinationComponent', () => {
  let component: TrainsForADestinationComponent;
  let fixture: ComponentFixture<TrainsForADestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsForADestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsForADestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
