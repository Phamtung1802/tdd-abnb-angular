import { Component, OnInit } from '@angular/core';
import {AppUserService} from '../../service/app-user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AppUser } from 'src/app/object-interfaces/AppUser';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  message: string = null;

  userForm: FormGroup;
  constructor(private fb: FormBuilder,
              private appUserService: AppUserService,
              private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      avatar: [''],
    });
  }
  createUser(): void {
    let user: AppUser={
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      phoneNumber: this.userForm.value.phoneNumber,
      avatar: null,
      appRole:{
        id: 2 as number
      }
    };

    this.appUserService.createUser(user).subscribe(
    //thanh cong
    () => {
      this.message=null;
    },
    //that bai
      (error) => {
        if(error.error.exception=="com.TDD.ABnB.exceptions.DuplilcateUserException"){
          this.message= error.error.message;
        }
      }
    );
  };


  get nameUser() {
    return this.userForm.get('name');
  }
  get emailUser() {
    return this.userForm.get('email');
  }
  get passWordUser() {
    return this.userForm.get('password');
  }
  get phoneNumberUser(){
    return this.userForm.get('phoneNumber');
  }
  get avatarUser(){
    return this.userForm.get('avatar');
  }
}
