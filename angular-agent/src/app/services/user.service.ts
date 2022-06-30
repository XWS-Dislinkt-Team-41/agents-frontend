import { IUser, emptyUser } from './../model/user';

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
export class UserService {
  user: IUser = emptyUser;
  constructor(private http: HttpClient) {}

  deleteUser(id: number): Observable<IUser> {
    return this.http
      .delete<IUser>(`${environment.apiUrl}/user/${id}`)
      .pipe(catchError(this.handleError));
  }

  createDeleteRequest(explanation: string, email: string): Observable<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/userDeletion`, {
        deletionExplanation: explanation,
        userEmail: email,
      })
      .pipe(
        tap((data) => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  checkUser(id: number): Observable<IUser> {
    return this.http
      .get<any>(`${environment.apiUrl}/user/credentials/${id}`)
      .pipe(
        tap((data) => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<any>(`${environment.apiUrl}/user/${user.id}`, user);
  }

  changePassword(password: string): Observable<any> {
    console.log(this.user.id);
    return this.http.put<any>(`${environment.apiUrl}/admin/changePassword`, {
      id: this.user.id,
      password: password,
    });
  }

  getAllUser(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(`${environment.apiUrl}/user/users`)
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
