import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTheCountryDialogComponent } from './find-the-country-dialog.component';

describe('FindTheCountryDialogComponent', () => {
  let component: FindTheCountryDialogComponent;
  let fixture: ComponentFixture<FindTheCountryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTheCountryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTheCountryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
