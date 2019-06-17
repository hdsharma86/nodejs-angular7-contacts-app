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

/***/ "./src/app/admin/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/admin/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keyword) {
        keyword = keyword ? keyword.toLowerCase() : null;
        return keyword ? value.filter(function (user) { return (((user.firstname.toLowerCase().indexOf(keyword) !== -1) ||
            (user.lastname.toLowerCase().indexOf(keyword) !== -1) ||
            (user.user_role.toLowerCase().indexOf(keyword) !== -1))); }) : value;
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/admin/user.component.html":
/*!*******************************************!*\
  !*** ./src/app/admin/user.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation></navigation>\n<div class=\"container\">\n<div class=\"row\" style=\"margin-top:5%\">\n    <div class=\"col-md-12\">\n        <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Manage User(s)</li>\n            </ol>\n          </nav>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n    <div class=\"card\">\n        <div class=\"card-header\">Manage User(s)</div>\n        <div class=\"card-body\">\n            <div class=\"card extra-padding\">\n              <div class=\"row\">\n                <div class=\"col-md-8\">\n                  <label for=\"keyword\">Keyword:</label>\n                  <input [(ngModel)]=\"keyword\" style=\"width:200px; display:inline-block;\" placeholder=\"Name | Type\" type=\"text\" class=\"form-control\" id=\"keyword\" />\n                </div>\n                <div class=\"col-md-4\">\n                    <button (click)=\"openModal('add-new')\" type=\"button\" class=\"btn btn-outline-secondary float-right\" >\n                      <i class=\"fa fa-user-plus\"></i> Add New\n                    </button>\n                </div>\n              </div>\n            </div>\n            <br />\n            <table class=\"table table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>Username</th>\n                    <th>Phone</th>\n                    <th>User Type</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let user of users | search:keyword\">\n                    <td>{{user.firstname}} {{user.lastname}}</td>\n                    <td>{{user.email}}</td>\n                    <td>{{user.username}}</td>\n                    <td>{{user.phone}}</td>\n                    <td>{{user.user_role | uppercase}}</td>\n                    <td>\n                      <a class=\"user-icons\" (click)=\"updateUser(user._id)\"><i class=\"fa fa-edit\"></i></a>\n                      <a class=\"user-icons\" (click)=\"deleteUser(user._id)\"><i class=\"fa fa-trash\"></i></a>\n                    </td>\n                  </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    </div>\n</div>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal fade\" id=\"myModal\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{modalTitle}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n        <form class=\"form-horizontal\"\n          novalidate\n          (ngSubmit)=\"save(formMode)\"\n          [formGroup]=\"userForm\">  \n\n          <input id=\"userId\" type=\"hidden\" value=\"\" formControlName=\"userId\"/>\n\n          <!-- Firstname field code starts here -->\n          <div class=\"form-group\" [ngClass]=\"{'has-error': (userForm.get('firstName').touched ||\n                                                            userForm.get('firstName').dirty) &&\n                                                            !userForm.get('firstName').valid}\">\n            <label class=\"col-md-2 control-label\"\n                for=\"fname\">FirstName</label>\n            <div class=\"col-md-8\">\n                <input class=\"form-control\"\n                    id=\"fname\"\n                    type=\"text\"\n                    placeholder=\"First Name\"\n                    formControlName=\"firstName\"/>\n                <span class=\"help-block\" *ngIf=\"(userForm.get('firstName').touched ||\n                                                userForm.get('firstName').dirty) &&\n                                                userForm.get('firstName').errors\">\n\n                    <span *ngIf=\"userForm.get('firstName').errors.required\">\n                      Please enter first Name\n                    </span>\n                    <span *ngIf=\"userForm.get('firstName').errors.minlength\">\n                        Min Length is 3\n                    </span>\n                </span>\n            </div>\n          </div>\n          <!-- Firstname field code ends here -->\n\n          <!-- Lastname field code starts here -->\n          <div class=\"form-group\" [ngClass]=\"{'has-error': (userForm.get('lastName').touched ||\n                                                            userForm.get('lastName').dirty) &&\n                                                            !userForm.get('lastName').valid}\">\n            <label class=\"col-md-2 control-label\" for=\"lname\">Last Name</label>\n            <div class=\"col-md-8\">\n                <input class=\"form-control\"\n                    id=\"lname\"\n                    type=\"text\"\n                    placeholder=\"Last Name\"\n                    formControlName=\"lastName\"/>\n                <span class=\"help-block\" *ngIf=\"(userForm.get('lastName').touched ||\n                                                userForm.get('lastName').dirty) &&\n                                                userForm.get('lastName').errors\">\n\n                    <span *ngIf=\"userForm.get('lastName').errors.required\">\n                      Please enter first Name\n                    </span>\n                    <span *ngIf=\"userForm.get('lastName').errors.minlength\">\n                        Min Length should be at least 3\n                    </span>\n                </span>\n            </div>\n          </div>\n          <!-- Lastname field code starts here -->\n\n          <!-- Email field code starts here -->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"username\">Username</label>\n            <div class=\"col-md-8\">\n                <input class=\"form-control\"\n                    id=\"username\"\n                    type=\"text\"\n                    placeholder=\"Username\"\n                    formControlName=\"username\"/>\n            </div>\n          </div>\n          <!-- Email field code starts here -->\n\n          <!-- Email field code starts here -->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"password\">Password</label>\n            <div class=\"col-md-8\">\n                <input class=\"form-control\"\n                    id=\"password\"\n                    type=\"password\"\n                    placeholder=\"\"\n                    formControlName=\"password\"/>\n            </div>\n          </div>\n          <!-- Email field code starts here -->\n\n          <!-- Email field code starts here -->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"email\">Email Address</label>\n            <div class=\"col-md-8\">\n                <input class=\"form-control\"\n                    id=\"email\"\n                    type=\"text\"\n                    placeholder=\"Email Address\"\n                    formControlName=\"email\"/>\n            </div>\n          </div>\n          <!-- Email field code starts here -->\n\n          <!-- Phone field code starts here -->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"phone\">Phone</label>\n            <div class=\"col-md-8\">\n                <input class=\"form-control\"\n                    id=\"phone\"\n                    type=\"text\"\n                    placeholder=\"+91 98765 28433\"\n                    formControlName=\"phone\"/>\n            </div>\n          </div>\n          <!-- Phone field code starts here -->\n\n          <!-- Image url field code starts here -->\n          <div class=\"form-group\">\n            <label class=\"col-md-2 control-label\" for=\"user_role\">User Type</label>\n            <div class=\"col-md-8\">\n                <input class=\"form-control\"\n                    id=\"user_role\"\n                    type=\"text\"\n                    placeholder=\"User Type\"\n                    formControlName=\"user_role\"/>\n            </div>\n          </div>\n          <!-- Image url field code starts here -->\n            \n          <div class=\"form-group\">\n            <div class=\"col-md-4 col-md-offset-2\">\n              <span>\n                <button class=\"btn btn-secondary\"\n                      type=\"submit\"\n                      [disabled]=\"!userForm.valid\">\n                    Submit\n                </button>\n              </span>\n            </div>\n          </div>\n        </form>\n        </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"loading\" class=\"loader-container\"><div class=\"loader\"></div></div>"

/***/ }),

/***/ "./src/app/admin/user.component.ts":
/*!*****************************************!*\
  !*** ./src/app/admin/user.component.ts ***!
  \*****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _user_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.form */ "./src/app/admin/user.form.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var UserComponent = /** @class */ (function () {
    function UserComponent(_userService, fb, _router) {
        this._userService = _userService;
        this.fb = fb;
        this._router = _router;
        this.title = 'User(s) Manager';
        this.loading = true;
        this.user = new _user_form__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.isUserDetailEnabled = false;
        this.formMode = 'INSERT';
        this.isAdmin = false;
    }
    UserComponent.prototype.openModal = function (modelFor) {
        this.modalTitle = (modelFor == 'update') ? "Update User" : "Add New User";
        this.formMode = (modelFor == 'update') ? "UPDATE" : "INSERT";
        if (this.formMode == 'INSERT') {
            this.loadFormWithValues({});
        }
        $('#myModal').modal('show');
        return false;
    };
    UserComponent.prototype.closeModal = function () {
        $('#myModal').modal('hide');
        return false;
    };
    UserComponent.prototype.loadUserDeatil = function (userId) {
        var _this = this;
        console.log(userId);
        this.loading = true;
        this._userService.getUser(userId).subscribe(function (data) {
            _this.userDetail = data;
            _this.isUserDetailEnabled = true;
            _this.loading = false;
        });
    };
    UserComponent.prototype.updateUser = function (userId) {
        var _this = this;
        console.log(userId);
        this.loading = true;
        this._userService.getUser(userId).subscribe(function (data) {
            _this.loadFormWithValues(data);
            _this.openModal('update');
            _this.loading = false;
        });
        return false;
    };
    UserComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        if (confirm("Are you sure to delete user?")) {
            this._userService.deleteUser(userId).subscribe(function (data) {
                _this.getUsers();
                _this.isUserDetailEnabled = false;
            });
        }
        return false;
    };
    UserComponent.prototype.update = function () {
        var _this = this;
        this.loading = true;
        this._userService.updateUser({
            '_id': this.userForm.value.userId,
            'firstname': this.userForm.value.firstName,
            'lastname': this.userForm.value.lastName,
            'username': this.userForm.value.username,
            'email': this.userForm.value.email,
            'phone': this.userForm.value.phone,
            'password': this.userForm.value.password,
            'user_role': this.userForm.value.user_role,
            'created_on': new Date(),
            'last_modified': new Date()
        }, this.userForm.value.userId).subscribe(function (data) {
            _this.closeModal();
            _this.userDetail = data;
            _this.getUsers();
        });
        return false;
    };
    UserComponent.prototype.save = function (mode) {
        var _this = this;
        if (mode == 'UPDATE') {
            this.update();
        }
        else {
            this.loading = true;
            this._userService.createUser({
                '_id': this.userForm.value.userId,
                'firstname': this.userForm.value.firstName,
                'lastname': this.userForm.value.lastName,
                'username': this.userForm.value.username,
                'email': this.userForm.value.email,
                'phone': this.userForm.value.phone,
                'password': this.userForm.value.password,
                'user_role': this.userForm.value.user_role,
                'created_on': new Date(),
                'last_modified': new Date()
            }).subscribe(function (data) {
                console.log(data);
                _this.closeModal();
                _this.getUsers();
                _this.loading = false;
            });
        }
        return false;
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.loading = true;
        this._userService.getUsers().subscribe(function (data) {
            console.log(data);
            _this.users = data;
            _this.loading = false;
        });
    };
    UserComponent.prototype.loadFormWithValues = function (data) {
        this.userForm.patchValue({
            userId: data._id,
            firstName: data.firstname,
            lastName: data.lastname,
            email: data.email,
            phone: data.phone,
            about: data.about,
            imageUrl: data.image_url
        });
        return false;
    };
    UserComponent.prototype.ngOnInit = function () {
        if (localStorage.length > 0) {
            var isAuth = JSON.parse(localStorage.getItem('auth'));
            if (isAuth) {
                if (isAuth.type == 'user') {
                    this._router.navigate(['/contacts']);
                }
            }
        }
        this.getUsers();
        this.userForm = this.fb.group({
            userId: [''],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)]],
            username: [''],
            email: [''],
            phone: [''],
            user_role: [''],
            password: ['']
        });
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'manage-users',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/admin/user.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/admin/user.form.ts":
/*!************************************!*\
  !*** ./src/app/admin/user.form.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(userId, firstName, lastName, userName, email, phone, userRole, password) {
        if (userId === void 0) { userId = ''; }
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (userName === void 0) { userName = ''; }
        if (email === void 0) { email = ''; }
        if (phone === void 0) { phone = ''; }
        if (userRole === void 0) { userRole = ''; }
        if (password === void 0) { password = ''; }
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.phone = phone;
        this.userRole = userRole;
        this.password = password;
    }
    return User;
}());



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
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _user_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/contact.component */ "./src/app/user/contact.component.ts");
/* harmony import */ var _admin_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/user.component */ "./src/app/admin/user.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");







var routes = [
    { path: 'login', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] },
    { path: 'contacts', component: _user_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'manage-user', component: _admin_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__["NotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _user_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/contact.component */ "./src/app/user/contact.component.ts");
/* harmony import */ var _admin_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/user.component */ "./src/app/admin/user.component.ts");
/* harmony import */ var _navigation_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/nav.component */ "./src/app/navigation/nav.component.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _admin_search_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/search.pipe */ "./src/app/admin/search.pipe.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"],
                _user_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _admin_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
                _navigation_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"],
                _admin_search_pipe__WEBPACK_IMPORTED_MODULE_14__["SearchPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _services_users_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _services_contacts_service__WEBPACK_IMPORTED_MODULE_13__["ContactService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:10%\">\n    <div class=\"col-md-6 offset-md-3\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            Login\n        </div>\n\n        <div class=\"card-body\">\n            <form novalidate \n                    (ngSubmit)=\"save(form)\"\n                    [formGroup]=\"loginForm\">\n                <div class=\"form-group\" [ngClass]=\"{'has-error': (loginForm.get('username').touched ||\n                loginForm.get('username').dirty) &&\n                !loginForm.get('username').valid}\">\n                    <label for=\"username\">Username:</label>\n                    <input placeholder=\"Username\" formControlName=\"username\" type=\"text\" class=\"form-control\" id=\"username\">\n\n                    <span class=\"help-block\" *ngIf=\"(loginForm.get('username').touched ||\n                                            loginForm.get('username').dirty) &&\n                                            loginForm.get('username').errors\">\n\n                        <span *ngIf=\"loginForm.get('username').errors.required\">\n                        Username can't be empty.\n                        </span>\n                        <span *ngIf=\"loginForm.get('username').errors.minlength\">\n                            Minimum length should be at least 3 characters.\n                        </span>\n                    </span>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'has-error': (loginForm.get('password').touched ||\n                loginForm.get('password').dirty) &&\n                !loginForm.get('password').valid}\">\n                    <label for=\"password\">Password:</label>\n                    <input placeholder=\"Password\" formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"password\">\n                    <span class=\"help-block\" *ngIf=\"(loginForm.get('password').touched ||\n                                            loginForm.get('password').dirty) &&\n                                            loginForm.get('password').errors\">\n\n                        <span *ngIf=\"loginForm.get('password').errors.required\">\n                        Password can't be empty.\n                        </span>\n                        <span *ngIf=\"loginForm.get('password').errors.minlength\">\n                            Minimum length should be at least 6 characters.\n                        </span>\n                    </span>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Login</button>\n            </form> \n        </div>\n    </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.model */ "./src/app/auth/auth.model.ts");






var AuthComponent = /** @class */ (function () {
    function AuthComponent(_userService, fb, _router) {
        this._userService = _userService;
        this.fb = fb;
        this._router = _router;
        this.login = new _auth_model__WEBPACK_IMPORTED_MODULE_5__["AuthModel"]();
    }
    AuthComponent.prototype.ngOnInit = function () {
        if (localStorage.length > 0) {
            var isAuth = JSON.parse(localStorage.getItem('auth'));
            if (isAuth) {
                if (isAuth.type == 'admin') {
                    this._router.navigate(['/manage-user']);
                }
                if (isAuth.type == 'user') {
                    this._router.navigate(['/contacts']);
                }
            }
        }
        this.loginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    };
    AuthComponent.prototype.save = function (form) {
        var _this = this;
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        if (username !== '' && password !== '') {
            this._userService.authenticate(username, password).subscribe(function (data) {
                if (data.token) {
                    var myObj = { token: data.token, type: data.user.user_role, id: data.user._id };
                    localStorage.setItem('auth', JSON.stringify(myObj));
                    window.location.reload();
                    if (data.user.user_role == 'admin') {
                        _this._router.navigate(['/manage-user']);
                    }
                    if (data.user.user_role == 'user') {
                        _this._router.navigate(['/contacts']);
                    }
                }
                else {
                    alert('Invalid username or password! try again...');
                }
            });
        }
        return false;
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.model.ts ***!
  \************************************/
/*! exports provided: AuthModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModel", function() { return AuthModel; });
var AuthModel = /** @class */ (function () {
    function AuthModel(username, password) {
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        this.username = username;
        this.password = password;
    }
    return AuthModel;
}());



/***/ }),

/***/ "./src/app/navigation/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/navigation/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <ul class=\"navbar-nav float-left\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-home\"></i></a>\n      </li>\n      <li *ngIf=\"isUser\" class=\"nav-item\">\n        <a [routerLink]=\"['/contacts']\" class=\"nav-link\" href=\"#\">My Contact(s)</a>\n      </li>\n      <li *ngIf=\"isAdmin\" class=\"nav-item\">\n        <a [routerLink]=\"['/manage-user']\" class=\"nav-link\" href=\"#\">Manage User(s)</a>\n      </li>\n      <li class=\"nav-item\">\n        <a style=\"cursor:pointer;\" class=\"nav-link\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/navigation/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/navigation/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavComponent = /** @class */ (function () {
    function NavComponent(_router) {
        this._router = _router;
        this.isUser = false;
        this.isAdmin = false;
    }
    NavComponent.prototype.logout = function () {
        localStorage.clear();
        this._router.navigate(['/login']);
    };
    NavComponent.prototype.ngOnInit = function () {
        if (localStorage.length > 0) {
            var isAuth = JSON.parse(localStorage.getItem('auth'));
            if (isAuth) {
                if (isAuth.type == 'admin') {
                    this.isAdmin = true;
                }
                if (isAuth.type == 'user') {
                    this.isUser = true;
                }
            }
        }
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navigation',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/navigation/nav.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notfound {\n    position: relative;\n    height: 100vh;\n  }\n  \n  #notfound .notfound {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n  .notfound {\n    max-width: 767px;\n    width: 100%;\n    line-height: 1.4;\n    padding: 0px 15px;\n  }\n  \n  .notfound .notfound-404 {\n    position: relative;\n    height: 150px;\n    line-height: 150px;\n    margin-bottom: 25px;\n  }\n  \n  .notfound .notfound-404 h1 {\n    font-family: 'Titillium Web', sans-serif;\n    font-size: 186px;\n    font-weight: 900;\n    margin: 0px;\n    text-transform: uppercase;\n    background: url('text.png');\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-size: cover;\n    background-position: center;\n  }\n  \n  .notfound h2 {\n    font-family: 'Titillium Web', sans-serif;\n    font-size: 26px;\n    font-weight: 700;\n    margin: 0;\n  }\n  \n  .notfound p {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    margin-bottom: 0px;\n    text-transform: uppercase;\n  }\n  \n  .notfound a {\n    font-family: 'Titillium Web', sans-serif;\n    display: inline-block;\n    text-transform: uppercase;\n    color: #fff;\n    text-decoration: none;\n    border: none;\n    background: #5c91fe;\n    padding: 10px 40px;\n    font-size: 14px;\n    font-weight: 700;\n    border-radius: 1px;\n    margin-top: 15px;\n    transition: 0.2s all;\n  }\n  \n  .notfound a:hover {\n    opacity: 0.8;\n  }\n  \n  @media only screen and (max-width: 767px) {\n    .notfound .notfound-404 {\n      height: 110px;\n      line-height: 110px;\n    }\n    .notfound .notfound-404 h1 {\n      font-size: 120px;\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFHQSxnQ0FBZ0M7RUFDMUM7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDJCQUE0QztJQUM1Qyw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFFaEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0U7TUFDRSxhQUFhO01BQ2Isa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbm90Zm91bmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIFxuICAjbm90Zm91bmQgLm5vdGZvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIFxuICAubm90Zm91bmQge1xuICAgIG1heC13aWR0aDogNzY3cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgfVxuICBcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG4gIFxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvdGV4dC5wbmcnKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5ub3Rmb3VuZCBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5ub3Rmb3VuZCBwIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAubm90Zm91bmQgYSB7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICM1YzkxZmU7XG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIH1cbiAgXG4gIC5ub3Rmb3VuZCBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDExMHB4O1xuICAgIH1cbiAgICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgICBmb250LXNpemU6IDEyMHB4O1xuICAgIH1cbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div id=\"notfound\">\n        <div class=\"notfound\">\n            <div class=\"notfound-404\">\n                <h1>404</h1>\n            </div>\n            <h2>Oops! This Page Could Not Be Found</h2>\n            <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>\n            <a href=\"#\">Go To Homepage</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'not-found',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        })
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/services/contacts.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contacts.service.ts ***!
  \**********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var isAuth = { id: '' };
if (localStorage.length > 0) {
    isAuth = JSON.parse(localStorage.getItem('auth'));
}
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': (isAuth.id !== undefined) ? isAuth.id : ""
    })
};
var ContactService = /** @class */ (function () {
    function ContactService(_httpClient) {
        this._httpClient = _httpClient;
        this._apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/contacts';
    }
    /**
     * Fetch list of contacts...
     */
    ContactService.prototype.getContacts = function () {
        return this._httpClient.get(this._apiURL, httpOptions);
    };
    /**
     * Get single contact detail...
     */
    ContactService.prototype.getContact = function (contactId) {
        return this._httpClient.get(this._apiURL + '/' + contactId);
    };
    /**
     * Add new contact to database...
     * @param data
     */
    ContactService.prototype.createContact = function (data) {
        return this._httpClient.post(this._apiURL, data, httpOptions);
    };
    /**
     * Update data...
     * @param data
     */
    ContactService.prototype.updateContact = function (data, contactId) {
        return this._httpClient.put(this._apiURL + '/' + contactId, data, httpOptions);
    };
    /**
     * delete contact detail...
     */
    ContactService.prototype.deleteContact = function (contactId) {
        return this._httpClient.delete(this._apiURL + '/' + contactId);
    };
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var UserService = /** @class */ (function () {
    function UserService(_httpClient) {
        this._httpClient = _httpClient;
        this._apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    UserService.prototype.authenticate = function (username, password) {
        console.log(username + ' ' + password);
        return this._httpClient.post(this._apiURL + '/login', {
            username: username, password: password
        }, httpOptions);
    };
    UserService.prototype.getUsers = function () {
        return this._httpClient.get(this._apiURL + '/users');
    };
    /**
     * Get single User detail...
     */
    UserService.prototype.getUser = function (userId) {
        return this._httpClient.get(this._apiURL + '/users' + '/' + userId);
    };
    /**
     * Add new User to database...
     * @param data
     */
    UserService.prototype.createUser = function (data) {
        return this._httpClient.post(this._apiURL + '/users', data, httpOptions);
    };
    /**
     * Update data...
     * @param data
     */
    UserService.prototype.updateUser = function (data, userId) {
        return this._httpClient.put(this._apiURL + '/users' + '/' + userId, data, httpOptions);
    };
    /**
     * delete User detail...
     */
    UserService.prototype.deleteUser = function (userId) {
        return this._httpClient.delete(this._apiURL + '/users' + '/' + userId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/contact.component.html":
/*!*********************************************!*\
  !*** ./src/app/user/contact.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation></navigation>\n<div class=\"container\">\n<div class=\"card\" style=\"margin-top:5%\">\n<div class=\"card-body\">\n<div class=\"row\">\n    <div class=\"col-md-8\">\n        <div class=\"card-columns\">\n            <div title=\"Add New Contact\" (click)=\"openModal('add-new')\" class=\"card bg-light\" style=\"cursor:pointer;height:88px;\">\n              <div class=\"card-body text-center\">\n                <p class=\"card-text\">\n                    <span style=\"font-size:26px;\"><i class=\"fa fa-user-plus\"></i></span>\n                </p>\n              </div>\n            </div>\n\n            <div *ngFor=\"let contact of contacts\" class=\"card bg-light\" id=\"{{contact._id}}\">\n              <div (click)=\"loadContactDeatil(contact._id)\" class=\"card-body text-center\" title=\"Load Contact Detail\">\n                <a title=\"Remove Contact\" class=\"user-icons remove-contact\" (click)=\"deleteContact(contact._id)\"><i class=\"fa fa-trash\"></i></a>\n                <p class=\"card-text\">Name: {{contact.firstname}} {{contact.lastname}}</p>\n                <p class=\"card-text\">Phone: {{contact.phone}}</p>\n              </div>\n            </div>\n\n        </div>\n    </div>\n    <div *ngIf=\"isContactDetailEnabled\" class=\"col-md-4\">\n        <div class=\"card\">\n            <a title=\"Update Contact\" class=\"user-icons update-icon\" (click)=\"updateContact(contactDetail._id)\"><i class=\"fa fa-edit\"></i></a>\n            <img style=\"width:100%;height:250px;\" [src]=\"contactDetail.image-url\" onError=\"this.src='https://www.w3schools.com/bootstrap4/img_avatar1.png'\"/> \n            <div class=\"card-body\">\n                <h4 class=\"card-title\">{{contactDetail.firstname}} {{contactDetail.lastname}}</h4>\n                <p class=\"card-text\">{{contactDetail.phone}} | {{contactDetail.email}}</p>\n                <p class=\"card-text\">{{contactDetail.about}}</p>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal fade\" id=\"myModal\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{modalTitle}}</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n          <form class=\"form-horizontal\"\n            novalidate\n            (ngSubmit)=\"save(formMode)\"\n            [formGroup]=\"contactForm\">  \n\n            <input id=\"contactId\" type=\"hidden\" value=\"\" formControlName=\"contactId\"/>\n\n            <!-- Firstname field code starts here -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': (contactForm.get('firstName').touched ||\n                                                              contactForm.get('firstName').dirty) &&\n                                                              !contactForm.get('firstName').valid}\">\n              <label class=\"col-md-2 control-label\"\n                  for=\"fname\">FirstName</label>\n              <div class=\"col-md-8\">\n                  <input class=\"form-control\"\n                      id=\"fname\"\n                      type=\"text\"\n                      placeholder=\"First Name\"\n                      formControlName=\"firstName\"/>\n                  <span class=\"help-block\" *ngIf=\"(contactForm.get('firstName').touched ||\n                                                  contactForm.get('firstName').dirty) &&\n                                                  contactForm.get('firstName').errors\">\n\n                      <span *ngIf=\"contactForm.get('firstName').errors.required\">\n                        Please enter first Name\n                      </span>\n                      <span *ngIf=\"contactForm.get('firstName').errors.minlength\">\n                          Min Length is 3\n                      </span>\n                  </span>\n              </div>\n            </div>\n            <!-- Firstname field code ends here -->\n\n            <!-- Lastname field code starts here -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': (contactForm.get('lastName').touched ||\n                                                              contactForm.get('lastName').dirty) &&\n                                                              !contactForm.get('lastName').valid}\">\n              <label class=\"col-md-2 control-label\" for=\"lname\">Last Name</label>\n              <div class=\"col-md-8\">\n                  <input class=\"form-control\"\n                      id=\"lname\"\n                      type=\"text\"\n                      placeholder=\"Last Name\"\n                      formControlName=\"lastName\"/>\n                  <span class=\"help-block\" *ngIf=\"(contactForm.get('lastName').touched ||\n                                                  contactForm.get('lastName').dirty) &&\n                                                  contactForm.get('lastName').errors\">\n\n                      <span *ngIf=\"contactForm.get('lastName').errors.required\">\n                        Please enter first Name\n                      </span>\n                      <span *ngIf=\"contactForm.get('lastName').errors.minlength\">\n                          Min Length should be at least 3\n                      </span>\n                  </span>\n              </div>\n            </div>\n            <!-- Lastname field code starts here -->\n\n            <!-- Email field code starts here -->\n            <div class=\"form-group\">\n              <label class=\"col-md-2 control-label\" for=\"email\">Email Address</label>\n              <div class=\"col-md-8\">\n                  <input class=\"form-control\"\n                      id=\"email\"\n                      type=\"text\"\n                      placeholder=\"Email Address\"\n                      formControlName=\"email\"/>\n              </div>\n            </div>\n            <!-- Email field code starts here -->\n\n            <!-- Phone field code starts here -->\n            <div class=\"form-group\">\n              <label class=\"col-md-2 control-label\" for=\"phone\">Phone</label>\n              <div class=\"col-md-8\">\n                  <input class=\"form-control\"\n                      id=\"phone\"\n                      type=\"text\"\n                      placeholder=\"+91 98765 28433\"\n                      formControlName=\"phone\"/>\n              </div>\n            </div>\n            <!-- Phone field code starts here -->\n\n            <!-- Image url field code starts here -->\n            <div class=\"form-group\">\n              <label class=\"col-md-2 control-label\" for=\"image-url\">Image Url</label>\n              <div class=\"col-md-8\">\n                  <input class=\"form-control\"\n                      id=\"image-url\"\n                      type=\"text\"\n                      placeholder=\"Image Url\"\n                      formControlName=\"imageUrl\"/>\n              </div>\n            </div>\n            <!-- Image url field code starts here -->\n\n            <!-- About field code starts here -->\n            <div class=\"form-group\">\n              <label class=\"col-md-2 control-label\" for=\"about\">About Me</label>\n              <div class=\"col-md-8\">\n                  <input class=\"form-control\"\n                      id=\"about\"\n                      type=\"text\"\n                      placeholder=\"About Me\"\n                      formControlName=\"about\"/>\n              </div>\n            </div>\n            <!-- Image url field code starts here -->\n              \n            <div class=\"form-group\">\n              <div class=\"col-md-4 col-md-offset-2\">\n                <span>\n                  <button class=\"btn btn-secondary\"\n                        type=\"submit\"\n                        [disabled]=\"!contactForm.valid\">\n                      Submit\n                  </button>\n                </span>\n              </div>\n            </div>\n          </form>\n          </div>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"loader-container\"><div class=\"loader\"></div></div>"

/***/ }),

/***/ "./src/app/user/contact.component.ts":
/*!*******************************************!*\
  !*** ./src/app/user/contact.component.ts ***!
  \*******************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _contact_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.form */ "./src/app/user/contact.form.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ContactComponent = /** @class */ (function () {
    function ContactComponent(_contactService, fb, _router) {
        this._contactService = _contactService;
        this.fb = fb;
        this._router = _router;
        this.contact = new _contact_form__WEBPACK_IMPORTED_MODULE_3__["Contact"]();
        this.title = 'Contact(s) Manager';
        this.loading = false;
        this.isContactDetailEnabled = false;
        this.formMode = 'INSERT';
    }
    ContactComponent.prototype.openModal = function (modelFor) {
        this.modalTitle = (modelFor == 'update') ? "Update Contact" : "Add New Contact";
        this.formMode = (modelFor == 'update') ? "UPDATE" : "INSERT";
        if (this.formMode == 'INSERT') {
            this.loadFormWithValues({});
        }
        $('#myModal').modal('show');
        return false;
    };
    ContactComponent.prototype.closeModal = function () {
        $('#myModal').modal('hide');
        return false;
    };
    ContactComponent.prototype.loadContactDeatil = function (contactId) {
        var _this = this;
        this.loading = true;
        this._contactService.getContact(contactId).subscribe(function (data) {
            _this.contactDetail = data;
            _this.isContactDetailEnabled = true;
            _this.loading = false;
        });
    };
    ContactComponent.prototype.updateContact = function (contactId) {
        var _this = this;
        console.log(contactId);
        this.loading = true;
        this._contactService.getContact(contactId).subscribe(function (data) {
            _this.loadFormWithValues(data);
            _this.openModal('update');
            _this.loading = false;
        });
        return false;
    };
    ContactComponent.prototype.deleteContact = function (contactId) {
        var _this = this;
        if (confirm("Are you sure to delete contact?")) {
            this._contactService.deleteContact(contactId).subscribe(function (data) {
                _this.getContacts();
                _this.isContactDetailEnabled = false;
            });
        }
        return false;
    };
    ContactComponent.prototype.update = function () {
        var _this = this;
        this.loading = true;
        this._contactService.updateContact({
            '_id': this.contactForm.value.contactId,
            'firstname': this.contactForm.value.firstName,
            'lastname': this.contactForm.value.lastName,
            'about': this.contactForm.value.about,
            'email': this.contactForm.value.email,
            'phone': this.contactForm.value.phone,
            'image_url': this.contactForm.value.imageUrl,
            'user_id': this.logedInId,
            'created_on': new Date(),
            'last_modified': new Date()
        }, this.contactForm.value.contactId).subscribe(function (data) {
            _this.closeModal();
            _this.contactDetail = data;
            _this.getContacts();
        });
        return false;
    };
    ContactComponent.prototype.save = function (mode) {
        var _this = this;
        if (mode == 'UPDATE') {
            this.update();
        }
        else {
            this.loading = true;
            this._contactService.createContact({
                '_id': 'test',
                'firstname': this.contactForm.value.firstName,
                'lastname': this.contactForm.value.lastName,
                'about': this.contactForm.value.about,
                'email': this.contactForm.value.email,
                'phone': this.contactForm.value.phone,
                'image_url': this.contactForm.value.imageUrl,
                'user_id': this.logedInId,
                'created_on': new Date(),
                'last_modified': new Date()
            }).subscribe(function (data) {
                console.log(data);
                _this.closeModal();
                _this.getContacts();
                _this.loading = false;
            });
        }
        return false;
    };
    ContactComponent.prototype.getContacts = function () {
        var _this = this;
        this.loading = true;
        this._contactService.getContacts().subscribe(function (data) {
            _this.contacts = data;
            _this.loading = false;
        });
    };
    ContactComponent.prototype.loadFormWithValues = function (data) {
        this.contactForm.patchValue({
            contactId: data._id,
            firstName: data.firstname,
            lastName: data.lastname,
            email: data.email,
            phone: data.phone,
            about: data.about,
            imageUrl: data.image_url
        });
        return false;
    };
    ContactComponent.prototype.ngOnInit = function () {
        if (localStorage.length > 0) {
            var isAuth = JSON.parse(localStorage.getItem('auth'));
            if (isAuth) {
                this.logedInId = isAuth.id;
                if (isAuth.type == 'admin') {
                    this._router.navigate(['/manage-user']);
                }
            }
        }
        this.getContacts();
        this.contactForm = this.fb.group({
            contactId: [''],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)]],
            email: [''],
            phone: [''],
            about: [''],
            imageUrl: ['']
        });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'manage-contacts',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/user/contact.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/user/contact.form.ts":
/*!**************************************!*\
  !*** ./src/app/user/contact.form.ts ***!
  \**************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact(contactId, firstName, lastName, email, phone, imageUrl, about) {
        if (contactId === void 0) { contactId = ''; }
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (email === void 0) { email = ''; }
        if (phone === void 0) { phone = ''; }
        if (imageUrl === void 0) { imageUrl = ''; }
        if (about === void 0) { about = ''; }
        this.contactId = contactId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.about = about;
    }
    return Contact;
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
    apiUrl: 'http://localhost:3000/api'
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

module.exports = __webpack_require__(/*! /home/hardev/projects/angular-contacts-app/project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map