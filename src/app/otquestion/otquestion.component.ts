import { Component, OnInit, ViewChild } from '@angular/core';
import { OtresultsComponent } from "../otresults/otresults.component";
import { OpenTriviaDbService, TokenResponse } from '../open-trivia-db.service';

@Component({
  selector: 'app-otquestion',
  templateUrl: './otquestion.component.html',
  styleUrls: ['./otquestion.component.css']
})
export class OtquestionComponent implements OnInit {

  @ViewChild(OtresultsComponent)
  private otResults: OtresultsComponent;

  private tokenResponse: TokenResponse;
  
  private categoryId: number = 0;
  private difficulty: string = "";
  private type: string = "";

  private selectedElement;
  baseClass = "hand border rounded p-2";
  selectedClass = "hand hand-selected border rounded p-2";
  selectedAnswer;
  correctAnswer = "Answer2";

  question = `
  The question goes here The question goes here
  The question goes here The question goes here
  The question goes here
  `
  answers = [
    {
      "answerId": "Answer1",
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

  constructor(private openTriviaDB: OpenTriviaDbService) { }

  ngOnInit() {
    this.getToken();
    this.nextQuestion();
  }

  getToken(){
    this.openTriviaDB.getToken()
    .subscribe(res => {
      this.tokenResponse = res },
      error => console.error(error));
  }

  selectAnswer(event: MouseEvent) {
    if (undefined != this.selectedElement) {
      this.selectedElement.className = this.baseClass;
    }

    this.selectedElement = event.srcElement;
    this.selectedElement.className = this.selectedClass;

    this.selectedAnswer = this.selectedElement.id;
  }

  checkAnswer(){
    if (this.correctAnswer == this.selectedAnswer) {
      this.otResults.correctAnswer();
    }
    else{
      this.otResults.wrongAnswer();
    }
  }

  nextQuestion(){
    this.openTriviaDB.getQuestion();
  }

  onCatagorySelect(event){
    this.categoryId = event;
  }

  onDifficultySelect(event){
    this.difficulty = event;
  }

  onTypeSelect(event){
    this.type = event;
  }

  onReset(event){
    if (event) {
      this.getToken();
    }
  }
}
