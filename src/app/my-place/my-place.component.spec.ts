import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaceComponent } from './my-place.component';

describe('MyPlaceComponent', () => {
  let component: MyPlaceComponent;
  let fixture: ComponentFixture<MyPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
