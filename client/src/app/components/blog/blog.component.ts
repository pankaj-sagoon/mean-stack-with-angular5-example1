import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

  form: FormGroup;
  username;
  newPost;
  processing;
  message;
  messageClass;



  newBlogForm() {
    this.newPost = true;
  };
  goBack(){
    window.location.reload();
  }

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private blogService: BlogService) {
    this.createForm();
  }


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
    console.log(blog);
    this.blogService.newBlog(blog).subscribe(
      (data: any) => {
        if(!data.success){
          this.messageClass = "alert alert-danger";
          this.message= data.message;
          this.processing = false;
          this.enableForm();
        }else{
          this.messageClass = "alert alert-success";
          this.message= data.message;
          this.processing = true;
          this.form.reset();
          this.newPost= false;
          this.enableForm();
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

  ngOnInit() {
    this.authService.getProfile().subscribe(
      (data: any)=>{
        this.username = data.user.username;
      },
      (err: HttpErrorResponse)=>{
        if (err.error instanceof Error){
          console.log('An error occurred', err.error.message);
        }else{
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }

}
