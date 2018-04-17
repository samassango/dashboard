webpackJsonp([10,20],{

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reports_component__ = __webpack_require__(967);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsRoutes; });

var ReportsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__reports_component__["a" /* ReportsComponent */]
            }]
    }
];
//# sourceMappingURL=reports.routing.js.map

/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(907)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1192:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!-- =========================     Date Range Picker (Begin)     ========================= -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-6 col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\" data-background-color=\"orange\">\r\n            <i class=\"material-icons\">today</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"card-title\">Date Range</h4>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 form-group\">\r\n                <label class=\"label-control\">From:</label>\r\n                <input type=\"text\" class=\"col-md-3 form-control datepicker\" id=\"datetimepicker1\">\r\n              </div>\r\n              <div class=\"col-sm-6 form-group\">\r\n                <label class=\"label-control\">To:</label>\r\n                <input type=\"text\" class=\"col-md-2 form-control datepicker\" id=\"datetimepicker2\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-sm-6 col-md-6\">\r\n        <div class=\"card card-stats\">\r\n          <div class=\"card-header\" data-background-color=\"red\">\r\n            <i class=\"material-icons\">assignment</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <p class=\"category\">All Incidents</p>\r\n            <h3 class=\"card-title\" id=\"number-records-nd\"></h3>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n        <div class=\"card card-stats\">\r\n          <div class=\"card-header\" data-background-color=\"red\">\r\n            <i class=\"material-icons\">my_location</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <p class=\"category\">Incidents with Location</p>\r\n            <h3 class=\"card-title\" id=\"number-incidents-loc\"></h3>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n      <!-- =========================     ..Date Range Picker (End)..     ========================= -->\r\n\r\n\r\n      <!-- =========================     Number of Incidents (Begin)     ========================= -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\" data-background-color=\"teal\">\r\n            <i class=\"material-icons\">insert_chart</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"card-title\">\r\n              Number of Incidents<small> - over time</small>\r\n            </h4>\r\n            <div class=\"toolbar\">\r\n              <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Reset\" id=\"time\" style=\"margin-right: 4px;\">\r\n                <i class=\"material-icons\">replay</i>\r\n              </button>\r\n            </div>\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-3\"><small><span id=\"date1\"></span></small></div>\r\n                  <div class=\"col-sm-3\"><small><span id=\"date2\"></span></small></div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"dropdown\">\r\n                     \r\n                      <select id=\"filterDays\" class=\"dropdown-toggle btn btn-primary btn-block\" data-toggle=\"dropdown\" data-style=\"select-with-transition\" data-size=\"7\" title=\"Filter days\" required>\r\n                        <option selected disabled>Filter days</option>\r\n                        <option value=\"filterDay\">One day</option>\r\n                        <option value=\"filterWeek\">Week</option>\r\n                        <option value=\"filterMonth\">Month</option>\r\n                        <option value=\"filter90Days\">90 days</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <div id=\"time-chart\" class=\"ct-chart\" style=\"width: 100%; height: 100%\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- =========================     Number of Incidents (End)     ========================= -->\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <!-- region begin -->\r\n      <div class=\"col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header-icon card-header\" data-background-color=\"blue\">\r\n            <i class=\"material-icons\">location_on</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"card-title\">Region</h4>\r\n            <div id=\"region-row-chart\" class=\"ct-chart\"></div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 col-sm-offset-4\">\r\n                <ul class=\"pagination region\">\r\n               \r\n                  <li class=\"active\"><button type=\"button\" rel=\"tooltip\" class=\"btn btn-primary\" id=\"region_top\" style=\" padding: 8px 9px;\">Top 10</button></li>\r\n                  <li><button type=\"button\" rel=\"tooltip\" class=\"btn btn-primary\" id=\"region_all\" style=\" padding: 8px 20px;\">All</button></li>\r\n                  </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- region end -->\r\n\r\n      <!-- category begin -->\r\n      <div class=\"col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n            <i class=\"material-icons\">bookmark</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"card-title\">Category</h4>\r\n            <div id=\"area-row-chart\" class=\"ct-chart\"></div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 col-sm-offset-4\">\r\n                <ul class=\"pagination area\">\r\n               \r\n                  <li class=\"active\"><button type=\"button\" rel=\"tooltip\" class=\"btn btn-primary\" id=\"area-top\" style=\" padding: 8px 9px;\">Top 10</button></li>\r\n                  <li><button type=\"button\" rel=\"tooltip\" class=\"btn btn-primary\" id=\"area_all\" style=\" padding: 8px 20px;\">All</button></li>\r\n                  </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- category end -->\r\n\r\n      <!-- incident type begin -->\r\n      <div class=\"col-lg-4 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n            <i class=\"material-icons\">grade</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"card-title\">Type</h4>\r\n            <div id=\"type-row-chart\" class=\"ct-chart\"></div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 col-sm-offset-4\">\r\n                <ul class=\"pagination type\">\r\n                  <li class=\"active\"><button type=\"button\" rel=\"tooltip\" class=\"btn btn-primary\" id=\"type_top\" style=\" padding: 8px 9px;\">Top 10</button></li>\r\n                  <li><button type=\"button\" rel=\"tooltip\" class=\"btn btn-primary\" id=\"type_all\" style=\" padding: 8px 20px;\">All</button></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- incident type end -->\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n      <!-- =========================     Map (Begin)     ========================= -->\r\n      <div class=\"col-lg-7 col-md-7 col-sm-7\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\" data-background-color=\"red\">\r\n            <i class=\"material-icons\">location_on</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"card-title\">Map</h4>\r\n              <div class=\"toolbar\">\r\n                <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Reset\" id=\"map_all\" style=\"margin-right: 4px\">\r\n                  <i class=\"material-icons\">replay</i>\r\n                </button>\r\n              </div>\r\n              <div id=\"map\" style=\"width: auto; height: 430px\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- =========================     Map (End)     ========================= -->\r\n\r\n      <!-- ==========================     Top 10 Pie Chart (Begin)     ========================= -->\r\n      <div class=\"col-md-5\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\" data-background-color=\"blue-grey\">\r\n            <i class=\"material-icons\">insert_chart</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"card-title\">Top 10 Incidents\r\n              <small>- By Type</small>\r\n            </h4>\r\n            <div id=\"channel-pie-chart\" class=\"ct-chart\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ==========================     Top 10 Pie Chart (End)     ========================= -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-10\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\" data-background-color=\"red\">\r\n            <i class=\"material-icons\">access_time</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"card-title\">Day vs. Hour Heatmap</h4>\r\n            <div class=\"toolbar\">\r\n              <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Reset Heatmap\" id=\"heatmap\" style=\"margin-right: 4px\">\r\n                <i class=\"material-icons\">replay</i>\r\n              </button>\r\n            </div>\r\n            <div id=\"heatmap-chart\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reports_component__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reports_routing__ = __webpack_require__(1123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { DataFilterPipe }   from './data-filter.pipe';
var ReportsModule = (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__reports_routing__["a" /* ReportsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__reports_component__["a" /* ReportsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ReportsModule);
    return ReportsModule;
}());
//# sourceMappingURL=reports.module.js.map

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

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportsComponent = (function () {
    function ReportsComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        // if (window.location.href.indexOf('reload')==-1) {
        //  window.location.replace(window.location.href+'?reload');
        // }
    }
    ReportsComponent.prototype.ngOnInit = function () {
        //  Init Bootstrap Select Picker
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker();
        }
        $('.datepicker').datetimepicker({
            format: 'DD/MM/YYYY',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove',
                inline: true
            }
        });
    };
    ReportsComponent.prototype.ngAfterViewInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    ReportsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(1192),
            styles: [__webpack_require__(1150)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], ReportsComponent);
    return ReportsComponent;
    var _a;
}());
//# sourceMappingURL=reports.component.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map