import { Component, OnInit } from '@angular/core';
import { ThfMenuItem } from '@totvs/thf-ui';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private router: Router, private authService: AuthService ) { 
  }

  ngOnInit(){
    this.authService.loggedEmitter.subscribe(
      logged => this.userLogged = logged
    );
  }

  title = 'Totvs-Leiloes';

  menuItemSelected: string;
  menuLinkSelected: string;

  userLogged: boolean = false;

  menus: Array<ThfMenuItem> = [
    { label: 'Meus Leiloes', action: this.printMenuAction, icon: 'thf-icon-user', shortLabel: 'Meus Leiloes' },
    { label: 'Adicionar Leilao', action: this.navegarOnMenu, icon: 'thf-icon-news', link: "/leilao",shortLabel: 'Adicionar Leilao' },
  //{ label: 'Leil�es Abertos', action: this.printMenuAction, icon: 'thf-icon-money', shortLabel: 'Leil�es Abertos'}
  ];

  navegarOnMenu( menu: ThfMenuItem ){
    this.menuLinkSelected = menu.link
    //console.log(this.menuLinkSelected);
    this.router.navigate([menu.link]);
  }

  printMenuAction( menu: ThfMenuItem  ) {
    this.menuItemSelected = menu.label;
    console.log( "Cliquei em " + menu.label )
  }

}
