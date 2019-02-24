import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuctionsHomeComponent } from './auctions-home.component';
import { ThfModule } from '@totvs/thf-ui';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    declarations: [
        AuctionsHomeComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        ThfModule,
        RouterModule,
        SharedModule,
        RouterModule

    ],
    exports: [
        AuctionsHomeComponent
    ]
})
export class AuctionsHomeModule { }