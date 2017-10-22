import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otquestion',
  templateUrl: './otquestion.component.html',
  styleUrls: ['./otquestion.component.css']
})
export class OtquestionComponent implements OnInit {

  baseClass = "p-2";
  selectedClass = "p-2 alert-primary";
  selectedAnswer;

  question = `
  The question goes here The question goes here
  The question goes here The question goes here
  The question goes here
  `
  answers = [
    {
      "answerId":"Answer1",
      "answerText": "Is this the correct answer"
    },
    {
      "answerId": "Answer2",
      "answerText": "Maybe it's this one"
    },
    {
      "answerId": "Answer3",
      "answerText": "Or could it be this one"    
    }];

  constructor() { }

  ngOnInit() {
  }

  selectAnswer(event: MouseEvent) {
    
    var grandParent = event.srcElement.parentElement.parentElement.children;
    for (var index = 0; index < grandParent.length; index++) {
      var parent = grandParent[index].children;
      for (var index2 = 0; index2 < parent.length; index2++) {
        var question = parent[index2];
        question.className = this.baseClass;
      }
    }

    event.srcElement.className = this.selectedClass;
    this.selectedAnswer = event.srcElement.id;
    console.log(this.selectedAnswer);

  }

}
