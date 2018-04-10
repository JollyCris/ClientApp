import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpInputComponent } from './jp-input.component';

describe('JpInputComponent', () => {
  let component: JpInputComponent;
  let fixture: ComponentFixture<JpInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
