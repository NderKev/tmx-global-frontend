webpackJsonp([25],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailsPageModule", function() { return OrderdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderdetails__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderdetailsPageModule = /** @class */ (function () {
    function OrderdetailsPageModule() {
    }
    OrderdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orderdetails__["a" /* OrderdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderdetails__["a" /* OrderdetailsPage */]),
            ],
        })
    ], OrderdetailsPageModule);
    return OrderdetailsPageModule;
}());

//# sourceMappingURL=orderdetails.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetailsPage; });
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


var OrderdetailsPage = /** @class */ (function () {
    function OrderdetailsPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    OrderdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderdetailsPage');
    };
    OrderdetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OrderdetailsPage.prototype.receipt = function () {
        var modal = this.modalCtrl.create('ReceiptPage');
        modal.present();
    };
    OrderdetailsPage.prototype.ratting = function () {
        var modal = this.modalCtrl.create('RattingPage');
        modal.present();
    };
    OrderdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-orderdetails',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/orderdetails/orderdetails.html"*/'<ion-header class="nav_header theme_background">\n    <button class="nav_btn floatLeft text_color_white" (click)="dismiss()">\n        <ion-icon name="ios-arrow-round-back-outline"></ion-icon>\n    </button>\n    <div class="nav_header_title floatLeft text_color_white">\n  Order Details\n    </div>\n  </ion-header>\n<ion-content>\n    <div class="order_wrapper">\n        <ion-list>\n            <ion-item>\n                <div class="list_image">\n                    <div class="not">\n                            <img src="assets/imgs/tick.png">\n                    </div>\n                    <img src="assets/imgs/item10.png">\n                </div>\n                <div class="list_details">\n                    <ion-grid class="p0">\n                        <ion-row>\n                            <ion-col col-12 class="p0">\n                                <h4>\n                                        McDonald’d (Atlanta, Gaponce De Leon Ave)\n                                </h4>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                                <ion-col col-4 class="p0">\n                                    <p>Ordered Time</p>\n                                </ion-col>\n                                <ion-col col-8 class="p0 textLeft">\n                                        <p><strong>29th March 2019. 10:00 am</strong></p>\n                                </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col col-4 class="p0">\n                                <p>Order Status</p>\n                            </ion-col>\n                            <ion-col col-8 class="p0 textLeft">\n                                    <p><strong>Delivered Successfully</strong></p>\n                            </ion-col>\n                    </ion-row>\n                   </ion-grid>\n                   <br>\n                   <button class="view_receipt" (click)="receipt()">View Receipt</button>\n                </div>\n            </ion-item>\n          </ion-list>\n          <div class="meals_list">\n              <ul>\n                <li>\n                  <ion-grid class="p0">\n                    <ion-row>\n                      <ion-col col-1 class="">\n                          <div class="number_circle">\n                              1\n                            </div>\n                      </ion-col>\n                      <ion-col col-2 class="">\n                        <div class="circle">\n                            <img src="assets/imgs/item1.png">\n                        </div>\n                      </ion-col>\n                      <ion-col col-6 class="">\n                        <p>Egg McMuffin Meal</p>\n                      </ion-col>\n                      <ion-col col-3 class="textRight">\n                        <h6>800 TMX</h6>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </li>\n                <li>\n                    <ion-grid class="p0">\n                      <ion-row>\n                        <ion-col col-1 class="">\n                            <div class="number_circle">\n                                2\n                              </div>\n                        </ion-col>\n                        <ion-col col-2 class="">\n                          <div class="circle">\n                              <img src="assets/imgs/item2.png">\n                          </div>\n                        </ion-col>\n                        <ion-col col-6 class="">\n                          <p>Egg McMuffin Meal</p>\n                        </ion-col>\n                        <ion-col col-3 class="textRight">\n                          <h6>500 TMX</h6>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </li>\n                <hr>\n                <li>\n                    <ion-grid class="p0">\n                      <ion-row>\n                        <ion-col col-6 class="">\n                          <h6>Total</h6>\n                        </ion-col>\n                        <ion-col col-6 class="textRight">\n                          <h6><strong>1300 TMX</strong></h6>\n                          </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                </li>\n                <li>\n                    <ion-grid class="p0">\n                      <ion-row>\n                        <ion-col col-6 class="p0">\n                          <button ion-button class="rate" (click)="ratting()">Rate now</button>\n                        </ion-col>\n                        <ion-col col-6 class="p0">\n                            <button ion-button class="reorder">Re Order</button>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                </li>\n\n              </ul>\n            </div>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/orderdetails/orderdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], OrderdetailsPage);
    return OrderdetailsPage;
}());

//# sourceMappingURL=orderdetails.js.map

/***/ })

});
//# sourceMappingURL=25.js.map