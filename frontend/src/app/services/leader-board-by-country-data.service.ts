import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderBoardByCountryDataService {
  url = 'http://localhost:8080/lastWeekLeaderboardByCountry';
  
  constructor(private http: HttpClient) {}

  dataToSend : string = "";
  getValue(value : string){
    this.dataToSend = value;
  }
  
  getPastWeekLeaderBoardDataByCountry(dataToSend: string) {
    return this.http.post(this.url , {"country" : dataToSend});    
  }
}
