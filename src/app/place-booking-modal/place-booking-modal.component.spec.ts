import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceBookingModalComponent } from './place-booking-modal.component';

describe('PlaceBookingModalComponent', () => {
  let component: PlaceBookingModalComponent;
  let fixture: ComponentFixture<PlaceBookingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceBookingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceBookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
