webpackJsonp([14],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderPageModule", function() { return RiderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rider__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RiderPageModule = /** @class */ (function () {
    function RiderPageModule() {
    }
    RiderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rider__["a" /* RiderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rider__["a" /* RiderPage */]),
            ],
        })
    ], RiderPageModule);
    return RiderPageModule;
}());

//# sourceMappingURL=rider.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderPage; });
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
 * Generated class for the RiderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RiderPage = /** @class */ (function () {
    function RiderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RiderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RiderPage');
    };
    RiderPage.prototype.verifyAccount = function () {
        this.navCtrl.push('RiderProfilePage');
    };
    RiderPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RiderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rider',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/rider/rider.html"*/'<!--\n  Generated template for the RiderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Rider</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="rider_wrapper">\n    <div class="top_wrapper textCenter">\n      <div class="nav_header">\n        <button class="nav_btn floatLeft" (click)="back()">\n            <ion-icon name="ios-arrow-back"></ion-icon>\n        </button>\n        <div class="clear"></div>\n      </div>\n      <img src="assets/imgs/tmx_logo.png">\n      <h3>Update Profile</h3>\n      <hr>\n    </div>\n    <div class="content_wrapper">\n      <ion-list>\n          <ion-item>\n              <ion-label color="primary" stacked>ID NUMBER</ion-label>\n              <ion-input type="number" placeholder="ID No"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>LOCATION</ion-label>\n              <ion-input type="text" placeholder="Location"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>Bike Plate Number</ion-label>\n              <ion-input type="text" placeholder="plate No"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" stacked>PREFFERED STORE</ion-label>\n          </ion-item>\n          <select>\n            <option>Githurai Fast Food</option>\n          </select>\n              <ion-label color="primary" stacked>UPLOAD DOCUMENTS</ion-label>\n              <div class="upload_docs">\n                <div class="front_id_img">\n                  <ion-label color="primary" stacked>Front ID Image</ion-label>\n                  <img ng-src="imagesrc" class="avatar" ng-click="uploadProfilePic()"/>\n                  <button class="button button-primary" ng-click="uploadProfilePic()">Change Picture</button>\n                  <input type="file" accept="image/*" id="upload" />\n                </div>\n                <div class="rear_id_img">\n                    <ion-label color="primary" stacked>Rear ID Image</ion-label>\n                    <img ng-src="imagesrc" class="avatar" ng-click="uploadProfilePic()"/>\n                    <button class="button button-primary" ng-click="uploadProfilePic()">Change Picture</button>\n                    <input type="file" accept="image/*" id="upload" />\n                </div>\n                <div class="Rider_license_img">\n                      <ion-label color="primary" stacked>Rider license</ion-label>\n                      <img ng-src="imagesrc" class="avatar" ng-click="uploadProfilePic()"/>\n                      <button class="button button-primary" ng-click="uploadProfilePic()">Change Picture</button>\n                      <input type="file" accept="image/*" id="upload" />\n                </div>\n                <div class="clear"></div>\n              </div>\n          </ion-list>\n      <button ion-button full class="theme_background" icon-right (click)="verifyAccount()">Upload and Verify\n          <ion-icon name="ios-arrow-forward" class=""></ion-icon>\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/rider/rider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RiderPage);
    return RiderPage;
}());

//# sourceMappingURL=rider.js.map

/***/ })

});
//# sourceMappingURL=14.js.map