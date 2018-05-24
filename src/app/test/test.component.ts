import { Component, OnInit } from '@angular/core';
import {TestDataService} from '../test-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  currentQuestion = 0;
  selectedOption = -1;
  constructor(private _testdata: TestDataService, private _router: Router) {
  }

  endTest(){
    this._router.navigate(["/dashboard"])
  }
  onSelectOption(option:any){
    this.selectedOption = option;
    this._testdata.selectAnswer(this.currentQuestion, option)
  }
  getQuestion(){
    if(this.isAQuestion()){
      return this._testdata.getQuestion(this.currentQuestion);
    }
  }
  
  getNextQuestion(){
    if(this.isNotLastQuestion()){
      this.selectedOption = -1;
      this.currentQuestion += 1;
    }
  }

  getSelectedOption(){
    return this.selectedOption;
  }

  isNotLastQuestion(){
    return this.isAQuestion(this.currentQuestion + 1)
  }

  isAQuestion(index = this.currentQuestion){
    return index < this._testdata.getLength();
  }

  ngOnInit() {
  }

}
