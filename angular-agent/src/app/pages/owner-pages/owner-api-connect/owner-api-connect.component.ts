import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';
import { IUserLogin } from 'src/app/model/userLogin';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ConnectApiService } from 'src/app/services/connect-api.service';

@Component({
  selector: 'app-owner-api-connect',
  templateUrl: './owner-api-connect.component.html',
  styleUrls: ['./owner-api-connect.component.css'],
})
export class OwnerApiConnectComponent implements OnInit {
  currentUser!: IUser;
  userLogin: IUserLogin = {
    username: '',
    password: '',
  };

  constructor(
    private connectApiService: ConnectApiService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authenticationService.userSubject.subscribe(
      (user) => (this.currentUser = user)
    );
  }

  connect() {
    this.connectApiService.connectApiService(this.userLogin).subscribe();
  }
}
