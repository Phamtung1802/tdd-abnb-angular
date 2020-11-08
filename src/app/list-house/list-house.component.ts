import { Component, OnInit } from '@angular/core';
import { AppProperty } from '../object-interfaces/AppProperty';
import { AppUser } from '../object-interfaces/AppUser';
import { AppUserService } from '../service/app-user.service';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {
  house: AppProperty={};
  currentUser: AppUser={};

  constructor(private appUserService: AppUserService) {
    this.appUserService.getData().subscribe(data=>{
      this.currentUser= data;
    });
  }

  ngOnInit(): void {
  }

}
