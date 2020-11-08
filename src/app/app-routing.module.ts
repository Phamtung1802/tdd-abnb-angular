import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateUserComponent} from './crudUser/create-user/create-user.component';
import {EditUserComponent} from './crudUser/edit-user/edit-user.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CreateHouseComponent} from './crudHouse/create-house/create-house.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
    path: 'editUser',
    component: EditUserComponent
  },
  {
    path: 'pwd-change',
    component: CreateUserComponent,
  },
  {
    path: 'create',
    component: CreateHouseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
