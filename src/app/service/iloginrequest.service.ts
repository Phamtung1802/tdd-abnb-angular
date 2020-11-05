import { Injectable, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


import {ILogin} from '../object-interfaces/ilogin';
import {Iloginrequest} from '../object-interfaces/Iloginrequest';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { AppToken } from '../object-interfaces/AppToken';
const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class IloginrequestService {

  constructor(private http: HttpClient) { }
  token: AppToken={"token":""}

  public getToken(): string {
    if(JSON.parse(sessionStorage.getItem('rbnbuser'))!=null){
        this.token = JSON.parse(sessionStorage.getItem('rbnbuser'));
    }
    return this.token.token;
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    if (token!=null){
      return true;
    }
    else return false;
  }

  getLoginRequest(login: ILogin): Observable<Iloginrequest> {
    return this.http.post<Iloginrequest>(API_URL + `/authenticate`, login);
  }
}
