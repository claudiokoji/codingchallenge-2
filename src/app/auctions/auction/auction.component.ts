import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-auction',
    templateUrl: './auction.component.html'
})  

export class AuctionComponent implements OnInit{
  
  _id: string;
  name: string;
  photo_url: string;
  base_price: number;
  bid_type: number;
  bid_step: number;
  status: number;
  owner: string;
  expirationDate: Date;
  
  @Input() template_type: number;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Nome do Leilão';
    this.photo_url = "../../../../assets/graphics/shoe.gif"
    this.bid_type = 2;
    this.bid_step = 20;
    this.base_price = 120;
    //this.template_type = 2;
  }


}