import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppBooking } from '../object-interfaces/AppBooking';
import { AppProperty } from '../object-interfaces/AppProperty';
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
  reviewForm: FormGroup;
  currentBooking: AppBooking;
  loginRequest: Iloginrequest;

  @Input()
  prop: AppProperty;

  success: boolean=false;
  that = this;


  constructor(private appUserService: AppUserService,
    private fb: FormBuilder,
    private router: Router) {

    }

  ngOnInit(): void {
    this.appUserService.getData().subscribe(data=>{
      this.currentUser= data;
    },
    err=> { this.router.navigateByUrl('/login')}
    );
    this.reviewForm = this.fb.group({
    });
  }

}
