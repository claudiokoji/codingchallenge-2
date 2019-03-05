import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuctionsHomeComponent } from './auctions-home.component';
import { ThfModule } from '@totvs/thf-ui';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuctionModule } from './auction/auction.module';
import { OpenAuctionsComponent } from './open-auctions/open-auctions.component';
import { AuctionCreationComponent } from './auction-creation/auction-creation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AuctionsHomeComponent,
        DashboardComponent,
        AuctionCreationComponent,
        OpenAuctionsComponent
    ],
    imports: [
        CommonModule,
        ThfModule,
        RouterModule,
        SharedModule,
        RouterModule,
        AuctionModule,
        ReactiveFormsModule,
        FormsModule
        

    ],
    exports: [
        AuctionsHomeComponent
    ]
})
export class AuctionsHomeModule { }