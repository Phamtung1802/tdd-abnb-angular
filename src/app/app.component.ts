import { tokenName } from '@angular/compiler';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Event, ParamMap, Router} from '@angular/router';
import { AppUser } from './object-interfaces/AppUser';
import {Iloginrequest} from './object-interfaces/Iloginrequest';
import { AppUserService } from './service/app-user.service';
import { IloginrequestService } from './service/iloginrequest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tdd-abnb-angular';
  loginRequest: Iloginrequest;
  currentUser: AppUser={
    name:""
  };

  constructor(private appUserService: AppUserService, private iloginRequestService: IloginrequestService){};


  ngOnInit(): void {
    let token: Object = JSON.parse(sessionStorage.getItem('rbnbuser'));
    if(token!=null){
    this.iloginRequestService.firstLogin().subscribe(
      //Valid
      data=>{
          this.currentUser=data;
          console.log(this.currentUser);
      },
      //err
      error=>{
        if(error.error.exception=="com.TDD.ABnB.exceptions.InvalidTokenException"){
            sessionStorage.removeItem('rbnbuser');
        }
      }
    )}
  }
  onChanges() {
    this.loginRequest = JSON.parse((sessionStorage.getItem('rbnbuser')));
    console.log(this.loginRequest==null);
  }

  logOut(): void {
    sessionStorage.removeItem('rbnbuser');
    window.location.assign("http://localhost:4200")
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
