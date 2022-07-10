import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICompanyRegistrationRequest } from '../model/companyRegistrationRequest';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  private registrationRequestsUrl = `${environment.apiUrl}/companyRegistrationRequest`;
  public openDialogRegistration$: EventEmitter<ICompanyRegistrationRequest>;
  public submitedRegistrationRequest$: EventEmitter<ICompanyRegistrationRequest>;

  constructor(private http: HttpClient) {
    this.openDialogRegistration$ = new EventEmitter();
    this.submitedRegistrationRequest$ = new EventEmitter();
  }

  openDialogRegistration(request: ICompanyRegistrationRequest) {
    this.openDialogRegistration$.emit(request);
  }

  registerCompany(
    request: ICompanyRegistrationRequest
  ): Observable<ICompanyRegistrationRequest> {
    return this.http
      .post<ICompanyRegistrationRequest>(
        `${this.registrationRequestsUrl}`,
        request
      )
      .pipe(catchError(this.handleError));
  }

  submitedRegistrationRequest() {
    this.submitedRegistrationRequest$.emit();
  }

  getCompanyRegistrationRequests(): Observable<ICompanyRegistrationRequest[]> {
    return this.http
      .get<ICompanyRegistrationRequest[]>(`${this.registrationRequestsUrl}`)
      .pipe(catchError(this.handleError));
  }

  acceptRegistrationRequest(
    request: ICompanyRegistrationRequest
  ): Observable<ICompanyRegistrationRequest> {
    return this.http
      .put<ICompanyRegistrationRequest>(
        `${this.registrationRequestsUrl}/accept/${request.id}`,
        request
      )
      .pipe(catchError(this.handleError));
  }

  declineRegistrationRequest(
    request: ICompanyRegistrationRequest
  ): Observable<ICompanyRegistrationRequest> {
    return this.http
      .put<ICompanyRegistrationRequest>(
        `${this.registrationRequestsUrl}/decline/${request.id}`,
        request
      )
      .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
