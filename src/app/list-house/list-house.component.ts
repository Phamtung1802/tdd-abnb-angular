import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppProperty } from '../object-interfaces/AppProperty';
import { AppUser } from '../object-interfaces/AppUser';
import { AppUserService } from '../service/app-user.service';
import { Iloginrequest } from 'src/app/object-interfaces/Iloginrequest';
import { IloginrequestService } from '../service/iloginrequest.service';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {
  house: AppProperty={};
  currentUser: AppUser={};
  userForm: FormGroup;
  message: string;
  success: boolean = false;


  constructor(private appUserService: AppUserService, private router: Router, private fb: FormBuilder, private injector: Injector) {
    this.appUserService.getData().subscribe(data=>{
      this.currentUser= data;
    });
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      status: ['', [Validators.required]],
      type: ['', [Validators.required]],
      address: ['', [Validators.required]],
      bedroomNum: ['', [Validators.required]],
      bathroomNum: [''],
      description:['', [Validators.required]],
      pricePerDay:['', [Validators.required]]
    });
  }

  createHouse(){
    let property: AppProperty={
      name: this.userForm.value.name,
      status: this.userForm.value.status,
      type: this.userForm.value.type,
      bedroomNum: this.userForm.value.bedroomNum,
      bathroomNum: this.userForm.value.bathroomNum,
      description: this.userForm.value.description,
      pricePerDay: this.userForm.value.pricePerDay,
      address: this.userForm.value.address,
      appUser:{
        id: this.currentUser.id
      }
    };

    this.appUserService.createHouse(property).subscribe(
    //thanh cong
    () => {
      this.message=null;
      // this.router.navigateByUrl('/login',{state: {success:true}});
    },
    //that bai
      (error) => {
        if(error.error.exception=="com.TDD.ABnB.exceptions.DuplilcateUserException"){
          this.message= error.error.message;
        }
      }
    );
  }

  get name() {
    return this.userForm.get('name');
  }
  get status() {
    return this.userForm.get('status');
  }
  get type() {
    return this.userForm.get('type');
  }
  get bedroomNum(){
    return this.userForm.get('bedroomNum');
  }
  get bathroomNum(){
    return this.userForm.get('bathroomNum');
  }

  get description(){
    return this.userForm.get('description');
  }

  get pricePerDay(){
    return this.userForm.get('pricePerDay');
  }
  get address(){
    return this.userForm.get('address');
  }



}
