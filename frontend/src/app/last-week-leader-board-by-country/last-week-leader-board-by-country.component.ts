import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

import { LeaderBoardByCountryDataService } from '../services/leader-board-by-country-data.service';



@Component({
  selector: 'app-last-week-leader-board-by-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-week-leader-board-by-country.component.html',
  styleUrl: './last-week-leader-board-by-country.component.scss'
})
export class LastWeekLeaderBoardByCountryComponent {
  country : string = "";
  onChange(event: any) {
    const newValue = (event.target as HTMLInputElement).value;
    this.country = newValue.toUpperCase();
    this.getData();
  }

  async getData(){
    this.pastWeekLeaderBoardData.getPastWeekLeaderBoardDataByCountry(this.country).subscribe((pastWeekData)=>{
      console.log(pastWeekData);
      this.pastWeekLeaderBoardDataByCountry = Object.values(pastWeekData)[1];
    })
  }
  title = "LeaderBoard by Country";
  pastWeekLeaderBoardDataByCountry :any;
  constructor(private pastWeekLeaderBoardData : LeaderBoardByCountryDataService){
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
