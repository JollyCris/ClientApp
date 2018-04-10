import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTrainListComponent } from './filter-train-list.component';

describe('FilterTrainListComponent', () => {
  let component: FilterTrainListComponent;
  let fixture: ComponentFixture<FilterTrainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTrainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTrainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
