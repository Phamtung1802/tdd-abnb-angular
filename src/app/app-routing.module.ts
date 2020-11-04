import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateUserComponent} from './crudUser/create-user/create-user.component';
import {EditUserComponent} from './crudUser/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: CreateUserComponent,
  },
  {
    path: 'editUser',
    component: EditUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
