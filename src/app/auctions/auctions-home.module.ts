import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuctionsHomeComponent } from './auctions-home.component';
import { ThfModule } from '@totvs/thf-ui';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuctionModule } from './auction/auction.module';
import { OpenAuctionsComponent } from './open-auctions/open-auctions.component';


@NgModule({
    declarations: [
        AuctionsHomeComponent,
        DashboardComponent,
        OpenAuctionsComponent
    ],
    imports: [
        CommonModule,
        ThfModule,
        RouterModule,
        SharedModule,
        RouterModule,
        AuctionModule

    ],
    exports: [
        AuctionsHomeComponent
    ]
})
export class AuctionsHomeModule { }