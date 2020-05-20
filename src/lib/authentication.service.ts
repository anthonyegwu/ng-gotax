import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as jwtDecode from 'jwt-decode';
import { UserRequest, LoginRequest } from './model/authentication.model';
import { Observable } from 'rxjs';
import { GotaxConfig } from './gotax.module';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl: string = 'http://3.130.118.251:8092/v1';

  constructor(private http: HttpClient, @Optional() config: GotaxConfig) {
    if (config) {
      this.baseUrl = config.userServiceUrl;
    }
  }

  /**
   * Decodes JWT token to any (Authenticated user)
   */
  decodeJWTToken = (token: string): any => {
    return jwtDecode(token);
  };

  getUserFromToken = (token: string): any => {
    try {
      let user: any = this.decodeJWTToken(token);
      return user;
    } catch (error) {
      throw new Error('Cannot decode invalid token');
    }
  };

  createUser = (userRequest: UserRequest) => {
    return this.http.post(`${this.baseUrl}/user/create`, userRequest, {
      observe: 'response',
    });
  };

  activateUser = (userId: string, verificationCode: string) => {
    let params: HttpParams = new HttpParams()
      .set('userId', userId)
      .set('verificationCode', verificationCode);
    return this.http.get(`${this.baseUrl}/user/activate`, {
      params: params,
    });
  };

  resetPassword = (userId: string) => {
    return this.http.post(
      `${this.baseUrl}/user/resetpassword`,
      { userId: userId },
      {
        observe: 'response',
      }
    );
  };

  updatePassword = (userId: string, password: string) => {
    return this.http.post(
      `${this.baseUrl}/user/updatepassword`,
      { userId: userId, password: password },
      {
        observe: 'response',
      }
    );
  };

  login = (loginRequest: LoginRequest): Observable<string> => {
    return this.http.post<string>(`${this.baseUrl}/user/signin`, loginRequest);
  };

  createUserRequestFromObject = (request: any): UserRequest => {
    return {
      firstName: request.firstName,
      middleName: request.middleName,
      lastName: request.lastName,
      emailAddress: request.emailAddress,
      phoneNumber: request.phoneNumber,
      password: request.password,
      roleId: request.roleId,
    };
  };
}
