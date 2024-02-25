import { Component } from '@angular/core';
import { RouterOutlet , Router} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend2';
  tabName = 'page1'
  constructor(private router : Router){

  }
  goToWeeklyLeaderBoard(){
    this.tabName = 'page1';
    this.router.navigate(["currentWeekLeaderboard"])
  }

  goToLastWeekLeaderBoardByCountry(){
    this.tabName = 'page2';
    this.router.navigate(["lastWeekLeaderboardByCountry"])
  }

  goToUserLeaderBoardByRank(){
    this.tabName = 'page3';
    this.router.navigate(["userLeaderboardRank"])
  }

  goToHome(){
    this.router.navigate([""])
  }
}
