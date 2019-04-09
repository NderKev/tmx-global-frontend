webpackJsonp([1],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourcartPageModule", function() { return YourcartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yourcart__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var YourcartPageModule = /** @class */ (function () {
    function YourcartPageModule() {
    }
    YourcartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__yourcart__["a" /* YourcartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__yourcart__["a" /* YourcartPage */]),
            ],
        })
    ], YourcartPageModule);
    return YourcartPageModule;
}());

//# sourceMappingURL=yourcart.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourcartPage; });
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


var YourcartPage = /** @class */ (function () {
    function YourcartPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    YourcartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad YourcartPage');
    };
    YourcartPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    YourcartPage.prototype.promo = function () {
        var modal = this.modalCtrl.create('PromoPage');
        modal.present();
    };
    YourcartPage.prototype.checkout = function () {
        this.navCtrl.push('DeliveryPage');
    };
    YourcartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-yourcart',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/yourcart/yourcart.html"*/'<ion-header class="nav_header">\n  <button class="nav_btn floatLeft" (click)="back()">\n      <ion-icon name="ios-arrow-round-back-outline"></ion-icon>\n  </button>\n  <div class="nav_header_title floatLeft">\nYour Cart\n  </div>\n</ion-header>\n<ion-content padding>\n  <div class="cart_wrapper">\n    <h6>Your Order</h6>\n    <div class="meal_list">\n      <ul>\n        <li>\n          <div class="meal_number">\n            2x\n          </div>\n          <div class="meal_details">\n            <h4>Egg McMuffin™ Meal</h4>\n            <p>Medium</p>\n            <p>French Fries</p>\n            <p>Ranch</p>\n            <p>McCafe chocolate shake</p>\n          </div>\n          <div class="meal_amount">\n            <h5>750 TMX</h5>\n            </div>\n            <div class="clear"></div>\n        </li>\n        <li>\n            <div class="meal_number">\n              1x\n            </div>\n            <div class="meal_details">\n              <h4>Egg McMuffin™ Meal</h4>\n              <p>Medium</p>\n            </div>\n            <div class="meal_amount">\n              <h5>225 TMX</h5>\n              </div>\n              <div class="clear"></div>\n          </li>\n      </ul>\n    </div>\n    <h4>Special Instructions</h4>\n    <textarea class="item_textarea" rows="1" placeholder="Add a note ( extra cheeze, no chilly etc. )">\n\n    </textarea>\n    <ion-grid class="p0">\n      <ion-row>\n        <ion-col col-6 class="textLeft">\n          Sub Total\n        </ion-col>\n        <ion-col col-6 class="textRight">\n            200 TMX\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-6 class="textLeft">\n            Tax\n          </ion-col>\n          <ion-col col-6 class="textRight">\n              150 TMX\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6 class="textLeft">\n              Rider Fee\n            </ion-col>\n            <ion-col col-6 class="textRight">\n                125 TMX\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-6 class="textLeft">\n                <strong>Total</strong>\n              </ion-col>\n              <ion-col col-6 class="textRight">\n                  <strong>1325 TMX</strong>\n                </ion-col>\n            </ion-row>\n    </ion-grid>\n    <br>\n    <br>\n    <div class="textCenter">\n      <button ion-button class="apply_code" (click)="promo()">Apply Promocode</button>\n    </div>\n    <br>\n    <br>\n    <div padding>\n        <button ion-button full class="theme_background add_cart" (click)="checkout()">Continue</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/yourcart/yourcart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], YourcartPage);
    return YourcartPage;
}());

//# sourceMappingURL=yourcart.js.map

/***/ })

});
//# sourceMappingURL=1.js.map