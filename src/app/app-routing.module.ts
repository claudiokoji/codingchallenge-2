import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LeilaoComponent } from './leilao/leilao.component';
import { AuthGuard } from './auth-guard/auth.guard';

const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: 'leilao', component: LeilaoComponent, canActivate: [AuthGuard] },
  { path: ''      , redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
