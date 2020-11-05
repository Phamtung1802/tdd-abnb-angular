import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Event, ParamMap, Router} from '@angular/router';
import { AppUser } from './object-interfaces/AppUser';
import {Iloginrequest} from './object-interfaces/Iloginrequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tdd-abnb-angular';
  loginRequest: Iloginrequest;
  currentUser: AppUser;

  ngOnInit(): void {
  }
  onChanges() {
    this.loginRequest = JSON.parse((sessionStorage.getItem('rbnbuser')));
  }

  logOut(): void {
    sessionStorage.removeItem('rbnbuser'),
    this.loginRequest = JSON.parse((sessionStorage.getItem('rbnbuser')));
  }
}
