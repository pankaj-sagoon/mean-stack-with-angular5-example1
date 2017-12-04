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

  allBlog(){
    this.createAuthenticationHeaders();
    return this.http.get(Config.domain + 'blogs/allBlogs', this.options);
  }
  singleBlog(id){
    this.createAuthenticationHeaders();
    return this.http.get(Config.domain+ 'blogs/singleBlog/'+ id, this.options);
  }
  updateBlog(blog){
    this.createAuthenticationHeaders();
    return this.http.put(Config.domain+ 'blogs/updateBlog', blog, this.options);
  }
  deleteBlog(id){
    this.createAuthenticationHeaders();
    return this.http.delete(Config.domain+ 'blogs/deleteBlog/'+ id, this.options);
  }
  likeBlog(id){
    this.createAuthenticationHeaders();
    const blogData= {id: id};
    return this.http.put(Config.domain+ 'blogs/likeBlog', blogData, this.options);
  }
  dislikeBlog(id){
    this.createAuthenticationHeaders();
    const blogData= {id: id};
    return this.http.put(Config.domain+ 'blogs/dislikeBlog', blogData, this.options);
  }
  postComment(blogData){
    this.createAuthenticationHeaders();
    return this.http.post(Config.domain+ 'blogs/postComment', blogData, this.options);
  }


}
