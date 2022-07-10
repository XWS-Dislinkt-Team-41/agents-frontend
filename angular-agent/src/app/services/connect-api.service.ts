import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class ConnectApiService {
  private apiTokenUrl = `${environment.apiUrl}/apiToken`;

  constructor(private http: HttpClient) {}

  connectApiService(user: IUserLogin): Observable<any> {
    return this.http
      .post<any>(`${this.apiTokenUrl}`, user)
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
