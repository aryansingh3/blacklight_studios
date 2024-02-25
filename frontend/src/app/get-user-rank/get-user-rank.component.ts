import { Component } from '@angular/core';
import { GetRankByUidService } from '../services/get-rank-by-uid.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-user-rank',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-user-rank.component.html',
  styleUrl: './get-user-rank.component.scss',
})
export class GetUserRankComponent {
  userData : any;
  uid: string = '';
  onChange(event: any) {
    const newValue = (event.target as HTMLInputElement).value;
    this.uid = newValue;
    this.getData();
  }

  async getData() {
    this.userData = {};
    this.getRank
      .getUserDataFromUid(this.uid)
      .subscribe((userData) => {
        console.log(userData)
        this.userData = Object.values(userData)[1];
      });
  }
  title = 'LeaderBoard by Country';
  pastWeekLeaderBoardDataByCountry: any;
  constructor(
    private getRank: GetRankByUidService
  ) {
    this.getData();
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
}
