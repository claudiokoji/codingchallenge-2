import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThfModule } from '@totvs/thf-ui';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuctionComponent } from './auction.component';

@NgModule({
    declarations:[
        AuctionComponent
    ],
    imports: [
        CommonModule,
        ThfModule,
        SharedModule
    ],
    exports: [
        AuctionComponent
    ]
})
export class AuctionModule {}