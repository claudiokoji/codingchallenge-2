import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThfModule } from '@totvs/thf-ui';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuctionListComponent } from './auction-list.component';
import { AuctionComponent } from '../auction/auction.component';
import { AuctionModule } from '../auction/auction.module';

@NgModule({
    declarations: [
        AuctionListComponent
    ],
    imports: [
        CommonModule,
        ThfModule,
        SharedModule,
        AuctionModule
        
    ],
    exports: [
        AuctionListComponent
    ]
})
export class AuctionListModule {}