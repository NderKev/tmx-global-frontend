webpackJsonp([13],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
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


var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.item = function () {
        var modal = this.modalCtrl.create('ItemDetailPage');
        modal.present();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/search/search.html"*/'\n<ion-content>\n    <div class="search_wrapper">\n        <div class="p10">\n            <div class="search_bar">\n                <ion-input placeholder="Search for a Restaurants or Dishes"></ion-input>\n                <button class="search_btn">\n                        <ion-icon name="ios-search"></ion-icon>\n                </button>\n            </div>\n        </div>\n        <div class="search_content">\n                <h5>Near by you</h5>\n                <div class="scroll_section">\n                    <ion-scroll scrollX="true" style="height:150px;">\n                            <ion-row nowrap>\n                                <ion-list>\n                                    <ion-item (click)="item()">\n                                            <ion-card>\n                                                    <ion-card-content>\n                                                        <div class="item_image">\n                                                                <ion-icon name="md-heart-outline"></ion-icon>\n                                                                <img src="assets/imgs/item4.png">\n                                                        </div>\n                                                        <div class="item_detail">\n                                                            <p>Egg McMuffin Me</p>\n                                                        </div>\n                                                    </ion-card-content>\n                                             </ion-card>\n                                    </ion-item>\n                                    <ion-item (click)="item()">\n                                            <ion-card>\n                                                    <ion-card-content>\n                                                        <div class="item_image">\n                                                                <ion-icon name="md-heart-outline"></ion-icon>\n                                                                <img src="assets/imgs/item5.png">\n                                                        </div>\n                                                        <div class="item_detail">\n                                                            <p>Bacon, Egg & Chee...</p>\n                                                        </div>\n                                                    </ion-card-content>\n                                             </ion-card>\n                                    </ion-item>\n                                    <ion-item (click)="item()">\n                                            <ion-card>\n                                                    <ion-card-content>\n                                                        <div class="item_image">\n                                                                <ion-icon name="md-heart-outline"></ion-icon>\n                                                                <img src="assets/imgs/item6.png">\n                                                        </div>\n                                                        <div class="item_detail">\n                                                            <p>Chicken Letuces Salad</p>\n                                                        </div>\n                                                    </ion-card-content>\n                                             </ion-card>\n                                    </ion-item>\n                                </ion-list>	\n                            </ion-row>\n                     </ion-scroll>  \n                </div>\n                <br>\n                <h5>Top Categories</h5>\n                <div class="top_catagories">\n                    <ul>\n                        <li (click)="item()">\n                            <div class="label_green">Bugers</div>\n                            <img src="assets/imgs/item1.png">\n                        </li>\n                        <li (click)="item()">\n                             <div class="label_green">Sandwitches</div>\n                             <img src="assets/imgs/item2.png">\n                        </li>\n                        <li (click)="item()">\n                            <div class="label_green">Combos</div>\n                            <img src="assets/imgs/item3.png">\n                        </li>\n                        <li (click)="item()">\n                            <div class="label_green">Single meal</div>\n                            <img src="assets/imgs/item4.png">\n                        </li>\n                        <li (click)="item()">\n                            <div class="label_green">Italian</div>\n                            <img src="assets/imgs/item5.png">\n                        </li >\n                        <li (click)="item()"> \n                            <div class="label_green">Salads</div>\n                            <img src="assets/imgs/item6.png">\n                        </li>\n                        <li (click)="item()">\n                            <div class="label_green">Chinese</div>\n                            <img src="assets/imgs/item7.png">\n                        </li>\n                        <li (click)="item()">\n                            <div class="label_green">Fries</div>\n                            <img src="assets/imgs/item8.png">\n                        </li>\n                    </ul>\n                </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=13.js.map