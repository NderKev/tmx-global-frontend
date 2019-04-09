webpackJsonp([20],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderOrderListPageModule", function() { return RiderOrderListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rider_order_list__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RiderOrderListPageModule = /** @class */ (function () {
    function RiderOrderListPageModule() {
    }
    RiderOrderListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rider_order_list__["a" /* RiderOrderListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rider_order_list__["a" /* RiderOrderListPage */]),
            ],
        })
    ], RiderOrderListPageModule);
    return RiderOrderListPageModule;
}());

//# sourceMappingURL=rider-order-list.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderOrderListPage; });
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
 * Generated class for the RiderOrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RiderOrderListPage = /** @class */ (function () {
    function RiderOrderListPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.order_type = 1;
    }
    RiderOrderListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RiderOrderListPage');
    };
    RiderOrderListPage.prototype.order_tab = function (order_type) {
        this.order_type = order_type;
    };
    RiderOrderListPage.prototype.riderorder = function () {
        var modal = this.modalCtrl.create('RiderOrderPage');
        modal.present();
    };
    RiderOrderListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rider-order-list',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/rider-order-list/rider-order-list.html"*/'<!--\n  Generated template for the RiderOrderListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n  <ion-header>\n      <ul>\n          <li (click)="order_tab(1)" [class.active]="order_type== 1">\n              Completed\n          </li>\n          <li (click)="order_tab(2)" [class.active]="order_type== 2">\n              Available\n          </li>\n          <div class="clear"></div>\n      </ul>\n  </ion-header>\n  <ion-content padding>\n      <div class="rider_order_wrapper">\n          <div [hidden]="order_type != 1">\n              <ion-list>\n                  <ion-item (click)="riderorder()">\n                      <div class="rider_list_image">\n                          <div class="not">\n                                  <img src="assets/imgs/tick.png">\n                          </div>\n                          <img src="assets/imgs/item10.png">\n                      </div>\n                      <div class="rider_list_details">\n                          <ion-grid class="p0">\n                              <ion-row>\n                                  <ion-col col-12 class="p0">\n                                      <h4>\n                                              McDonald’d (Atlanta, Gaponce De Leon Ave)\n                                      </h4>\n                                  </ion-col>\n                              </ion-row>\n                              <ion-row>\n                                      <ion-col col-8 class="p0">\n                                          <p>27th March 2019. 11:00 am</p>\n                                      </ion-col>\n                                      <ion-col col-4 class="p0 textRight">\n                                              <p>Order Delivered</p>\n                                      </ion-col>\n                              </ion-row>\n                              <ion-row>\n                                      <ion-col col-8 class="p0">\n                                          <h6>Total<strong>400 TMX</strong></h6>\n                                      </ion-col>\n                                      <ion-col col-4 class="p0 textRight">\n                                          <button class="theme_background">\n                                              Order Details\n                                          </button>\n                                      </ion-col>\n                              </ion-row>\n                          </ion-grid>\n                      </div>\n                  </ion-item>\n                  <ion-item (click)="riderorder()">\n                          <div class="rider_list_image">\n                              <div class="not">\n                                      <img src="assets/imgs/cross.png">\n                              </div>\n                              <img src="assets/imgs/item11.png">\n                          </div>\n                          <div class="rider_list_details">\n                              <ion-grid class="p0">\n                                  <ion-row>\n                                      <ion-col col-12 class="p0">\n                                          <h4>\n                                                  McDonald’d (Atlanta, Gaponce De Leon Ave)\n                                          </h4>\n                                      </ion-col>\n                                  </ion-row>\n                                  <ion-row>\n                                          <ion-col col-8 class="p0">\n                                              <p>28th March 2019. 10:00 am</p>\n                                          </ion-col>\n                                          <ion-col col-4 class="p0 textRight">\n                                                  <p>Order Delivered</p>\n                                          </ion-col>\n                                  </ion-row>\n                                  <ion-row>\n                                          <ion-col col-8 class="p0">\n                                              <h6>Total<strong>500 TMX</strong></h6>\n                                          </ion-col>\n                                          <ion-col col-4 class="p0 textRight">\n                                              <button class="theme_background">\n                                                  Order Details\n                                              </button>\n                                          </ion-col>\n                                  </ion-row>\n                              </ion-grid>\n                          </div>\n                      </ion-item>\n              </ion-list>\n          </div>\n          <div [hidden]="order_type != 2">\n                  <ion-list>\n                          <ion-item (click)="riderorder()">\n                              <div class="rider_list_image">\n                                  <div class="not">\n                                          <img src="assets/imgs/tick.png">\n                                  </div>\n                                  <img src="assets/imgs/item10.png">\n                              </div>\n                              <div class="rider_list_details">\n                                  <ion-grid class="p0">\n                                      <ion-row>\n                                          <ion-col col-12 class="p0">\n                                              <h4>\n                                                      McDonald’d (Atlanta, Gaponce De Leon Ave)\n                                              </h4>\n                                          </ion-col>\n                                      </ion-row>\n                                      <ion-row>\n                                              <ion-col col-8 class="p0">\n                                                  <p>29th March 2019. 10:20 am</p>\n                                              </ion-col>\n                                              <ion-col col-4 class="p0 textRight">\n                                                      <p>Order Available</p>\n                                              </ion-col>\n                                      </ion-row>\n                                      <ion-row>\n                                              <ion-col col-8 class="p0">\n                                                  <h6>Total<strong>425 TMX</strong></h6>\n                                              </ion-col>\n                                              <ion-col col-4 class="p0 textRight">\n                                                  <button class="theme_background">\n                                                      Grab order\n                                                  </button>\n                                              </ion-col>\n                                      </ion-row>\n                                  </ion-grid>\n                              </div>\n                          </ion-item>\n                          <ion-item (click)="riderorder()">\n                                  <div class="rider_list_image">\n                                      <div class="not">\n                                              <img src="assets/imgs/cross.png">\n                                      </div>\n                                      <img src="assets/imgs/item11.png">\n                                  </div>\n                                  <div class="rider_list_details">\n                                      <ion-grid class="p0">\n                                          <ion-row>\n                                              <ion-col col-12 class="p0">\n                                                  <h4>\n                                                          McDonald’d (Atlanta, Gaponce De Leon Ave)\n                                                  </h4>\n                                              </ion-col>\n                                          </ion-row>\n                                          <ion-row>\n                                                  <ion-col col-8 class="p0">\n                                                      <p>29th March 2019. 10:00 am</p>\n                                                  </ion-col>\n                                                  <ion-col col-4 class="p0 textRight">\n                                                          <p>Order Available</p>\n                                                  </ion-col>\n                                          </ion-row>\n                                          <ion-row>\n                                                  <ion-col col-8 class="p0">\n                                                      <h6>Total<strong>375 TMX</strong></h6>\n                                                  </ion-col>\n                                                  <ion-col col-4 class="p0 textRight">\n                                                      <button class="theme_background">\n                                                              Grab order\n                                                      </button>\n                                                  </ion-col>\n                                          </ion-row>\n                                      </ion-grid>\n                                  </div>\n                              </ion-item>\n                      </ion-list>\n          </div>\n      </div>\n  </ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/rider-order-list/rider-order-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], RiderOrderListPage);
    return RiderOrderListPage;
}());

//# sourceMappingURL=rider-order-list.js.map

/***/ })

});
//# sourceMappingURL=20.js.map