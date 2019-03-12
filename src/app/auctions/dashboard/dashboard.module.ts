import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThfModule } from '@totvs/thf-ui';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuctionComponent } from '../auction/auction.component';
import { AuctionModule } from '../auction/auction.module';
import { AuctionListComponent } from '../auction-list/auction-list.component';
import { AuctionListModule } from '../auction-list/auction-list.module';

@NgModule({
    declarations: [
      
        AuctionListComponent
    ],
    imports: [
        CommonModule,
        ThfModule,
        SharedModule,

        AuctionListModule
    ],
    exports: [

        AuctionListComponent
    ]
})
export class DashboardModule {}