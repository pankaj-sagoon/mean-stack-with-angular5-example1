import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthGuard} from "../../guard/auth.guard";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  messageClass;
  message;
  processing = false;
  previousUrl;


  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(30),
        this.validateUsername
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30),
        this.validePassword
      ])]
    })
  }

  disableForm() {
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }

  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private authGuard: AuthGuard) {
    this.createForm();
  }


  validateUsername(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return {'validateUsername': true};
    }
  }

  validePassword(controls) {
    const regExp = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,30}$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return {'validatePassword': true}
    }
  }


  onLoginSubmit() {
    this.processing = true;
    this.disableForm();
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }
    this.authService.login(user).subscribe(
      (data: any) => {
        if (!data.success) {
          this.messageClass = "alert alert-danger";
          this.message = data.message;
          this.processing = false;
          this.enableForm();
        } else {
          this.messageClass = "alert alert-success";
          this.message = data.message;
          this.authService.storeUserData(data.token, data.user);

          if (this.previousUrl) {
            this.router.navigate([this.previousUrl])
          } else {
            this.router.navigate(['dashboard']);
          }
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    )
  }

  ngOnInit() {
    if (this.authGuard.redirectUrl) {
      this.previousUrl = this.authGuard.redirectUrl;
      this.authGuard.redirectUrl = undefined;
    }
  }

}
