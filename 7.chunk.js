webpackJsonp([7,20],{

/***/ 1117:
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

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__incidents_component__ = __webpack_require__(959);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentsRoutes; });

var IncidentsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__incidents_component__["a" /* IncidentsComponent */]
            }]
    }
];
//# sourceMappingURL=incidents.routing.js.map

/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(907)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1184:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\" data-background-color=\"blue-grey\">\r\n            <i class=\"material-icons\">chat</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"card-title\">Incident Management</h4>\r\n\r\n<!-- =========================     Toolbar Icons (Begin)     ========================= -->\r\n            <div class=\"toolbar\">\r\n              <!-- Capture Button (Begin) -->\r\n              <a href=\"forms/addincidents\" id=\"addincidentsId\">\r\n                <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Capture a new incident\" style=\"margin-right: 4px;\">\r\n                  <i class=\"material-icons\">add</i>\r\n                </button>\r\n              </a>\r\n              <!-- Capture Button (End) -->\r\n\r\n              <!-- Search Button (Begin) -->\r\n              <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Search incident\" id=\"btn-filter\" (click)=\"showFilter();\" value=\"on\">\r\n                <i class=\"material-icons\">search</i>\r\n              </button>\r\n              <!-- Search Button (End) -->\r\n\r\n              <!-- Export Button (Begin) -->\r\n\r\n                <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Export to Excel\" (click)=\"tableToExcel('datatables', 'Incident Report')\" value=\"Export to Excel\" style=\"margin-left: 4px;\">\r\n                  <i class=\"material-icons\">file_download</i>\r\n                </button>\r\n\r\n              <!-- Export Button (End) -->\r\n            </div>\r\n<!-- =========================     Toolbar Icons (End)     ========================= -->\r\n\r\n<!-- =========================     Search Bar (Begin)      ========================= -->\r\n            <div id=\"search\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Search Records</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" />\r\n                  <span class=\"help-block\">Type here to search</span>\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            </div>\r\n<!-- =========================     Search Bar (End)     ========================= -->\r\n\r\n<!-- =========================     Table (Begin)     ========================= -->\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"material-datatables table-responsive\">\r\n                <table class=\"table table-striped table-no-bordered table-hover\" id=\"datatables\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\" [mfData]=\"data | dataFilter:'refNumber,reportedOn,capturedBy':filterQuery\" #mf=\"mfDataTable\"\r\n                [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th style=\"display:none;\"></th>\r\n                      <th>Ref Number</th>\r\n                      <th>Category</th>\r\n                      <th>Type</th>\r\n                      <th>Region</th>\r\n                      <th>Date</th>\r\n                      <th>Status</th>\r\n                      <th>Operator</th>\r\n                      <th class=\"disabled-sorting text-right\">Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                    <tr *ngFor=\"let type of mf.data\">\r\n                      <td style=\"display:none;\">{{type.id}}</td>\r\n                      <td>{{type.refNumber}}</td>\r\n                      <td>{{type.incident_category.name}}</td>\r\n                      <td>{{type.incident_subcategory.name}}</td>\r\n                      <td>{{type.incident_region.name}}</td>\r\n                      <td>{{type.reportedOn}}</td>\r\n                      <td>{{type.incident_status.name}}</td>\r\n                      <td>{{type.capturedBy}}</td>\r\n                      <td class=\"td-actions text-right\">\r\n                        <a href=\"forms/viewincidents\">\r\n                          <button type=\"button\" (click)=\"Onclick();\"  rel=\"tooltip\" title=\"View incident details\" class=\"btn btn-primary\">\r\n                            <i class=\"material-icons\">visibility</i>\r\n                          </button>\r\n                        </a>\r\n\r\n                        <a href=\"forms/changestatus\">\r\n                          <button type=\"button\" rel=\"tooltip\" (click)=\"Onclick();\" id=\"update\" title=\"Update incident status\" class=\"btn btn-warning\">\r\n                            <i class=\"material-icons\">update</i>\r\n                          </button>\r\n                        </a>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n\r\n                  <tfoot id=\"form-filter\">\r\n                    <label id=\"results\">No Incidents Data at the moment</label>\r\n                    <tr>\r\n                     <th style=\"display:none;\"></th>\r\n                      <th>Ref Number</th>\r\n                      <th>Category</th>\r\n                      <th>Type</th>\r\n                      <th>Region</th>\r\n                      <th>Date</th>\r\n                      <th>Status</th>\r\n                      <th>Operator</th>\r\n                      <th class=\"text-right\">Actions</th>\r\n                    </tr>\r\n                    <br>\r\n                    <tr>\r\n                      <td colspan=\"12\">\r\n\r\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[10,25,50,100]\"></mfBootstrapPaginator>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"12\" style=\"align-items: center\">\r\n\r\n                        <button type=\"button\" (click)=\"getIncidentsWithNext()\"  rel=\"tooltip\" title=\"View more incident\" class=\"btn btn-primary\">\r\n                          View More\r\n                        </button>\r\n\r\n                      </td>\r\n                    </tr>\r\n                  </tfoot>\r\n                </table>\r\n              </div>\r\n            </div>\r\n<!-- =========================     Table (End)     ========================= -->\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <script>\r\n\r\nfunction timedRefresh(timeoutPeriod) {\r\n  setTimeout(\"location.reload(true);\",timeoutPeriod);\r\n}\r\n\r\nwindow.onload = timedRefresh(100);\r\n\r\n\r\n</script>\r\n<script>\r\n  alert(\"yes\");\r\ndocument.getElementById(\"datatables\").addEventListener(\"load\", myFunction);\r\n\r\nfunction myFunction() {\r\n    location.reload(true);\r\n}\r\n</script> -->\r\n"

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__incidents_component__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__incidents_routing__ = __webpack_require__(1118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__ = __webpack_require__(1117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsModule", function() { return IncidentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var IncidentsModule = (function () {
    function IncidentsModule() {
    }
    IncidentsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__incidents_routing__["a" /* IncidentsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__incidents_component__["a" /* IncidentsComponent */], __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__["a" /* DataFilterPipe */]]
        }), 
        __metadata('design:paramtypes', [])
    ], IncidentsModule);
    return IncidentsModule;
}());
//# sourceMappingURL=incidents.module.js.map

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

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IncidentsComponent = (function () {
    function IncidentsComponent(dataService) {
        this.dataService = dataService;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "reportedOn";
        this.sortOrder = "desc";
        this.loading = true;
        // if (window.location.href.indexOf('reload')==-1) {
        //  window.location.replace(window.location.href+'?reload');
        // }
        this.getIncidents();
    }
    IncidentsComponent.prototype.ngOnInit = function () {
        $("#search").hide();
        $("#results").hide();
        //$("addincidentsId").show();
        var role = JSON.parse(localStorage.getItem('role'));
        // console.log("alertsRole",role);
        //if role is equal to communications department then show add button
        if (role === "5a93fa58360f060014c2cff1") {
            $("#addincidentsId").hide();
        }
        else {
            $("#addincidentsId").show();
        }
    };
    IncidentsComponent.prototype.ngAfterViewInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    //Code to pull all incidents from the service
    IncidentsComponent.prototype.getIncidents = function () {
        var _this = this;
        this.dataService.getIncidents().subscribe(function (data) {
            _this.data = data.json();
            _this.loading = false;
            console.log("data: ", _this.data);
            if (_this.data.length == 0) {
                $("#results").show();
            }
            else {
                $("#results").hide();
            }
        });
    };
    IncidentsComponent.prototype.getIncidentsWithNext = function () {
        var _this = this;
        var limit = 10;
        var skip = this.data.length;
        this.dataService.getIncidentsWithNext(limit, skip).subscribe(function (data) {
            _this.data = _this.data.concat(data.json());
            console.log("this.data", _this.data);
            _this.loading = false;
            console.log("data: ", _this.data);
            if (_this.data.length == 0) {
                $("#results").show();
            }
            else {
                $("#results").hide();
            }
        });
    };
    IncidentsComponent.prototype.tableToExcel = function (table, name) {
        var uri = 'data:application/vnd.ms-excel;base64,', template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>', base64 = function (s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))); }, format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }); };
        if (!table.nodeType)
            table = document.getElementById(table);
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML };
        window.location.href = uri + base64(format(template, ctx));
    };
    IncidentsComponent.prototype.showFilter = function () {
        if ($('#btn-filter').attr("value") == "on") {
            $('#search').show();
            $('#btn-filter').attr("value", "off");
        }
        else {
            $('#search').hide();
            $('#btn-filter').attr("value", "on");
        }
    };
    IncidentsComponent.prototype.Onclick = function () {
        //picks the selected incident ID
        $('#datatables tr').click(function () {
            var $row = $(this).closest("tr"), // Finds the closest row <tr>
            $tds = $row.find("td:nth-child(1)"); // Finds the 1nd <td> element
            $.each($tds, function () {
                this.selectedIncidentId = $(this).text();
                localStorage.setItem('selectedIncidentId', JSON.stringify(this.selectedIncidentId));
                // console.log("selectedIncidentId", JSON.stringify(this.selectedIncidentId)); // Prints out the text within the <td>
            });
        });
        //picks the selected Reference ID
        $('#datatables tr').click(function () {
            var $row = $(this).closest("tr"), // Finds the closest row <tr>
            $tds = $row.find("td:nth-child(2)"); // Finds the 2nd <td> element
            $.each($tds, function () {
                this.selectedIncidentRefNum = $(this).text();
                localStorage.setItem('selectedRefNumber', JSON.stringify(this.selectedIncidentRefNum));
                // console.log("selectedRefNumber", JSON.stringify(this.selectedIncidentRefNum)); // Prints out the text within the <td>
            });
        });
        //picks the selected Operator ID
        $('#datatables tr').click(function () {
            var $row = $(this).closest("tr"), // Finds the closest row <tr>
            $tds = $row.find("td:nth-child(8)"); // Finds the 8th <td> element
            $.each($tds, function () {
                this.selectedIncidentOperator = $(this).text();
                localStorage.setItem('selectedIncidentOperator', JSON.stringify(this.selectedIncidentOperator));
                // console.log("selectedIncidentOperator", JSON.stringify(this.selectedIncidentOperator)); // Prints out the text within the <td>
            });
        });
    };
    IncidentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-incidents',
            template: __webpack_require__(1184),
            styles: [__webpack_require__(1148)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], IncidentsComponent);
    return IncidentsComponent;
    var _a;
}());
//# sourceMappingURL=incidents.component.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map