import { Component, OnInit, ViewChild } from '@angular/core';
import { OtresultsComponent } from "../otresults/otresults.component";
import { OpenTriviaDbService, TokenResponse, Questions } from '../open-trivia-db.service';

@Component({
  selector: 'app-otquestion',
  templateUrl: './otquestion.component.html',
  styleUrls: ['./otquestion.component.css']
})
export class OtquestionComponent implements OnInit {

  @ViewChild(OtresultsComponent)
  private otResults: OtresultsComponent;

  private tokenResponse: TokenResponse;
  private questions: Questions; 
  
  private categoryId: number;
  private difficulty: string;
  private type: string;

  private selectedElement;
  baseClass = "hand border rounded p-2";
  selectedClass = "hand hand-selected border rounded p-2";
  selectedCorrectClass = "hand hand-selected border border-success rounded p-2";
  selectedWrongClass = "hand hand-selected border border-danger rounded p-2"
  correctClass = "hand border border-success rounded p-2";
  selectedAnswerId;
  correctAnswerId;

  question: string;
  answers: any;

  constructor(private openTriviaDB: OpenTriviaDbService) { }

  ngOnInit() {
    this.getToken();
  }

  getToken(){
    this.openTriviaDB.getToken()
    .subscribe(res => {
      this.tokenResponse = res;
      this.nextQuestion() },
      error => console.error(error));
  }

  selectAnswer(event: MouseEvent) {
    if (undefined != this.selectedElement) {
      return;
    }

    this.selectedElement = event.srcElement;
    this.selectedElement.className = this.selectedClass;

    this.selectedAnswerId = this.selectedElement.id;

    this.checkAnswer();
  }

  checkAnswer(){
    if (this.selectedAnswerId == this.correctAnswerId) {
      this.otResults.correctAnswer();
      this.markAnswerCorrect(this.selectedElement);
    }
    else {
      this.otResults.wrongAnswer();
      this.markAnswerWrong(this.selectedElement);
    }
  }

  markAnswerCorrect(selection){
    selection.className = this.selectedCorrectClass;
  }

  markAnswerWrong(selection){
    selection.className = this.selectedWrongClass;

    var grandParent = selection.parentElement.parentElement.children;
    for (var index = 0; index < grandParent.length; index++) {
      var parent = grandParent[index].children;
      for (var index2 = 0; index2 < parent.length; index2++) {
        var question = parent[index2];
        if (this.correctAnswerId == question.id) {
          question.className = this.correctClass;          
        }
      }
    }
  }

  nextQuestion(){
    this.openTriviaDB.getQuestion(this.tokenResponse.token,
                                  this.categoryId,
                                  this.difficulty,
                                  this.type)
      .subscribe(res => {
        this.questions = res;
        this.formatQuestion() }, 
        error => console.error(error));

    this.selectedElement = undefined;
    this.selectedAnswerId = undefined;
  }

  formatQuestion(){
    this.question = decodeURIComponent(this.questions.results[0].question);
    let correctAnswer = this.questions.results[0].correct_answer;
    let wrongAnswers = this.questions.results[0].incorrect_answers;
    this.answers = this.formatAnswers(correctAnswer, wrongAnswers)
  }

  formatAnswers(correctAnswer, wrongAnswers){

    let numberAnswers = wrongAnswers.length + 1;
    let answers: Array<any> = new Array(numberAnswers);    
    let correctId: number; //default zero for true/false questions
    
    if (correctAnswer == "True"){
      correctId = 0;
    }
    else if (correctAnswer == "False") {
      correctId = 1;
    }
    else {
      correctId = Math.floor((Math.random() * numberAnswers));
    }

    this.correctAnswerId = correctId;

    for (var index = 0; index < numberAnswers; index++) {
      if (index == correctId) {
        answers[index] = { answerId: index,
                           answerText: decodeURIComponent(correctAnswer),
                           correct: true };
      } else {
        if (index < correctId) {
          answers[index] = { answerId: index,
                             answerText: decodeURIComponent(wrongAnswers[index]),
                             correct: false };        
        } else {
          answers[index] = { answerId: index,
                             answerText: decodeURIComponent(wrongAnswers[index -1]),
                             correct: false };        
        }
      }
    }
    
    return answers;
  }

  onCatagorySelect(event){
    if (0 == event) {
      this.categoryId = undefined;
    }
    else {
      this.categoryId = event;      
    }
  }

  onDifficultySelect(event){
    if ("any" == event) {
      this.difficulty = undefined;
    }
    else {
      this.difficulty = event;      
    }
  }

  onTypeSelect(event){
    if ("any" == event) {
      this.type = undefined;
    }
    else {
      this.type = event;      
    }
  }

  onReset(event){
    if (event) {
      this.getToken();
    }
  }
}
