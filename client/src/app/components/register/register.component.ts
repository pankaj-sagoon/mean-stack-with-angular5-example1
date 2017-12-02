import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  messageClass;
  message;
  processing = false;
  usernameValid;
  usernameMessage;
  emailValid;
  emailMessage;


  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(30),
        this.validateUsername
      ])],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(30),
        this.validateEmail
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30),
        this.validePassword
      ])],
      confirm: ['', Validators.required]
    }, {
      validator: this.matchingPasswords('password', 'confirm')
    })
  }

  disableForm() {
    this.form.controls['email'].disable();
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
    this.form.controls['confirm'].disable();
  }

  enableForm() {
    this.form.controls['email'].enable();
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
    this.form.controls['confirm'].enable();
  }

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
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

  validateEmail(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return {'validateEmail': true}
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

  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {
      if (group.controls[password].value === group.controls[confirm].value) {
        return null;
      } else {
        return {'matchingPasswords': true}
      }
    }
  }

  onRegisterSubmit() {
    this.processing = true;
    this.disableForm();
    const user = {
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }
    this.authService.registerUser(user).subscribe(
      (data: any) => {
        if (!data.success) {
          this.messageClass = "alert alert-danger";
          this.message = data.message;
          this.processing = false;
          this.enableForm();
        } else {
          this.messageClass = "alert alert-success";
          this.message = data.message;
          this.router.navigate(['dashboard']);
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


  checkUsername() {
    if (this.form.controls['username'].valid) {
      this.authService.checkUsername(this.form.controls['username'].value).subscribe(
        (data: any) => {
          if (!data.success) {
            this.usernameValid = false;
            this.usernameMessage = data.message;
          } else {
            this.usernameValid = true;
            this.usernameMessage = data.message
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
  }

  checkEmail() {
    if (this.form.controls['email'].valid) {
      this.authService.checkEmail(this.form.controls['email'].value).subscribe(
        (data: any) => {
          if (!data.success) {
            this.emailValid = false;
            this.emailMessage = data.message;
          } else {
            this.emailValid = true;
            this.emailMessage = data.message
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
  }

  ngOnInit() {
  }

}
