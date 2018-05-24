import { Component, OnInit } from '@angular/core';
import { TestDataService } from '../test-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {
  currentQuestion = 0;
  selectedOption = -1;
  total_marks = 0;
  correct_or_wrong_answer_msg:String = '';
  correct_answer:boolean = false;
  answer;
  total_questions = 0;
  constructor(private _testdata: TestDataService,
    private _router: Router,
  ) { }

  endReview() {
    this._router.navigate(['/dashboard'])
  }
  onSelectOption(option: any) {
    this.selectedOption = option;
    this._testdata.selectAnswer(this.currentQuestion, option)
  }
  getQuestion() {
    if (this.isAQuestion()) {
      return this._testdata.getQuestion(this.currentQuestion);
    }
  }

  getNextQuestion() {
    if (this.isNotLastQuestion()) {
      this.selectedOption = -1;
      this.currentQuestion += 1;
    }
  }

  getSelectedAnswer() {
    this.selectedOption = this._testdata.getSelectedAnswer(this.currentQuestion);
    return this.selectedOption;
  }

  getAnswer() {
    this.answer = this._testdata.getAnswer(this.currentQuestion)
    let is_this_a_correct_response = this.selectedOption === this.answer
    if(is_this_a_correct_response){
      this.correct_answer = true;
      this.correct_or_wrong_answer_msg = "Correct Answer";
    }else{
      this.correct_answer = false;
      this.correct_or_wrong_answer_msg = "Wrong Answer";
    }
    return this.answer
  }

  isNotLastQuestion() {
    return this.isAQuestion(this.currentQuestion + 1)
  }

  isAQuestion(index = this.currentQuestion) {
    return index < this._testdata.getLength();
  }

  ngOnInit() {
    this.total_marks = this._testdata.getMarks()
    this.total_questions = this._testdata.getLength()
  }

  ngOnChanges(){
    
  }

}
