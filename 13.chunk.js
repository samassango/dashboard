webpackJsonp([13,20],{

/***/ 1130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widgets_component__ = __webpack_require__(974);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsRoutes; });

var WidgetsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__widgets_component__["a" /* WidgetsComponent */]
            }]
    }
];
//# sourceMappingURL=widgets.routing.js.map

/***/ }),

/***/ 1199:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-text\" data-background-color=\"orange\">\r\n                        <h4 class=\"card-title\">Employees Stats</h4>\r\n                        <p class=\"category\">New employees on 15th September, 2016</p>\r\n                    </div>\r\n                    <div class=\"card-content table-responsive\">\r\n                        <table class=\"table\">\r\n                                <thead class=\"text-warning\">\r\n                                    <tr>\r\n                                      <th *ngFor=\"let cell of tableData.headerRow\">{{ cell }}</th>\r\n                                    </tr>\r\n                                </thead>\r\n                              <tbody>\r\n                                  <tr *ngFor=\"let row of tableData.dataRows\">\r\n                                      <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n                                  </tr>\r\n                              </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-tabs\" data-background-color=\"rose\">\r\n                        <div class=\"nav-tabs-navigation\">\r\n                            <div class=\"nav-tabs-wrapper\">\r\n                                <span class=\"nav-tabs-title\">Tasks:</span>\r\n                                <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n                                    <li class=\"active\">\r\n                                        <a href=\"#profile\" data-toggle=\"tab\">\r\n                                            <i class=\"material-icons\">bug_report</i> Bugs\r\n                                            <div class=\"ripple-container\"></div>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"\">\r\n                                        <a href=\"#messages\" data-toggle=\"tab\">\r\n                                            <i class=\"material-icons\">code</i> Website\r\n                                            <div class=\"ripple-container\"></div>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"\">\r\n                                        <a href=\"#settings\" data-toggle=\"tab\">\r\n                                            <i class=\"material-icons\">cloud</i> Server\r\n                                            <div class=\"ripple-container\"></div>\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <div class=\"tab-content\">\r\n                            <div class=\"tab-pane active\" id=\"profile\">\r\n                                <table class=\"table\">\r\n                                      <tbody>\r\n                                          <tr *ngFor=\"let row of tasks1\">\r\n                                              <td>\r\n                                                  <div [ngSwitch]=\"row.checked\">\r\n                                                      <div *ngSwitchCase=\"true\">\r\n                                                          <div class=\"checkbox\">\r\n                                                              <label>\r\n                                                                  <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                              </label>\r\n                                                          </div>\r\n                                                      </div>\r\n                                                      <div *ngSwitchDefault>\r\n                                                          <div class=\"checkbox\">\r\n                                                              <label>\r\n                                                                  <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                              </label>\r\n                                                          </div>\r\n                                                      </div>\r\n\r\n                                                  </div>\r\n                                              </td>\r\n                                              <td>{{row.title}}</td>\r\n                                              <td class=\"td-actions text-right\">\r\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                      <i class=\"material-icons\">edit</i>\r\n                                                  </button>\r\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                      <i class=\"material-icons\">close</i>\r\n                                                  </button>\r\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Close\" class=\"btn btn-default btn-simple btn-xs\">\r\n                                                      <i class=\"material-icons\">add</i>\r\n                                                  </button>\r\n                                              </td>\r\n                                           </tr>\r\n                                      </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"tab-pane\" id=\"messages\">\r\n                                <table class=\"table\">\r\n                                      <tbody>\r\n                                          <tr *ngFor=\"let row of tasks2\">\r\n                                              <td>\r\n                                                  <div [ngSwitch]=\"row.checked\">\r\n                                                      <div *ngSwitchCase=\"true\">\r\n                                                          <div class=\"checkbox\">\r\n                                                              <label>\r\n                                                                  <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                              </label>\r\n                                                          </div>\r\n                                                      </div>\r\n                                                      <div *ngSwitchDefault>\r\n                                                          <div class=\"checkbox\">\r\n                                                              <label>\r\n                                                                  <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                              </label>\r\n                                                          </div>\r\n                                                      </div>\r\n\r\n                                                  </div>\r\n                                              </td>\r\n                                              <td>{{row.title}}</td>\r\n                                              <td class=\"td-actions text-right\">\r\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                      <i class=\"material-icons\">edit</i>\r\n                                                  </button>\r\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                      <i class=\"material-icons\">close</i>\r\n                                                  </button>\r\n                                              </td>\r\n                                           </tr>\r\n                                      </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"tab-pane\" id=\"settings\">\r\n                                <table class=\"table\">\r\n                                      <tbody>\r\n                                          <tr *ngFor=\"let row of tasks3\">\r\n                                              <td>\r\n                                                  <div [ngSwitch]=\"row.checked\">\r\n                                                      <div *ngSwitchCase=\"true\">\r\n                                                          <div class=\"checkbox\">\r\n                                                              <label>\r\n                                                                  <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                              </label>\r\n                                                          </div>\r\n                                                      </div>\r\n                                                      <div *ngSwitchDefault>\r\n                                                          <div class=\"checkbox\">\r\n                                                              <label>\r\n                                                                  <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                              </label>\r\n                                                          </div>\r\n                                                      </div>\r\n\r\n                                                  </div>\r\n                                              </td>\r\n                                              <td>{{row.title}}</td>\r\n                                              <td class=\"td-actions text-right\">\r\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                      <i class=\"material-icons\">edit</i>\r\n                                                  </button>\r\n                                                  <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                      <i class=\"material-icons\">close</i>\r\n                                                  </button>\r\n                                              </td>\r\n                                           </tr>\r\n                                      </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"card card-pricing card-raised\">\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category\">Small Company</h6>\r\n                            <div class=\"icon icon-rose\">\r\n                                <i class=\"material-icons\">home</i>\r\n                            </div>\r\n                            <h3 class=\"card-title\">$29</h3>\r\n                            <p class=\"card-description\">\r\n                                This is good if your company size is between 2 and 10 Persons.\r\n                            </p>\r\n                            <a href=\"#\" class=\"btn btn-rose btn-round\">Choose Plan</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"card card-pricing card-plain\">\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category\">Freelancer</h6>\r\n                            <div class=\"icon\">\r\n                                <i class=\"material-icons\">weekend</i>\r\n                            </div>\r\n                            <h3 class=\"card-title\">FREE</h3>\r\n                            <p class=\"card-description\">\r\n                                This is good if your company size is between 2 and 10 Persons.\r\n                            </p>\r\n                            <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-11\">\r\n                    <div class=\"card card-testimonial\">\r\n                        <div class=\"icon\">\r\n                            <i class=\"material-icons\">format_quote</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h5 class=\"card-description\">\r\n                                Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"footer\">\r\n                            <h4 class=\"card-title\">Alec Thompson</h4>\r\n                            <h6 class=\"category\">@alecthompson</h6>\r\n                            <div class=\"card-avatar\">\r\n                                <a href=\"#pablo\">\r\n                                    <img class=\"img\" src=\"../assets/img/faces/card-profile1-square.jpg\" />\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <ul class=\"timeline timeline-simple\">\r\n                    <li class=\"timeline-inverted\">\r\n                        <div class=\"timeline-badge danger\">\r\n                            <i class=\"material-icons\">card_travel</i>\r\n                        </div>\r\n                        <div class=\"timeline-panel\">\r\n                            <div class=\"timeline-heading\">\r\n                                <span class=\"label label-danger\">Some title</span>\r\n                            </div>\r\n                            <div class=\"timeline-body\">\r\n                                <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>\r\n                            </div>\r\n                            <h6>\r\n                                <i class=\"ti-time\"></i> 11 hours ago via Twitter\r\n                            </h6>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"timeline-inverted\">\r\n                        <div class=\"timeline-badge success\">\r\n                            <i class=\"material-icons\">extension</i>\r\n                        </div>\r\n                        <div class=\"timeline-panel\">\r\n                            <div class=\"timeline-heading\">\r\n                                <span class=\"label label-success\">Another One</span>\r\n                            </div>\r\n                            <div class=\"timeline-body\">\r\n                                <p>Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"timeline-inverted\">\r\n                        <div class=\"timeline-badge info\">\r\n                            <i class=\"material-icons\">fingerprint</i>\r\n                        </div>\r\n                        <div class=\"timeline-panel\">\r\n                            <div class=\"timeline-heading\">\r\n                                <span class=\"label label-info\">Another Title</span>\r\n                            </div>\r\n                            <div class=\"timeline-body\">\r\n                                <p>Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>\r\n                                <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>\r\n                                <hr>\r\n                                <div class=\"dropdown pull-left\">\r\n                                    <button type=\"button\" class=\"btn btn-round btn-info dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                        <i class=\"material-icons\">build</i>\r\n                                        <span class=\"caret\"></span>\r\n                                    </button>\r\n                                    <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n                                        <li>\r\n                                            <a href=\"#action\">Action</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#action\">Another action</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"#here\">Something else here</a>\r\n                                        </li>\r\n                                        <li class=\"divider\"></li>\r\n                                        <li>\r\n                                            <a href=\"#link\">Separated link</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widgets_component__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widgets_routing__ = __webpack_require__(1130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__widgets_routing__["a" /* WidgetsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__widgets_component__["a" /* WidgetsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetsModule);
    return WidgetsModule;
}());
//# sourceMappingURL=widgets.module.js.map

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetsComponent = (function () {
    function WidgetsComponent() {
    }
    WidgetsComponent.prototype.ngOnInit = function () {
        this.tableData = {
            headerRow: ['ID', 'Name', 'Salary', 'Country'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South']
            ]
        };
        this.tasks1 = [
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false },
            { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true },
            {
                title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                checked: true
            },
            { title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false }
        ];
        this.tasks2 = [
            {
                title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                checked: true
            },
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false },
        ];
        this.tasks3 = [
            { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: false },
            {
                title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                checked: true
            },
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false }
        ];
    };
    WidgetsComponent.prototype.ngAfterViewInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    WidgetsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widgets-cmp',
            template: __webpack_require__(1199)
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetsComponent);
    return WidgetsComponent;
}());
//# sourceMappingURL=widgets.component.js.map

/***/ })

});
//# sourceMappingURL=13.chunk.js.map