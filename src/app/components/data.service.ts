import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://hacker-news.firebaseio.com/v0';
  }

  getFeed(feedType: string): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}/${feedType}.json`);
  }

  getItem(itemId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/item/${itemId}.json`);
  }

  getUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}.json`);
  }
}
