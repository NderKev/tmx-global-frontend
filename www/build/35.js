webpackJsonp([35],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouratePageModule", function() { return FavouratePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favourate__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavouratePageModule = /** @class */ (function () {
    function FavouratePageModule() {
    }
    FavouratePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favourate__["a" /* FavouratePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favourate__["a" /* FavouratePage */]),
            ],
        })
    ], FavouratePageModule);
    return FavouratePageModule;
}());

//# sourceMappingURL=favourate.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouratePage; });
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


var FavouratePage = /** @class */ (function () {
    function FavouratePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    FavouratePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavouratePage');
    };
    FavouratePage.prototype.item = function () {
        var modal = this.modalCtrl.create('ItemDetailPage');
        modal.present();
    };
    FavouratePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-favourate',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/favourate/favourate.html"*/'\n<ion-content>\n        <div class="landing_wrapper">\n            <div class="scroll_section">\n                        <ion-row>\n                            <ion-list>\n                                <ion-item (click)="item()">\n                                        <ion-card>\n                                                <ion-card-content>\n                                                    <div class="item_image">\n                                                            <ion-icon name="md-heart-outline"></ion-icon>\n                                                            <img src="assets/imgs/item1.png">\n                                                    </div>\n                                                    <div class="item_detail">\n                                                        <ion-grid class="p0">\n                                                            <ion-row>\n                                                                <ion-col col-6 class="p0">\n                                                                    <h2>Kripsy Creame</h2>\n                                                                </ion-col>\n                                                                <ion-col col-6 class="p0 textRight">\n                                                                    <p>15 - 33 mins</p>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row>\n                                                                <ion-col col-8 class="p0">\n                                                                    <h3>Breakfast and Brunch . Desserts</h3>\n                                                                </ion-col>\n                                                                <ion-col col-4 class="p0 textRight">\n                                                                    <h6><strong> 275 TMX</strong></h6>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row>\n                                                                <ion-col col-12>\n                                                                        <h4><ion-icon name="md-star"></ion-icon>4.5 (500)</h4>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                        </ion-grid>\n                                                    </div>\n                                                </ion-card-content>\n                                         </ion-card>\n                                </ion-item>\n                                <ion-item (click)="item()">\n                                        <ion-card>\n                                                <ion-card-content>\n                                                    <div class="item_image">\n                                                            <ion-icon name="md-heart-outline"></ion-icon>\n                                                            <img src="assets/imgs/item2.png">\n                                                    </div>\n                                                    <div class="item_detail">\n                                                        <ion-grid class="p0">\n                                                            <ion-row>\n                                                                <ion-col col-6 class="p0">\n                                                                    <h2>Sliced Pizza Hot!</h2>\n                                                                </ion-col>\n                                                                <ion-col col-6 class="p0 textRight">\n                                                                    <p>10 - 12 mins</p>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row>\n                                                                <ion-col col-8 class="p0">\n                                                                    <h3>Breakfast and Brunch . Desserts</h3>\n                                                                </ion-col>\n                                                                <ion-col col-4 class="p0 textRight">\n                                                                    <h6><strong>625 TMX</strong></h6>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row>\n                                                                <ion-col col-12>\n                                                                        <h4><ion-icon name="md-star"></ion-icon>4.00 (80)</h4>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                        </ion-grid>\n                                                    </div>\n                                                </ion-card-content>\n                                         </ion-card>\n                                </ion-item>\n                                <ion-item (click)="item()">\n                                        <ion-card>\n                                                <ion-card-content>\n                                                    <div class="item_image">\n                                                            <ion-icon name="md-heart-outline"></ion-icon>\n                                                            <img src="assets/imgs/item3.png">\n                                                    </div>\n                                                    <div class="item_detail">\n                                                        <ion-grid class="p0">\n                                                            <ion-row>\n                                                                <ion-col col-6 class="p0">\n                                                                    <h2>Pizza special combos</h2>\n                                                                </ion-col>\n                                                                <ion-col col-6 class="p0 textRight">\n                                                                    <p>20 - 25 mins</p>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row>\n                                                                <ion-col col-8 class="p0">\n                                                                    <h3>Breakfast and Brunch . Desserts</h3>\n                                                                </ion-col>\n                                                                <ion-col col-4 class="p0 textRight">\n                                                                    <h6><strong>750 TMX</strong></h6>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                            <ion-row>\n                                                                <ion-col col-12>\n                                                                        <h4><ion-icon name="md-star"></ion-icon>4.8 (120)</h4>\n                                                                </ion-col>\n                                                            </ion-row>\n                                                        </ion-grid>\n                                                    </div>\n                                                </ion-card-content>\n                                         </ion-card>\n                                </ion-item>\n\n                            </ion-list>\n                        </ion-row>\n            </div>\n        </div>\n    </ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/favourate/favourate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], FavouratePage);
    return FavouratePage;
}());

//# sourceMappingURL=favourate.js.map

/***/ })

});
//# sourceMappingURL=35.js.map