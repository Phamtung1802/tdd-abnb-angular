import { Injectable, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


import {ILogin} from '../object-interfaces/ilogin';
import {Iloginrequest} from '../object-interfaces/Iloginrequest';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { AppToken } from '../object-interfaces/AppToken';
import { AppUser } from '../object-interfaces/AppUser';
const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class IloginrequestService {

  constructor(private http: HttpClient) { }
  token: AppToken={"token":""}
  appUser: AppUser={
    "name":""
  }


  public getToken(): string {
    if(JSON.parse(sessionStorage.getItem('rbnbuser'))!=null){
        this.token = JSON.parse(sessionStorage.getItem('rbnbuser'));
    }
    return this.token.token;
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    this.http.post(API_URL + `/token-authenticate`,"").subscribe(
      data => {this.appUser=data},
      err => {});
      if(this.appUser.name.length>2){
        return true
      }
       else return false;
  }

  getLoginRequest(login: ILogin): Observable<Iloginrequest> {
    return this.http.post<Iloginrequest>(API_URL + `/authenticate`, login);
  }
  firstLogin(): Observable<any> {
    return this.http.post(API_URL + `/token-authenticate`,"");
  }

}
