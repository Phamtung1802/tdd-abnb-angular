import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/object-interfaces/AppUser';
import { Iloginrequest } from 'src/app/object-interfaces/Iloginrequest';
import { AppUserService } from 'src/app/service/app-user.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {
  currentUser: AppUser = {};
  userForm: FormGroup;
  loginRequest: Iloginrequest;
  success: boolean=false;
  failure: boolean=false;
  that = this;


  constructor(private appUserService: AppUserService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.appUserService.getData().subscribe(data=>{
      this.currentUser= data;
    });
    this.userForm = this.fb.group({
      oldPassword: new FormControl(),
      newPassword: new FormControl(),
      confirmNewPassword: new FormControl()
    });
  }

  update(): void {
    const user = {
      password: this.userForm.value.newPassword,
      name: this.userForm.value.oldPassword
    };
    console.log(this.userForm.value.newPassword);
    console.log(this.userForm.value.confirmNewPassword);

    if(this.userForm.value.newPassword===this.userForm.value.confirmNewPassword&&this.userForm.value.newPassword!=null&&this.userForm.value.confirmNewPassword!=null){
      this.appUserService.updateUserPassword(this.currentUser.id, user).subscribe(data => {
          this.success=true;
          this.appUserService.changeData(data);
        },
        err=>{
          this.failure=true;
          this.success=false;
        })
    }
  }
}
