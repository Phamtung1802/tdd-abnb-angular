import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {OldPwdValidators} from './old-pwd.validators';


@Component({
  selector: 'app-pwd-change',
  templateUrl: './pwd-change.component.html',
  styleUrls: ['./pwd-change.component.css']
})
export class PwdChangeComponent implements OnInit {

  formChangedPassword: FormGroup;

  constructor(fb: FormBuilder) {
    this.formChangedPassword = fb.group({
      'oldPwd': ['', Validators.required, OldPwdValidators.shouldBe1234],
      'newPwd': ['', Validators.required],
      'confirmPwd': ['', Validators.required]
    }, {
      validator: OldPwdValidators.matchPwds
    });
  }

  ngOnInit(): void {
  }

  get oldPwd() {
    return this.formChangedPassword.get('oldPwd');
  }

  get newPwd() {
    return this.formChangedPassword.get('newPwd');
  }

  get confirmPwd() {
    return this.formChangedPassword.get('confirmPwd');
  }

}
