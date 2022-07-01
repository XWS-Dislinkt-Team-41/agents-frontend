import { RegistrationRequestsComponent } from './pages/admin-pages/registration-requests/registration-requests.component';
import { RequestsComponent } from './pages/admin-pages/requests/requests.component';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { AnswerRegistrationRequestComponent } from './pages/admin-pages/answer-registration-request/answer-registration-request.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OwnerJobOffersComponent } from './pages/owner-pages/owner-job-offers/owner-job-offers.component';
import { OwnerJobOfferComponent } from './pages/owner-pages/owner-job-offer/owner-job-offer.component';
import { JobOfferComponent } from './components/job-offer/job-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChangePasswordComponent,
    HomeComponent,
    RequestsComponent,
    RegistrationRequestsComponent,
    AnswerRegistrationRequestComponent,
    OwnerJobOffersComponent,
    OwnerJobOfferComponent,
    JobOfferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatTabsModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
