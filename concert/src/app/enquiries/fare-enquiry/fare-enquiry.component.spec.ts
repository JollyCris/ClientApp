import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FareEnquiryComponent } from './fare-enquiry.component';

describe('FareEnquiryComponent', () => {
  let component: FareEnquiryComponent;
  let fixture: ComponentFixture<FareEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FareEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FareEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
