import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class OpenTriviaDbService {
  
  private baseUrl:          string = 'https://opentdb.com/';
  private questionEndpoint: string = 'api.php';
  private tokenEndpoint:    string = 'api_token.php';
  private categoryEndpoint: string = 'api_category.php';

  constructor(private http: Http) { }

  getToken(): Observable<TokenResponse> {
    let tokenUrl: string = this.baseUrl +
                           this.tokenEndpoint +
                           '?command=request';
    
    return this.http.get(tokenUrl)
      .map(res => res.json() as TokenResponse);
  }

  categories(): Observable<TriviaCategories> {
    let categoryUrl: string = this.baseUrl +
                              this.categoryEndpoint;

    return this.http.get(categoryUrl)
      .map(res => res.json() as TriviaCategories);
  }

  getQuestion(){

  }

}

export interface TokenResponse {
  response_code: number;
  response_message: string;
  token: string;
}

export interface TriviaCategories {
  trivia_categories: TriviaCategory[];
}

export interface TriviaCategory {
  id: number;
  name: string;
}
