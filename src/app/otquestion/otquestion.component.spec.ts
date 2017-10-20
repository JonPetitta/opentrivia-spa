import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtquestionComponent } from './otquestion.component';

describe('OtquestionComponent', () => {
  let component: OtquestionComponent;
  let fixture: ComponentFixture<OtquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
