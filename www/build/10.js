webpackJsonp([10],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
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


var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.push('VerifyPage');
    };
    SignupPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/signup/signup.html"*/'\n<ion-content>\n  <div class="signup_wrapper">\n    <div class="top_wrapper textCenter">\n      <div class="nav_header">\n        <button class="nav_btn floatLeft" (click)="back()">\n            <ion-icon name="ios-arrow-back"></ion-icon>\n        </button>\n        <div class="clear"></div>\n      </div>\n      <img src="assets/imgs/tmx_logo.png">\n      <h3>Create Account</h3>\n      <hr>\n    </div>\n    <div class="content_wrapper">\n      <ion-list>\n          <ion-item>\n              <ion-label color="primary" stacked>FIRST NAME</ion-label>\n              <ion-input type="email" placeholder="First name"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>LAST NAME</ion-label>\n              <ion-input type="email" placeholder="Last name"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>EMAIL</ion-label>\n              <ion-input type="email" placeholder="Email"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>PASSWORD</ion-label>\n              <ion-input type="password" placeholder="Password"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>CONFIRM PASSWORD</ion-label>\n              <ion-input type="password" placeholder="Confirm Password"></ion-input>\n          </ion-item>\n              <ion-label color="primary" stacked>PHONE NUMBER</ion-label>\n              <div class="mobile_number">\n                <div class="code">\n                    <select>\n                      <option>+254</option>\n                    </select>\n                </div>\n                <div class="number">\n                    <input type="email" placeholder="Phone number">\n                </div>\n                <div class="clear"></div>\n              </div>\n      </ion-list>\n      <p>By clicking “Register” I confirm that I have read and agreed to the <a>Terms & Conditions</a> and <a>Privacy Policy</a></p>\n      <button ion-button full class="theme_background" icon-right (click)="login()">Register\n          <ion-icon name="ios-arrow-forward" class=""></ion-icon>\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=10.js.map