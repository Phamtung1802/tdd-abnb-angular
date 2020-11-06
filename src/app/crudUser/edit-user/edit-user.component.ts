import {Component, Input, OnInit} from '@angular/core';
import {AppUser} from '../../object-interfaces/AppUser';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Iloginrequest} from '../../object-interfaces/Iloginrequest';
import {Router} from '@angular/router';
import {AppUserService} from '../../service/app-user.service';
import { IloginrequestService } from 'src/app/service/iloginrequest.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;
  @Input()
  currentUser: AppUser={
  };

  constructor(private iUserService: AppUserService,
              private fb: FormBuilder,
              private router: Router, private iloginRequestService:IloginrequestService ) { }

  ngOnInit(): void {
    let token: Object = JSON.parse(sessionStorage.getItem('rbnbuser'));
    if(token!=null){
    this.iloginRequestService.firstLogin().subscribe(
      //Valid
      data=>{
          this.currentUser=data;
          console.log(this.currentUser);
      },
      //err
      error=>{
        if(error.error.exception=="com.TDD.ABnB.exceptions.InvalidTokenException"){
            sessionStorage.removeItem('rbnbuser');
        }
      }
    )}
    console.log("edit comp"+this.currentUser);
    this.userForm = this.fb.group({

      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phoneNumber: new FormControl()
    });
  }
  getUserById(id: number): void {
    this.iUserService.getUserById(id).subscribe(pr => {
      console.log(pr);
    });

  }
  update(): void {
    const user = this.userForm.value;
    this.iUserService.updateUser(this.currentUser.id, user).subscribe(() => {
      this.currentUser = JSON.parse((sessionStorage.getItem('user')));
    });
  }
}
