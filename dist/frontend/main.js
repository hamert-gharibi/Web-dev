(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/task-view/task-view.component */ "./src/app/pages/task-view/task-view.component.ts");
/* harmony import */ var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/new-list/new-list.component */ "./src/app/pages/new-list/new-list.component.ts");
/* harmony import */ var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/new-task/new-task.component */ "./src/app/pages/new-task/new-task.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/edit-list/edit-list.component */ "./src/app/pages/edit-list/edit-list.component.ts");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "./src/app/pages/edit-task/edit-task.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");











var routes = [
    { path: '', component: _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_10__["SideBarComponent"], children: [
            { path: 'new-list', component: _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_4__["NewListComponent"] },
            { path: 'edit-list/:listId', component: _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_8__["EditListComponent"] },
            { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"] },
            { path: 'signup', component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__["SignupPageComponent"] },
            { path: 'lists', component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__["TaskViewComponent"] },
            { path: 'lists/:listId', component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__["TaskViewComponent"] },
            { path: 'lists/:listId/new-task', component: _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__["NewTaskComponent"] },
            { path: 'lists/:listId/edit-task/:taskId', component: _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"] },
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 80px; }\n\n#sidebar {\n  position: fixed;\n  top: 50px;\n  left: 220px;\n  width: 220px;\n  margin-left: -220px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px; }\n\n.side-bar > li > a {\n  color: #eee;\n  width: 220px; }\n\n.side-bar li a:hover,\n.side-bar li a:focus {\n  background-color: #333; }\n\n.tmargin {\n  margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYW1lZC9Eb2N1bWVudHMvdGFzay1tYW5nZXItZi9mcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDs7RUFFRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICB9XG4gIFxuICAjc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAyMjBweDtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgfVxuICBcbiAgLnNpZGUtYmFyID4gbGkgPiBhIHtcbiAgICBjb2xvcjogI2VlZTtcbiAgICB3aWR0aDogMjIwcHg7XG4gIH1cbiAgXG4gIC5zaWRlLWJhciBsaSBhOmhvdmVyLFxuICAuc2lkZS1iYXIgbGkgYTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgfVxuICBcbiAgLnRtYXJnaW4ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/task-view/task-view.component */ "./src/app/pages/task-view/task-view.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/new-list/new-list.component */ "./src/app/pages/new-list/new-list.component.ts");
/* harmony import */ var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/new-task/new-task.component */ "./src/app/pages/new-task/new-task.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _web_req_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web-req.interceptor */ "./src/app/web-req.interceptor.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/edit-list/edit-list.component */ "./src/app/pages/edit-list/edit-list.component.ts");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "./src/app/pages/edit-task/edit-task.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__["TaskViewComponent"],
                _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_7__["NewListComponent"],
                _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__["NewTaskComponent"],
                _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"],
                _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_11__["SignupPageComponent"],
                _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_12__["EditListComponent"],
                _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_13__["EditTaskComponent"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__["SideBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _web_req_interceptor__WEBPACK_IMPORTED_MODULE_10__["WebReqInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-request.service */ "./src/app/web-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(webService, router, http) {
        this.webService = webService;
        this.router = router;
        this.http = http;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.webService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            // the auth tokens will be in the header of this response
            _this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log("LOGGED IN!");
        }));
    };
    AuthService.prototype.signup = function (name, email, password) {
        var _this = this;
        return this.webService.signup(name, email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            // the auth tokens will be in the header of this response
            _this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log("Successfully signed up and now logged in!");
        }));
    };
    AuthService.prototype.logout = function () {
        this.removeSession();
        this.router.navigate(['/login']);
    };
    AuthService.prototype.getAccessToken = function () {
        return localStorage.getItem('x-access-token');
    };
    AuthService.prototype.getRefreshToken = function () {
        return localStorage.getItem('x-refresh-token');
    };
    AuthService.prototype.getUserId = function () {
        return localStorage.getItem('user-id');
    };
    AuthService.prototype.getUsername = function () {
        return localStorage.getItem('user_name');
    };
    AuthService.prototype.setAccessToken = function (accessToken) {
        localStorage.setItem('x-access-token', accessToken);
    };
    AuthService.prototype.setSession = function (userId, accessToken, refreshToken) {
        localStorage.setItem('user-id', userId);
        localStorage.setItem('x-access-token', accessToken);
        localStorage.setItem('x-refresh-token', refreshToken);
    };
    AuthService.prototype.removeSession = function () {
        localStorage.removeItem('user-id');
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
    };
    AuthService.prototype.getNewAccessToken = function () {
        var _this = this;
        return this.http.get(this.webService.ROOT_URL + "/users/me/access-token", {
            headers: {
                'x-refresh-token': this.getRefreshToken(),
                '_id': this.getUserId()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.setAccessToken(res.headers.get('x-access-token'));
        }));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_request_service__WEBPACK_IMPORTED_MODULE_3__["WebRequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/pages/edit-list/edit-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-list/edit-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n  <div class=\"modal-box\">\n    <h1 class=\"title\">\n      Edit list\n    </h1>\n\n    <input #listTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter list name...\">\n    <br><br>\n    <div class=\"buttons is-right\">\n      <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n      <button class=\"button is-primary has-text-white is-medium\" (click)=\"updateList(listTitleInput.value)\">Save</button>\n    </div>\n\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/edit-list/edit-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-list/edit-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtbGlzdC9lZGl0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/edit-list/edit-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-list/edit-list.component.ts ***!
  \********************************************************/
/*! exports provided: EditListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListComponent", function() { return EditListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");




var EditListComponent = /** @class */ (function () {
    function EditListComponent(route, taskService, router) {
        this.route = route;
        this.taskService = taskService;
        this.router = router;
    }
    EditListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.listId = params.listId;
            console.log(params.listId);
        });
    };
    EditListComponent.prototype.updateList = function (title) {
        var _this = this;
        this.taskService.updateList(this.listId, title).subscribe(function () {
            _this.router.navigate(['/lists', _this.listId]);
        });
    };
    EditListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-list',
            template: __webpack_require__(/*! ./edit-list.component.html */ "./src/app/pages/edit-list/edit-list.component.html"),
            styles: [__webpack_require__(/*! ./edit-list.component.scss */ "./src/app/pages/edit-list/edit-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditListComponent);
    return EditListComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n  <div class=\"modal-box\">\n    <h1 class=\"title\">\n      Edit task\n    </h1>\n\n    <input #taskTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter task name...\">\n    <input #taskDescriptionInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter task description...\">\n    <br><br>\n    <div class=\"buttons is-right\">\n      <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n      <button class=\"button is-primary has-text-white is-medium\" (click)=\"updateTask(taskTitleInput.value,taskDescriptionInput.value)\">Save</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtdGFzay9lZGl0LXRhc2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/edit-task/edit-task.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.ts ***!
  \********************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");




var EditTaskComponent = /** @class */ (function () {
    function EditTaskComponent(route, taskService, router) {
        this.route = route;
        this.taskService = taskService;
        this.router = router;
    }
    EditTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.taskId = params.taskId;
            _this.listId = params.listId;
        });
    };
    EditTaskComponent.prototype.updateTask = function (title, description) {
        var _this = this;
        this.taskService.updateTask(this.taskId, title, description).subscribe(function () {
            _this.router.navigate(['/lists', _this.listId]);
        });
    };
    EditTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-task',
            template: __webpack_require__(/*! ./edit-task.component.html */ "./src/app/pages/edit-task/edit-task.component.html"),
            styles: [__webpack_require__(/*! ./edit-task.component.scss */ "./src/app/pages/edit-task/edit-task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditTaskComponent);
    return EditTaskComponent;
}());



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n  <div class=\"white-box\">\n\n    <h1 class=\"title has-text-primary\">Login</h1>\n    \n    <div class=\"field\">\n      <p class=\"control has-icons-left has-icons-right\">\n        <input #emailInput class=\"input has-background-light\" type=\"email\" placeholder=\"Email\">\n        <span class=\"icon is-small is-left\">\n          <i class=\"fas fa-envelope\"></i>\n        </span>\n      </p>\n    </div>\n    <div class=\"field\">\n      <p class=\"control has-icons-left\">\n        <input #pwInput class=\"input has-background-light\" type=\"password\" placeholder=\"Password\">\n        <span class=\"icon is-small is-left\">\n          <i class=\"fas fa-lock\"></i>\n        </span>\n      </p>\n    </div>\n    <div class=\"field\" style=\"display: flex; justify-content: flex-end;\">\n      <p class=\"control\">\n        <button class=\"button is-success has-text-white\" (click)=\"onLoginButtonClicked(emailInput.value, pwInput.value)\">\n          Login\n        </button>\n      </p>\n    </div>\n\n    <br>\n\n    <p class=\"has-text-grey\">Not got an account? <a routerLink=\"/signup\">Sign up</a> now!</p>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.onLoginButtonClicked = function (email, password) {
        var _this = this;
        this.authService.login(email, password).subscribe(function (res) {
            if (res.status === 200) {
                // we have logged in successfully
                _this.router.navigate(['/lists']);
            }
            console.log(res);
        });
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/login-page/login-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-list/new-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/new-list/new-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n  <div class=\"modal-box\">\n    <h1 class=\"title\">\n      Create a new list\n    </h1>\n\n    <input #listTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter list name...\">\n    <br><br>\n    <div class=\"buttons is-right\">\n      <button class=\"button is-medium\" routerLink=\"/lists\">Cancel</button>\n      <button class=\"button is-primary has-text-white is-medium\" (click)=\"createList(listTitleInput.value)\">Create</button>\n    </div>\n\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/new-list/new-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/new-list/new-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1saXN0L25ldy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/new-list/new-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/new-list/new-list.component.ts ***!
  \******************************************************/
/*! exports provided: NewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListComponent", function() { return NewListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewListComponent = /** @class */ (function () {
    function NewListComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    NewListComponent.prototype.ngOnInit = function () {
    };
    NewListComponent.prototype.createList = function (title) {
        var _this = this;
        this.taskService.createList(title).subscribe(function (list) {
            console.log(list);
            // Now we navigate to /lists/task._id
            _this.router.navigate(['/lists']);
        });
    };
    NewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-list',
            template: __webpack_require__(/*! ./new-list.component.html */ "./src/app/pages/new-list/new-list.component.html"),
            styles: [__webpack_require__(/*! ./new-list.component.scss */ "./src/app/pages/new-list/new-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewListComponent);
    return NewListComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-task/new-task.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/new-task/new-task.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n  <div class=\"modal-box\">\n    <h1 class=\"title\">\n      Create a new task\n    </h1>\n\n    <input #taskTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter task name...\">\n    <input #taskDescriptionInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter task description...\">\n    \n    <br><br>\n    <div class=\"buttons is-right\">\n      <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n      <button class=\"button is-primary has-text-white is-medium\" (click)=\"createTask(taskTitleInput.value,taskDescriptionInput.value)\">Create</button>\n    </div>\n\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/new-task/new-task.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/new-task/new-task.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/new-task/new-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/new-task/new-task.component.ts ***!
  \******************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent(taskService, route, router) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
    }
    NewTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.listId = params['listId'];
        });
    };
    NewTaskComponent.prototype.createTask = function (title, description) {
        var _this = this;
        this.taskService.createTask(this.listId, title, description).subscribe(function (newTask) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        });
    };
    NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-task',
            template: __webpack_require__(/*! ./new-task.component.html */ "./src/app/pages/new-task/new-task.component.html"),
            styles: [__webpack_require__(/*! ./new-task.component.scss */ "./src/app/pages/new-task/new-task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n  <div class=\"white-box\">\n\n    <h1 class=\"title has-text-primary\">Sign up</h1>\n    \n    <div class=\"field\">\n      <p class=\"control has-icons-left has-icons-right\">\n        <input #nameInput class=\"input has-background-light\" type=\"name\" placeholder=\"Name\">\n        <span class=\"icon is-small is-left\">\n          <i class=\"fas fa-envelope\"></i>\n        </span>\n      </p>\n    </div>\n    <div class=\"field\">\n      <p class=\"control has-icons-left has-icons-right\">\n        <input #emailInput class=\"input has-background-light\" type=\"email\" placeholder=\"Email\">\n        <span class=\"icon is-small is-left\">\n          <i class=\"fas fa-envelope\"></i>\n        </span>\n      </p>\n    </div>\n    <div class=\"field\">\n      <p class=\"control has-icons-left\">\n        <input #pwInput class=\"input has-background-light\" type=\"password\" placeholder=\"Password\">\n        <span class=\"icon is-small is-left\">\n          <i class=\"fas fa-lock\"></i>\n        </span>\n      </p>\n    </div>\n    <div class=\"field\" style=\"display: flex; justify-content: flex-end;\">\n      <p class=\"control\">\n        <button class=\"button is-success has-text-white\" (click)=\"onSignupButtonClicked(nameInput.value,emailInput.value, pwInput.value)\">\n          Sign up\n        </button>\n      </p>\n    </div>\n    <br>\n\n    <p class=\"has-text-grey\">Already got an account? <a routerLink=\"/login\">Login</a> now!</p>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
  \************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignupPageComponent = /** @class */ (function () {
    function SignupPageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupPageComponent.prototype.ngOnInit = function () {
    };
    SignupPageComponent.prototype.onSignupButtonClicked = function (name, email, password) {
        var _this = this;
        this.authService.signup(name, email, password).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/lists']);
        });
    };
    SignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-page',
            template: __webpack_require__(/*! ./signup-page.component.html */ "./src/app/pages/signup-page/signup-page.component.html"),
            styles: [__webpack_require__(/*! ./signup-page.component.scss */ "./src/app/pages/signup-page/signup-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupPageComponent);
    return SignupPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/task-view/task-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/task-view/task-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-content\">\n  <div class=\"task-manager-container\">\n\n    <div class=\"sidebar has-background-white\">\n      <h1 class=\"title has-text-primary\">\n        Lists\n      </h1>\n\n      <div class=\"list-menu\"> \n        <a class=\"list-menu-item\" *ngFor=\"let list of lists\" [routerLink]=\"['/lists/',list.id]\" routerLinkActive=\"is-active\">\n          <p>{{ list.title }}</p>\n        </a>\n\n      </div>\n\n      <button class=\"button is-primary has-text-white\" routerLink=\"/new-list\">+ New List</button>\n\n    </div>\n\n    <div class=\"task-list-container has-background-light\">\n      <div *ngIf=\"tasks\">\n        <div class=\"top-bar\">\n          <h1 class=\"title has-text-primary\">\n            Tasks\n          </h1>\n          <div class=\"dropdown is-hoverable is-right\">\n            <div class=\"dropdown-trigger\">\n              <button class=\"button\" aria-haspopup=\"true\" aria-controls=\"dropdown-menu4\">\n                <span class=\"icon is-small\">\n                  <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n                  <img src=\"../../../assets/ic6.png\" class=\"has-text-white\">\n                </span>\n              </button>\n            </div>\n            <div class=\"dropdown-menu\" id=\"dropdown-menu4\" role=\"menu\">\n              <div class=\"dropdown-content\">\n                <a [routerLink]=\"['/edit-list', selectedListId]\" class=\"dropdown-item\">\n                  Edit\n                </a>\n                <a (click)=\"onDeleteListClick()\" class=\"dropdown-item has-text-danger\">\n                  Delete\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Task Elements -->\n        <div class=\"task\" *ngFor=\"let task of tasks\" (click)=\"onTaskClick(task)\" [ngClass]=\"{ 'completed': task.completed }\">\n          <div class=\"task-text\">\n            Title:<p>{{ task.title }}</p>\n            <br>\n            Description:<p>{{ task.description }}</p>\n            <br>\n            Deadline:<p>{{ task.deadline }}</p>\n            <br>\n            User:<p>{{ task._userId }}</p>\n            <br>\n            Date of made:<p>{{ task.date }}</p>\n\n          </div>\n          <div class=\"task-buttons\">\n\n            <button class=\"button\" [routerLink]=\"['/lists', selectedListId, 'edit-task', task.id]\">\n              <div class=\"icon\">\n                <i class=\"fas fa-edit\"></i>\n                <img src=\"../../../assets/ic6.png\" class=\"has-text-white\">\n              </div>\n            </button>\n\n            <button class=\"button is-danger\" (click)=\"onDeleteTaskClick(task.id)\" style=\"margin-left: 10px;\">\n              <div class=\"icon\">\n                <i class=\"fas fa-trash\"></i>\n                <img src=\"../../../assets/ic7.png\" class=\"has-text-white\">\n              </div>\n            </button>\n\n          </div>\n        </div>\n\n        <h3 class=\"empty-state-text\" *ngIf=\"tasks.length === 0\">There are no tasks here! Click the add button to create\n          a new task.</h3>\n\n        <button routerLink=\"./new-task\" class=\"circle-add-button button is-primary\">\n          <img src=\"../../../assets/ic5.png\" class=\"has-text-white\">\n        </button>\n      </div>\n\n      <div *ngIf=\"!tasks\">\n        <h3 class=\"empty-state-text\">Please select a list from the sidebar</h3>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/task-view/task-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/task-view/task-view.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nbody {\n  min-height: 100vh;\n  height: auto;\n  padding-bottom: 50px !important;\n  background: linear-gradient(to right top, #F2F2F2, #2C4969); }\n.centered-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n.modal-box {\n  min-height: 200px;\n  width: 100%;\n  max-width: 580px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px; }\n.title {\n  font-family: 'Lato';\n  font-size: 24px;\n  text-transform: uppercase;\n  letter-spacing: 2px; }\n.white-box {\n  padding: 35px;\n  background: white;\n  border-radius: 5px;\n  width: 350px;\n  max-width: 350px; }\n.task-manager-container {\n  display: flex;\n  width: 100%;\n  height: auto;\n  max-width: 1000px; }\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  background: white;\n  padding: 42px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px; }\n.task-list-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 42px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px; }\n.task-list-container .top-bar {\n    margin-bottom: 20px;\n    display: flex; }\n.task-list-container .top-bar .title {\n      flex-grow: 1;\n      margin: 0; }\n.list-menu {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n  flex-grow: 1; }\n.list-menu .list-menu-item {\n    display: flex;\n    align-items: center;\n    padding: 10px 15px;\n    border-radius: 5px;\n    width: 100%;\n    color: #5f5f5f;\n    margin-bottom: 5px; }\n.list-menu .list-menu-item:hover {\n      background: #f8f8f8; }\n.list-menu .list-menu-item.is-active {\n      background-color: #7698A6;\n      color: #000000; }\n.task {\n  display: flex;\n  background: white;\n  padding: 15px 20px;\n  border-radius: 5px;\n  margin-top: 10px;\n  align-items: center; }\n.task:not(.complete) {\n    cursor: pointer;\n    transition: box-shadow 0.2s ease, transform 0.2s ease; }\n.task:not(.complete):active {\n      transform: scale(0.95); }\n.task:not(.complete):hover {\n      box-shadow: 0 0 0 5px #eeeeee; }\n.task:not(.complete):hover .task-buttons {\n        opacity: 1;\n        transform: scale(1); }\n.task.completed .task-text {\n    text-decoration: line-through;\n    opacity: 0.8; }\n.task .task-text {\n    display: flex;\n    font-size: 14px;\n    flex-grow: 1;\n    flex-direction: column !important; }\n.task .task-buttons {\n    transition: opacity 0.2s, transform 0.2s;\n    opacity: 0;\n    transform: scale(0.85); }\n.circle-add-button {\n  position: absolute;\n  bottom: 35px;\n  right: 35px;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%; }\n.empty-state-text {\n  font-size: 20px;\n  color: #777;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYW1lZC9Eb2N1bWVudHMvdGFzay1tYW5nZXItZi9mcm9udGVuZC9zcmMvbWFpbi1zdHlsZXMuc2NzcyIsIi9Vc2Vycy9oYW1lZC9Eb2N1bWVudHMvdGFzay1tYW5nZXItZi9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3Rhc2stdmlldy90YXNrLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0Esa0ZBQVk7QUEwQlo7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQiwyREFBNkQsRUFBQTtBQUlqRTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFHaEI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTtBQUdqQjtFQUNJLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FDakVwQjtFQUNJLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0FBSXJCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUV0QixZQUFZO0VBQ1osaUJBQWlCO0VBRWpCLGFBQWE7RUFFYiwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7QUFHbEM7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUViLDRCQUE0QjtFQUM1QiwrQkFBK0IsRUFBQTtBQVJuQztJQVlRLG1CQUFtQjtJQUNuQixhQUFhLEVBQUE7QUFickI7TUFnQlksWUFBWTtNQUNaLFNBQVMsRUFBQTtBQU1yQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtBQUpoQjtJQU9RLGFBQWE7SUFFYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUVsQixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQixFQUFBO0FBZjFCO01Ba0JZLG1CRHRERyxFQUFBO0FDb0NmO01Bc0JZLHlCQUF5QjtNQUN6QixjRDdEUSxFQUFBO0FDa0VwQjtFQUNJLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFFaEIsbUJBQW1CLEVBQUE7QUFQdkI7SUFVUSxlQUFlO0lBQ2YscURBQXFELEVBQUE7QUFYN0Q7TUFjWSxzQkFBc0IsRUFBQTtBQWRsQztNQWtCWSw2QkFBNkIsRUFBQTtBQWxCekM7UUFxQmdCLFVBQVU7UUFDVixtQkFBbUIsRUFBQTtBQXRCbkM7SUE0QlEsNkJBQTZCO0lBQzdCLFlBQVksRUFBQTtBQTdCcEI7SUFtQ1EsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osaUNBQWlDLEVBQUE7QUF0Q3pDO0lBMENRLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1Ysc0JBQXNCLEVBQUE7QUFJOUI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBO0FBSXRCO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stdmlldy90YXNrLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHdoZXJlIHdlIHB1dCBnbG9iYWwgc3R5bGVzIGFuZCBjaGFuZ2UgdmFyaWFibGUgdmFsdWVzXG5cbi8vIEltcG9ydCBGb250cyAoTGF0byBhbmQgTnVuaXRvKVxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDB8TnVuaXRvOjQwMCw3MDAnKTtcblxuJHR1cnF1b2lzZTogI0YyRjJGMjtcbiRncmVlbjogIzJDNDk2OTtcbiRsaWdodC1ncmVlbjogIzA1MUM2QjtcbiRkYXJrLWdyZWVuOiAjMDAwMDAwO1xuXG4kbGlnaHQ6ICNmOGY4Zjg7XG5cblxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuJHByaW1hcnk6ICRncmVlbjtcblxuJGxpbms6ICR0dXJxdW9pc2U7XG5cblxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXG5cbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4kaW5wdXQtc2hhZG93OiBub25lO1xuXG5cbi8vIFNldCBjdXN0b20gZ2xvYmFsIHN0eWxlcyAod2lsbCBiZSBhcHBsaWVkIHRvIHdob2xlIGFwcClcblxuYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgJHR1cnF1b2lzZSwgJGdyZWVuKTtcblxufVxuXG4uY2VudGVyZWQtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1vZGFsLWJveCB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1ODBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMzVweDtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi53aGl0ZS1ib3gge1xuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIG1heC13aWR0aDogMzUwcHg7XG5cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9tYWluLXN0eWxlcy5zY3NzJztcblxuLnRhc2stbWFuYWdlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIFxufVxuXG4uc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgcGFkZGluZzogNDJweDtcblxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG59XG5cbi50YXNrLWxpc3QtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiA0MnB4O1xuXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuXG5cbiAgICAudG9wLWJhciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4ubGlzdC1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAubGlzdC1tZW51LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pcy1hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc2OThBNjtcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyay1ncmVlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICY6bm90KC5jb21wbGV0ZSkge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjZWVlZWVlO1xuXG4gICAgICAgICAgICAudGFzay1idXR0b25zIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNvbXBsZXRlZCAudGFzay10ZXh0IHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcblxuICAgIH1cblxuXG4gICAgLnRhc2stdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnRhc2stYnV0dG9ucyB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdHJhbnNmb3JtIDAuMnM7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gICAgfVxufVxuXG4uY2lyY2xlLWFkZC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDM1cHg7XG4gICAgcmlnaHQ6IDM1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxufVxuXG4uZW1wdHktc3RhdGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/task-view/task-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/task-view/task-view.component.ts ***!
  \********************************************************/
/*! exports provided: TaskViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function() { return TaskViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TaskViewComponent = /** @class */ (function () {
    function TaskViewComponent(taskService, route, router) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
    }
    TaskViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.listId) {
                _this.selectedListId = params.listId;
                _this.taskService.getTasks(params.listId).subscribe(function (tasks) {
                    _this.tasks = tasks;
                });
            }
            else {
                _this.tasks = undefined;
            }
        });
        this.taskService.getLists().subscribe(function (lists) {
            //debugger
            _this.lists = lists;
        });
    };
    /*onTaskClick(task: Task) {
      // we want to set the task to completed
      this.taskService.complete(task).subscribe(() => {
        // the task has been set to completed successfully
        console.log("Completed successully!");
        task.completed = !task.completed;
      })
    }*/
    TaskViewComponent.prototype.onDeleteListClick = function () {
        var _this = this;
        this.taskService.deleteList(this.selectedListId).subscribe(function (res) {
            _this.router.navigate(['/lists']);
            console.log(res);
        });
    };
    TaskViewComponent.prototype.onDeleteTaskClick = function (id) {
        var _this = this;
        this.taskService.deleteTask(id).subscribe(function (res) {
            _this.tasks = _this.tasks.filter(function (val) { return val._id !== id; });
            _this.router.navigate(['/lists']);
            console.log(res);
        });
    };
    TaskViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-view',
            template: __webpack_require__(/*! ./task-view.component.html */ "./src/app/pages/task-view/task-view.component.html"),
            styles: [__webpack_require__(/*! ./task-view.component.scss */ "./src/app/pages/task-view/task-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TaskViewComponent);
    return TaskViewComponent;
}());



/***/ }),

/***/ "./src/app/side-bar/side-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"topnav\">\n      <div class=\"Nav\">\n          <a routerLink=\"/lists\" class=\"menue-item\" >\n            <a href=\"#List\">Lists and Tasks</a>\n          </a>\n          <a routerLink=\"/signup\" class=\"menue-item\" >\n            <a href=\"#Signup\">Signup</a>\n          </a>\n          <a routerLink=\"/login\" class=\"menue-item\" >\n            <a href=\"#Login\">Login</a>\n          </a>\n      </div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Nav {\n  background-color: #2C4969;\n  overflow: hidden;\n  display: flex;\n  justify-content: left;\n  flex-direction: row;\n  margin-bottom: 80px; }\n\n/* Style the links inside the navigation bar */\n\n.topnav a {\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px; }\n\n/* Change the color of links on hover */\n\n.topnav a:hover {\n  background-color: #ddd;\n  color: black; }\n\n/* Add a color to the active/current link */\n\n.topnav a.active {\n  background-color: #04AA6D;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYW1lZC9Eb2N1bWVudHMvdGFzay1tYW5nZXItZi9mcm9udGVuZC9zcmMvYXBwL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHdkIsOENBQUE7O0FBQ0E7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUduQix1Q0FBQTs7QUFDQTtFQUNJLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBR2hCLDJDQUFBOztBQUNBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk5hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJDNDk2OTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cbi50b3BuYXYgYSB7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4vKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIGxpbmtzIG9uIGhvdmVyICovXG4udG9wbmF2IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBBZGQgYSBjb2xvciB0byB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xuLnRvcG5hdiBhLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/side-bar/side-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-request.service */ "./src/app/web-request.service.ts");



var TaskService = /** @class */ (function () {
    function TaskService(webReqService) {
        this.webReqService = webReqService;
    }
    TaskService.prototype.getLists = function () {
        return this.webReqService.get('lists');
    };
    TaskService.prototype.createList = function (title) {
        // We want to send a web request to create a list
        return this.webReqService.post('lists', { title: title });
    };
    TaskService.prototype.updateList = function (id, title) {
        // We want to send a web request to update a list
        return this.webReqService.put("lists/" + id, { title: title });
    };
    TaskService.prototype.updateTask = function (taskId, title, description) {
        // We want to send a web request to update a list
        return this.webReqService.put("lists/tasks/" + taskId, { title: title });
    };
    TaskService.prototype.deleteTask = function (taskId) {
        return this.webReqService.delete("lists/tasks/" + taskId);
    };
    TaskService.prototype.deleteList = function (id) {
        return this.webReqService.delete("lists/" + id);
    };
    TaskService.prototype.getTasks = function (listId) {
        return this.webReqService.get("lists/tasks/_listId/" + listId);
    };
    TaskService.prototype.createTask = function (listId, title, description) {
        // We want to send a web request to create a task
        return this.webReqService.post("lists/tasks/" + listId + "/tasks", { title: title, description: description });
    };
    TaskService.prototype.complete = function (task) {
        return this.webReqService.put("lists/" + task + "/tasks/" + task._id, {
            completed: true
        });
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/web-req.interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/web-req.interceptor.ts ***!
  \****************************************/
/*! exports provided: WebReqInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebReqInterceptor", function() { return WebReqInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var WebReqInterceptor = /** @class */ (function () {
    function WebReqInterceptor(authService) {
        this.authService = authService;
        this.accessTokenRefreshed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    WebReqInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        // Handle the request
        request = this.addAuthHeader(request);
        // call next() and handle the response
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.log(error);
            if (error.status === 401) {
                // 401 error so we are unauthorized
                // refresh the access token
                return _this.refreshAccessToken()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
                    request = _this.addAuthHeader(request);
                    return next.handle(request);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                    console.log(err);
                    _this.authService.logout();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    WebReqInterceptor.prototype.refreshAccessToken = function () {
        var _this = this;
        if (this.refreshingAccessToken) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                _this.accessTokenRefreshed.subscribe(function () {
                    // this code will run when the access token has been refreshed
                    observer.next();
                    observer.complete();
                });
            });
        }
        else {
            this.refreshingAccessToken = true;
            // we want to call a method in the auth service to send a request to refresh the access token
            return this.authService.getNewAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                console.log("Access Token Refreshed!");
                _this.refreshingAccessToken = false;
                _this.accessTokenRefreshed.next();
            }));
        }
    };
    WebReqInterceptor.prototype.addAuthHeader = function (request) {
        // get the access token
        var token = this.authService.getAccessToken();
        if (token) {
            // append the access token to the request header
            return request.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }
        return request;
    };
    WebReqInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], WebReqInterceptor);
    return WebReqInterceptor;
}());



/***/ }),

/***/ "./src/app/web-request.service.ts":
/*!****************************************!*\
  !*** ./src/app/web-request.service.ts ***!
  \****************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WebRequestService = /** @class */ (function () {
    function WebRequestService(http) {
        this.http = http;
        this.ROOT_URL = 'https://hamed-deployed-nodejs.herokuapp.com/api';
    }
    WebRequestService.prototype.get = function (uri) {
        return this.http.get(this.ROOT_URL + "/" + uri);
    };
    WebRequestService.prototype.post = function (uri, payload) {
        return this.http.post(this.ROOT_URL + "/" + uri, payload);
    };
    WebRequestService.prototype.put = function (uri, payload) {
        return this.http.put(this.ROOT_URL + "/" + uri, payload);
    };
    WebRequestService.prototype.delete = function (uri) {
        return this.http.delete(this.ROOT_URL + "/" + uri);
    };
    WebRequestService.prototype.login = function (email, password) {
        return this.http.post(this.ROOT_URL + "/user/login", {
            email: email,
            password: password
        }, {
            observe: 'response'
        });
    };
    WebRequestService.prototype.signup = function (name, email, password) {
        return this.http.post(this.ROOT_URL + "/user/register", {
            name: name,
            email: email,
            password: password
        }, {
            observe: 'response'
        });
    };
    WebRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebRequestService);
    return WebRequestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://my-api-url'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hamed/Documents/task-manger-f/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map