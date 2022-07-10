import { IPayment } from './../model/payment';
import { IComment } from './../model/comment';
import { IInterview } from './../model/interview';
import { ICompany } from 'src/app/model/company';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, distinctUntilChanged, map } from 'rxjs/operators';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  tap,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getAllCompanies(): Observable<ICompany[]> {
    return this.http
      .get<ICompany[]>(`${environment.apiUrl}/company`)
      .pipe(catchError(this.handleError));
  }

  getCompany(companyId: number): Observable<ICompany> {
    return this.http
      .get<ICompany>(`${environment.apiUrl}/company/` + companyId)
      .pipe(catchError(this.handleError));
  }

  createInterview(interview: IInterview): Observable<IInterview> {
    return this.http
      .post<IInterview>(`${environment.apiUrl}/company/interview`, interview)
      .pipe(catchError(this.handleError));
  }

  createComment(comment: IComment): Observable<IComment> {
    return this.http
      .post<IComment>(`${environment.apiUrl}/company/comment`, comment)
      .pipe(catchError(this.handleError));
  }

  createPayment(payment: IPayment): Observable<IPayment> {
    return this.http
      .post<IPayment>(`${environment.apiUrl}/company/payment`, payment)
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
