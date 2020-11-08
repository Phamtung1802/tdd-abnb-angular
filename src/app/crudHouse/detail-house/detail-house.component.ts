import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {AppProperty} from '../../object-interfaces/AppProperty';
import {AppPropertyService} from '../../service/app-property.service';
import {CookieService} from 'ngx-cookie-service';
import {ShareEventService} from '../../service/share-event.service';

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.css']
})
export class DetailHouseComponent implements OnInit {
  house: AppProperty;
  constructor(
    private appPropertyService: AppPropertyService,
    private activatedRoute: ActivatedRoute,
    private cookie: CookieService,
    private shareEvent: ShareEventService
  ) { }

  ngOnInit(): void {
    const id = + this.activatedRoute.snapshot.paramMap.get('id');
    this.getHouse(id);
  }
  getHouse(id) {
    this.appPropertyService.getHouseByID(id).subscribe(next => this.house = next);
  }
}
