webpackJsonp([9,20],{

/***/ 1094:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alerts_component__ = __webpack_require__(930);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsRoutes; });

var AlertsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__alerts_component__["a" /* AlertsComponent */]
            }]
    }
];
//# sourceMappingURL=alerts.routing.js.map

/***/ }),

/***/ 1095:
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

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(907)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1155:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\" data-background-color=\"blue-grey\">\r\n            <i class=\"material-icons\">notifications</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"card-title\">Alerts Management</h4>\r\n\r\n<!-- =========================     Toolbar Buttons (Begin)     ========================= -->\r\n            <div class=\"toolbar\">\r\n              <!-- Capture Button (Begin) -->\r\n              <a href=\"forms/addalerts\" id=\"alertCaptureId\">\r\n                <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Capture a new notification\" id=\"btn-add\"  style=\"margin: 2px;\">\r\n                  <i class=\"material-icons\">add</i>\r\n                </button>\r\n              </a>\r\n              <!-- Capture Button (End) -->\r\n\r\n              <!-- Search Button (Begin) -->\r\n              <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Search notification\" id=\"btn-filter\" (click)=\"showFilter();\" value=\"on\" style=\"margin: 2px;\">\r\n                <i class=\"material-icons\">search</i>\r\n              </button>\r\n              <!-- Search Button (End) -->\r\n\r\n              <!-- Export Button (Begin) -->\r\n\r\n                <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Export to Excel\" (click)=\"tableToExcel('datatables', 'Incident Report')\" value=\"Export to Excel\" style=\"margin: 2px;\">\r\n                  <i class=\"material-icons\">file_download</i>\r\n                </button>\r\n\r\n              <!-- Export Button (End) -->\r\n            </div>\r\n<!-- =========================     Toolbar Buttons (End)     ========================= -->\r\n\r\n<!-- =========================     Search Bar (Begin)     ========================= -->\r\n            <div id=\"search\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Search Records</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" />\r\n                  <span class=\"help-block\">Type here to search</span>\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            </div>\r\n<!-- =========================     Search Bar (end)     ========================= -->\r\n\r\n<!-- =========================     Table (Begin)     ========================= -->\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"material-datatables table-responsive\">\r\n                <table class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width: 100%\" id=\"datatables\" [mfData]=\"data | dataFilter:'title,message,datecaptured,sentBy,image,is_sent':filterQuery\" #mf=\"mfDataTable\"\r\n                [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th style=\"display:none;\"></th>\r\n                      <th><mfDefaultSorter by=\"title\">Title</mfDefaultSorter></th>\r\n                      <th><mfDefaultSorter by=\"datecaptured\">Date</mfDefaultSorter></th>\r\n                      <th><mfDefaultSorter by=\"sentBy\">Operator</mfDefaultSorter></th>\r\n                      <th><mfDefaultSorter by=\"is_sent\">Status</mfDefaultSorter></th>\r\n                      <th class=\"disabled-sorting text-right\">Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of mf.data\">\r\n                      <td style=\"display:none;\">{{item.id}}</td>\r\n                      <td>{{item.title}}</td>\r\n                      <td>{{item.datecaptured}}</td>\r\n                      <td>{{item.sentBy}}</td>\r\n                       <td>{{item.is_sent}}</td>\r\n                       <!-- *ngIf=\"item.is_sent === true as value; then Sent; else NotSent\" -->\r\n                      <td class=\"td-actions text-right\">\r\n                        <a href=\"forms/viewalerts\">\r\n                          <button type=\"button\" rel=\"tooltip\" title=\"View notification details\" class=\"btn btn-primary\" (click)= \"Onclick();\">\r\n                            <i class=\"material-icons\">visibility</i>\r\n                          </button>\r\n                        </a>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n\r\n                  <tfoot>\r\n                    <label id=\"results\">No Alerts Data at the moment</label>\r\n                    <tr>\r\n                      <th style=\"display:none;\"></th>\r\n                      <th>Title</th>\r\n                      <th>Date</th>\r\n                      <th>Operator</th>\r\n                     <th>Status</th>\r\n                      <th class=\"text-right\">Actions</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"7\">\r\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[10,25,50,100]\"></mfBootstrapPaginator>\r\n                      </td>\r\n                    </tr>\r\n                  </tfoot>\r\n                </table>\r\n              </div>\r\n            </div>\r\n<!-- =========================     Table (End)     ========================= -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alerts_component__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alerts_routing__ = __webpack_require__(1094);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__ = __webpack_require__(1095);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsModule", function() { return AlertsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AlertsModule = (function () {
    function AlertsModule() {
    }
    AlertsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__alerts_routing__["a" /* AlertsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__alerts_component__["a" /* AlertsComponent */], __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__["a" /* DataFilterPipe */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AlertsModule);
    return AlertsModule;
}());
//# sourceMappingURL=alerts.module.js.map

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

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertsComponent = (function () {
    function AlertsComponent(dataService) {
        this.dataService = dataService;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "datecaptured";
        this.sortOrder = "desc";
        // if (window.location.href.indexOf('reload')==-1) {
        //  window.location.replace(window.location.href+'?reload');
        // }
        this.getNotifications();
    }
    AlertsComponent.prototype.ngOnInit = function () {
        $("#search").hide();
        $("#results").hide();
        var role = JSON.parse(localStorage.getItem('role'));
        // console.log("alertsRole",role);
        //if role is equal to communications department then show add button
        if (role === "5a8a9c583b56740014487db4" ||
            role === "5a8a9c7b3b56740014487db5" ||
            role === "5a8a9ce23b56740014487db8" ||
            role === "5a8a9d033b56740014487db9") {
            $("#btn-add").show();
        }
        else {
            $("#btn-add").hide();
        }
    };
    AlertsComponent.prototype.ngAfterViewInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    //Code to pull all incidents from the service
    AlertsComponent.prototype.getNotifications = function () {
        var _this = this;
        this.dataService.getNotifications().subscribe(function (data) {
            _this.data = data.json();
            console.log("data 0", _this.data);
            if (_this.data.length == 0) {
                $("#results").show();
            }
            else {
                $("#results").hide();
            }
        });
    };
    AlertsComponent.prototype.tableToExcel = function (table, name) {
        var uri = 'data:application/vnd.ms-excel;base64,', template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>', base64 = function (s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))); }, format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }); };
        if (!table.nodeType)
            table = document.getElementById(table);
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML };
        window.location.href = uri + base64(format(template, ctx));
    };
    AlertsComponent.prototype.showFilter = function () {
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
    AlertsComponent.prototype.Onclick = function () {
        $('#datatables tr').click(function () {
            var $row = $(this).closest("tr"), // Finds the closest row <tr>
            $tds = $row.find("td:nth-child(1)"); // Finds the 1nd <td> element
            $.each($tds, function () {
                this.selectednotificationId = $(this).text();
                localStorage.setItem('selectedId', JSON.stringify(this.selectednotificationId));
                console.log("selectedId", JSON.stringify(this.selectednotificationId)); // Prints out the text within the <td>
                //alert( this.selectednotificationId);
            });
        });
    };
    AlertsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(1155),
            styles: [__webpack_require__(1133)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], AlertsComponent);
    return AlertsComponent;
    var _a;
}());
//# sourceMappingURL=alerts.component.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map