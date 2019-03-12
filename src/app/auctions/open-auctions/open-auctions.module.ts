import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThfModule } from '@totvs/thf-ui';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        ThfModule,
        SharedModule
    ]
})
export class DashboardModule {}