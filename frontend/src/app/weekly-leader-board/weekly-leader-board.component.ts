import { Component, NgModule } from '@angular/core';
import { WeeklyLeaderBoardDataService } from '../services/weekly-leader-board-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weekly-leader-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weekly-leader-board.component.html',
  styleUrl: './weekly-leader-board.component.scss',
})
export class WeeklyLeaderBoardComponent {
  title = 'weekly data';
  weeklyLeaderBoard: any;
  constructor(private weeklyLeaderBoardData: WeeklyLeaderBoardDataService) {
    weeklyLeaderBoardData.getWeeklyLeaderBoardData().subscribe((weeklyData) => {
      this.weeklyLeaderBoard = Object.values(weeklyData)[1];
    });
  }
  formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = ('0' + date.getDate()).slice(-2);
    const monthAbbrev = months[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${day} ${monthAbbrev} ${year}`;
    return formattedDate;
  }
  calculateDelay(index: number): string {
    const delay = (index + 1) * 0.05;
    return `${delay}s`;
  }
}
