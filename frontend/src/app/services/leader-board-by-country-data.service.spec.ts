import { TestBed } from '@angular/core/testing';

import { LeaderBoardByCountryDataService } from './leader-board-by-country-data.service';

describe('LeaderBoardByCountryDataService', () => {
  let service: LeaderBoardByCountryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderBoardByCountryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
