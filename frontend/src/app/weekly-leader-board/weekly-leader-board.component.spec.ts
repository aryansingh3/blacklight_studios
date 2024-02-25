import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyLeaderBoardComponent } from './weekly-leader-board.component';

describe('WeeklyLeaderBoardComponent', () => {
  let component: WeeklyLeaderBoardComponent;
  let fixture: ComponentFixture<WeeklyLeaderBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyLeaderBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyLeaderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
