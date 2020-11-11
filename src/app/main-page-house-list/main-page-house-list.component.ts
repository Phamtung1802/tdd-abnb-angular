import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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


  constructor(private appUserService: AppUserService, private router: Router, private fb: FormBuilder, private injector: Injector) {
    this.appUserService.getData().subscribe(data=>{
      this.currentUser= data;
    });
    this.p=1;
  }


  ngOnInit(): void {
    this.appUserService.getAllProperty().subscribe(
      //Success
      data=>{
        this.propertyPage=data;
      }
    )

    // this.propertyPage.forEach(element => {
    //   let rating: number = 0;
    //   element.appReviews.forEach(review => {
    //     rating+=review.rating;
    //   });
    //   element.rating=rating;
    // });
  }
}
