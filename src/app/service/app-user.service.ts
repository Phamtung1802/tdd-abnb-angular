import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppUser} from '../object-interfaces/AppUser';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { IloginrequestService } from './iloginrequest.service';
import { AppProperty } from '../object-interfaces/AppProperty';

const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  date:Date= new Date();
  string:number;
  user: AppUser= {name: "tung"};
  currentUser =new BehaviorSubject<AppUser>(null);
  currentUser$= this.currentUser.asObservable();

  constructor(private http: HttpClient, private iLoginReqestService: IloginrequestService) {
      console.log("Constructing Service");
      this.string= this.date.getMilliseconds();
  }
  getData(): Observable<AppUser>{
    console.log(this.string);
    this.currentUser$ =this.currentUser.asObservable()
    return this.currentUser$;
  }

  changeData(data: AppUser) {
     this.currentUser.next(data);
     this.getData()
     console.log("Checking currentuser in service");
     console.log(this.currentUser$.subscribe(data=>console.log(data)))
  }

  createUser(user: AppUser): Observable<AppUser> {
    return this.http.post<AppUser>(API_URL + `/users`, user);
  }

  createHouse(property: AppProperty): Observable<AppUser> {
    return this.http.post<AppUser>(API_URL + `/property`, property);
  }

  updateUser(id: number, user: AppUser): Observable<AppUser> {
    return this.http.patch<AppUser>(API_URL + `/users/${id}`, user);
  }
  updateUserPassword(id: number, user: AppUser): Observable<AppUser> {
    return this.http.patch<AppUser>(API_URL + `/users/edit-password/${id}`, user);
  }

  getUserById(id: number): Observable<AppUser> {
    return this.http.get<AppUser>( API_URL + `/users/${id}`);
  }
  getAllUser(): Observable<AppUser[]> {
    return this.http.get<AppUser[]>( API_URL + `/users/users`);
  }
  getAllProperty(): Observable<AppUser[]> {
    return this.http.get<AppUser[]>( API_URL + `/property`);
  }
}
