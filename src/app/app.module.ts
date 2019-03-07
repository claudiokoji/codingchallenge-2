import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ThfModule } from '@totvs/thf-ui';
import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';
import { ThfMenuPanelModule } from '@totvs/thf-ui/components/thf-menu-panel';
import { LeilaoComponent } from './leilao/leilao.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './auth-guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeilaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    ThfPageLoginModule,
    ThfMenuPanelModule
  ],
  //providers: [AuthService, AuthGuard],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
