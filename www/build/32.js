webpackJsonp([32],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailOnePageModule", function() { return ItemDetailOnePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail_one__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemDetailOnePageModule = /** @class */ (function () {
    function ItemDetailOnePageModule() {
    }
    ItemDetailOnePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_detail_one__["a" /* ItemDetailOnePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_detail_one__["a" /* ItemDetailOnePage */]),
            ],
        })
    ], ItemDetailOnePageModule);
    return ItemDetailOnePageModule;
}());

//# sourceMappingURL=item-detail-one.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailOnePage; });
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


var ItemDetailOnePage = /** @class */ (function () {
    function ItemDetailOnePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItemDetailOnePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemDetailOnePage');
    };
    ItemDetailOnePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ItemDetailOnePage.prototype.cart = function () {
        this.navCtrl.push('YourcartPage');
    };
    ItemDetailOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-item-detail-one',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/item-detail-one/item-detail-one.html"*/'<ion-content>\n    <div class="item_detail_wrapper">\n        <div class="item_detail_banner">\n            <div class="top_bar">\n                <button ion-button class="nav_btn floatLeft" (click)="back()">\n                    <ion-icon name="ios-arrow-back"></ion-icon>\n                </button>\n                <button ion-button class="nav_btn floatRight">\n                    <ion-icon name="md-share"></ion-icon>\n                </button>\n                <div class="clear"></div>\n            </div>\n            <img src="assets/imgs/item12.png">\n        </div>\n        <div class="item_detail">\n          <h5>Egg McMuffin™ Meal</h5>\n          <p>Comes with small coffee and hash browns</p>\n          <h4>Choose a Drink</h4>\n          <ul>\n            <li>\n              <ion-grid class="p0">\n                <ion-row>\n                  <ion-col col-1 class="p0">\n                      <ion-radio value="1"></ion-radio>\n                  </ion-col>\n                  <ion-col col-9 class="p0">\n                      <ion-label>Small minute maid orange juice</ion-label>\n                  </ion-col>\n                  <ion-col col-2 class="p0 textRight">\n                    <p>200 TMX</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </li>\n            <li>\n                <ion-grid class="p0">\n                  <ion-row>\n                    <ion-col col-1 class="p0">\n                        <ion-radio value="2"></ion-radio>\n                    </ion-col>\n                    <ion-col col-9 class="p0">\n                        <ion-label>Medium minute maid orange juice</ion-label>\n                    </ion-col>\n                    <ion-col col-2 class="p0 textRight">\n                      <p>200 TMX</p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </li>\n              <li>\n                  <ion-grid class="p0">\n                    <ion-row>\n                      <ion-col col-1 class="p0">\n                          <ion-radio value="3"></ion-radio>\n                      </ion-col>\n                      <ion-col col-9 class="p0">\n                          <ion-label>Large minute maid orange juice</ion-label>\n                      </ion-col>\n                      <ion-col col-2 class="p0 textRight">\n                        <p>250 TMX</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </li>\n                <li>\n                    <ion-grid class="p0">\n                      <ion-row>\n                        <ion-col col-1 class="p0">\n                            <ion-radio value="4"></ion-radio>\n                        </ion-col>\n                        <ion-col col-9 class="p0">\n                            <ion-label>Smaill coffee</ion-label>\n                        </ion-col>\n                        <ion-col col-2 class="p0 textRight">\n                          <p>250 TMX</p>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </li>\n                  <li>\n                      <ion-grid class="p0">\n                        <ion-row>\n                          <ion-col col-1 class="p0">\n                              <ion-radio value="5"></ion-radio>\n                          </ion-col>\n                          <ion-col col-9 class="p0">\n                              <ion-label>Medium coffee</ion-label>\n                          </ion-col>\n                          <ion-col col-2 class="p0 textRight">\n                            <p>225 TMX</p>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </li>\n                    <li>\n                        <ion-grid class="p0">\n                          <ion-row>\n                            <ion-col col-1 class="p0">\n                                <ion-radio value="6"></ion-radio>\n                            </ion-col>\n                            <ion-col col-9 class="p0">\n                                <ion-label>Large coffee</ion-label>\n                            </ion-col>\n                            <ion-col col-2 class="p0 textRight">\n                              <p>275 TMX</p>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                      </li>\n          </ul>\n          <h4>Choose a Side</h4>\n          <ul>\n              <li>\n                  <ion-grid class="p0">\n                    <ion-row>\n                      <ion-col col-1 class="p0">\n                          <ion-radio value="7"></ion-radio>\n                      </ion-col>\n                      <ion-col col-9 class="p0">\n                          <ion-label>Smaill coffee</ion-label>\n                      </ion-col>\n                      <ion-col col-2 class="p0 textRight">\n                        <p>175 TMX</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </li>\n                <li>\n                    <ion-grid class="p0">\n                      <ion-row>\n                        <ion-col col-1 class="p0">\n                            <ion-radio value="8"></ion-radio>\n                        </ion-col>\n                        <ion-col col-9 class="p0">\n                            <ion-label>Medium coffee</ion-label>\n                        </ion-col>\n                        <ion-col col-2 class="p0 textRight">\n                          <p>325 TMX</p>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </li>\n                  <li>\n                      <ion-grid class="p0">\n                        <ion-row>\n                          <ion-col col-1 class="p0">\n                              <ion-radio value="9"></ion-radio>\n                          </ion-col>\n                          <ion-col col-9 class="p0">\n                              <ion-label>Large coffee</ion-label>\n                          </ion-col>\n                          <ion-col col-2 class="p0 textRight">\n                            <p>199 TMX</p>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </li>\n          </ul>\n          <h4>Special Instructions</h4>\n          <textarea class="item_textarea" rows="4" placeholder="Add a note ( extra cheeze, no chilly etc. )">\n\n          </textarea>\n\n          <button ion-button full class="theme_background add_cart" (click)="cart()">Add to Cart\n              <span class="price">1924 TMX</span>\n              </button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/item-detail-one/item-detail-one.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ItemDetailOnePage);
    return ItemDetailOnePage;
}());

//# sourceMappingURL=item-detail-one.js.map

/***/ })

});
//# sourceMappingURL=32.js.map