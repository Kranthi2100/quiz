import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionWithAnswersComponent } from './question-with-answers.component';

describe('QuestionWithAnswersComponent', () => {
  let component: QuestionWithAnswersComponent;
  let fixture: ComponentFixture<QuestionWithAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionWithAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionWithAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
