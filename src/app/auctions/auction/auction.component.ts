import { Component, Input, OnInit } from '@angular/core';
import { ThfColumnChartSeries, ThfDonutChartSeries, ThfChartPieData } from '@totvs/thf-kendo/components/thf-chart';

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
  showDetails: Boolean;
  detailType: string;
  detailIcon: string;

  categories: Array<string>;
  series: Array<ThfColumnChartSeries>

  categories2: Array<string>;
  series2: Array<ThfChartPieData>
    
  @Input() template_type: number;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Nome do Leilão';
    this.photo_url = "../../../../assets/graphics/shoe.gif"
    this.bid_type = 2;
    this.bid_step = 20;
    this.base_price = 120;
    this.showDetails = false;
    this.detailType = "primary"
    this.detailIcon = "thf-icon-plus-circle"

    this.categories = [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.series = [
      { name: 'Video Game', data: [100, 232, 300, 250, 480, 600, 413, 510, 700, 860, 750, 890 ] },
      { name: 'Notebook', data: [16, 19, 25, 35, 27, 22, 29, 30, 42, 55, 60, 53] },
      { name: 'Cellphone', data: [35, 72, 120, 150, 110, 122, 135, 200, 220, 210, 210, 210] },
      { name: 'Tablet', data: [100, 130, 135, 150, 170, 165, 180, 200, 220, 150, 135, 100] }
    ];

    this.series2 = [
      {category:'Flavio',value: 50},
      {category:'Flavinho',value: 30},
      {category:'Flavuska',value: 20},
      {category:'Falcido',value: 10}

    ];


    //this.template_type = 2;
  }

  showDetailsClick(){
    this.showDetails = !this.showDetails

    if(this.showDetails){
      this.detailType = "default"
      this.detailIcon = "thf-icon-minus-circle"      
    }else{
      this.detailType = "primary"
      this.detailIcon = "thf-icon-plus-circle"
    }


    return this.showDetails
  }


}