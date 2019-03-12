import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThfModule } from '@totvs/thf-ui';
import { ThfKendoModule } from '@totvs/thf-kendo';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuctionComponent } from './auction.component';


@NgModule({
    declarations:[
        AuctionComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ThfModule,
        ThfKendoModule,
        SharedModule
    ],
    exports: [
        AuctionComponent
    ]
})
export class AuctionModule {}