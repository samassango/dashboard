webpackJsonp([18,20],{

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    //Get all incidents
    DataService.prototype.getIncidents = function () {
        var userRegion = JSON.parse(localStorage.getItem('userRegion'));
        console.log("userRegion: ", userRegion);
        //Pulling incidents with next.
        //if region is not nodal point or war room show incidents for a specific region else show all.
        if (userRegion === "59ddf85cb466770012a44bb6" || userRegion === "59ddf802b466770012a44bb0") {
            console.log("userRegion: nodal point", userRegion);
            var url = 'https://tshwanesafetyapi.herokuapp.com/api/Incidents?filter={"include":["incident_channel","incident_status","incident_category","incident_subcategory","incident_region"],"limit":10,"skip":0}';
            return this.http.get(url);
        }
        else {
            console.log("userRegion:true ", userRegion);
            //https://tshwanesafetyapi.herokuapp.com/api/Incidents?filter={"where":{"region":"59ddf85cb466770012a44bb6"},"include":["incident_channel","incident_status","incident_category","incident_subcategory","incident_region"],"limit":10,"skip":0}
            var url = 'https://tshwanesafetyapi.herokuapp.com/api/Incidents?filter={"where":{"region":"' + userRegion + '"},"include":["incident_channel","incident_status","incident_category","incident_subcategory","incident_region"],"limit":10,"skip":0}';
            return this.http.get(url);
        }
        //if region is nodal point or war room show all incidents
        // if(userRegion !== "59ddf85cb466770012a44bb6" &&  userRegion !== "59ddf802b466770012a44bb0"){
        //     console.log("userRegion:true ", userRegion);
        //     let url: string = 'https://tshwanesafetyapi.herokuapp.com/api/Incidents?filter={"where":{"region":'+ userRegion+'},"include":["incident_channel","incident_status","incident_category","incident_subcategory","incident_region"]}';
        //     return this.http.get(url);
        // }else{
        //     console.log("userRegion: nodal point", userRegion);
        //     let url: string = 'https://tshwanesafetyapi.herokuapp.com/api/Incidents?filter={"include":["incident_channel","incident_status","incident_category","incident_subcategory","incident_region"]}';
        //     return this.http.get(url);
        // }
    };
    DataService.prototype.getIncidentsWithNext = function (limit, skip) {
        var userRegion = JSON.parse(localStorage.getItem('userRegion'));
        console.log("userRegion: ", userRegion);
        if (userRegion !== "59ddf85cb466770012a44bb6" && userRegion !== "59ddf802b466770012a44bb0") {
            console.log("userRegion:true ", userRegion);
            var url = 'https://tshwanesafetyapi.herokuapp.com/api/Incidents?filter={"where":{"region":' + userRegion + '},"include":["incident_channel","incident_status","incident_category","incident_subcategory","incident_region"],"limit":' + limit + ',"skip":' + skip + '}';
            console.log("url", url);
            return this.http.get(url);
        }
        else {
            console.log("userRegion: nodal point", userRegion);
            var url = 'https://tshwanesafetyapi.herokuapp.com/api/Incidents?filter={"include":["incident_channel","incident_status","incident_category","incident_subcategory","incident_region"],"limit":' + limit + ',"skip":' + skip + '}';
            console.log("url", url);
            return this.http.get(url);
        }
    };
    //All new incidents
    DataService.prototype.allNewIncidents = function () {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/Incidents/count?where={"status": {"inq": ["593c39de022c4aca8604e150"]}}';
        return this.http.get(url);
    };
    //All new incidents today
    DataService.prototype.allIncidents = function () {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/Incidents/count';
        return this.http.get(url);
    };
    //all outstanding
    DataService.prototype.allOutstandingIncidents = function () {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/Incidents/count?where={"status": {"nin": ["593c39de022c4aca8604e150","59ca2fc34aaabe00124d0e0e"]}}';
        return this.http.get(url);
    };
    //all outstanding today
    DataService.prototype.allClosedIncidents = function () {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/Incidents/count?where={"status": {"inq": ["59ca2fc34aaabe00124d0e0e"]}}';
        return this.http.get(url);
    };
    DataService.prototype.allIncidentsByStatus = function () {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/Statuses?filter={"counts":"incidents"}';
        return this.http.get(url);
    };
    DataService.prototype.allIncidentsByType = function () {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/SubCategories?filter={"counts":"incidents"}&[sort]=incidentsCount DESC';
        return this.http.get(url);
    };
    DataService.prototype.getEnquiries = function () {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/Enquiries?filter={"include":["enquiry_type"]}';
        //console.log("data 0", url);
        return this.http.get(url);
    };
    DataService.prototype.getUserDetails = function () {
        var userDetail = localStorage.getItem('currentUser');
        var userId = JSON.parse(userDetail).userId;
        console.log("userId", userId);
        var access_token = JSON.parse(userDetail).id;
        console.log("access_token", access_token);
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/TshwaneUsers/' + userId + '?filter={"include":["user_region","user_suburb"]}&access_token=' + access_token;
        return this.http.get(url);
    };
    DataService.prototype.putUsers = function (id, userData) {
        var userDetail = localStorage.getItem('currentUser');
        var access_token = JSON.parse(userDetail).id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'access-control-allow-origin': 'http://localhost:4200' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(userData);
        return this.http.patch('https://tshwanesafetyapi.herokuapp.com/api/TshwaneUsers/' + id + '?access_token=' + access_token, body, options).map(function (res) { return res.json(); });
    };
    DataService.prototype.getNotifications = function () {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/Notifications';
        return this.http.get(url);
    };
    DataService.prototype.getUsers = function () {
        //localStorage.removeItem('currentUser');
        var token = localStorage.getItem('currentUser');
        var access_token = JSON.parse(token).id;
        var storedToken = localStorage.setItem('storedToken', JSON.stringify(access_token));
        console.log("access_token", access_token);
        //let url: string = 'https://tshwanesafetyapi.herokuapp.com/api/TshwaneUsers?filter={"include":["user_region"]}&access_token='+access_token;
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/TshwaneUsers?filter={"where": {"isDesktopUser": true},"include": ["user_region","user_suburb"]}&access_token=' + access_token;
        return this.http.get(url);
    };
    DataService.prototype.getRegion = function () {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/Regions?filter={"where": {"name": {"nin": ["USSD", "Mobile Application"]}}}&[order]=name ASC';
        return this.http.get(url);
    };
    DataService.prototype.getSuburbs = function () {
        var url = 'https://tshwanesafetyapi.herokuapp.com/api/Suburbs?filter={"where": {"name": {"nin": ["All"]}}}&[order]=name ASC';
        return this.http.get(url);
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__md_md_module__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var mda = {
    misc: {
        movingTab: '<div class="sidebar-moving-tab"/>',
        isChild: false,
        sidebarMenuActive: '',
        movingTabInitialised: false
    }
};
var md = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    }
};
var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(location) {
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
        this.navItems = [
            { type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-bell-o',
                numNotifications: 5,
                dropdownItems: [
                    { title: 'Notification 1' },
                    { title: 'Notification 2' },
                    { title: 'Notification 3' },
                    { title: 'Notification 4' },
                    { title: 'Another Notification' }
                ]
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: "pe-7s-mail", title: 'Messages' },
                    { iconClass: "pe-7s-help1", title: 'Help Center' },
                    { iconClass: "pe-7s-tools", title: 'Settings' },
                    'separator',
                    { iconClass: "pe-7s-lock", title: 'Lock Screen' },
                    { iconClass: "pe-7s-close-circle", title: 'Log Out' }
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Account' },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["b" /* NavItemType */].NavbarLeft,
                title: 'Dropdown',
                dropdownItems: [
                    { title: 'Action' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    'separator',
                    { title: 'Separated link' },
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Log out' }
        ];
        this.initFixedPluginDemo();
    };
    AdminLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) == '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.initFixedPluginDemo = function () {
        //fixed plugin
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        //
        var $full_page = $('.full-page');
        //
        var $sidebar_responsive = $('body > .navbar-collapse');
        var window_width = $(window).width();
        var fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();
        if (window_width > 767 && fixed_plugin_open == 'Dashboard') {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex: if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($full_page.length != 0) {
                $full_page.attr('filter-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            var new_image = $(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($('.switch-sidebar-image input:checked').length == 0) {
                var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
        $('.switch-sidebar-image input').change(function () {
            var $full_page_background = $('.full-page-background');
            var $input = $(this);
            if ($input.is(':checked')) {
                if ($sidebar_img_container.length != 0) {
                    $sidebar_img_container.fadeIn('fast');
                    $sidebar.attr('data-image', '#');
                }
                if ($full_page_background.length != 0) {
                    $full_page_background.fadeIn('fast');
                    $full_page.attr('data-image', '#');
                }
                var background_image = true;
            }
            else {
                if ($sidebar_img_container.length != 0) {
                    $sidebar.removeAttr('data-image');
                    $sidebar_img_container.fadeOut('fast');
                }
                if ($full_page_background.length != 0) {
                    $full_page.removeAttr('data-image', '#');
                    $full_page_background.fadeOut('fast');
                }
                background_image = false;
            }
        });
        $('.switch-sidebar-mini input').change(function () {
            var $body = $('body');
            var $input = $(this);
            if (md.misc.sidebar_mini_active == true) {
                $('body').removeClass('sidebar-mini');
                md.misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    $('.sidebar .collapse').css('height', 'auto');
                    md.misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    AdminLayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(613)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _a) || Object])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
    var _a;
}());
//# sourceMappingURL=admin-layout.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(614)
        }), 
        __metadata('design:paramtypes', [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());
//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'material-icons' },
    { path: '/pages/timeline', title: 'Timeline Page', icon: 'material-icons' },
    { path: '/user', title: 'My Profile', icon: 'material-icons' },
    { path: '/components/buttons', title: 'Buttons', icon: 'pe-7s-plugin' },
    { path: '/components/grid', title: 'Grid System', icon: 'pe-7s-plugin' },
    { path: '/components/panels', title: 'Panels', icon: 'pe-7s-plugin' },
    { path: '/components/sweet-alert', title: 'Sweet Alert', icon: 'pe-7s-plugin' },
    { path: '/components/notifications', title: 'Notifications', icon: 'pe-7s-plugin' },
    { path: '/components/icons', title: 'Icons', icon: 'pe-7s-plugin' },
    { path: '/components/typography', title: 'Typography', icon: 'pe-7s-plugin' },
    { path: '/forms/regular', title: 'Regular Forms', icon: 'pe-7s-note2' },
    { path: '/forms/extended', title: 'Extended Forms', icon: 'pe-7s-note2' },
    { path: '/forms/validation', title: 'Validation Forms', icon: 'pe-7s-note2' },
    { path: '/forms/wizard', title: 'Wizard', icon: 'pe-7s-note2' },
    { path: '/tables/regular', title: 'Regular Tables', icon: 'pe-7s-news-paper' },
    { path: '/tables/extended', title: 'Extended Tables', icon: 'pe-7s-news-paper' },
    { path: '/tables/datatables.net', title: 'DataTables.net', icon: 'pe-7s-news-paper' },
    { path: '/maps/google', title: 'Google Maps', icon: 'pe-7s-map-marker' },
    { path: '/maps/fullscreen', title: 'Full Screen Map', icon: 'pe-7s-map-marker' },
    { path: '/maps/vector', title: 'Vector Map', icon: 'pe-7s-map-marker' },
    { path: '/widgets', title: 'Widgets', icon: 'material-icons' },
    { path: '/charts', title: 'Charts', icon: 'material-icons' },
    { path: '/calendar', title: 'Calendar', icon: 'material-icons' },
    { path: '/pages/pricing', title: 'Pricing', icon: 'material-icons' },
    { path: '/pages/login', title: 'Login Page', icon: 'material-icons' },
    { path: '/pages/register', title: 'Register Page', icon: 'material-icons' },
    { path: '/pages/lock', title: 'Lock Screen Page', icon: 'material-icons' },
    { path: '/incidents', title: 'Incident Reports', icon: 'material-icons' },
    { path: '/enquiries', title: 'Enquiries', icon: 'material-icons' },
    { path: '/alerts', title: 'Alerts', icon: 'material-icons' },
    { path: '/userregistration', title: 'Manage Users', icon: 'material-icons' },
    { path: '/forms/viewincidents', title: 'Incident Details', icon: 'pe-7s-note2' },
    { path: '/reports', title: 'Reports', icon: 'material-icons' },
];
//# sourceMappingURL=sidebar-routes.config.js.map

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alerts/alerts.module": [
		890,
		9
	],
	"./calendar/calendar.module": [
		891,
		15
	],
	"./charts/charts.module": [
		892,
		12
	],
	"./components/components.module": [
		893,
		2
	],
	"./dashboard/dashboard.module": [
		894,
		5
	],
	"./enquiries/enquiries.module": [
		895,
		8
	],
	"./forms/forms.module": [
		896,
		0
	],
	"./incidents/incidents.module": [
		897,
		7
	],
	"./maps/maps.module": [
		898,
		1
	],
	"./pages/pages.module": [
		899,
		3
	],
	"./reports/reports.module": [
		900,
		10
	],
	"./tables/tables.module": [
		901,
		4
	],
	"./timeline/timeline.module": [
		902,
		14
	],
	"./user/user.module": [
		903,
		11
	],
	"./userregistration/userregistration.module": [
		904,
		6
	],
	"./widgets/widgets.module": [
		905,
		13
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 383;


/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(535);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__ = __webpack_require__(528);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));
var MdModule = (function () {
    function MdModule() {
    }
    MdModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__["a" /* MdTableComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__["a" /* MdTableComponent */],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MdModule);
    return MdModule;
}());
//# sourceMappingURL=md.module.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(elRef) {
        this.elRef = elRef;
    }
    AppComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            body.classList.add("perfect-scrollbar-on");
        }
        else {
            body.classList.add("perfect-scrollbar-off");
        }
        $.material.init();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-app',
            template: __webpack_require__(612)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_module__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_module__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_module__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts_admin_admin_layout_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_auth_auth_layout_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_service__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_module__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_module__["a" /* NavbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__app_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });


var AppRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: 'user',
                loadChildren: './user/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            }, {
                path: 'incidents',
                loadChildren: './incidents/incidents.module#IncidentsModule'
            }, {
                path: 'enquiries',
                loadChildren: './enquiries/enquiries.module#EnquiriesModule'
            }, {
                path: 'alerts',
                loadChildren: './alerts/alerts.module#AlertsModule'
            }, {
                path: 'userregistration',
                loadChildren: './userregistration/userregistration.module#UserregistrationModule'
            }, {
                path: 'reports',
                loadChildren: './reports/reports.module#ReportsModule'
            },
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
        children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdTableComponent = (function () {
    function MdTableComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], MdTableComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], MdTableComponent.prototype, "subtitle", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], MdTableComponent.prototype, "cardClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], MdTableComponent.prototype, "data", void 0);
    MdTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'md-table',
            template: __webpack_require__(615),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], MdTableComponent);
    return MdTableComponent;
}());
//# sourceMappingURL=md-table.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer-cmp',
            template: __webpack_require__(616)
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__(529);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterModule = (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterModule);
    return FooterModule;
}());
//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if ($('body').hasClass('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        $('#minimizeSidebar').click(function () {
            var $btn = $(this);
            if (misc.sidebar_mini_active == true) {
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
        $('#logout').click(function (e) {
            e.stopPropagation();
        });
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("navbar-cmp"), 
        __metadata('design:type', Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navbar-cmp',
            template: __webpack_require__(617)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__(531);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarModule);
    return NavbarModule;
}());
//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var sidebarTimer;
var SidebarComponent = (function () {
    function SidebarComponent(dataService) {
        this.dataService = dataService;
        this.getCurrentUsers();
        // this.getEnquiriesById();
    }
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $sidebar = $('.sidebar-wrapper');
            $sidebar.perfectScrollbar();
        }
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem; });
        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        }
        else {
            $('html').addClass('perfect-scrollbar-off');
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        // init Moving Tab after the view is initialisez
        setTimeout(function () {
            if (mda.movingTabInitialised == false) {
                mda.initMovingTab();
                mda.movingTabInitialised = true;
            }
        }, 10);
    };
    SidebarComponent.prototype.getCurrentUsers = function () {
        var _this = this;
        var data = this.dataService.getUserDetails().subscribe(function (response) {
            var str = response.json();
            _this.currentUser = str.fullname;
            _this.region = str.region;
            localStorage.setItem('userRegion', JSON.stringify(_this.region));
            _this.image = str.images;
            _this.role = str.user_role;
            localStorage.setItem('role', JSON.stringify(_this.role));
            if (_this.image == undefined) {
                _this.image = "../src/assets/img/image_placeholder.jpg";
            }
            else {
                _this.image = str.images.imageString;
            }
            console.log("fullname:", _this.currentUser);
            console.log("region:", _this.region);
            console.log("role:", _this.role);
            //console.log("Userpayno:",this.userPayNo)
            if (_this.role === '5a8a9c583b56740014487db4' || _this.role === '5a8a9c7b3b56740014487db5') {
                $('#manageUser').show();
            }
            else {
                $('#manageUser').hide();
            }
        });
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sidebar-cmp',
            template: __webpack_require__(618),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());
// The Moving Tab (the element that is moving on the sidebar, when you switch the pages) is depended on jQuery because it is doing a lot of calculations and changes based on Bootstrap collapse elements. If you have a better suggestion please send it to hello@creative-tim.com and we would be glad to talk more about this improvement. Thank you!
var mda = {
    movingTab: '<div class="sidebar-moving-tab"/>',
    isChild: false,
    sidebarMenuActive: '',
    movingTabInitialised: false,
    distance: 0,
    setMovingTabPosition: function ($currentActive) {
        $currentActive = mda.sidebarMenuActive;
        mda.distance = $currentActive.parent().position().top - 10;
        if ($currentActive.closest('.collapse').length != 0) {
            var parent_distance = $currentActive.closest('.collapse').parent().position().top;
            mda.distance = mda.distance + parent_distance;
        }
        mda.moveTab();
    },
    initMovingTab: function () {
        mda.movingTab = $(mda.movingTab);
        mda.sidebarMenuActive = $('.sidebar .nav-container > .nav > li.active > a:not([data-toggle="collapse"]');
        if (mda.sidebarMenuActive.length != 0) {
            mda.setMovingTabPosition(mda.sidebarMenuActive);
        }
        else {
            mda.sidebarMenuActive = $('.sidebar .nav-container .nav > li.active .collapse li.active > a');
            mda.isChild = true;
            this.setParentCollapse();
        }
        mda.sidebarMenuActive.parent().addClass('visible');
        var button_text = mda.sidebarMenuActive.html();
        mda.movingTab.html(button_text);
        $('.sidebar .nav-container').append(mda.movingTab);
        if (window.history && window.history.pushState) {
            $(window).on('popstate', function () {
                setTimeout(function () {
                    mda.sidebarMenuActive = $('.sidebar .nav-container .nav li.active a:not([data-toggle="collapse"])');
                    if (mda.isChild == true) {
                        this.setParentCollapse();
                    }
                    clearTimeout(sidebarTimer);
                    var $currentActive = mda.sidebarMenuActive;
                    $('.sidebar .nav-container .nav li').removeClass('visible');
                    var $movingTab = mda.movingTab;
                    $movingTab.addClass('moving');
                    $movingTab.css('padding-left', $currentActive.css('padding-left'));
                    var button_text = $currentActive.html();
                    mda.setMovingTabPosition($currentActive);
                    sidebarTimer = setTimeout(function () {
                        $movingTab.removeClass('moving');
                        $currentActive.parent().addClass('visible');
                    }, 650);
                    setTimeout(function () {
                        $movingTab.html(button_text);
                    }, 10);
                }, 10);
            });
        }
        $('.sidebar .nav .collapse').on('hidden.bs.collapse', function () {
            var $currentActive = mda.sidebarMenuActive;
            mda.distance = $currentActive.parent().position().top - 10;
            if ($currentActive.closest('.collapse').length != 0) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }
            mda.moveTab();
        });
        $('.sidebar .nav .collapse').on('shown.bs.collapse', function () {
            var $currentActive = mda.sidebarMenuActive;
            mda.distance = $currentActive.parent().position().top - 10;
            if ($currentActive.closest('.collapse').length != 0) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }
            mda.moveTab();
        });
        $('.sidebar .nav-container .nav > li > a:not([data-toggle="collapse"])').click(function () {
            mda.sidebarMenuActive = $(this);
            var $parent = $(this).parent();
            if (mda.sidebarMenuActive.closest('.collapse').length == 0) {
                mda.isChild = false;
            }
            // we call the animation of the moving tab
            clearTimeout(sidebarTimer);
            var $currentActive = mda.sidebarMenuActive;
            $('.sidebar .nav-container .nav li').removeClass('visible');
            var $movingTab = mda.movingTab;
            $movingTab.addClass('moving');
            $movingTab.css('padding-left', $currentActive.css('padding-left'));
            var button_text = $currentActive.html();
            var $currentActive = mda.sidebarMenuActive;
            mda.distance = $currentActive.parent().position().top - 10;
            if ($currentActive.closest('.collapse').length != 0) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }
            mda.moveTab();
            sidebarTimer = setTimeout(function () {
                $movingTab.removeClass('moving');
                $currentActive.parent().addClass('visible');
            }, 650);
            setTimeout(function () {
                $movingTab.html(button_text);
            }, 10);
        });
    },
    setParentCollapse: function () {
        if (mda.isChild == true) {
            var $sidebarParent = mda.sidebarMenuActive.parent().parent().parent();
            var collapseId = $sidebarParent.siblings('a').attr("href");
            $(collapseId).collapse("show");
            $(collapseId).collapse()
                .on('shown.bs.collapse', function () {
                mda.setMovingTabPosition();
            })
                .on('hidden.bs.collapse', function () {
                mda.setMovingTabPosition();
            });
        }
    },
    animateMovingTab: function () {
        clearTimeout(sidebarTimer);
        var $currentActive = mda.sidebarMenuActive;
        $('.sidebar .nav-container .nav li').removeClass('visible');
        var $movingTab = mda.movingTab;
        $movingTab.addClass('moving');
        $movingTab.css('padding-left', $currentActive.css('padding-left'));
        var button_text = $currentActive.html();
        mda.setMovingTabPosition($currentActive);
        sidebarTimer = setTimeout(function () {
            $movingTab.removeClass('moving');
            $currentActive.parent().addClass('visible');
        }, 650);
        setTimeout(function () {
            $movingTab.html(button_text);
        }, 10);
    },
    moveTab: function () {
        mda.movingTab.css({
            'transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-webkit-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-moz-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-ms-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-o-transform': 'translate3d(0px,' + mda.distance + 'px, 0)'
        });
    }
};
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__(533);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarModule);
    return SidebarModule;
}());
//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ 535:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-active-color=\"teal\" data-background-color=\"red\" data-image=\"../assets/img/tmpd-sb_bg.png\">\r\n        <sidebar-cmp></sidebar-cmp>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/tmpd-sb_bg.png)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <navbar-cmp></navbar-cmp>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"!isMap()\">\r\n            <footer-cmp></footer-cmp>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- Fixed Plugin configurator, used just for Demo Purpose -->\r\n    <!-- <div class=\"fixed-plugin\">\r\n        <div class=\"dropdown show-dropdown\">\r\n            <a href=\"#\" data-toggle=\"dropdown\">\r\n                <i class=\"fa fa-cog fa-2x\"> </i>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n                <li class=\"header-title\"> Sidebar Filters</li>\r\n                <li class=\"adjustments-line\">\r\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                        <div class=\"badge-colors text-center\">\r\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\r\n                            <span class=\"badge filter badge-blue\" data-color=\"blue\"></span>\r\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\r\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\r\n                            <span class=\"badge filter badge-red\" data-color=\"red\"></span>\r\n                            <span class=\"badge filter badge-white active\" data-color=\"white\"></span>\r\n                            <span class=\"badge filter badge-rose\" data-color=\"rose\"></span>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"header-title\">Sidebar Background</li>\r\n                <li class=\"adjustments-line\">\r\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n                        <div class=\"text-center\">\r\n                            <span class=\"badge filter badge-white\" data-color=\"white\"></span>\r\n                            <span class=\"badge filter badge-black\" data-color=\"black\"></span>\r\n                            <span class=\"badge filter badge-red active\" data-color=\"red\"></span>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"adjustments-line\">\r\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                        <p>Sidebar Mini</p>\r\n                        <div class=\"togglebutton switch-sidebar-mini\">\r\n                            <label>\r\n                                <input type=\"checkbox\" unchecked=\"\">\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"adjustments-line\">\r\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                        <p>Sidebar Image</p>\r\n                        <div class=\"togglebutton switch-sidebar-image\">\r\n                            <label>\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"header-title\">Images</li>\r\n                <li class=\"active\">\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"../assets/img/sidebar-1.jpg\" alt=\"\" />\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"../assets/img/sidebar-2.jpg\" alt=\"\" />\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"../assets/img/sidebar-3.jpg\" alt=\"\" />\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"../assets/img/sidebar-4.jpg\" alt=\"\" />\r\n                    </a>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </div> -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"content table-responsive\">\r\n    <table class=\"table\">\r\n      <tbody>\r\n          <tr *ngFor=\"let row of data.dataRows\">\r\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\r\n            <td>\r\n                <div class=\"flag\">\r\n                    <img src=\"../../../assets/img/flags/{{row[0]}}.png\" alt=\"\">\r\n                </div>\r\n            </td>\r\n            <td>\r\n                {{row[1]}}\r\n            </td>\r\n            <td class=\"text-right\">\r\n                {{row[2]}}\r\n            </td>\r\n            <td class=\"text-right\">\r\n                {{row[3]}}\r\n            </td>\r\n          </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"/dashboard\">\r\n                        Dashboard\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            &copy;\r\n            {{test | date: 'yyyy'}}\r\n            <a href=\"https://www.pulego.co.za\">Pulego Communications</a>\r\n        </p>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-minimize\">\r\n            <button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\">\r\n                <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\r\n                <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\r\n            </button>\r\n        </div>\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}} </a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <div *ngIf=\"isMobileMenu()\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                   <!--  <li>\r\n                         <a href=\"http://localhost:4200/dashboard\"><i class=\"material-icons\">dashboard</i>\r\n                        </a>\r\n                        \r\n                    </li> -->\r\n                    <!--  <li class=\"dropdown\">\r\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#pablo\" aria-expanded=\"false\">\r\n                            <i class=\"material-icons\">person</i>\r\n                            <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                            <b class=\"caret\"></b>\r\n                        <div class=\"ripple-container\"></div></a>\r\n                        <ul class=\"dropdown-menu\" >\r\n                            <li id=\"logout\">\r\n                                <a href=\"http://localhost:4200/pages/login\">Logout</a>\r\n                            </li>\r\n                           \r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"separator hidden-lg hidden-md\"></li>\r\n -->\r\n                  <!--   <li class=\"dropdown\">\r\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\"  aria-expanded=\"false\">\r\n                            <i class=\"material-icons\">person</i>\r\n                            <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                            <b class=\"caret\"></b>\r\n                        <div class=\"ripple-container\"></div></a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li>\r\n                                <a href=\"http://localhost:4200/pages/login\">Logout</a>\r\n                            </li>\r\n                           \r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"separator hidden-lg hidden-md\"></li> -->\r\n                </ul>\r\n                    <!-- <li class=\"dropdown\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"material-icons\">notifications</i>\r\n                            <span class=\"notification\">5</span>\r\n                            <p class=\"hidden-lg hidden-md\">\r\n                                Notifications\r\n                                <b class=\"caret\"></b>\r\n                            </p>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li>\r\n                                <a href=\"#\">Mike John responded to your email</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">You have 5 new tasks</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">You're now friend with Andrew</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">Another Notification</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">Another One</a>\r\n                            </li>\r\n                        </ul>\r\n                    </li> -->\r\n                    \r\n                <!-- <form class=\"navbar-form navbar-right\" role=\"search\">\r\n                    <div class=\"form-group form-search is-empty\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                        <span class=\"material-input\"></span>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"material-icons\">search</i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </form> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n        <div class=\"logo\">\r\n            <div class=\"logo-normal\">\r\n                <a href=\"http://localhost:4200/dashboard\" class=\"simple-text\">\r\n                    Co-City\r\n                </a>\r\n            </div>\r\n\r\n            <div class=\"logo-img\">\r\n                <img src=\"/assets/img/co_city-Icon.png\"/>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"sidebar-wrapper\">\r\n\r\n            <div class=\"user\">\r\n                <div class=\"photo\">\r\n                    <img src=\"{{image}}\" />\r\n                </div>\r\n                <div class=\"info\">\r\n                    <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\r\n                        <span>\r\n                            {{currentUser}}\r\n                            <b class=\"caret\"></b>\r\n                        </span>\r\n                    </a>\r\n                    <div class=\"collapse\" id=\"collapseExample\">\r\n                        <ul class=\"nav\">\r\n                            <li>\r\n                                <a href=\"user/\">\r\n                                    <span class=\"sidebar-mini\">MP</span>\r\n                                    <span class=\"sidebar-normal\">My Profile</span>\r\n                                </a>\r\n                            </li>\r\n                             <li>\r\n                                <a href=\"pages/login\">\r\n                                    <span class=\"sidebar-mini\">L</span>\r\n                                    <span class=\"sidebar-normal\">Logout</span>\r\n                                </a>\r\n                            </li>\r\n\r\n\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"isNotMobileMenu()\">\r\n\r\n            </div>\r\n            <div class=\"nav-container\">\r\n                <ul class=\"nav\">\r\n                    <li routerLinkActive=\"active\">\r\n                        <a  [routerLink]=\"[menuItems[0].path]\">\r\n                            <i class=\"{{menuItems[0].icon}}\">dashboard</i>\r\n\r\n                            <p>{{menuItems[0].title}}</p>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <!--Incident Section-->\r\n                    <li routerLinkActive=\"active\">\r\n                        <a  [routerLink]=\"[menuItems[27].path]\"><!--the page-->\r\n                          <i class=\"{{menuItems[27].icon}}\">chat</i>\r\n                            <p>{{menuItems[27].title}}</p>\r\n                        </a>\r\n                    </li>\r\n                    <!-- incident section end here-->\r\n\r\n\r\n                    <li routerLinkActive=\"active\">\r\n                        <a  [routerLink]=\"[menuItems[28].path]\">\r\n                            <i class=\"{{menuItems[28].icon}}\">record_voice_over</i>\r\n\r\n                            <p>{{menuItems[28].title}}</p>\r\n                        </a>\r\n                    </li>\r\n\r\n                     <li routerLinkActive=\"active\">\r\n                        <a  [routerLink]=\"[menuItems[29].path]\">\r\n                            <i class=\"{{menuItems[29].icon}}\">notifications</i>\r\n\r\n                            <p>{{menuItems[29].title}}</p>\r\n                        </a>\r\n                    </li>\r\n                    <li routerLinkActive=\"active\" id=\"manageUser\">\r\n                        <a  [routerLink]=\"[menuItems[30].path]\">\r\n                            <i class=\"{{menuItems[30].icon}}\">person_add</i>\r\n\r\n                            <p>{{menuItems[30].title}}</p>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li routerLinkActive=\"active\">\r\n                        <a  [routerLink]=\"[menuItems[32].path]\">\r\n                            <i class=\"{{menuItems[32].icon}}\">trending_up</i>\r\n\r\n                            <p>{{menuItems[32].title}}</p>\r\n                        </a>\r\n                    </li>\r\n\r\n\r\n                </ul>\r\n            </div>\r\n\r\n        </div>\r\n"

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(384);


/***/ })

},[887]);
//# sourceMappingURL=main.bundle.js.map