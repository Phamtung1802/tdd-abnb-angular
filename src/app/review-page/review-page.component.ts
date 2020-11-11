import { Component, Input, OnInit } from '@angular/core';
import { AppReview } from '../object-interfaces/AppReview';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

  p: number = 1;
  @Input()
  reviews: AppReview[] = [];
  @Input()
  propid:number;

  constructor() { }

  ngOnInit(): void {
  }
}
