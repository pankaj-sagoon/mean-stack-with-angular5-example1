webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guard_auth_guard__ = __webpack_require__("../../../../../src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guard_noauth_guard__ = __webpack_require__("../../../../../src/app/guard/noauth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guard_noauth_guard__["a" /* NoauthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guard_noauth_guard__["a" /* NoauthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'publicProfile/:username', component: __WEBPACK_IMPORTED_MODULE_12__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_10__components_blog_blog_component__["a" /* BlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-blog/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_blog_edit_blog_component__["a" /* EditBlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_13__components_chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar>Loading...</navbar>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_intercept_intercept_module__ = __webpack_require__("../../../../../src/app/modules/intercept/intercept.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guard_auth_guard__ = __webpack_require__("../../../../../src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guard_noauth_guard__ = __webpack_require__("../../../../../src/app/guard/noauth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_blog_edit_blog_component__["a" /* EditBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__modules_intercept_intercept_module__["a" /* InterceptorModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_3__angular_core__["CUSTOM_ELEMENTS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_3__angular_core__["NO_ERRORS_SCHEMA"]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guard_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__guard_noauth_guard__["a" /* NoauthGuard */], __WEBPACK_IMPORTED_MODULE_21__services_socket_service__["a" /* SocketService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\r\n  margin: 0 0 16px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!newPost\" (click)=\"newBlogForm()\">New Post</button>\r\n<button type=\"button\" class=\"btn btn-info\" [disabled]=\"loadingBlogs\" (click)=\"reloadBlogs()\">Reload</button>\r\n\r\n<br>\r\n<br>\r\n\r\n<div *ngIf=\"message\" [ngClass]=\"messageClass\">\r\n  {{message}}\r\n</div>\r\n\r\n<form [formGroup]=\"form\" name=\"blogForm\" (submit)=\"onsubmit()\" *ngIf=\"newPost\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Blog title</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"*Blog title\" autocomplete=\"off\"\r\n           formControlName=\"title\"\r\n           [ngClass]=\"{'is-invalid': (form.controls.title.errors && form.controls.title.dirty), 'is-valid': (!form.controls.title.errors)}\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.title.errors?.required && form.controls.title.dirty\">\r\n      Title is required\r\n    </div>\r\n    <div class=\"invalid-feedback\"\r\n         *ngIf=\"form.controls.title.errors?.minlength || form.controls.title.errors?.maxlength && form.controls.title.dirty\">\r\n      Title must be at least 5 characters but no more than 100\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.title.errors?.validateTitle && form.controls.title.dirty\">\r\n      Title is invalid\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Blog body</label>\r\n    <textarea type=\"text\" rows=\"8\" cols=\"80\" class=\"form-control\" name=\"body\" placeholder=\"*Blog body\"\r\n              autocomplete=\"off\"\r\n              formControlName=\"body\"\r\n              [ngClass]=\"{'is-invalid': (form.controls.body.errors && form.controls.body.dirty), 'is-valid': (!form.controls.body.errors)}\"></textarea>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.body.errors?.required && form.controls.body.dirty\">\r\n      Body text is required\r\n    </div>\r\n    <div class=\"invalid-feedback\"\r\n         *ngIf=\"form.controls.body.errors?.minlength || form.controls.body.errors?.maxlength && form.controls.body.dirty\">\r\n      Body text must be at least 5 characters but no more than 500\r\n    </div>\r\n  </div>\r\n\r\n  <button [disabled]=\"processing\" type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">Go back</button>\r\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" class=\"btn btn-info\">Create Blog</button>\r\n</form>\r\n\r\n<div *ngIf=\"!newPost\">\r\n  <div class=\"card\" *ngFor=\"let blog of blogs;\" [@heroState]=\"state\" (click)=\"toggleState()\">\r\n    <div class=\"card-header\">\r\n      <h2>{{blog.title}}</h2>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text\">{{blog.body}}</p>\r\n\r\n      <div class=\"divider\"></div>\r\n      <p *ngIf=\"blog.createdBy\"><strong>Posted By:</strong> {{blog.createdBy}}</p>\r\n      <p *ngIf=\"blog.createdAt\"><strong>Date:</strong> {{blog.createdAt | date: 'dd-MMM-yyyy hh:mm a'}}</p>\r\n      <p *ngIf=\"blog.likes\"><strong>Likes:</strong> {{blog.likes}}</p>\r\n      <p *ngIf=\"blog.dislikes\"><strong>Dislikes:</strong> {{blog.dislikes}}</p>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <a [routerLink]=\"['/edit-blog/', blog._id]\" class=\"btn btn-info\" *ngIf=\"username===blog.createdBy\">Edit</a>\r\n      <a [routerLink]=\"['/delete-blog/', blog._id]\" class=\"btn btn-danger\" *ngIf=\"username===blog.createdBy\">Delete</a>\r\n\r\n      <span class=\"dropdown\" *ngIf=\"username !== blog.createdBy\">\r\n      <button [disabled]=\"blog.likedBy.indexOf(username) > -1\" class=\"btn btn-primary dropdown-toggle\" type=\"button\"\r\n              data-toggle=\"dropdown\" (click)=\"likeBlog(blog._id)\">\r\n        Likes {{blog.likes}}\r\n      </button>\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n        <a [routerLink]=\"['/publicProfile/', likedBy]\" class=\"dropdown-item\" *ngFor=\"let likedBy of blog.likedBy\">{{likedBy}}</a>\r\n      </div>\r\n    </span>\r\n\r\n\r\n      <span class=\"dropdown\" *ngIf=\"username !== blog.createdBy\">\r\n      <button [disabled]=\"blog.dislikedBy.indexOf(username) > -1\" class=\"btn btn-primary dropdown-toggle\" type=\"button\"\r\n              data-toggle=\"dropdown\"\r\n              (click)=\"dislikeBlog(blog._id)\">\r\n        Dislikes {{blog.dislikes}}\r\n      </button>\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n        <a [routerLink]=\"['/publicProfile/', dislikedBy]\" class=\"dropdown-item\"\r\n           *ngFor=\"let dislikedBy of blog.dislikedBy\">{{dislikedBy}}</a>\r\n      </div>\r\n    </span>\r\n\r\n    </div>\r\n\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"draftComment(blog._id)\"\r\n                [disabled]=\"newComment.indexOf(blog._id) > -1\">Comments\r\n        </button>\r\n        <div *ngIf=\"newComment.indexOf(blog._id) > -1\">\r\n          <form [formGroup]=\"commentForm\" novalidate name=\"commentForm\" (submit)=\"postComment(blog._id)\">\r\n            <br>\r\n            <div class=\"form-group\">\r\n          <textarea class=\"form-control\" name=\"comment\" id=\"comment\" cols=\"10\" rows=\"8\" autocomplete=\"off\"\r\n                    formControlName=\"comment\"\r\n                    [ngClass]=\"{'is-invalid': (commentForm.controls.comment.errors && commentForm.controls.comment.dirty), 'is-valid': (!commentForm.controls.comment.errors)}\"></textarea>\r\n\r\n              <div class=\"invalid-feedback\"\r\n                   *ngIf=\"commentForm.controls.comment.errors?.required && commentForm.controls.comment.dirty\">\r\n                Comment required\r\n              </div>\r\n              <div class=\"invalid-feedback\"\r\n                   *ngIf=\"commentForm.controls.comment.errors?.minlength || commentForm.controls.comment.errors?.maxlength && commentForm.controls.comment.dirty\">\r\n                Comment must be at least 1 characters but no more than 200\r\n              </div>\r\n\r\n            </div>\r\n            <br>\r\n            <button type=\"submit\" [disabled]=\"!commentForm.valid\" class=\"btn btn-info\" >Post comment</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\r\n          </form>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"list-group-item\" *ngIf=\"enableComment.indexOf(blog._id) === -1 && blog.comments.length > 0\" (click)=\"expand(blog._id)\">Show comment</li>\r\n\r\n      <li class=\"list-group-item\" *ngIf=\"enableComment.indexOf(blog._id) > -1 && blog.comments.length > 0\" (click)=\"collapse(blog._id)\">Hide comment</li>\r\n\r\n\r\n      <ng-container *ngIf=\"blog.comments.length > 0 && enableComment.indexOf(blog._id) > -1\">\r\n      <li class=\"list-group-item\" *ngFor=\"let comment of blog.comments;\">\r\n        <strong>{{comment.commentator}} : </strong> {{comment.comment}}\r\n      </li>\r\n      </ng-container>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogComponent = (function () {
    function BlogComponent(formBuilder, authService, blogService, location) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.blogService = blogService;
        this.location = location;
        this.newComment = [];
        this.enableComment = [];
        this.createForm();
        this.createComment();
    }
    BlogComponent.prototype.toggleState = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    };
    BlogComponent.prototype.newBlogForm = function () {
        this.newPost = true;
    };
    ;
    BlogComponent.prototype.goBack = function () {
        this.location.back();
    };
    //Create blog post
    BlogComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(100),
                    this.validateTitle
                ])],
            body: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(500)
                ])]
        });
    };
    BlogComponent.prototype.disableForm = function () {
        this.form.controls['title'].disable();
        this.form.controls['body'].disable();
    };
    BlogComponent.prototype.enableForm = function () {
        this.form.controls['title'].enable();
        this.form.controls['body'].enable();
    };
    BlogComponent.prototype.validateTitle = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateTitle': true };
        }
    };
    BlogComponent.prototype.onsubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: this.username
        };
        this.blogService.newBlog(blog).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = "alert alert-danger";
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = "alert alert-success";
                _this.message = data.message;
                _this.processing = true;
                _this.form.reset();
                _this.newPost = false;
                _this.enableForm();
                _this.getAllBlogs();
            }
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('An error occurred', err.error.message);
            }
            else {
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
            }
        });
    };
    //Create Comment form
    BlogComponent.prototype.createComment = function () {
        this.commentForm = this.formBuilder.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(200)
                ])]
        });
    };
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        this.loadingBlogs = true;
        this.blogService.allBlog().subscribe(function (data) {
            _this.blogs = data.blogs;
            setTimeout(function () {
                _this.loadingBlogs = false;
            }, 1000);
        });
    };
    BlogComponent.prototype.reloadBlogs = function () {
        this.getAllBlogs();
    };
    BlogComponent.prototype.likeBlog = function (id) {
        var _this = this;
        this.blogService.likeBlog(id).subscribe(function (data) {
            if (!data.success) {
            }
            else {
                _this.message = data.message;
                _this.blogs[_this.blogs.findIndex(function (i) {
                    return i._id === id;
                })].likes = data.blog.likes;
                _this.blogs[_this.blogs.findIndex(function (i) {
                    return i._id === id;
                })].dislikes = data.blog.dislikes;
                _this.blogs[_this.blogs.findIndex(function (i) {
                    return i._id === id;
                })].likedBy = data.blog.likedBy;
                _this.blogs[_this.blogs.findIndex(function (i) {
                    return i._id === id;
                })].dislikedBy = data.blog.dislikedBy;
            }
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('An error occurred', err.error.message);
            }
            else {
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
            }
        });
    };
    BlogComponent.prototype.dislikeBlog = function (id) {
        var _this = this;
        this.blogService.dislikeBlog(id).subscribe(function (data) {
            if (!data.success) {
            }
            else {
                _this.message = data.message;
                _this.blogs[_this.blogs.findIndex(function (i) {
                    return i._id === id;
                })].likes = data.blog.likes;
                _this.blogs[_this.blogs.findIndex(function (i) {
                    return i._id === id;
                })].dislikes = data.blog.dislikes;
                _this.blogs[_this.blogs.findIndex(function (i) {
                    return i._id === id;
                })].likedBy = data.blog.likedBy;
                _this.blogs[_this.blogs.findIndex(function (i) {
                    return i._id === id;
                })].dislikedBy = data.blog.dislikedBy;
            }
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('An error occurred', err.error.message);
            }
            else {
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
            }
        });
    };
    BlogComponent.prototype.postComment = function (id) {
        var _this = this;
        this.disableCommentForm();
        var blogData = {
            id: id,
            comment: this.commentForm.get('comment').value
        };
        this.blogService.postComment(blogData).subscribe(function (data) {
            _this.newComment = [];
            _this.commentForm.reset();
            _this.enableCommentForm();
            _this.blogs[_this.blogs.findIndex(function (i) { return i._id === blogData.id; })].comments.push({
                comment: blogData.comment,
                commentator: _this.username
            });
            _this.expand(blogData.id);
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('An error occurred', err.error.message);
            }
            else {
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
            }
        });
    };
    BlogComponent.prototype.enableCommentForm = function () {
        this.commentForm.get('comment').enable();
    };
    BlogComponent.prototype.disableCommentForm = function () {
        this.commentForm.get('comment').disable();
    };
    BlogComponent.prototype.draftComment = function (id) {
        this.commentForm.reset();
        this.newComment = [];
        this.newComment.push(id);
    };
    BlogComponent.prototype.cancel = function () {
        this.newComment = [];
        this.commentForm.reset();
        this.enableCommentForm();
    };
    BlogComponent.prototype.expand = function (id) {
        this.enableComment.push(id);
    };
    BlogComponent.prototype.collapse = function (id) {
        this.enableComment.splice(this.enableComment.indexOf(id), 1);
    };
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            _this.username = data.user.username;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('An error occurred', err.error.message);
            }
            else {
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
            }
        });
        this.getAllBlogs();
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__("../../../../../src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blog/blog.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('heroState', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
                        transform: 'scale(1)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
                        transform: 'scale(1.1)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('200ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('200ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Edit blog</h1>\r\n\r\n<div *ngIf=\"!blog\" [ngClass]=\"messageClass\">\r\n  {{message}}\r\n</div>\r\n\r\n<form name=\"editBlog\" (submit)=\"editBlog()\" novalidate *ngIf=\"blog\">\r\n  <div class=\"form-group\">\r\n    <label>Blog title</label>\r\n    <input [disabled]=\"processing\" type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"*Blog title\" autocomplete=\"off\"\r\n    [(ngModel)]=\"blog.title\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Blog body</label>\r\n    <textarea [disabled]=\"processing\" type=\"text\" rows=\"8\" cols=\"80\" class=\"form-control\" name=\"body\" placeholder=\"*Blog body\"\r\n    [(ngModel)]=\"blog.body\"></textarea>\r\n  </div>\r\n\r\n  <button [disabled]=\"processing\" type=\"button\" class=\"btn btn-info\" (click)=\"goBack()\">Go back</button>\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteBlog()\">Delete blog</button>\r\n  <button [disabled]=\"processing\" type=\"submit\" class=\"btn btn-primary\">Update blog</button>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditBlogComponent = (function () {
    function EditBlogComponent(location, blogService, activateRoute) {
        this.location = location;
        this.blogService = blogService;
        this.activateRoute = activateRoute;
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activateRoute.snapshot.params;
        console.log(this.currentUrl.id);
        this.blogService.singleBlog(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = 'No blog found';
            }
            else {
                _this.blog = data.blog;
            }
        }, function (err) {
        });
    };
    EditBlogComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditBlogComponent.prototype.editBlog = function () {
        var _this = this;
        this.blogService.updateBlog(this.blog).subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
            }
            else {
                _this.message = data.message;
                _this.goBack();
            }
        }, function (err) {
        });
    };
    EditBlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.blogService.deleteBlog(this.blog._id).subscribe(function (data) {
            if (!data.success) {
                _this.message = data.message;
            }
            else {
                _this.message = data.message;
                _this.goBack();
            }
        }, function (err) {
        });
    };
    EditBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-blog',
            template: __webpack_require__("../../../../../src/app/components/blog/edit-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blog/edit-blog.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], EditBlogComponent);
    return EditBlogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  chat works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_action__ = __webpack_require__("../../../../../src/app/model/action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_event__ = __webpack_require__("../../../../../src/app/model/event.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = (function () {
    function ChatComponent(socketService) {
        this.socketService = socketService;
        this.action = __WEBPACK_IMPORTED_MODULE_2__model_action__["a" /* Action */];
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.initIoConnection();
    };
    ChatComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.socketService.initSocket();
        this.ioConnection = this.socketService.onMessage()
            .subscribe(function (message) {
            _this.messages.push(message);
        });
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_3__model_event__["a" /* SocketEvent */].CONNECT)
            .subscribe(function () {
            console.log('connected');
        });
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_3__model_event__["a" /* SocketEvent */].DISCONNECT)
            .subscribe(function () {
            console.log('disconnected');
        });
    };
    ChatComponent.prototype.sendMessage = function (message) {
        if (!message) {
            return;
        }
        this.socketService.send({
            from: this.user,
            content: message
        });
        this.messageContent = null;
    };
    ChatComponent.prototype.sendNotification = function (params, action) {
        var message;
        if (action === __WEBPACK_IMPORTED_MODULE_2__model_action__["a" /* Action */].JOINED) {
            message = {
                from: this.user,
                action: action
            };
        }
        else if (action === __WEBPACK_IMPORTED_MODULE_2__model_action__["a" /* Action */].RENAME) {
            message = {
                action: action,
                content: {
                    username: this.user.name,
                    previousUsername: params.previousUsername
                }
            };
        }
        this.socketService.send(message);
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1 class=\"display-3\">Mean App Angular 5</h1>\r\n  <p class=\"lead\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo,\r\n    tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\r\n\r\n  <a routerLink=\"/blog\" class=\"btn btn-primary btn-block btn-lg\">\r\n    Go to Blog =>\r\n  </a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1 class=\"display-3\">Mean App Angular 5</h1>\r\n  <p class=\"lead\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo,\r\n    tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\r\n  <p>\r\n  <span class=\"nav-item\" [routerLinkActive]=\"['active']\" routerLinkActiveOptions=\"{exact: true}\"\r\n        *ngIf=\"!authService.loggedIn()\">\r\n    <a class=\"btn btn-info\" routerLink=\"/login\">Login</a>\r\n  </span>\r\n    <span class=\"nav-item\" [routerLinkActive]=\"['active']\" routerLinkActiveOptions=\"{exact: true}\"\r\n          *ngIf=\"!authService.loggedIn()\">\r\n    <a class=\"btn btn-primary\" routerLink=\"/register\">Register</a>\r\n  </span>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login forms</h1>\r\n\r\n\r\n<div class=\"row\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{message}}\r\n  </div>\r\n</div>\r\n\r\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"*username\" id=\"username\"\r\n           formControlName=\"username\"\r\n           [ngClass]=\"{'is-invalid': (form.controls.username.errors && form.controls.username.dirty), 'is-valid': (!form.controls.username.errors)}\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">\r\n      Username is required\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.username.errors?.minlength || form.controls.username.errors?.maxlength && form.controls.username.dirty\">\r\n      Username must be at least 5 characters but no more than 30\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">\r\n      Username is invalid\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"password\"\r\n           formControlName=\"password\"\r\n           [ngClass]=\"{'is-invalid': (form.controls.password.errors && form.controls.password.dirty), 'is-valid': (!form.controls.password.errors)}\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">\r\n      Password is required\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.password.errors?.minlength || form.controls.password.errors?.maxlength && form.controls.password.dirty\">\r\n      Password must be at least 6 characters but no more than 30\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">\r\n      Password is invalid\r\n    </div>\r\n  </div>\r\n  <button [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guard_auth_guard__ = __webpack_require__("../../../../../src/app/guard/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validateUsername
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validePassword
                ])]
        });
    };
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
    };
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
    };
    LoginComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    LoginComponent.prototype.validePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,30}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.login(user).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = "alert alert-danger";
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = "alert alert-success";
                _this.message = data.message;
                _this.authService.storeUserData(data.token, data.user);
                if (_this.previousUrl) {
                    _this.router.navigate([_this.previousUrl]);
                }
                else {
                    _this.router.navigate(['dashboard']);
                }
            }
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authGuard.redirectUrl) {
            this.previousUrl = this.authGuard.redirectUrl;
            this.authGuard.redirectUrl = undefined;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__guard_auth_guard__["a" /* AuthGuard */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-primary\">\r\n  <a class=\"navbar-brand\" href=\"#\">Angular 5 Mean App</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" routerLinkActiveOptions=\"{exact: true}\">\r\n        <a class=\"nav-link\" routerLink=\"/\" > Home</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"my-2 my-lg-0\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" routerLinkActiveOptions=\"{exact: true}\"\r\n            *ngIf=\"authService.loggedIn()\">\r\n          <a class=\"nav-link\" routerLink=\"/dashboard\" >Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" routerLinkActiveOptions=\"{exact: true}\"\r\n            *ngIf=\"authService.loggedIn()\">\r\n          <a class=\"nav-link\" routerLink=\"/blog\">Blog</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" routerLinkActiveOptions=\"{exact: true}\"\r\n            *ngIf=\"authService.loggedIn()\">\r\n          <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" routerLinkActiveOptions=\"{exact: true}\"\r\n            *ngIf=\"authService.loggedIn()\">\r\n          <a class=\"nav-link\" routerLink=\"/chat\">Chat</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" routerLinkActiveOptions=\"{exact: true}\"\r\n            *ngIf=\"!authService.loggedIn()\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" routerLinkActiveOptions=\"{exact: true}\"\r\n            *ngIf=\"authService.loggedIn()\">\r\n          <a class=\"nav-link\" href=\"\" (click)=\"logout(); $event.preventDefault();\">Logout</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" routerLinkActiveOptions=\"{exact: true}\"\r\n            *ngIf=\"!authService.loggedIn()\">\r\n          <a class=\"nav-link\" routerLink=\"/register\">Register</a>\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Profile page</h1>\r\n\r\n<ul class=\"list-group\" *ngIf=\"user\">\r\n  <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n  <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            _this.user = data.user;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('An error occurred', err.error.message);
            }
            else {
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
            }
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Profile page</h1>\r\n\r\n<ul class=\"list-group\" *ngIf=\"user\">\r\n  <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n  <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n</ul>\r\n<div class=\"alert alert-warning\" *ngIf=\"!user\">\r\n  User not Found\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicProfileComponent = (function () {
    function PublicProfileComponent(authService, activateRoute) {
        this.authService = authService;
        this.activateRoute = activateRoute;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activateRoute.snapshot.params;
        this.authService.publicProfile(this.currentUrl.username).subscribe(function (data) {
            _this.user = data.user;
        }, function (err) {
            if (err.error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpErrorResponse */]) {
                console.log(err.error);
            }
            else {
                console.log(err);
            }
        });
    };
    PublicProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PublicProfileComponent);
    return PublicProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Register forms</h1>\r\n\r\n\r\n<div class=\"row\">\r\n  <div [ngClass]=\"messageClass\">\r\n      {{message}}\r\n  </div>\r\n</div>\r\n\r\n<form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"*username\" id=\"username\"\r\n           formControlName=\"username\"\r\n           [ngClass]=\"{'is-invalid': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'is-valid': (!form.controls.username.errors && usernameValid)}\"\r\n    (blur)=\"checkUsername()\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">\r\n      Username is required\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.username.errors?.minlength || form.controls.username.errors?.maxlength && form.controls.username.dirty\">\r\n      Username must be at least 5 characters but no more than 30\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">\r\n      Username is invalid\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"usernameMessage\">\r\n      {{usernameMessage}}\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email\" id=\"email\"\r\n           formControlName=\"email\"\r\n           [ngClass]=\"{'is-invalid': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'is-valid': (!form.controls.email.errors && emailValid)}\"\r\n    (blur)=\"checkEmail()\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">\r\n      Email is required\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.email.errors?.minlength || form.controls.email.errors?.maxlength && form.controls.email.dirty\">\r\n      Email must be at least 5 characters but no more than 30\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">\r\n      Email is invalid\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"emailMessage\">\r\n      {{emailMessage}}\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"password\"\r\n           formControlName=\"password\"\r\n           [ngClass]=\"{'is-invalid': (form.controls.password.errors && form.controls.password.dirty), 'is-valid': (!form.controls.password.errors)}\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">\r\n      Password is required\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.password.errors?.minlength || form.controls.password.errors?.maxlength && form.controls.password.dirty\">\r\n      Password must be at least 6 characters but no more than 30\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">\r\n      Password is invalid\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm\">Confirm Password</label>\r\n    <input type=\"password\" name=\"confirm\" class=\"form-control\" placeholder=\"Confirm Password\" id=\"confirm\"\r\n           formControlName=\"confirm\"\r\n           [ngClass]=\"{'is-invalid': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'is-valid': (!form.controls.confirm.errors && !form.errors?.matchingPasswords)}\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">\r\n      Confirm password is required\r\n    </div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">\r\n      Password don't match\r\n    </div>\r\n  </div>\r\n  <button [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validateUsername
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validateEmail
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validePassword
                ])],
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        }, {
            validator: this.matchingPasswords('password', 'confirm')
        });
    };
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    RegisterComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    RegisterComponent.prototype.validateEmail = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateEmail': true };
        }
    };
    RegisterComponent.prototype.validePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,30}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            if (group.controls[password].value === group.controls[confirm].value) {
                return null;
            }
            else {
                return { 'matchingPasswords': true };
            }
        };
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.registerUser(user).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = "alert alert-danger";
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = "alert alert-success";
                _this.message = data.message;
                _this.router.navigate(['dashboard']);
            }
        }, function (err) {
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.log('An error occurred:', err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
            }
        });
    };
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        if (this.form.controls['username'].valid) {
            this.authService.checkUsername(this.form.controls['username'].value).subscribe(function (data) {
                if (!data.success) {
                    _this.usernameValid = false;
                    _this.usernameMessage = data.message;
                }
                else {
                    _this.usernameValid = true;
                    _this.usernameMessage = data.message;
                }
            }, function (err) {
                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.log('An error occurred:', err.error.message);
                }
                else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    console.log("Backend returned code " + err.status + ", body was: " + err.error);
                }
            });
        }
    };
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        if (this.form.controls['email'].valid) {
            this.authService.checkEmail(this.form.controls['email'].value).subscribe(function (data) {
                if (!data.success) {
                    _this.emailValid = false;
                    _this.emailMessage = data.message;
                }
                else {
                    _this.emailValid = true;
                    _this.emailMessage = data.message;
                }
            }, function (err) {
                if (err.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.log('An error occurred:', err.error.message);
                }
                else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    console.log("Backend returned code " + err.status + ", body was: " + err.error);
                }
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = {
    domain: 'http://localhost:8080/'
};


/***/ }),

/***/ "../../../../../src/app/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.redirectUrl = state.url;
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guard/noauth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoauthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoauthGuard = (function () {
    function NoauthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NoauthGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['dashboard']);
            return false;
        }
    };
    NoauthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NoauthGuard);
    return NoauthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/model/action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["JOINED"] = 0] = "JOINED";
    Action[Action["LEFT"] = 1] = "LEFT";
    Action[Action["RENAME"] = 2] = "RENAME";
})(Action || (Action = {}));


/***/ }),

/***/ "../../../../../src/app/model/event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketEvent; });
var SocketEvent;
(function (SocketEvent) {
    SocketEvent["CONNECT"] = "connect";
    SocketEvent["DISCONNECT"] = "disconnect";
})(SocketEvent || (SocketEvent = {}));


/***/ }),

/***/ "../../../../../src/app/modules/intercept/intercept.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpsRequestInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HttpsRequestInterceptor = (function () {
    function HttpsRequestInterceptor() {
    }
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        //return next.handle(req);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Authorization': 'CUSTOM AUTHORIZATION TOKEN',
            'WEB-API-key': 'CUSTOME WEB API KEY'
        });
        var authReq = req.clone({ headers: headers });
        return next.handle(authReq);
    };
    HttpsRequestInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());

;
var InterceptorModule = (function () {
    function InterceptorModule() {
    }
    InterceptorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: HttpsRequestInterceptor, multi: true }
            ]
        })
    ], InterceptorModule);
    return InterceptorModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var api_url = {
    'register': __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'authentication/register',
    'checkEmail': __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'authentication/checkEmail',
    'checkUsername': __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'authentication/checkUsername',
    'login': __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'authentication/login',
    'profile': __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'authentication/profile'
};
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken();
        this.options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        };
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(api_url.register, user);
    };
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(api_url.checkEmail + '/' + email);
    };
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(api_url.checkUsername + '/' + username);
    };
    AuthService.prototype.login = function (user) {
        return this.http.post(api_url.login, user);
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders();
        return this.http.get(api_url.profile, this.options);
    };
    AuthService.prototype.publicProfile = function (username) {
        this.createAuthenticationHeaders();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'authentication/publicProfile/' + username, this.options);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogService = (function () {
    function BlogService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    BlogService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken();
        this.options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken
            })
        };
    };
    BlogService.prototype.newBlog = function (blog) {
        this.createAuthenticationHeaders();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'blogs/newBlog', blog, this.options);
    };
    BlogService.prototype.allBlog = function () {
        this.createAuthenticationHeaders();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'blogs/allBlogs', this.options);
    };
    BlogService.prototype.singleBlog = function (id) {
        this.createAuthenticationHeaders();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'blogs/singleBlog/' + id, this.options);
    };
    BlogService.prototype.updateBlog = function (blog) {
        this.createAuthenticationHeaders();
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'blogs/updateBlog', blog, this.options);
    };
    BlogService.prototype.deleteBlog = function (id) {
        this.createAuthenticationHeaders();
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'blogs/deleteBlog/' + id, this.options);
    };
    BlogService.prototype.likeBlog = function (id) {
        this.createAuthenticationHeaders();
        var blogData = { id: id };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'blogs/likeBlog', blogData, this.options);
    };
    BlogService.prototype.dislikeBlog = function (id) {
        this.createAuthenticationHeaders();
        var blogData = { id: id };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'blogs/dislikeBlog', blogData, this.options);
    };
    BlogService.prototype.postComment = function (blogData) {
        this.createAuthenticationHeaders();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].domain + 'blogs/postComment', blogData, this.options);
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SERVER_URL = 'http://localhost:8080/chat';
var SocketService = (function () {
    function SocketService() {
    }
    SocketService.prototype.initSocket = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(SERVER_URL);
    };
    SocketService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    SocketService.prototype.onMessage = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.onEvent = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map