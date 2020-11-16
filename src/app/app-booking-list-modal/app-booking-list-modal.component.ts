import { Component, Input, OnInit } from '@angular/core';
import { AppProperty } from '../object-interfaces/AppProperty';

@Component({
  selector: 'app-app-booking-list-modal',
  templateUrl: './app-booking-list-modal.component.html',
  styleUrls: ['./app-booking-list-modal.component.css']
})
export class AppBookingListModalComponent implements OnInit {
  @Input()
  prop: AppProperty;

  constructor() { }

  ngOnInit(): void {
    this.prop.appBookings.sort((a,b)=> {return a.id-b.id})
  }

}
