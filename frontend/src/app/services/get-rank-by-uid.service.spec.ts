import { TestBed } from '@angular/core/testing';

import { GetRankByUidService } from './get-rank-by-uid.service';

describe('GetRankByUidService', () => {
  let service: GetRankByUidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRankByUidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
