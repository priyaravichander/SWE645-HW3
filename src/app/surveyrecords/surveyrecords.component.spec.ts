import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyrecordsComponent } from './surveyrecords.component';

describe('SurveyrecordsComponent', () => {
  let component: SurveyrecordsComponent;
  let fixture: ComponentFixture<SurveyrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyrecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
