import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtesTrainStatusComponent } from './ntes-train-status.component';

describe('NtesTrainStatusComponent', () => {
  let component: NtesTrainStatusComponent;
  let fixture: ComponentFixture<NtesTrainStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtesTrainStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtesTrainStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
