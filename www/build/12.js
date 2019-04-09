webpackJsonp([12],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
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


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingsPage.prototype.edit = function () {
        var modal = this.modalCtrl.create('SettingseditPage');
        modal.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/settings/settings.html"*/'<ion-header class="nav_header theme_background">\n    <button ion-button class="nav_btn floatLeft" (click)="dismiss()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n    </button>\n    <div class="nav_header_title floatLeft textLeft">Account </div>\n    <button ion-button class="nav_btn nav_btn_1 floatRight" (click)="edit()">\n        <p>edit</p>\n    </button>\n    <div class="clear"></div>\n  </ion-header>\n<ion-content>\n  <div class="profile_banner textCenter">\n    <div class="profile_banner_circle">\n    </div>\n  </div>\n  <h4>Account Information</h4>\n  <div class="content_wrapper">\n      <ion-list>\n          <ion-item>\n              <ion-label color="primary" stacked>FIRST NAME</ion-label>\n              <ion-input type="email" placeholder="First name"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>LAST NAME</ion-label>\n              <ion-input type="email" placeholder="Last name"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>EMAIL</ion-label>\n              <ion-input type="email" placeholder="Email"></ion-input>\n          </ion-item>\n              <ion-label color="primary" stacked>PHONE NUMBER</ion-label>\n              <div class="mobile_number">\n                <div class="code">\n                    <select>\n                      <option>+254</option>\n                    </select>\n                </div>\n                <div class="number">\n                    <input type="email" placeholder="Phone number">\n                </div>\n                <div class="clear"></div>\n              </div>\n      </ion-list>\n    </div>\n    <h4>Saved Places</h4>\n    <ion-grid class="" padding>\n      <ion-row>\n        <ion-col col-5 class="p0 border_r">\n          <span class="floatLeft"><img src="assets/imgs/home.png"></span>\n          <span class="floatLeft">\n            <h5>Home</h5>\n            <h6>Add home </h6>\n          </span>\n          <div class="clear"></div>\n        </ion-col>\n        <ion-col col-5 class="p0">\n            <span class="floatLeft"><img src="assets/imgs/work.png"></span>\n            <span class="floatLeft">\n                <h5>Work</h5>\n                <h6>Add work </h6>\n            </span>\n            <div class="clear"></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div padding>\n      <button class="sign_out">Sign out</button>\n    </div>\n    <br>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=12.js.map