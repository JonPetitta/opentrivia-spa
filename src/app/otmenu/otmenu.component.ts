import { Component, OnInit } from '@angular/core';

import { OpenTriviaDbService, TriviaCategory } from '../open-trivia-db.service';

@Component({
  selector: 'app-otmenu',
  templateUrl: './otmenu.component.html',
  styleUrls: ['./otmenu.component.css']
})
export class OtmenuComponent implements OnInit {

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
        error => console.error(error),
        () => console.log(this.categories));
  }

  setCategory(id: number){
    console.log(id);
  }

  setDifficulty(difficulty: string){
    console.log(difficulty);
  }

  setType(type: string){
    console.log(type);
  }

}
