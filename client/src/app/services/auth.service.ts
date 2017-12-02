import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from './../config/config';
import { tokenNotExpired } from 'angular2-jwt';


const api_url: any = {
  'register': Config.domain + 'authentication/register',
  'checkEmail': Config.domain + 'authentication/checkEmail',
  'checkUsername': Config.domain + 'authentication/checkUsername',
  'login': Config.domain + 'authentication/login',
  'profile': Config.domain + 'authentication/profile'
};


@Injectable()
export class AuthService {

  authToken;
  user;
  options;

  constructor(private http: HttpClient) {
  }

  createAuthenticationHeaders(){
    this.loadToken();
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': this.authToken
      })
    };
  }


  loadToken(){
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  registerUser(user) {
    return this.http.post(api_url.register, user);
  }

  checkEmail(email){
    return this.http.get(api_url.checkEmail + '/' + email);
  }

  checkUsername(username){
    return this.http.get(api_url.checkUsername + '/' + username);
  }

  login(user) {
    return this.http.post(api_url.login, user);
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  getProfile(){
    this.createAuthenticationHeaders();
    return this.http.get(api_url.profile, this.options);
  }


  storeUserData(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }


  loggedIn() {
    return tokenNotExpired();
  }

}
