import { RequestsComponent } from './pages/admin-pages/requests/requests.component';
import { CompanyComponent } from './pages/company/company.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OwnerJobOfferComponent } from './pages/owner-pages/owner-job-offer/owner-job-offer.component';
import { OwnerJobOffersComponent } from './pages/owner-pages/owner-job-offers/owner-job-offers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'jobOffer/:id', component: OwnerJobOfferComponent },
  { path: 'jobOffers', component: OwnerJobOffersComponent },
  { path: 'company', component: CompanyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
