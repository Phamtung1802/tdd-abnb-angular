import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EditUserComponent} from './crudUser/edit-user/edit-user.component';
import {CreateUserComponent} from './crudUser/create-user/create-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {from} from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/service/token-interceptor.service';
import { EditPasswordComponent } from './crudUser/edit-password/edit-password.component';
import { ListHouseComponent } from './list-house/list-house.component';
import { MainPageHouseListComponent } from './main-page-house-list/main-page-house-list.component' ;
import {NgxPaginationModule} from 'ngx-pagination';
import { ReviewPageComponent } from './review-page/review-page.component';
import { PlaceBookingModalComponent } from './place-booking-modal/place-booking-modal.component';
import { AddReviewModalComponent } from './add-review-modal/add-review-modal.component';
import { CheckAvailabilityPipe } from './check-availability.pipe';
import { RenterHouseListComponent } from './renter-house-list/renter-house-list.component';
import { MyPlaceComponent } from './my-place/my-place.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EditUserComponent,
    HomeComponent,
    LoginComponent,
    EditPasswordComponent,
    ListHouseComponent,
    MainPageHouseListComponent,
    ReviewPageComponent,
    PlaceBookingModalComponent,
    AddReviewModalComponent,
    CheckAvailabilityPipe,
    RenterHouseListComponent,
    MyPlaceComponent,
    MyBookingComponent,
    ImageGalleryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
