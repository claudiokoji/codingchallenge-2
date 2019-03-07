import { Component, OnInit } from '@angular/core';
import { ThfPageLogin } from '@totvs/thf-templates/components/thf-page-login';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(    
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
  }

  fazerLogin( formData: ThfPageLogin) {
      
    this.auth.getToken(formData.login, formData.password)
      .subscribe(
              apptoken => this.auth.userToken = apptoken,
              error => this.auth.handleError(error));
        
    console.log("USER TOKEN ", this.auth.userToken);
      
  }

}
