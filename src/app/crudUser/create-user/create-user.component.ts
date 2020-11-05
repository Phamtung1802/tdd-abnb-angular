import { Component, OnInit } from '@angular/core';
import {AppUserService} from '../../service/app-user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

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
    const user = this.userForm.value;
    this.appUserService.createUser(user).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
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
