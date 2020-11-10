import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

  p: number = 1;
  @Input()
  reviews: any[] = [];
  @Input()
  propid:number;

  constructor() { }

  ngOnInit(): void {
  }
}
