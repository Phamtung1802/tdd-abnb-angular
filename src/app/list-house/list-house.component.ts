import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppProperty } from '../object-interfaces/AppProperty';
import { AppUser } from '../object-interfaces/AppUser';
import { AppUserService } from '../service/app-user.service';
import { Iloginrequest } from 'src/app/object-interfaces/Iloginrequest';
import { IloginrequestService } from '../service/iloginrequest.service';
import { AppImage } from '../object-interfaces/AppImage';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit, OnDestroy {
  house: AppProperty = {};
  currentUser: AppUser = {};
  userForm: FormGroup;
  message: string;
  success = false;
  imageArray: AppImage[] = [];


  constructor(private appUserService: AppUserService, private router: Router, private fb: FormBuilder, private injector: Injector) {
    this.appUserService.getData().subscribe(data => {
      this.currentUser = data;
    });
  }
  ngOnDestroy(): void {
    this.message = null;
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      status: ['', [Validators.required]],
      type: ['', [Validators.required]],
      address: ['', [Validators.required]],
      bedroomNum: ['', [Validators.required]],
      bathroomNum: [''],
      description: ['', [Validators.required]],
      pricePerDay: ['', [Validators.required]],
      appImages: ['']
    });
  }

  // tslint:disable-next-line:typedef
  createHouse(){
    const image: AppImage = {
      url: this.userForm.value.appImages
    };
    this.imageArray.push(image);

    const property: AppProperty = {
      name: this.userForm.value.name,
      status: this.userForm.value.status,
      type: this.userForm.value.type,
      bedroomNum: this.userForm.value.bedroomNum,
      bathroomNum: this.userForm.value.bathroomNum,
      description: this.userForm.value.description,
      pricePerDay: this.userForm.value.pricePerDay,
      appImages: this.imageArray,
      address: this.userForm.value.address,
      appUser: {
        id: this.currentUser.id
      }
    };
    console.log('Property');
    console.log(property);

    this.appUserService.createHouse(property).subscribe(
    // thanh cong
    data => {
      this.message = 'Success!!!';
      this.appUserService.changeData(data);
      // this.router.navigateByUrl('/login',{state: {success:true}});
    },
    // that bai
      (error) => {
        // tslint:disable-next-line:triple-equals
        if (error.error.exception == 'com.TDD.ABnB.exceptions.DuplilcateUserException'){
          this.message = error.error.message;
        }
      }
    );
    this.imageArray = [];
  }

  // tslint:disable-next-line:typedef
  get name() {
    return this.userForm.get('name');
  }
  // tslint:disable-next-line:typedef
  get status() {
    return this.userForm.get('status');
  }
  // tslint:disable-next-line:typedef
  get type() {
    return this.userForm.get('type');
  }
  // tslint:disable-next-line:typedef
  get bedroomNum(){
    return this.userForm.get('bedroomNum');
  }
  // tslint:disable-next-line:typedef
  get bathroomNum(){
    return this.userForm.get('bathroomNum');
  }

  // tslint:disable-next-line:typedef
  get description(){
    return this.userForm.get('description');
  }

  // tslint:disable-next-line:typedef
  get pricePerDay(){
    return this.userForm.get('pricePerDay');
  }
  // tslint:disable-next-line:typedef
  get address(){
    return this.userForm.get('address');
  }
  get appImages(){
    return this.userForm.get('appImages');
  }



}
