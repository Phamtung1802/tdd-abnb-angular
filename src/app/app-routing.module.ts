import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateUserComponent} from './crudUser/create-user/create-user.component';
import {EditUserComponent} from './crudUser/edit-user/edit-user.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CreateHouseComponent} from './crudHouse/create-house/create-house.component';
import {EditHouseComponent} from './crudHouse/edit-house/edit-house.component';
import {DetailHouseComponent} from './crudHouse/detail-house/detail-house.component';
import {ListHouseComponent} from './crudHouse/list-house/list-house.component';
import {ModalGalleryComponent} from './modal-gallery/modal-gallery.component';

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
  {
    path: 'edit/:id',
    component: EditHouseComponent,
  },
  {
    path: 'detail/:id',
    component: DetailHouseComponent,
  },
  {
    path: 'personal',
    component: ListHouseComponent,
  },
  {
    path: 'app-modal-gallery-page',
    component: ModalGalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
