import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { ThfPageLogin, ThfPageLoginCustomField, ThfPageLoginLiterals } from '@totvs/thf-templates/components/thf-page-login';
import { ThfDialogService } from '@totvs/thf-ui';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SignInComponent {

  loginForm: FormGroup;

  constructor(
    private thfDialog: ThfDialogService,
    private router: Router) { }

  loginSubmit(formData: ThfPageLogin) {

    this.router.navigate(['auctions-home'])

  }

}
