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
  that = this;


  constructor(private appUserService: AppUserService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.appUserService.getData().subscribe(data=>{
      console.log("Init Edit Comp");
      this.currentUser= data;
      console.log(this.currentUser);
    });
    this.userForm = this.fb.group({
      id: new FormControl(),
      password: new FormControl(),
      newPassword: new FormControl()
   });
  }

}
