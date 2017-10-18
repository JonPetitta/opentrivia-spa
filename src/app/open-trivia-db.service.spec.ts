import { TestBed, inject } from '@angular/core/testing';

import { OpenTriviaDbService } from './open-trivia-db.service';

describe('OpenTriviaDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenTriviaDbService]
    });
  });

  it('should be created', inject([OpenTriviaDbService], (service: OpenTriviaDbService) => {
    expect(service).toBeTruthy();
  }));
});
