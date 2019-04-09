webpackJsonp([15],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderVerifyPageModule", function() { return RiderVerifyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rider_verify__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RiderVerifyPageModule = /** @class */ (function () {
    function RiderVerifyPageModule() {
    }
    RiderVerifyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rider_verify__["a" /* RiderVerifyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rider_verify__["a" /* RiderVerifyPage */]),
            ],
        })
    ], RiderVerifyPageModule);
    return RiderVerifyPageModule;
}());

//# sourceMappingURL=rider-verify.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderVerifyPage; });
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
 * Generated class for the RiderVerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RiderVerifyPage = /** @class */ (function () {
    function RiderVerifyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RiderVerifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RiderVerifyPage');
    };
    RiderVerifyPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RiderVerifyPage.prototype.login = function () {
        this.navCtrl.push('RiderPage');
    };
    RiderVerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rider-verify',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/rider-verify/rider-verify.html"*/'<!--\n  Generated template for the RiderVerifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="verify_bg">\n  <div class="verify_wrapper">\n      <div class="nav_header">\n          <button class="nav_btn floatLeft" (click)="back()">\n              <ion-icon name="ios-arrow-back"></ion-icon>\n          </button>\n          <div class="clear"></div>\n        </div>\n        <h3>Verify</h3>\n        <hr>\n        <br>\n        <br>\n        <h5>Sit back and relax!</h5>\n        <p>while we verify your mobile number</p>\n        <div class="verify_content">\n            <ion-list>\n                <ion-item >\n                    <ion-input class="user" placeholder="Enter the OTP here"></ion-input>\n                </ion-item>\n                <button ion-button full class="theme_background" icon-right (click)="login()">Verify\n                    <ion-icon name="ios-arrow-forward" class=""></ion-icon>\n                </button>\n            </ion-list>\n            <p><strong>Resend</strong></p>\n        </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/rider-verify/rider-verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RiderVerifyPage);
    return RiderVerifyPage;
}());

//# sourceMappingURL=rider-verify.js.map

/***/ })

});
//# sourceMappingURL=15.js.map