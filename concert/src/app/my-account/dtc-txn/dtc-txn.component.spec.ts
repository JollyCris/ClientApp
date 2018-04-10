import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtcTxnComponent } from './dtc-txn.component';

describe('DtcTxnComponent', () => {
  let component: DtcTxnComponent;
  let fixture: ComponentFixture<DtcTxnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtcTxnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtcTxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
