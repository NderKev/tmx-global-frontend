webpackJsonp([34],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterPageModule = /** @class */ (function () {
    function FilterPageModule() {
    }
    FilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */]),
            ],
        })
    ], FilterPageModule);
    return FilterPageModule;
}());

//# sourceMappingURL=filter.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.filter_type = 1;
    }
    FilterPage.prototype.ionViewDidLoad = function () {
    };
    FilterPage.prototype.filter_tab = function (filter_type) {
        this.filter_type = filter_type;
    };
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/filter/filter.html"*/'\n<ion-content class="theme_transparent relative heightFull">\n  <div class="filter_space" (click)="dismiss()"></div>\n  <div class="filter_wrapper" padding>\n    <h5>Sort and Filter</h5>\n    <hr>\n    <div class="sort_tab">\n      <ul>\n        <li (click)="filter_tab(1)" [class.active]="filter_type== 1">Sort</li>\n        <li (click)="filter_tab(2)" [class.active]="filter_type== 2">Price</li>\n        <li (click)="filter_tab(3)" [class.active]="filter_type== 3">Dietary</li>\n        <div class="clear"></div>\n      </ul>\n    </div>\n    <div class="sort_tabcontent">\n      <div [hidden]="filter_type != 1">\n        <ul>\n          <li class="list list1">\n              <ion-label>Recommended</ion-label>\n              <ion-radio value="friends"></ion-radio>\n              <div class="clear"></div>\n          </li>\n          <li class="list list2">\n              <ion-label>Most popular</ion-label>\n              <ion-radio value="friends"></ion-radio>\n              <div class="clear"></div>\n          </li>\n          <li class="list list3">\n              <ion-label>Rating</ion-label>\n              <ion-radio value="friends" ></ion-radio>\n              <div class="clear"></div>\n          </li>\n          <li class="list list4">\n              <ion-label>Delivery time</ion-label>\n              <ion-radio value="friends" ></ion-radio>\n              <div class="clear"></div>\n          </li>\n        </ul>\n      </div>\n      <div [hidden]="filter_type != 2">\n          <p>Booking Price Range</p>\n          <ion-range dualKnobs="true" [(ngModel)]="dualValue2" min="21" max="72" step="3" snaps="true"></ion-range>\n        </div>\n        <div [hidden]="filter_type != 3">\n            <ul>\n                <li class="list list5">\n                    <ion-label>Vegiterian</ion-label>\n                    <ion-radio value="friends"></ion-radio>\n                    <div class="clear"></div>\n                </li>\n                <li class="list list6">\n                    <ion-label>Vegan</ion-label>\n                    <ion-radio value="friends"></ion-radio>\n                    <div class="clear"></div>\n                </li>\n                <li class="list list7">\n                    <ion-label>Gluten-free</ion-label>\n                    <ion-radio value="friends" ></ion-radio>\n                    <div class="clear"></div>\n                </li>\n              </ul>\n        </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <button ion-button class="" full (click)="dismiss()">\n    Done\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/filter/filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ })

});
//# sourceMappingURL=34.js.map