webpackJsonp([6],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreVerifyPageModule", function() { return StoreVerifyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_verify__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StoreVerifyPageModule = /** @class */ (function () {
    function StoreVerifyPageModule() {
    }
    StoreVerifyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__store_verify__["a" /* StoreVerifyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__store_verify__["a" /* StoreVerifyPage */]),
            ],
        })
    ], StoreVerifyPageModule);
    return StoreVerifyPageModule;
}());

//# sourceMappingURL=store-verify.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreVerifyPage; });
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


/**
 * Generated class for the StoreVerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StoreVerifyPage = /** @class */ (function () {
    function StoreVerifyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StoreVerifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoreVerifyPage');
    };
    StoreVerifyPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    StoreVerifyPage.prototype.login = function () {
        this.navCtrl.push('StorePage');
    };
    StoreVerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-store-verify',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/store-verify/store-verify.html"*/'<!--\n  Generated template for the StoreVerifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content class="verify_bg">\n  <div class="verify_wrapper">\n      <div class="nav_header">\n          <button class="nav_btn floatLeft" (click)="back()">\n              <ion-icon name="ios-arrow-back"></ion-icon>\n          </button>\n          <div class="clear"></div>\n        </div>\n        <h3>Verify</h3>\n        <hr>\n        <br>\n        <br>\n        <h5>Sit back and relax!</h5>\n        <p>while we verify your mobile number</p>\n        <div class="verify_content">\n            <ion-list>\n                <ion-item >\n                    <ion-input class="user" placeholder="Enter the OTP here"></ion-input>\n                </ion-item>\n                <button ion-button full class="theme_background" icon-right (click)="login()">Verify\n                    <ion-icon name="ios-arrow-forward" class=""></ion-icon>\n                </button>\n            </ion-list>\n            <p><strong>Resend</strong></p>\n        </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/store-verify/store-verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StoreVerifyPage);
    return StoreVerifyPage;
}());

//# sourceMappingURL=store-verify.js.map

/***/ })

});
//# sourceMappingURL=6.js.map