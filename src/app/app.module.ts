import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ThfModule } from '@totvs/thf-ui';
import { AuctionsModule } from './auctions/auctions.module';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    AuctionsModule,
    ErrorsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
