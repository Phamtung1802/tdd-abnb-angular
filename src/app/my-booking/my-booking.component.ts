import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppBooking } from '../object-interfaces/AppBooking';
import { AppProperty } from '../object-interfaces/AppProperty';
import { AppUser } from '../object-interfaces/AppUser';
import { AppUserService } from '../service/app-user.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {

    currentUser: AppUser={};
    p: number = 1;
    propid:number;
    message: string=null;


  constructor(private appUserService: AppUserService, private router: Router, private fb: FormBuilder, private injector: Injector) {
    this.appUserService.getData().subscribe(data=>{
      this.currentUser= data;
    });
    this.p=1;
    this.compareId();
  }

  ngOnInit(): void {
  }

  deleteBooking(book: AppBooking, value: any){
    let updateRev: AppProperty = {
      id: book.id,
      status: value,
      appUser:{
        id: this.currentUser.id
      }
    }
    this.appUserService.deleteBooking(book.id).subscribe(
      (data: AppUser)=> {
        console.log("status success");
        data.appBookings.sort((a,b)=>this.appUserService.compareId(a.id,b.id));
        this.appUserService.changeData(data);
      },
      error=> {
        console.log(error)
        this.message=error.error.message;
      }
    );
  }

  compareId(){
    this.currentUser.appBookings.sort( (a,b)=>this.appUserService.compareId(a.id,b.id))
  }
}

