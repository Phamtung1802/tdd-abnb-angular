import { Component, OnInit } from '@angular/core';
import {AppProperty} from '../../object-interfaces/AppProperty';
import {AppPropertyService} from '../../service/app-property.service';
import {Iloginrequest} from '../../object-interfaces/Iloginrequest';
import {AppUser} from '../../object-interfaces/AppUser';
import {IloginrequestService} from '../../service/iloginrequest.service';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {
  currentUser: AppUser={
  };
  house: AppProperty[];
  constructor(
    private service: AppPropertyService,
    private iloginRequestService: IloginrequestService,
  ) { }

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
    this.getListHouse();
  }

  getListHouse(): AppProperty[] {
    this.service.getAllHouseByUser(this.currentUser.id).subscribe(p => this.house = p);
    console.log(this.house);
    return this.house;
  }
}
