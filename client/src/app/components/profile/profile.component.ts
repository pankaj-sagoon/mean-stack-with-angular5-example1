import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(
      (data: any)=>{
        this.user = data.user;
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
