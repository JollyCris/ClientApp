import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiriesMenuComponent } from './enquiries-menu.component';

describe('EnquiriesMenuComponent', () => {
  let component: EnquiriesMenuComponent;
  let fixture: ComponentFixture<EnquiriesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiriesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiriesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
