import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../components/navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , ReactiveFormsModule
    , HomeRoutes    
  ],
  declarations: [HomeComponent, NavbarComponent]
})
export class HomeModule { 
}
