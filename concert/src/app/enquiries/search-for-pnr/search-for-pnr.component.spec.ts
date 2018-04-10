import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForPnrComponent } from './search-for-pnr.component';

describe('SearchForPnrComponent', () => {
  let component: SearchForPnrComponent;
  let fixture: ComponentFixture<SearchForPnrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForPnrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForPnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
