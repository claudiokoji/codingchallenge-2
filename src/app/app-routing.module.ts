import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionsHomeComponent } from './auctions-home/auctions-home.component';
import { DashboardComponent } from './auctions-home/dashboard/dashboard.component';



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
