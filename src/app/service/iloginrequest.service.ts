import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


import {ILogin} from '../object-interfaces/ilogin';
import {Iloginrequest} from '../object-interfaces/Iloginrequest';
const API_URL = 'http://localhost:8080/api/auth';
@Injectable({
  providedIn: 'root'
})
export class IloginrequestService {

  constructor(private http: HttpClient) { }


  getLoginRequest(login: ILogin): Observable<Iloginrequest> {
    return this.http.post<Iloginrequest>(API_URL + `/login`, login);
  }
}
