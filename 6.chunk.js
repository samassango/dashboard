webpackJsonp([6,20],{

/***/ 1128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//declare var _:any;
var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    DataFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "dataFilter"
        }), 
        __metadata('design:paramtypes', [])
    ], DataFilterPipe);
    return DataFilterPipe;
}());
//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ 1129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userregistration_component__ = __webpack_require__(973);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserregistrationRoutes; });

var UserregistrationRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__userregistration_component__["a" /* UserregistrationComponent */]
            }]
    }
];
//# sourceMappingURL=userregistration.routing.js.map

/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(907)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1198:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\" data-background-color=\"blue-grey\">\r\n            <i class=\"material-icons\">group</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"card-title\">User Management</h4>\r\n            \r\n<!-- =========================     Toolbar Buttons (Begin)     ========================= -->            \r\n            <div class=\"toolbar\">\r\n              \r\n              <!-- Capture Button (Begin) -->\r\n              <a href=\"forms/addusers\">\r\n                <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Capture a new user\" style=\"margin-right: 4px;\">\r\n                  <i class=\"material-icons\">person_add</i>\r\n                </button>\r\n              </a>\r\n              <!-- Capture Button (End) -->\r\n\r\n              <!-- Search Button (Begin) -->\r\n              <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Search user\" id=\"btn-filter\" (click)=\"showFilter ();\" value=\"on\">\r\n                <i class=\"material-icons\">search</i>\r\n              </button>\r\n              <!-- Seach Button (end) -->\r\n\r\n              <!-- Export Button (Begin) -->\r\n            \r\n                <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Export to Excel\" (click)=\"tableToExcel('datatables', 'Incident Report')\" value=\"Export to Excel\" style=\"margin-left: 4px;\">\r\n                  <i class=\"material-icons\">file_download</i>\r\n                </button>\r\n             \r\n              <!-- Export Button (End) -->\r\n            </div>\r\n<!-- =========================     Toolbar Buttons (End)     ========================== -->\r\n\r\n<!-- =========================     Search Bar (Begin)     ========================= -->\r\n            <div id=\"search\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Search Records</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" />\r\n                  <span class=\"help-block\">Type here to search</span>\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            </div>\r\n<!-- =========================     Search Bar (End)     ========================= -->\r\n\r\n<!-- =========================     Table (Begin)     ========================= -->\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"material-datatables table-responsive\">\r\n                <table class=\"table table-striped table-no-bordered table-hover\" id=\"datatables\" cellspacing=\"0\" width=\"100%\" style=\"width: 100%\" [mfData]=\"data | dataFilter:'payNumber,idNumber,username,fullname,address,datecaptured':filterQuery\" #mf=\"mfDataTable\"\r\n                [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                  <thead>\r\n                    <tr>\r\n                     <th style=\"display:none;\"></th>\r\n                      <th><mfDefaultSorter by=\"payNumber\">Pay Num</mfDefaultSorter></th>\r\n                      <th><mfDefaultSorter by=\"idNumber\">Id Num</mfDefaultSorter></th>\r\n                      <th><mfDefaultSorter by=\"username\">Username</mfDefaultSorter></th>\r\n                      <th><mfDefaultSorter by=\"fullname\">Fullname</mfDefaultSorter></th>\r\n                      <th><mfDefaultSorter by=\"address\">Address</mfDefaultSorter></th>\r\n                      <th><mfDefaultSorter by=\"region\">Region</mfDefaultSorter></th>\r\n                      <th class=\"disabled-sorting text-right\">Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of mf.data\">\r\n                    <td style=\"display:none;\">{{item.id}}</td>\r\n                      <td>{{item.payNumber}}</td>\r\n                      <td>{{item.idNumber}}</td>\r\n                      <td>{{item.username}}</td>\r\n                      <td>{{item.fullname}}</td>\r\n                      <td>{{item.address}}</td>\r\n                      <td>{{item.user_region.name}}</td>\r\n                      <td class=\"td-actions text-right\">\r\n\r\n                        <a href=\"forms/viewusers\">\r\n                          <button type=\"button\" rel=\"tooltip\" title=\"View user details\" class=\"btn btn-primary\" (click)=\"Onclick();\">\r\n                            <i class=\"material-icons\">visibility</i>\r\n                          </button>\r\n                        </a>\r\n\r\n                        <a href=\"forms/editusers\">\r\n                          <button type=\"button\" rel=\"tooltip\" title=\"Edit user details\" class=\"btn btn-warning\" (click)=\"Onclick();\">\r\n                            <i class=\"material-icons\">mode_edit</i>\r\n                          </button>\r\n                        </a>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n\r\n                  <tfoot id=\"form-filter\">\r\n                    <label id=\"results\">No users Data at the moment</label>\r\n                    <tr>\r\n                     <th style=\"display:none;\"></th>\r\n                      <th>Pay Num</th>\r\n                      <th>Id Num</th>\r\n                      <th>Username</th>\r\n                      <th>Fullname</th>\r\n                      <th>Address</th>\r\n                      <th>Region</th>\r\n                      <th class=\"text-right\">Actions</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"7\">\r\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[10,25,50,100]\"></mfBootstrapPaginator>\r\n                      </td>\r\n                    </tr>\r\n                  </tfoot>\r\n                </table>\r\n              </div>\r\n            </div>\r\n<!-- =========================     Table (End)     ========================= -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userregistration_component__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userregistration_routing__ = __webpack_require__(1129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__ = __webpack_require__(1128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserregistrationModule", function() { return UserregistrationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserregistrationModule = (function () {
    function UserregistrationModule() {
    }
    UserregistrationModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__userregistration_routing__["a" /* UserregistrationRoutes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__userregistration_component__["a" /* UserregistrationComponent */], __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__["a" /* DataFilterPipe */]]
        }), 
        __metadata('design:paramtypes', [])
    ], UserregistrationModule);
    return UserregistrationModule;
}());
//# sourceMappingURL=userregistration.module.js.map

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

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserregistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserregistrationComponent = (function () {
    function UserregistrationComponent(dataService) {
        this.dataService = dataService;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "datecaptured";
        this.sortOrder = "desc";
        // if (window.location.href.indexOf('reload')==-1) {
        //  window.location.replace(window.location.href+'?reload');
        // } 
        this.getUsers();
    }
    UserregistrationComponent.prototype.ngOnInit = function () { $("#search").hide(); $("#results").hide(); };
    //Code to pull all incidents from the service
    UserregistrationComponent.prototype.getUsers = function () {
        var _this = this;
        this.dataService.getUsers().subscribe(function (data) {
            _this.data = data.json();
            console.log("User data", _this.data);
            if (_this.data.length == 0) {
                $("#results").show();
            }
            else {
                $("#results").hide();
            }
        });
    };
    UserregistrationComponent.prototype.ngAfterViewInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    UserregistrationComponent.prototype.tableToExcel = function (table, name) {
        var uri = 'data:application/vnd.ms-excel;base64,', template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>', base64 = function (s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))); }, format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }); };
        if (!table.nodeType)
            table = document.getElementById(table);
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML };
        window.location.href = uri + base64(format(template, ctx));
    };
    UserregistrationComponent.prototype.showFilter = function () {
        if ($('#btn-filter').attr("value") == "on") {
            $('#search').show();
            $('#btn-filter').attr("value", "off");
        }
        else {
            $('#search').hide();
            $('#btn-filter').attr("value", "on");
        }
    };
    //public formModel={};
    UserregistrationComponent.prototype.Onclick = function () {
        $('#datatables tr').click(function () {
            var $row = $(this).closest("tr"), // Finds the closest row <tr> 
            $tds = $row.find("td:nth-child(1)"); // Finds the 1nd <td> element
            $.each($tds, function () {
                this.selectedUserId = $(this).text();
                // alert("selectedId: " + this.selectedUserId); 
                localStorage.setItem('selectedUserId', JSON.stringify(this.selectedUserId));
                console.log("selectedUserId", JSON.stringify(this.selectedUserId)); // Prints out the text within the <td>
                //alert("selectedId",this.selectedUserId); 
            });
        });
    };
    UserregistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userregistration',
            template: __webpack_require__(1198),
            styles: [__webpack_require__(1151)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], UserregistrationComponent);
    return UserregistrationComponent;
    var _a;
}());
//# sourceMappingURL=userregistration.component.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map