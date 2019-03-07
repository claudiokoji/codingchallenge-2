import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThfPageModule, ThfModule, ThfNotificationModule } from '@totvs/thf-ui';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    ThfModule,
    ThfPageModule,
    ThfNotificationModule
  ],

  exports: [
    HeaderComponent
  ]

})

export class CoreModule{}
