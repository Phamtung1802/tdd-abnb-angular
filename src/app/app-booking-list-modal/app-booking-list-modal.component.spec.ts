import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBookingListModalComponent } from './app-booking-list-modal.component';

describe('AppBookingListModalComponent', () => {
  let component: AppBookingListModalComponent;
  let fixture: ComponentFixture<AppBookingListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBookingListModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBookingListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
