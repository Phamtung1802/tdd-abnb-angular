import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterHouseListComponent } from './renter-house-list.component';

describe('RenterHouseListComponent', () => {
  let component: RenterHouseListComponent;
  let fixture: ComponentFixture<RenterHouseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterHouseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterHouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
