import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    SignInComponent, 
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }



