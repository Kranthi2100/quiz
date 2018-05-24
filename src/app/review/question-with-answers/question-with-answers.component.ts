import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-with-answers',
  templateUrl: './question-with-answers.component.html',
  styleUrls: ['./question-with-answers.component.css']
})
export class QuestionWithAnswersComponent implements OnInit {
  @Input() question:any;
  @Input() selectedOption:any;
  @Input() correctOption:any;
  constructor() { 
  }

  ngOnInit() {
  }
}
