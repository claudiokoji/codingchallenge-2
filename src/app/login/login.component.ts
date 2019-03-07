import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ThfPageLoginLiterals} from '@totvs/thf-templates/components/thf-page-login';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})

export class LoginComponent {
  constructor(private login: UserService, private router: Router ) {

  }

  loginSubmit(formData) {
    console.log(formData);
    const user = {
      email: formData.login,
      password: formData.password

    };
    this.login.entrar(user).then((result: any) => {
        this.login.setHeader(result.access_token);
        this.router.navigate(['home']);
        this.login.usuario = user.email;
    }).catch(error => {
      console.log("Usuario ou senha incorretos!");
    });

  }
}
