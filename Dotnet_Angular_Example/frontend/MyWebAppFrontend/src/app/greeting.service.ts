import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  private baseUrl = 'http://localhost:5000/greeting';

  constructor(private http: HttpClient) { }

  getGreeting(): Observable<string> {
    return this.http.get(`${this.baseUrl}/greeting`, { responseType: 'text' });
  }
  
  
}
