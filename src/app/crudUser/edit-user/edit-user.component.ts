import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {AppUser} from '../../object-interfaces/AppUser';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Iloginrequest} from '../../object-interfaces/Iloginrequest';
import {Router} from '@angular/router';
import {AppUserService} from '../../service/app-user.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  currentUser: AppUser = {};
  userForm: FormGroup;
  loginRequest: Iloginrequest;
  success: boolean=false;
  that = this;


  constructor(private appUserService: AppUserService,
              private fb: FormBuilder,
              private router: Router) {

              }

  ngOnInit(): void {
    console.log("success init "+this.success)
    console.log("Init Edit Comp");
    this.appUserService.getData().subscribe(data=>{
      console.log("Init Edit Comp");
      this.currentUser= data;
      console.log(this.currentUser);
    });
    this.userForm = this.fb.group({
      id: new FormControl(),
      name: new FormControl(),
      realName: new FormControl(),
      address: new FormControl(),
      email: new FormControl(),
      avatar: new FormControl(),
      phoneNumber: new FormControl()
    });
  }
  getUserById(id: number): void {
    this.appUserService.getUserById(id).subscribe(pr => {
      this.currentUser = pr;
      console.log(pr);
      console.log(this.currentUser);

    });

  }
  update(): void {
    const user = this.userForm.value;
    this.appUserService.updateUser(this.currentUser.id, user).subscribe(() => {
      this.success=true;
      console.log('before time out success '+ this.success);
      setTimeout(()=> {
        console.log("timing");
        this.success=false;
        console.log(this.success);
      }, 3000);
      console.log('timed out success '+ this.success);
    });
  }
  click():void{
    console.log('edit click');
    console.log(this.currentUser);
  }
}
