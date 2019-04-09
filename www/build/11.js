webpackJsonp([11],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingseditPageModule", function() { return SettingseditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settingsedit__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingseditPageModule = /** @class */ (function () {
    function SettingseditPageModule() {
    }
    SettingseditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settingsedit__["a" /* SettingseditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settingsedit__["a" /* SettingseditPage */]),
            ],
        })
    ], SettingseditPageModule);
    return SettingseditPageModule;
}());

//# sourceMappingURL=settingsedit.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingseditPage; });
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


var SettingseditPage = /** @class */ (function () {
    function SettingseditPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SettingseditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingseditPage');
    };
    SettingseditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingseditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settingsedit',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/settingsedit/settingsedit.html"*/'<ion-header class="nav_header theme_background">\n    <button ion-button class="nav_btn floatLeft" (click)="dismiss()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n    </button>\n    <div class="nav_header_title floatLeft textLeft">Edit Account </div>\n    <button ion-button class="nav_btn nav_btn_1 floatRight">\n        <p>edit</p>\n    </button>\n    <div class="clear"></div>\n  </ion-header>\n<ion-content>\n  <div class="profile_banner textCenter">\n    <div class="profile_banner_circle">\n    </div>\n  </div>\n  <div class="content_wrapper">\n      <ion-list>\n          <ion-item>\n              <ion-label color="primary" stacked>FIRST NAME</ion-label>\n              <ion-input type="email" placeholder="First name"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>LAST NAME</ion-label>\n              <ion-input type="email" placeholder="Last name"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>EMAIL</ion-label>\n              <ion-input type="email" placeholder="Email"></ion-input>\n          </ion-item>\n              <ion-label color="primary" stacked>PHONE NUMBER</ion-label>\n              <div class="mobile_number"> \n                <div class="code">\n                    <select>\n                      <option>+91</option>\n                    </select>\n                </div>\n                <div class="number">\n                    <input type="email" placeholder="Phone number">\n                </div>\n                <div class="clear"></div>\n              </div>\n              <ion-item>\n                  <ion-label color="primary" stacked>CURRENT PASSWORD</ion-label>\n                  <ion-input type="password" placeholder="Current Password"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label color="primary" stacked>NEW PASSWORD</ion-label>\n                  <ion-input type="password" placeholder="New Password"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label color="primary" stacked>CONFIRM NEW PASSWORD</ion-label>\n                  <ion-input type="password" placeholder="Confirm new Password"></ion-input>\n              </ion-item>\n      </ion-list> \n      <br>\n      <button ion-button full class="theme_background">Save\n      </button> \n      <br>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/settingsedit/settingsedit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], SettingseditPage);
    return SettingseditPage;
}());

//# sourceMappingURL=settingsedit.js.map

/***/ })

});
//# sourceMappingURL=11.js.map