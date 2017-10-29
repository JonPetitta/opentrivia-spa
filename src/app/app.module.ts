import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import { OtmenuComponent } from './otmenu/otmenu.component';
import { OtquestionComponent } from './otquestion/otquestion.component';
import { OtresultsComponent } from './otresults/otresults.component';
import { OpenTriviaDbService } from "./open-trivia-db.service";

@NgModule({
  declarations: [
    AppComponent,
    OtmenuComponent,
    OtquestionComponent,
    OtresultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [OpenTriviaDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
