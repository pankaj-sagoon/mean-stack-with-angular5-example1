import { Component, OnInit } from '@angular/core';
import { Location} from "@angular/common";
import {BlogService} from "../../services/blog.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css'],
  providers: [BlogService]
})
export class EditBlogComponent implements OnInit {
  currentUrl;
  blog;
  message: String;
  messageClass: String;
  constructor(private location: Location,
              private blogService: BlogService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentUrl= this.activateRoute.snapshot.params;
    console.log(this.currentUrl.id);
    this.blogService.singleBlog(this.currentUrl.id).subscribe(
      (data: any)=>{
        if(!data.success){
          this.messageClass= 'alert alert-danger';
          this.message = 'No blog found';
        }{
          this.blog = data.blog;
        }
      },
      (err: HttpErrorResponse)=>{}
    );
  }

  blog = {
    title: String,
    body: String
  };

  goBack(){
    this.location.back();
  }

}
