import { Component, OnInit } from '@angular/core';
import { emptyCompany, ICompany } from 'src/app/model/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  company: ICompany = emptyCompany;

  constructor() {}

  ngOnInit(): void {}
}
