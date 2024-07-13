import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserProfile } from './UserProfile';
import { TokenModel } from './token-model';
import {LoginModel} from "../auth/login/login-model";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  readonly APIUrl = "http://127.0.0.1:8000";
  userProfile = new BehaviorSubject<UserProfile | null>(null);
  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }
  userLogin(payload: LoginModel) {
    return this.http
      .post(this.APIUrl + '/auth/login/', payload)
      .pipe(
        map((data) => {
          const token = data as TokenModel;
          localStorage.setItem('tokens', JSON.stringify(token.tokens));
          const userInfo = this.jwtService.decodeToken(
            token.tokens.access
          ) as UserProfile;
          this.userProfile.next(userInfo);
          return true;
        }),
        catchError((error) => {
          return of(false);
        })
      );
  }
  getAccountData(user_id: any) {
    return this.http.get<any>(this.APIUrl + '/auth/account/' + user_id);
  }

}
