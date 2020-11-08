import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateUserComponent} from './crudUser/create-user/create-user.component';
import {EditUserComponent} from './crudUser/edit-user/edit-user.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { EditPasswordComponent } from './crudUser/edit-password/edit-password.component';

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
    path: 'edit-user',
    component: EditUserComponent
  },
  {
    path: 'edit-password',
    component: EditPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
