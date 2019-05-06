webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<app-oblicz></app-oblicz>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__burn_burn_module__ = __webpack_require__("../../../../../src/app/burn/burn.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__burn_burn_module__["a" /* BurnModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/burn/burn.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BurnModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__oblicz_oblicz_component__ = __webpack_require__("../../../../../src/app/burn/oblicz/oblicz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__oblicz_linki_linki_component__ = __webpack_require__("../../../../../src/app/burn/oblicz/linki/linki.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__oblicz_mock_mock_component__ = __webpack_require__("../../../../../src/app/burn/oblicz/mock/mock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__oblicz_footer_footer_component__ = __webpack_require__("../../../../../src/app/burn/oblicz/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BurnModule = (function () {
    function BurnModule() {
    }
    BurnModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__oblicz_oblicz_component__["a" /* ObliczComponent */], __WEBPACK_IMPORTED_MODULE_5__oblicz_linki_linki_component__["a" /* LinkiComponent */], __WEBPACK_IMPORTED_MODULE_6__oblicz_mock_mock_component__["a" /* MockComponent */], __WEBPACK_IMPORTED_MODULE_7__oblicz_footer_footer_component__["a" /* FooterComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__oblicz_oblicz_component__["a" /* ObliczComponent */], __WEBPACK_IMPORTED_MODULE_5__oblicz_linki_linki_component__["a" /* LinkiComponent */], __WEBPACK_IMPORTED_MODULE_6__oblicz_mock_mock_component__["a" /* MockComponent */], __WEBPACK_IMPORTED_MODULE_7__oblicz_footer_footer_component__["a" /* FooterComponent */]
            ]
        })
    ], BurnModule);
    return BurnModule;
}());



/***/ }),

/***/ "../../../../../src/app/burn/oblicz/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n  padding: 5px;\r\n}\r\n.fa-facebook-square{\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n}\r\n.fa-facebook-square:hover{\r\n  color:#3B5998;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/burn/oblicz/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> example.fuel@gmail.com  &nbsp;&nbsp;\n\n    <a href=\"#\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a>\n    Fb\\fuel  ;)\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/burn/oblicz/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/burn/oblicz/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/burn/oblicz/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/burn/oblicz/linki/linki.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\r\npadding:10px;\r\n\r\n}\r\n\r\ndiv{\r\n  margin-top: 10px;\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  background-color:rgba(136, 255, 247, 0.1);\r\n  padding: 15px;\r\n  border-radius: 5px;\r\ncolor: white;\r\ntransition: 1s;\r\n}\r\na:hover{\r\n\r\n  background-color:rgba(136, 255, 247, 0.1);\r\n\r\ncolor: rgb(206, 194, 194);\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/burn/oblicz/linki/linki.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<p >Sprawdz ceny paliw w swoim wojewdztwie: </p>\n\n\n<a target=\"_blank\" href=\"https://cenapaliw.pl/\">cenypaliw.pl</a>\n\n\n<div>\n<p >Zaplanuj podroz z GoogleMaps:</p>\n\n\n\n<a target=\"_blank\" href=\"https://www.google.pl/maps/dir///\">GoogleMaps</a>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/burn/oblicz/linki/linki.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinkiComponent = (function () {
    function LinkiComponent() {
    }
    LinkiComponent.prototype.ngOnInit = function () {
    };
    LinkiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-linki',
            template: __webpack_require__("../../../../../src/app/burn/oblicz/linki/linki.component.html"),
            styles: [__webpack_require__("../../../../../src/app/burn/oblicz/linki/linki.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkiComponent);
    return LinkiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/burn/oblicz/mock/mock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n  font-size: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/burn/oblicz/mock/mock.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Aktualna srednia cena w Polsce: </p>\n\n<div *ngFor=\"let pal of Pali\">\n  <ul>Benzyna PB: {{pal.pb}} zł</ul>\n  <ul>Diesel ON: {{pal.oil}} zł</ul>\n  <ul>LepszyPowerGamoniu LPG: {{pal.lpg}} zł</ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/burn/oblicz/mock/mock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MockComponent = (function () {
    function MockComponent() {
        this.Pali = [
            {
                pb: '4,7',
                oil: '5',
                lpg: '2,20'
            }
        ];
    }
    MockComponent.prototype.ngOnInit = function () {
    };
    MockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-mock',
            template: __webpack_require__("../../../../../src/app/burn/oblicz/mock/mock.component.html"),
            styles: [__webpack_require__("../../../../../src/app/burn/oblicz/mock/mock.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MockComponent);
    return MockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/burn/oblicz/oblicz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/burn/oblicz/oblicz.component.html":
/***/ (function(module, exports) {

module.exports = "<section  class=\"container-fluid\">\n\n\n<header class=\"container par-ile-spali text-center\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <p>Ile mi spali ?</p>\n    </div>\n  </div>\n</header>\n\n<div class=\"main-content container text-center\">\n<div class=\"row\">\n<div class=\"col-sm-6\">\n\n  <form #f=\"ngForm\" >\n\n<p class=\"alertkropka\">Uwaga! Jesli uzywasz liczby niewymiernej użyj kropki zamiast przecinka :)</p>\n<p class=\"space-input\">Ile pali na 100 km:</p>\n<input type=\"text\" #f1  name=\"ilespala\"  [(ngModel)]=\"ilespala\" required ngModel/>\n<p  class=\"space-input\">Cena paliwa w litrach:</p>\n<input type=\"text\" #f2   name=\"cena\"  [(ngModel)]=\"cena\" required ngModel/>\n<p  class=\"space-input\">Trasa długoć w kilometrach:</p>\n<input type=\"text\" #f3 name=\"trasa\"  [(ngModel)]=\"trasa\" required ngModel/>\n<p  class=\"space-input\">ilosc ludzi na zrzutę:</p>\n<input type=\"text\" #f4   name=\"ludzie\"  [(ngModel)]=\"ludzie\" required ngModel/>\n<br><br>\n\n<button [disabled]=\"!f.valid\"  type=\"button\" (click)=allCost() class=\"btn btn-success\">Oblicz</button>\n</form>\n\n</div>\n\n\n\n\n<div class=\"col-sm-6\">\n<p>wynik:</p>\n<div >\n <span>Spali :</span> {{ilespali}}  <span>L</span> <br>\n <span>Całkowity koszt :</span> {{allprice}} <span>zł</span> <br>\n  <span>Koszt na jedną osobę :</span>{{priceoneperson}} <span>zł</span>\n</div>\n\n<app-linki></app-linki>\n<div class=\"reset\">\n<button type=\"button\" class=\"btn btn-warning\"  (click) = \"f1.value=''\" (click) = \"f2.value=''\" (click) = \"f3.value=''\" (click) = \"f4.value=''\" (click)=\"rest()\" >Reset</button>\n</div>\n<app-mock></app-mock>\n</div>\n</div>\n</div>\n\n\n\n\n\n<app-footer></app-footer>\n\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/burn/oblicz/oblicz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObliczComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObliczComponent = (function () {
    function ObliczComponent(formBuilder) {
        this.formBuilder = formBuilder;
        // tslint:disable-next-line:no-inferrable-types
        this.wynik = 123;
    }
    ObliczComponent.prototype.ngOnInit = function () {
    };
    ObliczComponent.prototype.allCost = function () {
        this.ilespali = (this.ilespala * this.trasa) / 100;
        this.allprice = +this.cena * this.ilespali;
        this.priceoneperson = +this.allprice / this.ludzie;
    };
    ObliczComponent.prototype.rest = function () {
        this.ilespali = null;
        this.allprice = null;
        this.priceoneperson = null;
    };
    ObliczComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-oblicz',
            template: __webpack_require__("../../../../../src/app/burn/oblicz/oblicz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/burn/oblicz/oblicz.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ObliczComponent);
    return ObliczComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map