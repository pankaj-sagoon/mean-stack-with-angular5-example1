import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  currentUrl;
  user;

  constructor(private authService: AuthService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentUrl = this.activateRoute.snapshot.params;
    this.authService.publicProfile(this.currentUrl.username).subscribe(
      (data: any)=>{
        this.user = data.user;
      },
      (err)=>{
        if(err.error instanceof HttpErrorResponse){
          console.log(err.error);
        }else{
          console.log(err);
        }
      }
      )
  }

}
