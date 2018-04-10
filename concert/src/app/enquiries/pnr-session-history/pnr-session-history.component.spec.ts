import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnrSessionHistoryComponent } from './pnr-session-history.component';

describe('PnrSessionHistoryComponent', () => {
  let component: PnrSessionHistoryComponent;
  let fixture: ComponentFixture<PnrSessionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnrSessionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnrSessionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
