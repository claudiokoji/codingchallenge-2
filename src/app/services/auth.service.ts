import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API_URL = 'http://10.171.67.175:17114';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string){
    return this.http.post(API_URL + '/api/v1/auth/new',
    { email, password });
  }
}
