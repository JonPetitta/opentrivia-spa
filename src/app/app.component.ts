import { Component } from '@angular/core';
import { OpenTriviaDbService } from "./open-trivia-db.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OpenTriviaDbService]
})
export class AppComponent {
  title = 'Open Trivia Demo';

  constructor() {}
}