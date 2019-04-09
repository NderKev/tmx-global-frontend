webpackJsonp([36],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverydetailPageModule", function() { return DeliverydetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deliverydetail__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeliverydetailPageModule = /** @class */ (function () {
    function DeliverydetailPageModule() {
    }
    DeliverydetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__deliverydetail__["a" /* DeliverydetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__deliverydetail__["a" /* DeliverydetailPage */]),
            ],
        })
    ], DeliverydetailPageModule);
    return DeliverydetailPageModule;
}());

//# sourceMappingURL=deliverydetail.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliverydetailPage; });
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


var DeliverydetailPage = /** @class */ (function () {
    function DeliverydetailPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    DeliverydetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeliverydetailPage');
    };
    DeliverydetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DeliverydetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-deliverydetail',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/deliverydetail/deliverydetail.html"*/'\n<ion-content padding>\n    <div class="deliver_wrapper">\n        <div class="textCenter">\n            <div class="close" (click)="dismiss()">\n\n            </div>\n        </div>\n        <h5>Delivery Details</h5>\n        <input class="delivery_address" placeholder="Enter a new address">\n        <h6>Dropoff options</h6>\n        <h4>Doorstep delivery</h4>\n        <textarea class="drop_area_text" row="4">\n               \n        </textarea>\n        <h6>Delivery Instructions</h6>\n        <h4 class="h4class">Add delivery instructions</h4>\n        <textarea class="drop_area_text" row="4">\n               \n        </textarea>\n        <br>\n\n        <button ion-button class="add_cart theme_background widthFull" >Done</button>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/deliverydetail/deliverydetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], DeliverydetailPage);
    return DeliverydetailPage;
}());

//# sourceMappingURL=deliverydetail.js.map

/***/ })

});
//# sourceMappingURL=36.js.map