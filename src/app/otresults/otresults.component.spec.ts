import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtresultsComponent } from './otresults.component';

describe('OtresultsComponent', () => {
  let component: OtresultsComponent;
  let fixture: ComponentFixture<OtresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
