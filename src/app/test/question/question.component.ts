import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question:any;
  @Output() onSelectOption = new EventEmitter<any>();
  @Input() selectedOption:any;
  constructor() { 
  }
  selectOption(option:any){
    this.onSelectOption.emit(option);
  }

  ngOnInit() {
  }
}
