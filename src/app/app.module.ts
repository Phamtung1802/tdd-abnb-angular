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
import { EditPasswordComponent } from './crudUser/edit-password/edit-password.component' ;
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EditUserComponent,
    HomeComponent,
    LoginComponent,
    EditPasswordComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
