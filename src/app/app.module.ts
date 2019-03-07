import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThfModule } from '@totvs/thf-ui';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule {
}
