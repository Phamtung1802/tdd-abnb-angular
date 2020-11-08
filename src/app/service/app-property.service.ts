import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppProperty} from '../object-interfaces/AppProperty';


const API_URL = 'http://localhost:8080/';
const API_URL2 = 'http://localhost:8080/';


@Injectable({
  providedIn: 'root'
})
export class AppPropertyService {


  constructor(private http: HttpClient) {
  }


  getHouseByID(id: number): Observable<AppProperty> {
    return this.http.get<AppProperty>(API_URL + `/${id}`);
  }
  getUser(id: number): Observable<AppProperty> {
    return this.http.get<AppProperty>(API_URL + `/house/${id}`);
  }
  createHouse(song: AppProperty): Observable<AppProperty>{
    return this.http.post<AppProperty>(API_URL + `/create`, song);
  }

  updateHouse(id: number, house: AppProperty): Observable<AppProperty> {
    return this.http.put<AppProperty>(API_URL + `/update/${id}`, house);
  }
  deleteSong(id: number): Observable<AppProperty> {
    return  this.http.delete<AppProperty>(API_URL + `/delete/${id}`);
  }
  getAllHouseByUser(id: number): Observable<AppProperty[]>{
    return this.http.get<AppProperty[]>(API_URL + `/listByUid/${id}`);
  }
  searchHouseByName(name: string): Observable<AppProperty[]>{
    return this.http.get<AppProperty[]>(API_URL + `/search/${name}`);
  }
}
