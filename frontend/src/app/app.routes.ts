import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetUserRankComponent } from './get-user-rank/get-user-rank.component';
import { LastWeekLeaderBoardByCountryComponent } from './last-week-leader-board-by-country/last-week-leader-board-by-country.component';
import { WeeklyLeaderBoardComponent } from './weekly-leader-board/weekly-leader-board.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: 'currentWeekLeaderboard', component: WeeklyLeaderBoardComponent },
  {
    path: 'lastWeekLeaderboardByCountry',
    component: LastWeekLeaderBoardByCountryComponent,
  },
  { path: 'userLeaderboardRank', component: GetUserRankComponent },
  { path: '', redirectTo: '/currentWeekLeaderboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
