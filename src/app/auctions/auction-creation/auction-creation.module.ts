import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThfModule } from '@totvs/thf-ui';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuctionComponent } from '../auction/auction.component';
import { AuctionModule } from '../auction/auction.module';


@NgModule({
    declarations: [
        AuctionComponent,
    ],
    imports: [
        CommonModule,
        ThfModule,
        SharedModule, 
        AuctionModule
    ],
    exports: [
        AuctionComponent
    ]
})
export class AuctionCreationModule {} 