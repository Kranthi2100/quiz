import { Injectable } from '@angular/core';
import { questions } from './question_bank';

@Injectable()
export class TestDataService {
  correctAnswers = {}
  questions = []
  constructor() {
    this.questions = questions;
   }

  getQuestion(index){
    return this.questions[index];
  }

  getLength(){
    return this.questions.length;
  }
  getAnswer(index){
    return this.questions[index].a;
  }
  selectAnswer(index, option){
   this.questions[index]['s'] = option; 
   this.questions[index]['marks'] = this.getAnswer(index) === option
  }

  getMarks(){
    let marks = 0;
    this.questions.forEach( question =>{
      if(question.marks !== undefined){
        marks += question.marks;
      }
    })
    return marks;
  }

  getSelectedAnswer(index){
    return this.questions[index]['s'];
  }
}
