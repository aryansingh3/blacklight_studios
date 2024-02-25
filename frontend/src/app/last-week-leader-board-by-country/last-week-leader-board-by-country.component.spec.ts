import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWeekLeaderBoardByCountryComponent } from './last-week-leader-board-by-country.component';

describe('LastWeekLeaderBoardByCountryComponent', () => {
  let component: LastWeekLeaderBoardByCountryComponent;
  let fixture: ComponentFixture<LastWeekLeaderBoardByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastWeekLeaderBoardByCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastWeekLeaderBoardByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
