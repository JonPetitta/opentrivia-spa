import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { OpenTriviaDbService, TriviaCategory } from '../open-trivia-db.service';

@Component({
  selector: 'app-otmenu',
  templateUrl: './otmenu.component.html',
  styleUrls: ['./otmenu.component.css']
})
export class OtmenuComponent implements OnInit {

  @Output() onCatagorySelect   = new EventEmitter<number>();
  @Output() onDifficultySelect = new EventEmitter<string>();
  @Output() onTypeSelect       = new EventEmitter<string>();

  categories: TriviaCategory[];
  
  difficulties = [ { Name: "Any",    Value: "any" },
                   { Name: "Easy",   Value: "easy" },
                   { Name: "Medium", Value: "medium" },
                   { Name: "Hard",   Value: "hard" } ];
  
  types = [ { Name: "Any",             Value: "any" },
            { Name: "Multiple Choice", Value: "multiple" },
            { Name: "True / False",    Value: "boolean" } ];

  constructor(private openTriviaDB: OpenTriviaDbService) { }

  ngOnInit() {
    this.openTriviaDB.Categories()
      .subscribe(res => {
        this.categories = res.trivia_categories },
        error => console.error(error));
  }

  setCategory(id: number){
    this.onCatagorySelect.emit(id);
  }

  setDifficulty(difficulty: string){
    this.onDifficultySelect.emit(difficulty);
  }

  setType(type: string){
    this.onTypeSelect.emit(type);
  }

}
