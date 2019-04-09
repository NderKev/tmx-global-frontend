webpackJsonp([21],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderLoginPageModule", function() { return RiderLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rider_login__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RiderLoginPageModule = /** @class */ (function () {
    function RiderLoginPageModule() {
    }
    RiderLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rider_login__["a" /* RiderLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rider_login__["a" /* RiderLoginPage */]),
            ],
        })
    ], RiderLoginPageModule);
    return RiderLoginPageModule;
}());

//# sourceMappingURL=rider-login.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderLoginPage; });
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
 * Generated class for the RiderLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RiderLoginPage = /** @class */ (function () {
    function RiderLoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RiderLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RiderLoginPage');
    };
    RiderLoginPage.prototype.login = function () {
        this.navCtrl.push('RiderProfilePage');
    };
    RiderLoginPage.prototype.signup = function () {
        this.navCtrl.push('RiderSignupPage');
    };
    RiderLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rider-login',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/rider-login/rider-login.html"*/'<!--\n  Generated template for the RiderLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="login_background">\n  <div class="wrapper">\n    <div class="top_wrapper">\n        <div class="log_div">\n          <img src="assets/imgs/tmx_logo.png">\n          <ion-card>\n            <ion-card-content>\n              <ion-list>\n                  <ion-item >\n                      <ion-input class="user" placeholder="Email or Username"></ion-input>\n                  </ion-item>\n                  <ion-item >\n                      <ion-input class="pass" placeholder="Password"></ion-input>\n                  </ion-item>\n                  <button ion-button full class="theme_background" icon-right (click)="login()">Login\n                      <ion-icon name="ios-arrow-forward" class=""></ion-icon>\n                  </button>\n              </ion-list>\n              <p>Forgot Password ?</p>\n            </ion-card-content>\n          </ion-card>\n          <h6>new user?</h6>\n          <h5 (click)="signup()">Create Account</h5>\n        </div>\n    </div>\n    <div class="bottom_wrapper">\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/rider-login/rider-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RiderLoginPage);
    return RiderLoginPage;
}());

//# sourceMappingURL=rider-login.js.map

/***/ })

});
//# sourceMappingURL=21.js.map