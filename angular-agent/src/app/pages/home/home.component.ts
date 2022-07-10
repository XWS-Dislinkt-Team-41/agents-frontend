import { Router } from '@angular/router';
import { CompanyService } from './../../services/company.service';
import { ICompany } from 'src/app/model/company';
import { map, startWith } from 'rxjs/operators';
import { State } from '../../model/test';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  stateCtrl = new FormControl('');
  filteredStates: Observable<ICompany[]>;

  states: ICompany[] = [];
  constructor(private companyService: CompanyService, private router: Router) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((state) => (state ? this._filterStates(state) : this.states.slice()))
    );
  }

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe((companies) => {
      this.states = companies;
    });
  }
  openCompany(companyId: number) {
    this.router.navigate(['company/' + companyId]);
  }
  private _filterStates(value: string): ICompany[] {
    const filterValue = value.toLowerCase();

    return this.states.filter((state) =>
      state.name.toLowerCase().includes(filterValue)
    );
  }
}
