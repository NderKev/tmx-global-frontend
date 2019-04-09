webpackJsonp([26],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderPageModule = /** @class */ (function () {
    function OrderPageModule() {
    }
    OrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
            ],
        })
    ], OrderPageModule);
    return OrderPageModule;
}());

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
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


var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.order_type = 1;
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
    };
    OrderPage.prototype.order_tab = function (order_type) {
        this.order_type = order_type;
    };
    OrderPage.prototype.orderdetail = function () {
        var modal = this.modalCtrl.create('OrderdetailsPage');
        modal.present();
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/order/order.html"*/'<ion-header>\n    <ul>\n        <li (click)="order_tab(1)" [class.active]="order_type== 1">\n            History\n        </li>\n        <li (click)="order_tab(2)" [class.active]="order_type== 2">\n            Upcoming\n        </li>\n        <div class="clear"></div>\n    </ul>\n</ion-header>\n<ion-content padding>\n    <div class="order_wrapper">\n        <div [hidden]="order_type != 1">\n            <ion-list>\n                <ion-item (click)="orderdetail()">\n                    <div class="list_image">\n                        <div class="not">\n                                <img src="assets/imgs/tick.png">\n                        </div>\n                        <img src="assets/imgs/item10.png">\n                    </div>\n                    <div class="list_details">\n                        <ion-grid class="p0">\n                            <ion-row>\n                                <ion-col col-12 class="p0">\n                                    <h4>\n                                            McDonald’d (Atlanta, Gaponce De Leon Ave)\n                                    </h4>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row>\n                                    <ion-col col-8 class="p0">\n                                        <p>27th March 2019. 11:00 am</p>\n                                    </ion-col>\n                                    <ion-col col-4 class="p0 textRight">\n                                            <p>Order Delivered</p>\n                                    </ion-col>\n                            </ion-row>\n                            <ion-row>\n                                    <ion-col col-8 class="p0">\n                                        <h6>Total<strong> 400 TMX</strong></h6>\n                                    </ion-col>\n                                    <ion-col col-4 class="p0 textRight">\n                                        <button class="theme_background">\n                                            Reorder\n                                        </button>\n                                    </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                </ion-item>\n                <ion-item (click)="orderdetail()">\n                        <div class="list_image">\n                            <div class="not">\n                                    <img src="assets/imgs/cross.png">\n                            </div>\n                            <img src="assets/imgs/item11.png">\n                        </div>\n                        <div class="list_details">\n                            <ion-grid class="p0">\n                                <ion-row>\n                                    <ion-col col-12 class="p0">\n                                        <h4>\n                                                McDonald’d (Atlanta, Gaponce De Leon Ave)\n                                        </h4>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                        <ion-col col-8 class="p0">\n                                            <p>28th March 2019. 12:00 am</p>\n                                        </ion-col>\n                                        <ion-col col-4 class="p0 textRight">\n                                                <p>Order Delivered</p>\n                                        </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                        <ion-col col-8 class="p0">\n                                            <h6>Total<strong>500 TMX</strong></h6>\n                                        </ion-col>\n                                        <ion-col col-4 class="p0 textRight">\n                                            <button class="theme_background">\n                                                Reorder\n                                            </button>\n                                        </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </div>\n                    </ion-item>\n            </ion-list>\n        </div>\n        <div [hidden]="order_type != 2">\n                <ion-list>\n                        <ion-item (click)="orderdetail()">\n                            <div class="list_image">\n                                <div class="not">\n                                        <img src="assets/imgs/tick.png">\n                                </div>\n                                <img src="assets/imgs/item10.png">\n                            </div>\n                            <div class="list_details">\n                                <ion-grid class="p0">\n                                    <ion-row>\n                                        <ion-col col-12 class="p0">\n                                            <h4>\n                                                    McDonald’d (Atlanta, Gaponce De Leon Ave)\n                                            </h4>\n                                        </ion-col>\n                                    </ion-row>\n                                    <ion-row>\n                                            <ion-col col-8 class="p0">\n                                                <p>29th March 2019. 09:00 am</p>\n                                            </ion-col>\n                                            <ion-col col-4 class="p0 textRight">\n                                                    <p>Order Pending</p>\n                                            </ion-col>\n                                    </ion-row>\n                                    <ion-row>\n                                            <ion-col col-8 class="p0">\n                                                <h6>Total<strong>400 TMX</strong></h6>\n                                            </ion-col>\n                                            <ion-col col-4 class="p0 textRight">\n                                                <button class="theme_background">\n                                                    Track order\n                                                </button>\n                                            </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </div>\n                        </ion-item>\n                        <ion-item (click)="orderdetail()">\n                                <div class="list_image">\n                                    <div class="not">\n                                            <img src="assets/imgs/cross.png">\n                                    </div>\n                                    <img src="assets/imgs/item11.png">\n                                </div>\n                                <div class="list_details">\n                                    <ion-grid class="p0">\n                                        <ion-row>\n                                            <ion-col col-12 class="p0">\n                                                <h4>\n                                                        McDonald’d (Atlanta, Gaponce De Leon Ave)\n                                                </h4>\n                                            </ion-col>\n                                        </ion-row>\n                                        <ion-row>\n                                                <ion-col col-8 class="p0">\n                                                    <p>29th March 2019. 09:30 am</p>\n                                                </ion-col>\n                                                <ion-col col-4 class="p0 textRight">\n                                                        <p>Order Pending</p>\n                                                </ion-col>\n                                        </ion-row>\n                                        <ion-row>\n                                                <ion-col col-8 class="p0">\n                                                    <h6>Total<strong>375 TMX</strong></h6>\n                                                </ion-col>\n                                                <ion-col col-4 class="p0 textRight">\n                                                    <button class="theme_background">\n                                                            Track order\n                                                    </button>\n                                                </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </div>\n                            </ion-item>\n                    </ion-list>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/order/order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=26.js.map