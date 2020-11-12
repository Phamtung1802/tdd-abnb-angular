import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateUserComponent} from './crudUser/create-user/create-user.component';
import {EditUserComponent} from './crudUser/edit-user/edit-user.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { EditPasswordComponent } from './crudUser/edit-password/edit-password.component';
import { ListHouseComponent } from './list-house/list-house.component';
import { MainPageHouseListComponent } from './main-page-house-list/main-page-house-list.component';
import { MyPlaceComponent } from './my-place/my-place.component';
import { MyBookingComponent } from './my-booking/my-booking.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageHouseListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: CreateUserComponent,
  },
  {
    path: 'edit-user',
    component: EditUserComponent
  },
  {
    path: 'edit-password',
    component: EditPasswordComponent
  },
  {
    path: 'list-house',
    component: ListHouseComponent
  },
  {
    path: 'my-house',
    component: MyPlaceComponent
  },
  {
    path: 'my-booking',
    component: MyBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
