webpackJsonp([3,20],{

/***/ 1120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ "username": username, "password": password });
        return this.http.post('https://tshwanesafetyapi.herokuapp.com/api/TshwaneUsers/login', body, options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user.userId && user.id) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log("currentUser", JSON.stringify(user));
            }
            return user;
        });
    };
    LoginService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    //Get all incidents  
    LoginService.prototype.getUsers = function () {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/Users';
        return this.http.get(url, this.jwt())
            .map(function (response) { return response.json(); });
    };
    //Get incident type by id
    LoginService.prototype.getUsersById = function (id) {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/SubCategories/' + id;
        console.log("incidentType", url);
        return this.http.get(url);
    };
    // private helper methods
    LoginService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        }
    };
    //Code to create a list of array objects     
    LoginService.prototype.updateArrayWithObject = function (_list, key, _object2, key1) {
        var _objArray = [];
        for (var i = 0; i < _list.length; i++) {
            var _object = _list[i];
            if (_object[key] === _object2[key1]) {
                _object = Object.assign(_object, _object2);
            }
            _objArray = _objArray.concat(_object);
        }
        return _objArray;
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register_component__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pricing_pricing_component__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_reset_component__ = __webpack_require__(966);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutes; });




var PagesRoutes = [
    {
        path: '',
        children: [{
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
            }, {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_0__register_register_component__["a" /* RegisterComponent */]
            }, {
                path: 'reset',
                component: __WEBPACK_IMPORTED_MODULE_3__reset_reset_component__["a" /* ResetComponent */]
            }, {
                path: 'pricing',
                component: __WEBPACK_IMPORTED_MODULE_1__pricing_pricing_component__["a" /* PricingComponent */]
            }]
    }
];
//# sourceMappingURL=pages.routing.js.map

/***/ }),

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(248);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResetService = (function () {
    function ResetService(http) {
        this.http = http;
    }
    ResetService.prototype.findUser = function () {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/TshwaneUsers';
        return this.http.get(url);
    };
    ResetService.prototype.userReset = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(email);
        return this.http.post('https://tshwanesafetyapi.herokuapp.com/api/TshwaneUsers/resetTshwaneUserPassword', body, options).map(function (res) { return res.json(); });
    };
    ResetService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], ResetService);
    return ResetService;
    var _a;
}());
//# sourceMappingURL=reset.service.js.map

/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(907)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1188:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-fixed-top\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <p class=\"navbar-brand\" >Tshwane Safety Dashboard</p>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                   \r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"full-page login-page\" filter-color=\"black\" data-image=\"../../../assets/img/lock2.jpg\">\r\n        <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n        <div class=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\r\n                        <form method=\"#\" action=\"#\">\r\n                            <div class=\"card card-login card-hidden\">\r\n                                <div class=\"card-header text-center\" data-background-color=\"blue-grey\">\r\n                                    <h4 class=\"card-title\">Login</h4>\r\n                                  \r\n                                </div>\r\n                                <p class=\"category text-center\">\r\n                                   Enhancing Service Delivery\r\n                                </p>\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">email</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\">Email Address</label>\r\n                                            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"formModel.username\" [ngModelOptions]=\"{standalone: true}\" >\r\n                                        </div>\r\n                                    </div>\r\n                                  \r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">lock_outline</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\">Password</label>\r\n                                            <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"formModel.password\" [ngModelOptions]=\"{standalone: true}\">\r\n                                        </div>\r\n                                        <div style=\"color:#ba3809\" id=\"message\"></div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"footer text-center\">\r\n                                    <button type=\"submit\" (click)=\"login();\" class=\"btn btn-primary btn-round\">\r\n                                       <!--  <span ng-show=\"test\"><i class=\"fa fa-circle-o-notch fa-spin\"></i></span> -->\r\n                                        Login\r\n                                    </button>\r\n                                </div>\r\n                                <div>\r\n                                   <p class=\"category text-center\">\r\n                                   <b><a href=\"http://localhost:4200/pages/reset\">Forgot Password</a></b>\r\n                                </p>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <nav class=\"pull-left\">\r\n                  \r\n                </nav>\r\n                <p class=\"copyright pull-right\">\r\n                    &copy;\r\n                    {{test | date: 'yyyy'}}\r\n                    <a href=\"https://www.pulego.co.za\">Pulego Communications</a>, Creating Value Through Technology, Innovation and Training\r\n                </p>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1189:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <a class=\"navbar-brand\" href=\"/#/dashboard\">MD Pro Angular</a>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li>\r\n                        <a href=\"/dashboard\">\r\n                            <i class=\"material-icons\">dashboard</i> Dashboard\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"\">\r\n                        <a href=\"/pages/register\">\r\n                            <i class=\"material-icons\">person_add</i> Register\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"\">\r\n                        <a href=\"/pages/login\">\r\n                            <i class=\"material-icons\">fingerprint</i> Login\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"\">\r\n                        <a href=\"/pages/lock\">\r\n                            <i class=\"material-icons\">lock_open</i> Lock\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"full-page pricing-page\" data-image=\"../assets/img/bg-pricing.jpeg\">\r\n        <div class=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-md-offset-3 text-center\">\r\n                        <h2 class=\"title\">Pick the best plan for you</h2>\r\n                        <h5 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"card card-pricing card-plain\">\r\n                            <div class=\"card-content\">\r\n                                <h6 class=\"category\">Freelancer</h6>\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">weekend</i>\r\n                                </div>\r\n                                <h3 class=\"card-title\">FREE</h3>\r\n                                <p class=\"card-description\">\r\n                                    This is good if your company size is between 2 and 10 Persons.\r\n                                </p>\r\n                                <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"card card-pricing card-raised\">\r\n                            <div class=\"card-content\">\r\n                                <h6 class=\"category\">Small Company</h6>\r\n                                <div class=\"icon icon-rose\">\r\n                                    <i class=\"material-icons\">home</i>\r\n                                </div>\r\n                                <h3 class=\"card-title\">$29</h3>\r\n                                <p class=\"card-description\">\r\n                                    This is good if your company size is between 2 and 10 Persons.\r\n                                </p>\r\n                                <a href=\"#pablo\" class=\"btn btn-rose btn-round\">Choose Plan</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"card card-pricing card-plain\">\r\n                            <div class=\"card-content\">\r\n                                <h6 class=\"category\">Medium Company</h6>\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">business</i>\r\n                                </div>\r\n                                <h3 class=\"card-title\">$69</h3>\r\n                                <p class=\"card-description\">\r\n                                    This is good if your company size is between 11 and 99 Persons.\r\n                                </p>\r\n                                <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"card card-pricing card-plain\">\r\n                            <div class=\"card-content\">\r\n                                <h6 class=\"category\">Enterprise</h6>\r\n                                <div class=\"icon\">\r\n                                    <i class=\"material-icons\">account_balance</i>\r\n                                </div>\r\n                                <h3 class=\"card-title\">$159</h3>\r\n                                <p class=\"card-description\">\r\n                                    This is good if your company size is 99+ persons.\r\n                                </p>\r\n                                <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <nav class=\"pull-left\">\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Home\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Company\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Portfolio\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Blog\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n                <p class=\"copyright pull-right\">\r\n                    &copy;\r\n                    {{test | date: 'yyyy'}}\r\n                    <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\r\n                </p>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1190:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <a class=\"navbar-brand\" href=\"/#/dashboard\">MD Pro Angular</a>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li>\r\n                        <a href=\"/dashboard\">\r\n                            <i class=\"material-icons\">dashboard</i> Dashboard\r\n                        </a>\r\n                    </li>\r\n                    <li class=\" active \">\r\n                        <a href=\"/pages/register\">\r\n                            <i class=\"material-icons\">person_add</i> Register\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"\">\r\n                        <a href=\"/pages/login\">\r\n                            <i class=\"material-icons\">fingerprint</i> Login\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"\">\r\n                        <a href=\"/pages/lock\">\r\n                            <i class=\"material-icons\">lock_open</i> Lock\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"full-page register-page\" filter-color=\"black\" data-image=\"../assets/img/register.jpeg\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-10 col-md-offset-1\">\r\n                    <div class=\"card card-signup\">\r\n                        <h2 class=\"card-title text-center\">Register</h2>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-5 col-md-offset-1\">\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"info info-horizontal\">\r\n                                        <div class=\"icon icon-rose\">\r\n                                            <i class=\"material-icons\">timeline</i>\r\n                                        </div>\r\n                                        <div class=\"description\">\r\n                                            <h4 class=\"info-title\">Marketing</h4>\r\n                                            <p class=\"description\">\r\n                                                We've created the marketing campaign of the website. It was a very interesting collaboration.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"info info-horizontal\">\r\n                                        <div class=\"icon icon-primary\">\r\n                                            <i class=\"material-icons\">code</i>\r\n                                        </div>\r\n                                        <div class=\"description\">\r\n                                            <h4 class=\"info-title\">Fully Coded in HTML5</h4>\r\n                                            <p class=\"description\">\r\n                                                We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"info info-horizontal\">\r\n                                        <div class=\"icon icon-info\">\r\n                                            <i class=\"material-icons\">group</i>\r\n                                        </div>\r\n                                        <div class=\"description\">\r\n                                            <h4 class=\"info-title\">Built Audience</h4>\r\n                                            <p class=\"description\">\r\n                                                There is also a Fully Customizable CMS Admin Dashboard for this product.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <div class=\"social text-center\">\r\n                                    <button class=\"btn btn-just-icon btn-round btn-twitter\">\r\n                                        <i class=\"fa fa-twitter\"></i>\r\n                                    </button>\r\n                                    <button class=\"btn btn-just-icon btn-round btn-dribbble\">\r\n                                        <i class=\"fa fa-dribbble\"></i>\r\n                                    </button>\r\n                                    <button class=\"btn btn-just-icon btn-round btn-facebook\">\r\n                                        <i class=\"fa fa-facebook\"> </i>\r\n                                    </button>\r\n                                    <h4> or be classical </h4>\r\n                                </div>\r\n                                <form class=\"form\" method=\"\" action=\"\">\r\n                                    <div class=\"card-content\">\r\n                                        <div class=\"input-group\">\r\n                                            <span class=\"input-group-addon\">\r\n                                                <i class=\"material-icons\">face</i>\r\n                                            </span>\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\r\n                                        </div>\r\n                                        <div class=\"input-group\">\r\n                                            <span class=\"input-group-addon\">\r\n                                                <i class=\"material-icons\">email</i>\r\n                                            </span>\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Email...\">\r\n                                        </div>\r\n                                        <div class=\"input-group\">\r\n                                            <span class=\"input-group-addon\">\r\n                                                <i class=\"material-icons\">lock_outline</i>\r\n                                            </span>\r\n                                            <input type=\"password\" placeholder=\"Password...\" class=\"form-control\" />\r\n                                        </div>\r\n                                        <!-- If you want to add a checkbox to this form, uncomment this code -->\r\n                                        <div class=\"checkbox\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" checked> I agree to the\r\n                                                <a href=\"#something\">terms and conditions</a>.\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"footer text-center\">\r\n                                        <a href=\"#pablo\" class=\"btn btn-primary btn-round\">Get Started</a>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <nav class=\"pull-left\">\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Home\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Company\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Portfolio\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Blog\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n                <p class=\"copyright pull-right\">\r\n                    &copy;\r\n                    {{test | date: 'yyyy'}}\r\n                    <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\r\n                </p>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1191:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-fixed-top\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <p class=\"navbar-brand\" >Tshwane Safety Dashboard</p>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                   \r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"full-page login-page\" filter-color=\"black\" data-image=\"../../../assets/img/lock2.jpg\">\r\n        <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n        <div class=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\r\n                        <form method=\"#\" action=\"#\">\r\n                            <div class=\"card card-login card-hidden\">\r\n                                <div class=\"card-header text-center\" data-background-color=\"blue-grey\">\r\n                                    <h4 class=\"card-title\">Reset Password</h4>\r\n                                  \r\n                                </div>\r\n                                <p class=\"category text-center\">\r\n                                   Enhancing Service Delivery\r\n                                </p>\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\"></i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\">Email</label>\r\n                                            <input type=\"text\" id=\"username\" class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\">Pay no</label>\r\n                                            <input type=\"text\" id=\"payno\" class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\">ID Number</label>\r\n                                            <input type=\"text\" id=\"idnumber\" maxLength=\"13\" class=\"form-control\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"footer text-center\">\r\n                                    <button type=\"submit\" (click)=\"getUsers();\" class=\"btn btn-primary btn-round\">Reset</button>\r\n\r\n                                     <a href=\"http://localhost:4200/pages/login\" button type=\"submit\" class=\"btn btn-primary btn-round\">Home</a>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <nav class=\"pull-left\">\r\n                  \r\n                </nav>\r\n                <p class=\"copyright pull-right\">\r\n                    &copy;\r\n                    {{test | date: 'yyyy'}}\r\n                    <a href=\"https://www.pulego.co.za\">Pulego Communications</a>, Creating Value Through Technology, Innovation and Training\r\n                </p>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routing__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pricing_pricing_component__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reset_reset_component__ = __webpack_require__(966);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__pages_routing__["a" /* PagesRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__reset_reset_component__["a" /* ResetComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PagesModule);
    return PagesModule;
}());
//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(1120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(route, router, loginService) {
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.siteurl = window.location.origin;
        this.formModel = {};
        this.loading = false;
    }
    LoginComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
        // reset login status
        this.loginService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        $('button[type=submit]').attr('disabled', 'disabled');
        this.loading = true;
        this.loginService.login(this.formModel.username, this.formModel.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
            console.log("DataAuth", data);
            console.log("this.returnUrl", _this.returnUrl);
            console.log("password", _this.formModel.password);
            sessionStorage.setItem('password', _this.formModel.password);
        }, function (error) {
            $("#message").html("Username or Password incorrect");
            _this.loading = false;
            $('button[type=submit]').removeAttr('disabled');
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-cmp',
            template: __webpack_require__(1188),
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = (function () {
    function PricingComponent() {
        this.test = new Date();
    }
    PricingComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    PricingComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
    };
    PricingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pricing-cmp',
            template: __webpack_require__(1189)
        }), 
        __metadata('design:paramtypes', [])
    ], PricingComponent);
    return PricingComponent;
}());
//# sourceMappingURL=pricing.component.js.map

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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
    function RegisterComponent() {
        this.test = new Date();
    }
    RegisterComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    RegisterComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'register-cmp',
            template: __webpack_require__(1190)
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_service__ = __webpack_require__(1122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetComponent = (function () {
    function ResetComponent(resetservice, location) {
        this.resetservice = resetservice;
        this.location = location;
    }
    ResetComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    ResetComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    ResetComponent.prototype.getUsers = function () {
        var _this = this;
        $('button[type=submit]').attr('disabled', 'disabled');
        var email = $("#username").val();
        var payno = $("#payno").val();
        var idnumber = $("#idnumber").val();
        this.resetservice.findUser().subscribe(function (data) {
            var str = data.json();
            var user = {};
            user = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](str, { idNumber: idnumber, payNumber: payno, email: email });
            console.log("find user", user);
            if (user.length == 0) {
                alert("User does not exist");
                $('input[type="text"]').val('');
                $('button[type=submit]').removeAttr('disabled');
            }
            else {
                //for changing the password
                _this.resetservice.userReset({ "email": email })
                    .subscribe(function (response) {
                    alert("Please Check your emails and click the link to reset your password"),
                        console.log("the response is:", response);
                    // this.clearFormData();
                    // this.closeNotifications();
                    _this.location.back();
                });
            }
        });
    };
    ResetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(1191),
            styles: [__webpack_require__(1149)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__reset_service__["a" /* ResetService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__reset_service__["a" /* ResetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__reset_service__["a" /* ResetService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === 'function' && _b) || Object])
    ], ResetComponent);
    return ResetComponent;
    var _a, _b;
}());
//# sourceMappingURL=reset.component.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map