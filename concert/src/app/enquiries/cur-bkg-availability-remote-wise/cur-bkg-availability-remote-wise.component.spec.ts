import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurBkgAvailabilityRemoteWiseComponent } from './cur-bkg-availability-remote-wise.component';

describe('CurBkgAvailabilityRemoteWiseComponent', () => {
  let component: CurBkgAvailabilityRemoteWiseComponent;
  let fixture: ComponentFixture<CurBkgAvailabilityRemoteWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurBkgAvailabilityRemoteWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurBkgAvailabilityRemoteWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
