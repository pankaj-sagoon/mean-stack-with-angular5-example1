import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
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
  message: String;
  messageClass: String;
  blog;

  constructor(private location: Location,
              private blogService: BlogService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentUrl = this.activateRoute.snapshot.params;
    console.log(this.currentUrl.id);
    this.blogService.singleBlog(this.currentUrl.id).subscribe(
      (data: any) => {
        if (!data.success) {
          this.messageClass = 'alert alert-danger';
          this.message = 'No blog found';
        } else {
          this.blog = data.blog;
        }
      },
      (err: HttpErrorResponse) => {
      }
    );
  }


  goBack() {
    this.location.back();
  }

  editBlog(): void {
    this.blogService.updateBlog(this.blog).subscribe(
      (data: any) => {
        if (!data.success) {
          this.message = data.message;
        } else {
          this.message = data.message;
          this.goBack();
        }
      },
      (err: HttpErrorResponse) => {
      }
    )
  }
  deleteBlog(): void {
    this.blogService.deleteBlog(this.blog._id).subscribe(
      (data: any) => {
        if (!data.success) {
          this.message = data.message;
        } else {
          this.message = data.message;
          this.goBack();
        }
      },
      (err: HttpErrorResponse) => {
      }
    )
  }

}
