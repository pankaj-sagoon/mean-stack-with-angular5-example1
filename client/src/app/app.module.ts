import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RegisterComponent} from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from './services/auth.service';
import {InterceptorModule} from "./modules/intercept/intercept.module";
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from "./guard/auth.guard";
import {NoauthGuard} from "./guard/noauth.guard";
import { BlogComponent } from './components/blog/blog.component';
import {EditBlogComponent} from "./components/blog/edit-blog.component";
import { PublicProfileComponent } from './components/public-profile/public-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    EditBlogComponent,
    PublicProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InterceptorModule
  ],
  providers: [AuthService, AuthGuard, NoauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
