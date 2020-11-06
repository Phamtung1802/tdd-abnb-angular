import {Component, Input, OnInit} from '@angular/core';
import {AppUser} from '../../object-interfaces/AppUser';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Iloginrequest} from '../../object-interfaces/Iloginrequest';
import {Router} from '@angular/router';
import {AppUserService} from '../../service/app-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;
  @Input()
  currentUser: AppUser;

  constructor(private iUserService: AppUserService,
              private fb: FormBuilder,
              private router: Router, ) { }

  ngOnInit(): void {
    console.log(this.currentUser);
    this.userForm = this.fb.group({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
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
