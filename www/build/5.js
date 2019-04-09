webpackJsonp([5],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePageModule", function() { return StorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StorePageModule = /** @class */ (function () {
    function StorePageModule() {
    }
    StorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__store__["a" /* StorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* StorePage */]),
            ],
        })
    ], StorePageModule);
    return StorePageModule;
}());

//# sourceMappingURL=store.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
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
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StorePage = /** @class */ (function () {
    function StorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StorePage');
    };
    StorePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    StorePage.prototype.verifyStore = function () {
        this.navCtrl.push('StoreProfilePage');
    };
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-store',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/store/store.html"*/'<!--\n  Generated template for the StorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>store</ion-title>\n  </ion-navbar>\n</ion-header>\n  <ion-content>\n    <div class="store_wrapper">\n      <div class="top_wrapper textCenter">\n        <div class="nav_header">\n          <button class="nav_btn floatLeft" (click)="back()">\n              <ion-icon name="ios-arrow-back"></ion-icon>\n          </button>\n          <div class="clear"></div>\n        </div>\n        <img src="assets/imgs/tmx_logo.png">\n        <h3>Update Profile</h3>\n        <hr>\n      </div>\n      <div class="content_wrapper">\n        <ion-list>\n            <ion-item>\n                <ion-label color="primary" stacked>ID NUMBER</ion-label>\n                <ion-input type="number" placeholder="ID No"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label color="primary" stacked>LOCATION</ion-label>\n                <ion-input type="text" placeholder="Location"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label color="primary" stacked>STORE lICENSE NUMBER</ion-label>\n                <ion-input type="text" placeholder="LICENSE No"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label color="primary" stacked>STORE CATEGORY</ion-label>\n            </ion-item>\n            <select>\n              <option>Fast Food</option>\n            </select>\n                <ion-label color="primary" stacked>UPLOAD DOCUMENTS</ion-label>\n                <div class="upload_docs">\n                  <div class="front_id_img">\n                    <ion-label color="primary" stacked>Front ID Image</ion-label>\n                    <img ng-src="imagesrc" class="avatar" ng-click="uploadProfilePic()"/>\n                    <button class="button button-primary" ng-click="uploadProfilePic()">Change Picture</button>\n                    <input type="file" accept="image/*" id="upload" />\n                  </div>\n                  <div class="rear_id_img">\n                      <ion-label color="primary" stacked>Rear ID Image</ion-label>\n                      <img ng-src="imagesrc" class="avatar" ng-click="uploadProfilePic()"/>\n                      <button class="button button-primary" ng-click="uploadProfilePic()">Change Picture</button>\n                      <input type="file" accept="image/*" id="upload" />\n                  </div>\n                  <div class="store_license_img">\n                        <ion-label color="primary" stacked>Store license</ion-label>\n                        <img ng-src="imagesrc" class="avatar" ng-click="uploadProfilePic()"/>\n                        <button class="button button-primary" ng-click="uploadProfilePic()">Change Picture</button>\n                        <input type="file" accept="image/*" id="upload" />\n                  </div>\n                  <div class="clear"></div>\n                </div>\n            </ion-list>\n        <button ion-button full class="theme_background" icon-right (click)="verifyStore()">Upload and Verify\n            <ion-icon name="ios-arrow-forward" class=""></ion-icon>\n        </button>\n      </div>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/store/store.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ })

});
//# sourceMappingURL=5.js.map