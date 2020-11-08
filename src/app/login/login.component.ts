import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';

import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IloginrequestService} from '../service/iloginrequest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Iloginrequest} from '../object-interfaces/Iloginrequest';
import { AppUser } from '../object-interfaces/AppUser';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loginRequest: Iloginrequest = null;
  message: string= null;
  success: boolean=false;

  constructor(private formBuilder: FormBuilder,
              private userService: IloginrequestService,
              private router: Router
  ) {
    try{
    this.success = this.router.getCurrentNavigation().extras.state.success;
    } catch{
      console.log("not from signup");
    }
  }
  ngOnDestroy(): void {
    this.success=false;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  findUser(): void {
    const login = this.loginForm.value;
    this.userService.getLoginRequest(login).subscribe(next => {
        this.loginRequest = next;
        window.location.assign("http://localhost:4200")
      }, error => {
        // if(error.error.exception=)s
        console.log("Error "+ error);
        this.message= error.error.message;
      },
      () => {
        sessionStorage.setItem('rbnbuser', JSON.stringify(this.loginRequest));
        this.loginRequest = JSON.parse((sessionStorage.getItem('rbnbuser')));
        console.log(this.loginRequest);
        if (this.loginRequest) {
          this.router.navigateByUrl('');
        }
      }
    );

  }
}
