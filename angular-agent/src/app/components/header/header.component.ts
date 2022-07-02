import { AuthenticationService } from './../../services/authentication.service';
import { IUserLogin } from './../../model/userLogin';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userLogin: IUserLogin = {
    username: '',
    password: '',
  };
  username!: string;
  password!: string;
  errorMessage!: string;
  regLink: string = '/chooseRegistration';
  loggedInUser!: IUser;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
    if (this.isLoggedIn()) {
      this.authenticationService.getUser().subscribe();
    }
  }

  logout() {
    this.authenticationService.purgeUser();
    this.authenticationService.logout();
  }

  getUser() {
    this.authenticationService.userSubject.subscribe((user) => {
      if (user) {
        this.loggedInUser = user;
      }
    });
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}
