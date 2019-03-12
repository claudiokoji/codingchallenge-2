import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionsHomeComponent } from './auctions/auctions-home.component';
import { DashboardComponent } from './auctions/dashboard/dashboard.component';
import { OpenAuctionsComponent } from './auctions/open-auctions/open-auctions.component';
import { AuctionCreationComponent } from './auctions/auction-creation/auction-creation.component';



const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
  },
  { 
      path: 'home',
      loadChildren: './home/home.module#HomeModule'
  },
  { 
    path: 'auctions-home',
    component: AuctionsHomeComponent,
    children:[
          { 
              path: 'dashboard', 
              component: DashboardComponent,
          },
          { 
            path: 'auction-creation', 
            component: AuctionCreationComponent,
          },
          { 
            path: 'open-auctions', 
            component: OpenAuctionsComponent,
          }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
