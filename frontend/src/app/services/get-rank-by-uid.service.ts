import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetRankByUidService {
  url = 'https://blacklight-studios.onrender.com/userLeaderboardRank';
  
  constructor(private http: HttpClient) {}

  uid : string = "";
  getValue(value : string){
    this.uid = value;
  }
  
  getUserDataFromUid(uid: string) {
    return this.http.post(this.url , {"uid" : uid});    
  }
}
