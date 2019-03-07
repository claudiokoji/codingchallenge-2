import { Injectable, EventEmitter } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Token } from '../classes/Token';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

const url = 'http://localhost:8080/api/v1';
//const url = 'http://10.171.67.175:17114/api/v1'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _http: HttpClient, private router: Router ) {
  }

  public userToken = new Token();

  loggedEmitter = new EventEmitter<boolean>();

  private usuarioAutenticado: boolean = false;

  private httpOptions = {
    headers : new HttpHeaders ({
      'Content-type': 'application/json',
      'Authorization': this.userToken.access_token || 'tokeninvalido'
    })
  };

  getToken (email, password): Observable<any> {

    return this._http.post<any>(url + '/auth/new', JSON.stringify({email, password}), this.httpOptions )
        .pipe(
            map(res => {
                //localStorage.setItem('token', res.access_token);
                //localStorage.setItem('refresh_token', res.refresh_token);
                this.userToken.access_token = res.access_token;
                this.userToken.refresh_token = res.refresh_token;
                this.httpOptions = {
                    headers : new HttpHeaders ({
                        'Content-type': 'application/json',
                         'Authorization': this.userToken.access_token
                         })
                     };
                this.usuarioAutenticado = true;
                this.loggedEmitter.emit(true);
                this.router.navigate(['leilao']);
                return this.userToken;
            }),
            catchError(this.handleError)
        );
  }

  handleError( error: HttpErrorResponse) {

    this.usuarioAutenticado = false;
    this.loggedEmitter.emit(false);

    if (error.error instanceof ErrorEvent) {
        console.error('Erro ocorrido: ', error.error.message)
    } else {
        console.error(
        `O servidor te ignorou e respondeu ${error.status} ` + `e ainda disse: ${error}`);
    }
    return throwError('I have a bad feeling about this...');
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  /*
  useJwtHelper( token ) {
      console.log(
      this.jwtHelper.decodeToken(token),
      this.jwtHelper.getTokenExpirationDate(token),
      this.jwtHelper.isTokenExpired(token)
      );
  }
  */    

}
