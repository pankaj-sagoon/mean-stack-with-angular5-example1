import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Config} from './../config/config';
import {AuthService} from "./auth.service";

@Injectable()
export class BlogService {
  options;

  constructor(private authService: AuthService,
              private http: HttpClient) { }

  createAuthenticationHeaders(){
    this.authService.loadToken();
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })
    };
  }

  newBlog(blog){
    this.createAuthenticationHeaders();
    return this.http.post(Config.domain + 'blogs/newBlog', blog, this.options);
  }

}
