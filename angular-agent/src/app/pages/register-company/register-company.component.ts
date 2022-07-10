import { AuthenticationService } from './../../services/authentication.service';
import {
  ICompanyRegistrationRequest,
  emptyCompanyRegistrationRequest,
} from './../../model/companyRegistrationRequest';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css'],
})
export class RegisterCompanyComponent implements OnInit {
  company: ICompanyRegistrationRequest = emptyCompanyRegistrationRequest;

  constructor(
    private requestCompanyService: RequestsService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authService.userSubject.subscribe((user) => {
      this.company.userId = user.id;
    });
  }

  register() {
    this.company.status = 0;
    this.requestCompanyService
      .registerCompany(this.company)
      .subscribe(() => {});
  }
}
