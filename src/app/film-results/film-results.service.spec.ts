import { TestBed } from '@angular/core/testing';

import { FilmResultsService } from './film-results.service';

describe('FilmResultsService', () => {
  let service: FilmResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
