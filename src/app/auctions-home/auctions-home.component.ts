import { Component } from '@angular/core';

@Component({
  selector: 'app-auctions-home',
  templateUrl: './auctions-home.component.html'
})
export class AuctionsHomeComponent {
  title = 'Auctions';
  menus = [
    { label: 'Dashboard', link: './dashboard' }
  ];
}