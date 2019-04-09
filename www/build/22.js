webpackJsonp([22],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptPageModule", function() { return ReceiptPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receipt__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReceiptPageModule = /** @class */ (function () {
    function ReceiptPageModule() {
    }
    ReceiptPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__receipt__["a" /* ReceiptPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__receipt__["a" /* ReceiptPage */]),
            ],
        })
    ], ReceiptPageModule);
    return ReceiptPageModule;
}());

//# sourceMappingURL=receipt.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptPage; });
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


var ReceiptPage = /** @class */ (function () {
    function ReceiptPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ReceiptPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReceiptPage');
    };
    ReceiptPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReceiptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-receipt',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/receipt/receipt.html"*/'\n<ion-content padding class="theme_dark_transparent">\n    <div class="wrapper">\n        <div class="log_div">\n          <ion-card>\n            <ion-card-content>\n              <h4>Receipt</h4>\n              <hr>\n              <br>\n              <div class="cart_wrapper">\n                <h6 class="m0">Order Time</h6>\n                <h6>27th March 2019. 10:00 am</h6>\n                <div class="meal_list">\n                  <ul>\n                    <li>\n                      <div class="meal_number">\n                        2x\n                      </div>\n                      <div class="meal_details">\n                        <h4>Egg McMuffin™ Meal</h4>\n                        <p>Medium</p>\n                      </div>\n                      <div class="meal_amount">\n                        <h5>800 TMX</h5>\n                        </div>\n                        <div class="clear"></div>\n                    </li>\n                    <li>\n                        <div class="meal_number">\n                          1x\n                        </div>\n                        <div class="meal_details">\n                          <h4>Egg McMuffin™ Meal</h4>\n                          <p>Medium</p>\n                        </div>\n                        <div class="meal_amount">\n                          <h5>500 TMX</h5>\n                          </div>\n                          <div class="clear"></div>\n                      </li>\n                  </ul>\n                </div>\n                <ion-grid class="p0">\n                  <ion-row>\n                    <ion-col col-6 class="textLeft p0">\n                      Sub Total\n                    </ion-col>\n                    <ion-col col-6 class="textRight p0">\n                        1300 TMX\n                      </ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-6 class="textLeft p0">\n                        Tax\n                      </ion-col>\n                      <ion-col col-6 class="textRight p0">\n                          100 TMX\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-6 class="textLeft p0">\n                          Rider Fee\n                        </ion-col>\n                        <ion-col col-6 class="textRight p0">\n                            150 TMX\n                          </ion-col>\n                      </ion-row>\n                      <br>\n                      <ion-row>\n                          <ion-col col-6 class="textLeft p0">\n                            <strong>Total</strong>\n                          </ion-col>\n                          <ion-col col-6 class="textRight p0">\n                              <strong>1550 TMX</strong>\n                            </ion-col>\n                        </ion-row>\n                </ion-grid>\n              </div>\n            </ion-card-content>\n            <div padding class="textCenter">\n                <button ion-button full class=" receipt_close" (click)="dismiss()">Close</button>\n            </div>\n          </ion-card>\n\n          </div>\n\n          </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/receipt/receipt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ReceiptPage);
    return ReceiptPage;
}());

//# sourceMappingURL=receipt.js.map

/***/ })

});
//# sourceMappingURL=22.js.map