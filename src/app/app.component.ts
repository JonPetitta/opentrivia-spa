import { Component, OnInit } from '@angular/core';
import { OpenTriviaDbService, TokenResponse } from "./open-trivia-db.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OpenTriviaDbService]
})
export class AppComponent implements OnInit {
  title = 'Open Trivia Demo';
  titleColor = '#000080';
  titleBackground = '#000080';
  tokenResponse: TokenResponse;

  constructor(private openTriviaDB: OpenTriviaDbService) {}

  ngOnInit(): void {
    this.openTriviaDB.GetToken()
      .subscribe(res => {
        this.tokenResponse = res },
        error => console.error(error));
  }
}