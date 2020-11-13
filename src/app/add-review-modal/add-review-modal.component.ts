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
  selector: 'app-add-review-modal',
  templateUrl: './add-review-modal.component.html',
  styleUrls: ['./add-review-modal.component.css']
})
export class AddReviewModalComponent implements OnInit {
  currentUser: AppUser = {};
  reviewForm: FormGroup;
  loginRequest: Iloginrequest;
  appReview: AppReview = {};
  message: string= null;

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
    this.date = mm + '-' + dd + '-' + yyyy;
    this.appUserService.getData().subscribe(data=>{
      this.currentUser= data;
    },
    err=> { this.router.navigateByUrl('/login')}
    );
    this.reviewForm = this.fb.group({
      comment: ['',Validators.required],
      rating: ['',Validators.required],
    });
  }

  createReview(){
    console.log("hello");
    if(this.currentUser==null){
      document.location.href  = 'http://localhost:4200/login';
    }
    this.appReview ={
      comment: this.reviewForm.value.comment,
      rating: this.reviewForm.value.rating,
      appUser: {
        id: this.currentUser.id
      },
      appProperty: {
        id: this.prop.id
      },
      date: this.date
    }
    console.log(this.appReview);
    this.appUserService.createReview(this.appReview).subscribe(
      success =>{
        this.prop.appReviews.push(success);
        this.prop.appReviews.sort((a,b)=>{
          return b.id-a.id
        })

        this.message="Success";
      },
      err=> {
        console.log(err);
      }

    )
  }

  get comment(){
    return this.reviewForm.get('comment');
  }
  get rating(){
    return this.reviewForm.get('rating');
  }


}
