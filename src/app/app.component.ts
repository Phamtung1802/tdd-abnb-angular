import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Event, ParamMap, Router} from '@angular/router';
import { AppUser } from './object-interfaces/AppUser';
import {Iloginrequest} from './object-interfaces/Iloginrequest';
import { AppUserService } from './service/app-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tdd-abnb-angular';
  loginRequest: Iloginrequest;
  currentUser: AppUser;

  constructor(private appUserService: AppUserService){};


  ngOnInit(): void {
    this.loginRequest = JSON.parse((sessionStorage.getItem('rbnbuser')));
    console.log(this.loginRequest);
  }
  onChanges() {
    this.loginRequest = JSON.parse((sessionStorage.getItem('rbnbuser')));
    console.log(this.loginRequest==null);
  }

  logOut(): void {
    sessionStorage.removeItem('rbnbuser'),
    this.loginRequest = JSON.parse((sessionStorage.getItem('rbnbuser')));
  }

  getAllUser(){
    console.log("running");
    this.appUserService.getAllUser().subscribe(
      //thanh cong
      data => {
        console.log(data);
      },
      //that bai
      error => {
        console.log(error.error.message);
      }
    );
  }
}
