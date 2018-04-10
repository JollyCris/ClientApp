import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartingStatusComponent } from './charting-status.component';

describe('ChartingStatusComponent', () => {
  let component: ChartingStatusComponent;
  let fixture: ComponentFixture<ChartingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartingStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
