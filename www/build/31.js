webpackJsonp([31],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function() { return ItemDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemDetailPageModule = /** @class */ (function () {
    function ItemDetailPageModule() {
    }
    ItemDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_detail__["a" /* ItemDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_detail__["a" /* ItemDetailPage */]),
            ],
        })
    ], ItemDetailPageModule);
    return ItemDetailPageModule;
}());

//# sourceMappingURL=item-detail.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
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


var ItemDetailPage = /** @class */ (function () {
    function ItemDetailPage(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemDetailPage');
    };
    ItemDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ItemDetailPage.prototype.item = function () {
        this.navCtrl.push('ItemDetailOnePage');
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/item-detail/item-detail.html"*/'\n<ion-content >\n  <div class="item_detail_wrapper">\n    <div class="item_detail_banner">\n        <div class="top_bar">\n            <button ion-button class="nav_btn floatLeft" (click)="close()">\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n            <button ion-button class="nav_btn floatRight">\n                <ion-icon name="ios-heart-outline"></ion-icon>\n            </button>\n            <button ion-button class="nav_btn floatRight">\n                <ion-icon name="md-share"></ion-icon>\n            </button>\n            <div class="clear"></div>\n        </div>\n        <img src="assets/imgs/item12.png">\n        <div class="banner_stamp">\n          <ion-grid class="p0">\n            <ion-row>\n              <ion-col col-12 class="p0">\n                <h4>\n                    McDonald’d (Atlanta, Gaponce De Leon Ave)\n                </h4>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-12 class="p0">\n                  <p>Breakfast and Brunch . Desserts</p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-6 class="p0">\n                    <h6><ion-icon name="ios-time"></ion-icon>15 - 25 mins</h6>\n                </ion-col>\n                <ion-col col-6 class="p0 textRight">\n                  <h5>Fee<strong>500 TMX</strong></h5>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n    </div>\n    <div class="item_detail">\n      <ion-grid class="p0">\n        <ion-row>\n          <ion-col col-6 class="p0 ">\n            <p>Select menu</p>\n          </ion-col>\n          <ion-col col-6 class="p0 textRight">\n            <select>\n              <option>\n                Breakfast\n              </option>\n              <option>\n                  Lunch\n                </option>\n                <option>\n                    Dinner\n                  </option>\n            </select>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <h4>Most Popular</h4>\n      <ul>\n        <li (click)="item()">\n          <div class="list_circle">\n\n          </div>\n          <div class="list_circle_detail">\n            <h5>Egg McMuffin Meal</h5>\n            <p>Comes with small coffee and hash bro...</p>\n            <strong>200 TMX</strong>\n            </div>\n            <div class="clear"></div>\n        </li>\n        <li (click)="item()">\n            <div class="list_circle">\n\n            </div>\n            <div class="list_circle_detail">\n              <h5>Egg McMuffin Meal</h5>\n              <p>Comes with small coffee and hash bro...</p>\n              <strong>200 TMX</strong>\n              </div>\n              <div class="clear"></div>\n          </li>\n          <li (click)="item()">\n              <div class="list_circle">\n\n              </div>\n              <div class="list_circle_detail">\n                <h5>Egg McMuffin Meal</h5>\n                <p>Comes with small coffee and hash bro...</p>\n                <strong>200 TMX</strong>\n                </div>\n                <div class="clear"></div>\n            </li>\n      </ul>\n      <h4>Lunch Meals</h4>\n      <ul>\n          <li (click)="item()">\n            <div class="list_circle">\n\n            </div>\n            <div class="list_circle_detail">\n              <h5>Egg McMuffin Meal</h5>\n              <p>Comes with small coffee and hash bro...</p>\n              <strong>300 TMX</strong>\n              </div>\n              <div class="clear"></div>\n          </li>\n          <li (click)="item()">\n              <div class="list_circle">\n\n              </div>\n              <div class="list_circle_detail">\n                <h5>Egg McMuffin Meal</h5>\n                <p>Comes with small coffee and hash bro...</p>\n                <strong>250 TMX</strong>\n                </div>\n                <div class="clear"></div>\n            </li>\n            <li (click)="item()">\n                <div class="list_circle">\n\n                </div>\n                <div class="list_circle_detail">\n                  <h5>Egg McMuffin Meal</h5>\n                  <p>Comes with small coffee and hash bro...</p>\n                  <strong>300 TMX</strong>\n                  </div>\n                  <div class="clear"></div>\n              </li>\n        </ul>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/item-detail/item-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ })

});
//# sourceMappingURL=31.js.map