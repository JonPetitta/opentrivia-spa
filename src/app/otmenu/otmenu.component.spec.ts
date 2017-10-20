import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtmenuComponent } from './otmenu.component';

describe('OtmenuComponent', () => {
  let component: OtmenuComponent;
  let fixture: ComponentFixture<OtmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
