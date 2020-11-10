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
import { PwdChangeComponent } from './pwd-change/pwd-change.component';
import { CreateHouseComponent } from './crudHouse/create-house/create-house.component';
import { ListHouseComponent } from './crudHouse/list-house/list-house.component';
import { DetailHouseComponent } from './crudHouse/detail-house/detail-house.component';
import { EditHouseComponent } from './crudHouse/edit-house/edit-house.component' ;
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EditUserComponent,
    HomeComponent,
    LoginComponent,
    PwdChangeComponent,
    CreateHouseComponent,
    ListHouseComponent,
    DetailHouseComponent,
    EditHouseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
