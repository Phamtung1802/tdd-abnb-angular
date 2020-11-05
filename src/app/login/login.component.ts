import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IloginrequestService} from '../service/iloginrequest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Iloginrequest} from '../object-interfaces/Iloginrequest';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginRequest: Iloginrequest = null;
  message: string= null;

  constructor(private formBuilder: FormBuilder,
              private userService: IloginrequestService,
              private router: Router
  ) {
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
      }, error => {
        // if(error.error.exception=)s
        console.log("Error "+ error);
        // this.message= error.error.message;
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
