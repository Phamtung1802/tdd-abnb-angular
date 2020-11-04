import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';



@NgModule({
  declarations: [NavbarTopComponent, FooterBottomComponent],
  imports: [
    CommonModule
  ]
})
export class MainPageModule { }
