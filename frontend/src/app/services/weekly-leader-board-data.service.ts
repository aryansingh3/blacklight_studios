import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class WeeklyLeaderBoardDataService {
  url = 'http://localhost:8080/currentWeekLeaderboard';
  constructor(private http: HttpClient) {}
  getWeeklyLeaderBoardData() {
    return this.http.get(this.url);
  }
}
