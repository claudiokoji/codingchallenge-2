import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NewAuction } from './new-auction';

//Endere�o API local:
const API_URL = 'http://localhost:8080';

//Endere�o externo da API
//const API_URL = 'http://138.219.88.80:17114';

//Endere�o interno da API.
//const API_URL = 'http://10.171.67.175:17114';

@Injectable({ providedIn: 'root'})

export class AddAuctionService {

  constructor(private http: HttpClient) {}

  //Realiza o post de um novo leil�o na API.
  addAuction(newAuction: NewAuction, auth_token: string) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + auth_token);

    return this.http.post(API_URL + '/api/v1/auctions', newAuction, {headers: headers});
  }
}
