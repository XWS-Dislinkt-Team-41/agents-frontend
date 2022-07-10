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
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { CompanyComponent } from './pages/company/company.component';
import { HasRoleDirective } from './directive/hasRole.directive';
import { BaseCommentComponent } from './components/base-comment/base-comment.component';
import { BaseInterviewComponent } from './components/base-interview/base-interview.component';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';
import { EditCompanyComponent } from './pages/edit-company/edit-company.component';
import { BasePaymentComponent } from './components/base-payment/base-payment.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';
import { NewPaymentComponent } from './components/new-payment/new-payment.component';
import { NewInterviewComponent } from './components/new-interview/new-interview.component';

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
    RegisterUserComponent,
    LoginComponent,
    CompanyComponent,
    HasRoleDirective,
    BaseCommentComponent,
    BaseInterviewComponent,
    RegisterCompanyComponent,
    EditCompanyComponent,
    BasePaymentComponent,
    NewCommentComponent,
    NewPaymentComponent,
    NewInterviewComponent,
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
