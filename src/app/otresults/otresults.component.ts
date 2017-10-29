import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-otresults',
  templateUrl: './otresults.component.html',
  styleUrls: ['./otresults.component.css']
})
export class OtresultsComponent {

  @Output() onReset = new EventEmitter<boolean>();

  correctAnswers: number = 0;
  wrongAnswers: number = 0;

  constructor() { }

  correctAnswer(){
    this.correctAnswers += 1;
  }

  wrongAnswer(){
    this.wrongAnswers += 1;
  }

  reset(){
    this.correctAnswers = 0;
    this.wrongAnswers = 0;

    this.onReset.emit(true);
  }

}
