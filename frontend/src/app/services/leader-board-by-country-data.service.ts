import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderBoardByCountryDataService {
  url = 'https://blacklight-studios.onrender.com/lastWeekLeaderboardByCountry';
  
  constructor(private http: HttpClient) {}

  dataToSend : string = "";
  getValue(value : string){
    this.dataToSend = value;
  }
  
  getPastWeekLeaderBoardDataByCountry(dataToSend: string) {
    return this.http.post(this.url , {"country" : dataToSend});    
  }
}
