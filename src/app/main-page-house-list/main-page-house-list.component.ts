import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppBooking } from '../object-interfaces/AppBooking';
import { AppProperty } from '../object-interfaces/AppProperty';
import { AppUser } from '../object-interfaces/AppUser';
import { AppUserService } from '../service/app-user.service';

@Component({
  selector: 'app-main-page-house-list',
  templateUrl: './main-page-house-list.component.html',
  styleUrls: ['./main-page-house-list.component.css']
})
export class MainPageHouseListComponent implements OnInit {

  currentUser: AppUser={};
  propertyPage: AppProperty[]=[];
  p: number = 1;
  propid:number;
  startDate: string="";
  endDate: string="";
  search: string="";
  unfiltered: AppProperty[]=[];

  constructor(private appUserService: AppUserService, private router: Router, private fb: FormBuilder, private injector: Injector) {
    this.appUserService.getData().subscribe(data=>{
      this.currentUser= data;
    });
    this.p=1;
  }

  updateList(){
    console.log(this.startDate)
    console.log(this.endDate)
    let dateStart=Date.parse(this.startDate)
    let dateEnd=Date.parse(this.endDate)
    let checkSearchingDate= (dateStart-dateEnd)<0;
    console.log(dateStart);
    console.log(dateEnd);

    if(this.search!=null){
      for(let i = 0; i < this.propertyPage.length; i++){
        if(this.propertyPage[i].address.includes(this.search)===false){
          this.propertyPage.splice(i,1);
          i--;
        }
      }
    }
    if((this.startDate!="")&&(this.endDate!="")&&checkSearchingDate){
      console.log("checking date")
      for(let i = 0; i < this.propertyPage.length; i++){
        for(let j = 0; j < this.propertyPage[i].appBookings.length; j++){
          console.log(j);
          let bookingdateStart=Date.parse(this.propertyPage[i].appBookings[j].checkinDate);
          let bookingdateEnd=Date.parse(this.propertyPage[i].appBookings[j].checkoutDate);
          let startdiff=bookingdateStart-dateEnd;
          let enddiff=bookingdateEnd-dateStart;
          console.log(startdiff);
          console.log(enddiff);
          if(!(startdiff>=0||enddiff<=0)){
            console.log("slice");
            console.log(this.propertyPage[i].id)
            this.propertyPage.splice(i,1);
            i--;
            break;
          }
        }
      }
    }
    if(this.search==""&&this.startDate==""&&this.endDate==""){
      this.propertyPage=this.unfiltered.filter(object => object.status=="Available").sort(
        (a,b)=>{
        return b.id-a.id;
      });
    }
  }
  resetList(){
    this.appUserService.getAllProperty().subscribe(
      //Success
      (data: AppProperty[])=>{
        this.propertyPage=data.filter(object => object.status=="Available").sort(
          (a,b)=>{
          return b.id-a.id;
        });
      }
    )
  }

  ngOnInit(): void {
      this.appUserService.getAllProperty().subscribe(
      //Success
      (data: AppProperty[])=>{
        this.propertyPage=data.filter(object => object.status=="Available");
        this.unfiltered=data;
        this.propertyPage.sort((a,b)=>{
          return b.id-a.id;
        })
        this.propertyPage.forEach(element => {
          element.appReviews.sort((a,b)=>{
            return b.id-a.id
          })
        });
      }
    )
  }
}
