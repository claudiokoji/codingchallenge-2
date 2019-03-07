import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThfModule } from '@totvs/thf-ui';
import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';
import { LoginComponent } from './login.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
declarations: [
LoginComponent

],
imports: [
BrowserModule,
ThfModule,
ThfPageLoginModule,
HttpClientModule
],
providers: [],
bootstrap: [LoginComponent]
})
export class LoginModule { }
