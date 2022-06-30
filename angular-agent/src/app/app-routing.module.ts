import { RequestsComponent } from './pages/admin-pages/requests/requests.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OwnerJobOfferComponent } from './pages/owner-pages/owner-job-offer/owner-job-offer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'jobOffer/:id', component: OwnerJobOfferComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
