import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThfModule } from '@totvs/thf-ui';
import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';

@NgModule({
  imports: [
    CommonModule,
    ThfModule,
    ThfPageLoginModule
  ],
  exports: [
    CommonModule,
    ThfModule,
    ThfPageLoginModule
  ]
})
export class SharedModule { }
