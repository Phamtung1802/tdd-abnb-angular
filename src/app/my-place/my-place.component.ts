import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, SelectControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { AppProperty } from '../object-interfaces/AppProperty';
import { AppUser } from '../object-interfaces/AppUser';
import { AppUserService } from '../service/app-user.service';

@Component({
  selector: 'app-my-place',
  templateUrl: './my-place.component.html',
  styleUrls: ['./my-place.component.css']
})
export class MyPlaceComponent implements OnInit {

  currentUser: AppUser={};
  p: number = 1;
  propid:number;


  constructor(private appUserService: AppUserService, private router: Router, private fb: FormBuilder, private injector: Injector) {
    this.appUserService.getData().subscribe(data=>{
      this.currentUser= data;
    });
    this.p=1;
    this.compareId();
  }

  ngOnInit(): void {
  }

  updatePropertyStatus(prop: AppProperty, value: any){
    let updateProp: AppProperty = {
      id: prop.id,
      status: value
    }
    console.log(updateProp)
    this.appUserService.updatePropertyStatus(updateProp).subscribe(
      data=> {
        console.log("status success");
        this.appUserService.changeData(data);
      },
      error=> console.log(error)
    );
  }

  compareId(){
    this.currentUser.appProperties.sort( (a,b)=>this.appUserService.compareId(a.id,b.id))
  }
}
