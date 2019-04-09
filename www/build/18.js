webpackJsonp([18],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderOrderPageModule", function() { return RiderOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rider_order__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RiderOrderPageModule = /** @class */ (function () {
    function RiderOrderPageModule() {
    }
    RiderOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rider_order__["a" /* RiderOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rider_order__["a" /* RiderOrderPage */]),
            ],
        })
    ], RiderOrderPageModule);
    return RiderOrderPageModule;
}());

//# sourceMappingURL=rider-order.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderOrderPage; });
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
 * Generated class for the RiderOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RiderOrderPage = /** @class */ (function () {
    function RiderOrderPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    RiderOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RiderOrderPage');
    };
    RiderOrderPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RiderOrderPage.prototype.receipt = function () {
        var modal = this.modalCtrl.create('ReceiptPage');
        modal.present();
    };
    RiderOrderPage.prototype.ratting = function () {
        var modal = this.modalCtrl.create('RattingPage');
        modal.present();
    };
    RiderOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rider-order',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/rider-order/rider-order.html"*/'<!--\n  Generated template for the RiderOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n  <ion-header class="nav_header theme_background">\n      <button class="nav_btn floatLeft text_color_white" (click)="dismiss()">\n          <ion-icon name="ios-arrow-round-back-outline"></ion-icon>\n      </button>\n      <div class="nav_header_title floatLeft text_color_white">\n    Rider Job Details\n      </div>\n    </ion-header>\n  <ion-content>\n      <div class="order_wrapper">\n          <ion-list>\n              <ion-item>\n                  <div class="list_image">\n                      <div class="not">\n                              <img src="assets/imgs/tick.png">\n                      </div>\n                      <img src="assets/imgs/item10.png">\n                  </div>\n                  <div class="list_details">\n                      <ion-grid class="p0">\n                          <ion-row>\n                              <ion-col col-12 class="p0">\n                                  <h4>\n                                          McDonald’d (Atlanta, Gaponce De Leon Ave)\n                                  </h4>\n                              </ion-col>\n                          </ion-row>\n                          <ion-row>\n                                  <ion-col col-4 class="p0">\n                                      <p>Ordered Time</p>\n                                  </ion-col>\n                                  <ion-col col-8 class="p0 textLeft">\n                                          <p><strong>27th March 2019. 10:00 am</strong></p>\n                                  </ion-col>\n                          </ion-row>\n                          <ion-row>\n                              <ion-col col-4 class="p0">\n                                  <p>Order Status</p>\n                              </ion-col>\n                              <ion-col col-8 class="p0 textLeft">\n                                      <p><strong>Delivered Successfully</strong></p>\n                              </ion-col>\n                      </ion-row>\n                     </ion-grid>\n                     <br>\n                     <button class="view_receipt" (click)="receipt()">View Receipt</button>\n                  </div>\n              </ion-item>\n            </ion-list>\n            <div class="meals_list">\n                <ul>\n                  <li>\n                    <ion-grid class="p0">\n                      <ion-row>\n                        <ion-col col-1 class="">\n                            <div class="number_circle">\n                                1\n                              </div>\n                        </ion-col>\n                        <ion-col col-2 class="">\n                          <div class="circle">\n                              <img src="assets/imgs/item1.png">\n                          </div>\n                        </ion-col>\n                        <ion-col col-6 class="">\n                          <p>Egg McMuffin Meal</p>\n                        </ion-col>\n                        <ion-col col-3 class="textRight">\n                          <h6>800 TMX</h6>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </li>\n                  <li>\n                      <ion-grid class="p0">\n                        <ion-row>\n                          <ion-col col-1 class="">\n                              <div class="number_circle">\n                                  2\n                                </div>\n                          </ion-col>\n                          <ion-col col-2 class="">\n                            <div class="circle">\n                                <img src="assets/imgs/item2.png">\n                            </div>\n                          </ion-col>\n                          <ion-col col-6 class="">\n                            <p>Egg McMuffin Meal</p>\n                          </ion-col>\n                          <ion-col col-3 class="textRight">\n                            <h6>500 TMX</h6>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </li>\n                  <hr>\n                  <li>\n                      <ion-grid class="p0">\n                        <ion-row>\n                          <ion-col col-6 class="">\n                            <h6>Total</h6>\n                          </ion-col>\n                          <ion-col col-6 class="textRight">\n                            <h6><strong>1300 TMX</strong></h6>\n                            </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                  </li>\n                  <li>\n                      <ion-grid class="p0">\n                        <ion-row>\n                          <ion-col col-6 class="p0">\n                            <button ion-button class="rate" (click)="ratting()">Rate now</button>\n                          </ion-col>\n                          <ion-col col-6 class="p0">\n                              <button ion-button class="vieworder">View Order</button>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                  </li>\n\n                </ul>\n              </div>\n        </div>\n  </ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/rider-order/rider-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], RiderOrderPage);
    return RiderOrderPage;
}());

//# sourceMappingURL=rider-order.js.map

/***/ })

});
//# sourceMappingURL=18.js.map