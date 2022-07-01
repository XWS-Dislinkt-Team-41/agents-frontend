import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IJobOffer } from '../model/jobOffer';

@Injectable({
  providedIn: 'root',
})
export class JobOfferService {
  private jobOfferUrl = `${environment.apiUrl}/jobOffer`;

  constructor(private http: HttpClient) {}

  getJobOfferById(jobOfferId: number): Observable<IJobOffer> {
    return this.http
      .get<IJobOffer>(`${this.jobOfferUrl}/${jobOfferId}`)
      .pipe(catchError(this.handleError));
  }

  saveJobOffer(jobOffer: IJobOffer): Observable<IJobOffer> {
    return this.http
      .post<IJobOffer>(`${this.jobOfferUrl}`, jobOffer)
      .pipe(catchError(this.handleError));
  }

  updateJobOffer(jobOffer: IJobOffer): Observable<IJobOffer> {
    return this.http
      .put<IJobOffer>(`${this.jobOfferUrl}/${jobOffer.id}`, jobOffer)
      .pipe(catchError(this.handleError));
  }

  deleteJobOffer(jobOfferId: number): Observable<IJobOffer> {
    return this.http
      .delete<IJobOffer>(`${this.jobOfferUrl}/${jobOfferId}`)
      .pipe(catchError(this.handleError));
  }

  getCompanyJobOffers(companyId: number): Observable<IJobOffer[]> {
    return this.http
      .get<IJobOffer[]>(`${this.jobOfferUrl}/company/${companyId}`)
      .pipe(catchError(this.handleError));
  }

  getAllJobOffers(): Observable<IJobOffer[]> {
    return this.http
      .get<IJobOffer[]>(`${this.jobOfferUrl}`)
      .pipe(catchError(this.handleError));
  }

  publishJobOffer(jobOffer: IJobOffer): Observable<IJobOffer> {
    return this.http
      .post<IJobOffer>(`${this.jobOfferUrl}/publish`, jobOffer)
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
