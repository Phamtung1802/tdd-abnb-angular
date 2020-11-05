import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppUser} from '../object-interfaces/AppUser';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private http: HttpClient) { }


  createUser(user: AppUser): Observable<AppUser> {
    return this.http.post<AppUser>(API_URL + `/api/auth/register`, user);
  }
  updateUser(id: number, user: AppUser): Observable<AppUser> {
    return this.http.put<AppUser>(API_URL + `/user/update/${id}`, user);
  }
  getUserById(id: number): Observable<AppUser> {
    return this.http.get<AppUser>( API_URL + `/user/findUserById/${id}`);
  }
}
