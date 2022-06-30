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
  userLogin!: IUserLogin;
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
    if (this.isLoggedIn()) {
      this.getUser();
    }
  }

  login() {
    this.userLogin = {
      username: this.username,
      password: this.password,
    };
    this.authenticationService.login(this.userLogin).subscribe({
      next: (res) => {
        this.getUser();
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }

  logout() {
    this.authenticationService.purgeUser();
    this.authenticationService.logout();
  }

  getUser() {
    this.loggedInUser = this.authenticationService.user;
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}
