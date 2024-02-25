import { TestBed } from '@angular/core/testing';

import { WeeklyLeaderBoardDataService } from './weekly-leader-board-data.service';

describe('WeeklyLeaderBoardDataService', () => {
  let service: WeeklyLeaderBoardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyLeaderBoardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
