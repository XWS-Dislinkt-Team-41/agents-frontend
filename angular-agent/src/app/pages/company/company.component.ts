import { AuthenticationService } from './../../services/authentication.service';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { emptyCompany, ICompany } from 'src/app/model/company';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  company: ICompany = emptyCompany;
  companyId!: number;
  constructor(
    private companyService: CompanyService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {}
  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
  ngOnInit(): void {
    this.companyId = this.route.snapshot.params['id'];
    this.companyService.getCompany(this.companyId).subscribe((company) => {
      this.company = company;
    });
  }
}
