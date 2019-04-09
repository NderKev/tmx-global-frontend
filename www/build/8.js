webpackJsonp([8],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProfilePageModule", function() { return StoreProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_profile__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StoreProfilePageModule = /** @class */ (function () {
    function StoreProfilePageModule() {
    }
    StoreProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__store_profile__["a" /* StoreProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__store_profile__["a" /* StoreProfilePage */]),
            ],
        })
    ], StoreProfilePageModule);
    return StoreProfilePageModule;
}());

//# sourceMappingURL=store-profile.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProfilePage; });
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
 * Generated class for the StoreProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StoreProfilePage = /** @class */ (function () {
    function StoreProfilePage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.tab1 = 'SearchPage';
        this.tab2 = 'OrderPage';
        this.tab3 = 'FavouratePage';
        this.tab4 = 'ProfilePage';
        this.tab5 = 'WalletPage';
    }
    StoreProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoreProfilePage');
    };
    StoreProfilePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create('UselocationPopoverPage');
        popover.present({
            ev: myEvent
        });
    };
    StoreProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-store-profile',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/store-profile/store-profile.html"*/'<!--\n  Generated template for the StoreProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-tabs color="headColor" tabsplacement="top">\n    <ion-tab [root]="tab1" tabTitle="" tabIcon="ios-search"></ion-tab>\n    <ion-tab [root]="tab2" tabTitle="" tabIcon="ios-paper-outline"></ion-tab>\n    <ion-tab [root]="tab3" tabTitle="" tabIcon="ios-heart-outline"></ion-tab>\n    <ion-tab [root]="tab4" tabTitle="" tabIcon="md-person"></ion-tab>\n    <ion-tab [root]="tab5" tabTitle="" tabIcon="md-card"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/store-profile/store-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]])
    ], StoreProfilePage);
    return StoreProfilePage;
}());

//# sourceMappingURL=store-profile.js.map

/***/ })

});
//# sourceMappingURL=8.js.map