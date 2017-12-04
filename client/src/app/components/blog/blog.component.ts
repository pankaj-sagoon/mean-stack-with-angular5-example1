import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {BlogService} from "../../services/blog.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

  form: FormGroup;
  commentForm: FormGroup;
  username: string;
  newPost: Boolean;
  processing: Boolean;
  message: string;
  messageClass: string;
  blogs;
  loadingBlogs: Boolean;
  newComment = [];
  enableComment = [];


  newBlogForm() {
    this.newPost = true;
  };

  goBack() {
    this.location.back();
  }

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private blogService: BlogService,
              private location: Location) {
    this.createForm();
    this.createComment();
  }

  //Create blog post
  createForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(100),
        this.validateTitle
      ])],
      body: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(500)
      ])]
    })
  }

  disableForm() {
    this.form.controls['title'].disable();
    this.form.controls['body'].disable();
  }

  enableForm() {
    this.form.controls['title'].enable();
    this.form.controls['body'].enable();
  }

  validateTitle(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return {'validateTitle': true};
    }
  }

  onsubmit() {
    this.processing = true;
    this.disableForm();
    const blog = {
      title: this.form.get('title').value,
      body: this.form.get('body').value,
      createdBy: this.username
    };
    this.blogService.newBlog(blog).subscribe(
      (data: any) => {
        if (!data.success) {
          this.messageClass = "alert alert-danger";
          this.message = data.message;
          this.processing = false;
          this.enableForm();
        } else {
          this.messageClass = "alert alert-success";
          this.message = data.message;
          this.processing = true;
          this.form.reset();
          this.newPost = false;
          this.enableForm();
          this.getAllBlogs();
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }

  //Create Comment form
  createComment(): void {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200)
      ])]
    });

  }

  getAllBlogs() {
    this.loadingBlogs = true;
    this.blogService.allBlog().subscribe(
      (data: any) => {
        this.blogs = data.blogs;
        setTimeout(() => {
          this.loadingBlogs = false;
        }, 1000);
      }
    );
  }

  reloadBlogs() {
    this.getAllBlogs();
  }

  likeBlog(id): void {
    this.blogService.likeBlog(id).subscribe(
      (data: any) => {
        if (!data.success) {
        } else {
          this.message = data.message;
          this.blogs[this.blogs.findIndex((i) => {
            return i._id === id
          })].likes = data.blog.likes;
          this.blogs[this.blogs.findIndex((i) => {
            return i._id === id
          })].dislikes = data.blog.dislikes;
          this.blogs[this.blogs.findIndex((i) => {
            return i._id === id
          })].likedBy = data.blog.likedBy;
          this.blogs[this.blogs.findIndex((i) => {
            return i._id === id
          })].dislikedBy = data.blog.dislikedBy;
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    )
  }

  dislikeBlog(id): void {
    this.blogService.dislikeBlog(id).subscribe(
      (data: any) => {
        if (!data.success) {
        } else {
          this.message = data.message;
          this.blogs[this.blogs.findIndex((i) => {
            return i._id === id
          })].likes = data.blog.likes;
          this.blogs[this.blogs.findIndex((i) => {
            return i._id === id
          })].dislikes = data.blog.dislikes;
          this.blogs[this.blogs.findIndex((i) => {
            return i._id === id
          })].likedBy = data.blog.likedBy;
          this.blogs[this.blogs.findIndex((i) => {
            return i._id === id
          })].dislikedBy = data.blog.dislikedBy;
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    )
  }

  postComment(id) {
    this.disableCommentForm();
    const blogData = {
      id: id,
      comment: this.commentForm.get('comment').value
    };

    this.blogService.postComment(blogData).subscribe(
      (data: any) => {
        this.newComment = [];
        this.commentForm.reset();
        this.enableCommentForm();
        this.blogs[this.blogs.findIndex((i) => {return i._id === blogData.id})].comments.push({
          comment: blogData.comment,
          commentator: this.username
        });
        this.expand(blogData.id);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    )
  }

  enableCommentForm() {
    this.commentForm.get('comment').enable();
  }

  disableCommentForm() {
    this.commentForm.get('comment').disable();
  }

  draftComment(id): void {
    this.commentForm.reset();
    this.newComment = [];
    this.newComment.push(id);
  }

  cancel() {
    this.newComment = [];
    this.commentForm.reset();
    this.enableCommentForm();
  }

  expand(id) {
    this.enableComment.push(id);
  }

  collapse(id) {
    this.enableComment.splice(this.enableComment.indexOf(id), 1);
  }


  ngOnInit() {
    this.authService.getProfile().subscribe(
      (data: any) => {
        this.username = data.user.username;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );

    this.getAllBlogs();
  }


}
