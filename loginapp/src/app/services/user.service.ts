import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getUser() {
    
    return this.http.get(`${this.baseUrl}/getUsers`);
  }
}
