import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private user: UserService) { }

  ngOnInit() {
    if (!this.user.usuario) {
      this.route.navigate(['']);
    }
  }

}
