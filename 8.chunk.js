webpackJsonp([8,20],{

/***/ 1100:
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

/***/ 1101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enquiries_component__ = __webpack_require__(941);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiriesRoutes; });

var EnquiriesRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__enquiries_component__["a" /* EnquiriesComponent */]
            }]
    }
];
//# sourceMappingURL=enquiries.routing.js.map

/***/ }),

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(907)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1166:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-icon\" data-background-color=\"blue-grey\">\r\n            <i class=\"material-icons\">record_voice_over</i>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <h4 class=\"card-title\">Enquiry Management</h4>\r\n\r\n<!-- =========================     Toolbar Buttons (Begin)     ========================= -->\r\n            <div class=\"toolbar\">\r\n              <!-- Capture Button (Begin) -->\r\n              <a href=\"forms/addenquiry\" id=\"addenquireId\">\r\n                <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Capture a new enquiry\" style=\"margin: 2px;\">\r\n                  <i class=\"material-icons\">add</i>\r\n                </button>\r\n              </a>\r\n              <!-- Capture Button (End) -->\r\n\r\n              <!-- Search Button (Begin) -->\r\n              <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\" title=\"Search enquiry\" id=\"btn-filter\" (click)=\"showFilter();\" value=\"on\" style=\"margin: 2px;\">\r\n              <i class=\"material-icons\">search</i>\r\n              </button>\r\n              <!-- Search Button (End) -->\r\n\r\n              <!-- Export Button (Begin) -->\r\n\r\n                <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\" rel=\"tooltip\"\r\n                title=\"Export to Excel\" (click)=\"tableToExcel('datatables', 'Incident Report')\" value=\"Export to Excel\" style=\"margin: 2px;\">\r\n                  <i class=\"material-icons\">file_download</i>\r\n                </button>\r\n\r\n              <!-- Export Button (End) -->\r\n            </div>\r\n<!-- =========================     Toolbar Buttons (End)     ========================= -->\r\n\r\n<!-- =========================     Search Bar (Begin)     ==================== -->\r\n            <div id=\"search\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Search Records</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" />\r\n                  <span class=\"help-block\">Type here to search</span>\r\n                  <br>\r\n                </div>\r\n              </div>\r\n            </div>\r\n<!-- =========================     Search Bar (End)     ==================== -->\r\n\r\n<!-- =========================     Table (Begin)     ==================== -->\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"material-datatables table-responsive\">\r\n                 <table class=\"table table-striped table-no-bordered table-hover\" id=\"datatables\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\" [mfData]=\"data | dataFilter:'fullNames,contactNumber,name,datecaptured,capturedBy':filterQuery\" #mf=\"mfDataTable\"\r\n                   [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th style=\"display:none;\"></th>\r\n                      <th><mfDefaultSorter by=\"fullNames\">FullNames</mfDefaultSorter></th>\r\n                      <th><mfDefaultSorter by=\"contactNumber\">Contact</mfDefaultSorter></th>\r\n                      <th><mfDefaultSorter by=\"type\">Type</mfDefaultSorter></th>\r\n                      <th><mfDefaultSorter by=\"datecaptured\">Date</mfDefaultSorter></th>\r\n                      <th><mfDefaultSorter by=\"capturedBy\">Operator</mfDefaultSorter></th>\r\n                      <th class=\"disabled-sorting text-right\">Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr id=\"items\" *ngFor=\"let item of mf.data\">\r\n                      <td style=\"display:none;\">{{item.enquiryId}}</td>\r\n                      <td>{{item.fullNames}}</td>\r\n                      <td>{{item.contactNumber}}</td>\r\n                      <td>{{item.enquiry_type.name}}</td>\r\n                      <td>{{item.datecaptured}}</td>\r\n                      <td>{{item.capturedBy}}</td>\r\n                      <td class=\"td-actions text-right\">\r\n\r\n                         <a href=\"forms/viewenquiry\">\r\n                          <button type=\"button\" (click)=\"Onclick();\" rel=\"tooltip\" title=\"View enquiry details\" class=\"btn btn-primary\">\r\n                            <i class=\"material-icons\">visibility</i>\r\n                          </button>\r\n                          </a>\r\n\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <tfoot>\r\n                    <label id=\"results\">No Enquiries Data at the moment</label>\r\n                    <tr>\r\n                    <th style=\"display:none;\"></th>\r\n                      <th>FullNames</th>\r\n                      <th>Contact</th>\r\n                      <th>Type</th>\r\n                      <th>Date</th>\r\n                      <th>Operator</th>\r\n                      <th class=\"text-right\">Actions</th>\r\n                    </tr>\r\n                    <br>\r\n                    <tr>\r\n                      <td colspan=\"8\">\r\n                         <mfBootstrapPaginator [rowsOnPageSet]=\"[10,25,50,100]\"></mfBootstrapPaginator>\r\n                      </td>\r\n                    </tr>\r\n                  </tfoot>\r\n                </table>\r\n              </div>\r\n            </div>\r\n<!-- =========================     Table (End)     ==================== -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enquiries_component__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enquiries_routing__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__ = __webpack_require__(1100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiriesModule", function() { return EnquiriesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EnquiriesModule = (function () {
    function EnquiriesModule() {
    }
    EnquiriesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__enquiries_routing__["a" /* EnquiriesRoutes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__["DataTableModule"],
                // DataTableDirectives,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__enquiries_component__["a" /* EnquiriesComponent */], __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__["a" /* DataFilterPipe */]]
        }), 
        __metadata('design:paramtypes', [])
    ], EnquiriesModule);
    return EnquiriesModule;
}());
//# sourceMappingURL=enquiries.module.js.map

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

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnquiriesComponent = (function () {
    function EnquiriesComponent(dataService) {
        // if (window.location.href.indexOf('reload')==-1) {
        //  window.location.replace(window.location.href+'?reload');
        // }
        this.dataService = dataService;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "datecaptured";
        this.sortOrder = "desc";
        this.getEnquiries();
        // this.getEnquiriesById();
    }
    EnquiriesComponent.prototype.ngOnInit = function () {
        $("#search").hide();
        $("#results").hide();
        var role = JSON.parse(localStorage.getItem('role'));
        // console.log("alertsRole",role);
        //if role is equal to communications department then show add button
        if (role === "5a93fa58360f060014c2cff1") {
            $("#addenquireId").hide();
        }
        else {
            $("#addenquireId").show();
        }
    };
    EnquiriesComponent.prototype.ngAfterViewInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    // Code to pull all incidents from the service
    EnquiriesComponent.prototype.getEnquiries = function () {
        var _this = this;
        this.dataService.getEnquiries().subscribe(function (data) {
            _this.data = data.json();
            console.log("data 1", _this.data);
            if (_this.data.length == 0) {
                $("#results").show();
            }
            else {
                $("#results").hide();
            }
        });
    };
    EnquiriesComponent.prototype.tableToExcel = function (table, name) {
        var uri = 'data:application/vnd.ms-excel;base64,', template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>', base64 = function (s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))); }, format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }); };
        if (!table.nodeType)
            table = document.getElementById(table);
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML };
        window.location.href = uri + base64(format(template, ctx));
    };
    EnquiriesComponent.prototype.showFilter = function () {
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
    EnquiriesComponent.prototype.Onclick = function () {
        $('#datatables tr').click(function () {
            var $row = $(this).closest("tr"), // Finds the closest row <tr>
            $tds = $row.find("td:nth-child(1)"); // Finds the 1nd <td> element
            $.each($tds, function () {
                this.selectedEnquiryId = $(this).text();
                localStorage.setItem('selectedId', JSON.stringify(this.selectedEnquiryId));
                console.log("selectedId", JSON.stringify(this.selectedEnquiryId)); // Prints out the text within the <td>
            });
        });
    };
    EnquiriesComponent.prototype.export = function () {
        var titles = [];
        var data = [];
        /*
         * Get the table headers, this will be CSV headers
         * The count of headers will be CSV string separator
         */
        $('#datatables thead').each(function () {
            titles.push($(this).text());
        });
        /*
         * Get the actual data, this will contain all the data, in 1 array
         */
        $('#datatables td').each(function () {
            data.push($(this).text());
        });
        /*
         * Convert our data to CSV string
         */
        var CSVString = prepCSVRow(titles, titles.length, '');
        CSVString = prepCSVRow(data, titles.length, CSVString);
        /*
         * Make CSV downloadable
         */
        var downloadLink = document.createElement("a");
        var blob = new Blob(["\ufeff", CSVString]);
        var url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = "Report.csv";
        /*
         * Actually download CSV
         */
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    EnquiriesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-enquiries',
            template: __webpack_require__(1166),
            styles: [__webpack_require__(1134)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], EnquiriesComponent);
    return EnquiriesComponent;
    var _a;
}());
//outside export class EnquiriesComponent implements OnInit
function prepCSVRow(arr, columnCount, initial) {
    var row = ''; // this will hold data
    var delimeter = ','; // data slice separator, in excel it's `;`, in usual CSv it's `,`
    var newLine = '\r\n'; // newline separator for CSV row
    function splitArray(_arr, _count) {
        var splitted = [];
        var result = [];
        _arr.forEach(function (item, idx) {
            if ((idx + 1) % _count === 0) {
                splitted.push(item);
                result.push(splitted);
                splitted = [];
            }
            else {
                splitted.push(item);
            }
        });
        return result;
    }
    var plainArr = splitArray(arr, columnCount);
    // don't know how to explain this
    // you just have to like follow the code
    // and you understand, it's pretty simple
    // it converts `['a', 'b', 'c']` to `a,b,c` string
    plainArr.forEach(function (arrItem) {
        arrItem.forEach(function (item, idx) {
            row += item + ((idx + 1) === arrItem.length ? '' : delimeter);
        });
        row += newLine;
    });
    return initial + row;
}
//# sourceMappingURL=enquiries.component.js.map

/***/ })

});
//# sourceMappingURL=8.chunk.js.map