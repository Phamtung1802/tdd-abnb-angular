import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Event, ParamMap, Router} from '@angular/router';
import {Iloginrequest} from './object-interfaces/Iloginrequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tdd-abnb-angular';
  loginRequest: Iloginrequest;

  ngOnInit(): void {
  }
  onChanges() {
    this.loginRequest = JSON.parse((sessionStorage.getItem('user')));
  }
  logOut(): void {
    sessionStorage.removeItem('user'),
    this.loginRequest = JSON.parse((sessionStorage.getItem('user')));
  }
}
