import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public usuario;
  public URL = 'http://138.219.88.80:17114/api/v1/auth/new';
  headers = new Headers();


  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
   }

  entrar(FormData) {
    return this.http.post(this.URL, FormData).toPromise();
  }

  setHeader(token) {
    this.headers.append('Authorization', 'Bearer' + token );

  }
}
