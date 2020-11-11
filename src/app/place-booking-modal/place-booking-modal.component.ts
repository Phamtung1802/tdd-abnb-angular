import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppBooking } from '../object-interfaces/AppBooking';
import { AppProperty } from '../object-interfaces/AppProperty';
import { AppReview } from '../object-interfaces/AppReview';
import { AppUser } from '../object-interfaces/AppUser';
import { Iloginrequest } from '../object-interfaces/Iloginrequest';
import { AppUserService } from '../service/app-user.service';

@Component({
  selector: 'app-place-booking-modal',
  templateUrl: './place-booking-modal.component.html',
  styleUrls: ['./place-booking-modal.component.css']
})
export class PlaceBookingModalComponent implements OnInit {
  currentUser: AppUser = {};
  bookingForm: FormGroup;
  loginRequest: Iloginrequest;
  appBooking: AppBooking = {};
  bookingmessage: string= null;

  @Input()
  prop: AppProperty;

  date: String;

  success: boolean=false;
  that = this;


  constructor(private appUserService: AppUserService,
    private fb: FormBuilder,
    private router: Router) {

    }

  ngOnInit(): void {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = String(today.getFullYear());
    this.date = mm + '/' + dd + '/' + yyyy;
    this.appUserService.getData().subscribe(data=>{
      this.currentUser= data;
    },
    err=> { this.router.navigateByUrl('/login')}
    );
    this.bookingForm = this.fb.group({
      checkinDate: ['',Validators.required],
      checkoutDate: ['',Validators.required]
    });
  }

  createBooking(){
    console.log(this.bookingForm.value.checkinDate);
    console.log(this.bookingForm.value.checkoutDate);
    this.appBooking={
      checkinDate : this.bookingForm.value.checkinDate,
      checkoutDate: this.bookingForm.value.checkoutDate,
      appUser: {
        id: this.currentUser.id
      },
      appProperty:{
        id: this.prop.id
      }
    }
    this.appUserService.createBooking(this.appBooking).subscribe(
      success=>{
        this.bookingmessage = "Success"
      },
      error=>{
        this.bookingmessage = error.error.message;
      }
    )
  }

  get checkinDate(){
    return this.bookingForm.get('checkinDate');
  }
  get checkoutDate(){
    return this.bookingForm.get('checkoutDate');
  }

}
