import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRole } from '../model/role';
import { IToken } from '../model/token';
import { IUser } from '../model/user';
import { IUserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authUrl = `${environment.apiUrl}/auth`;
  private userUrl = `${environment.apiUrl}/user`;

  private accessToken = localStorage.getItem('jwt');
  private userSubject = new BehaviorSubject<IUser>({} as IUser);
  public userObs = this.userSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private router: Router, private http: HttpClient) {
    if (this.isLoggedIn()) {
      this.getUser().subscribe((user) => this.userSubject.next(user));
    }
  }

  getUser(): Observable<IUser> {
    return this.http.get<any>(`${this.userUrl}`).pipe(
      map((user: IUser) => {
        console.log('upao3');
        this.userSubject.next(user);
        console.log('upao2');
        return user;
      })
    );
  }

  public get user(): IUser {
    return this.userSubject.value;
  }

  login(user: IUserLogin) {
    return this.http.post<any>(`${this.userUrl}/login`, user).pipe(
      map((res: IUser) => {
        localStorage.setItem('jwt', res.token);
        this.accessToken = res.token;
        return this.getUser();
      })
    );
  }

  logout() {
    this.purgeUser();
    localStorage.removeItem('jwt');
    this.accessToken = null;
    this.router.navigate(['/login']);
  }

  purgeUser() {
    this.userSubject.next({} as IUser);
  }

  getToken() {
    return this.accessToken;
  }

  isLoggedIn() {
    return this.accessToken !== undefined && this.accessToken !== null;
  }

  isAuthorized(role: IRole): Observable<boolean> {
    return this.http.post<boolean>(`${this.authUrl}/authorize`, role);
  }
}
