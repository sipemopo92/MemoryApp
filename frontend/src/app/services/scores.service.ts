import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseScores } from '../models/responseApi';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private apiUrl = 'http://localhost:3000/scores'

  constructor(private httpClient: HttpClient) { }

  addScore(id_user: number, score: number) {
    let body = {id_user: id_user, score: score}
    return this.httpClient.post<ResponseScores>(this.apiUrl, body);
  }


  getScoresByUserId(id_user: number) {
    return this.httpClient.get<ResponseScores>(this.apiUrl + '/scoresByUserId?id_user=' + id_user);

  }

  getRanking() {
    return this.httpClient.get<ResponseScores>(this.apiUrl);
  }


  getAboveScoresByScore(score: number) {
    return this.httpClient.get<ResponseScores>(this.apiUrl + '/aboveScoresByScore?score=' + score);
  }


  getBelowScoresByScore(score: number) {
    return this.httpClient.get<ResponseScores>(this.apiUrl + '/belowScoresByScore?score=' + score);
  }

}
