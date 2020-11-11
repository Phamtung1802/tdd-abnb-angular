import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageHouseListComponent } from './main-page-house-list.component';

describe('MainPageHouseListComponent', () => {
  let component: MainPageHouseListComponent;
  let fixture: ComponentFixture<MainPageHouseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageHouseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageHouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
