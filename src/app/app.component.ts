import { tokenName } from '@angular/compiler';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Event, ParamMap, Router} from '@angular/router';
import { cpuUsage } from 'process';
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
  currentUser: AppUser = {
    name:""
  };

  constructor(private appUserService: AppUserService, private iLoginReqestService: IloginrequestService){
  };


  ngOnInit(): void {
    let token: Object = JSON.parse(sessionStorage.getItem('rbnbuser'));
    if(token!=null){
    this.iLoginReqestService.firstLogin().subscribe(
      //Valid
      data=>{
          this.appUserService.getData().subscribe(data=> this.currentUser=data);
          this.appUserService.changeData(data);
          console.log("Main comp current user sau khi subscribe");
          console.log(this.currentUser);
      },
      //err
      error=>{
        if(error.error.exception=="com.TDD.ABnB.exceptions.InvalidTokenException"){
            sessionStorage.removeItem('rbnbuser');
        }
      });
    }
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

  click(){
    console.log("Click ");
    console.log(this.currentUser);
    console.log("o duoi nay phai co mot thong bao nua");
    this.appUserService.getData().subscribe(
      data=> {
      console.log("Hello "+data);
    },
    err =>console.log("Err"),
    ()=>console.log("completed!")
    );
  }
}
