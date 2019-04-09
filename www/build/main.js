webpackJsonp([40],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addcar/addcar.module": [
		268,
		39
	],
	"../pages/addpayment/addpayment.module": [
		269,
		38
	],
	"../pages/delivery/delivery.module": [
		270,
		37
	],
	"../pages/deliverydetail/deliverydetail.module": [
		271,
		36
	],
	"../pages/favourate/favourate.module": [
		272,
		35
	],
	"../pages/filter/filter.module": [
		273,
		34
	],
	"../pages/home/home.module": [
		274,
		33
	],
	"../pages/item-detail-one/item-detail-one.module": [
		275,
		32
	],
	"../pages/item-detail/item-detail.module": [
		276,
		31
	],
	"../pages/landing/landing.module": [
		277,
		30
	],
	"../pages/list/list.module": [
		278,
		29
	],
	"../pages/location/location.module": [
		279,
		28
	],
	"../pages/login/login.module": [
		280,
		27
	],
	"../pages/order/order.module": [
		281,
		26
	],
	"../pages/orderdetails/orderdetails.module": [
		282,
		25
	],
	"../pages/profile/profile.module": [
		283,
		24
	],
	"../pages/promo/promo.module": [
		284,
		23
	],
	"../pages/ratting/ratting.module": [
		285,
		0
	],
	"../pages/receipt/receipt.module": [
		286,
		22
	],
	"../pages/rider-login/rider-login.module": [
		287,
		21
	],
	"../pages/rider-order-list/rider-order-list.module": [
		288,
		20
	],
	"../pages/rider-order-receipt/rider-order-receipt.module": [
		289,
		19
	],
	"../pages/rider-order/rider-order.module": [
		291,
		18
	],
	"../pages/rider-profile/rider-profile.module": [
		290,
		17
	],
	"../pages/rider-signup/rider-signup.module": [
		292,
		16
	],
	"../pages/rider-verify/rider-verify.module": [
		293,
		15
	],
	"../pages/rider/rider.module": [
		296,
		14
	],
	"../pages/search/search.module": [
		294,
		13
	],
	"../pages/settings/settings.module": [
		295,
		12
	],
	"../pages/settingsedit/settingsedit.module": [
		297,
		11
	],
	"../pages/signup/signup.module": [
		298,
		10
	],
	"../pages/store-login/store-login.module": [
		299,
		9
	],
	"../pages/store-profile/store-profile.module": [
		300,
		8
	],
	"../pages/store-signup/store-signup.module": [
		301,
		7
	],
	"../pages/store-verify/store-verify.module": [
		302,
		6
	],
	"../pages/store/store.module": [
		304,
		5
	],
	"../pages/uselocation-popover/uselocation-popover.module": [
		303,
		4
	],
	"../pages/verify/verify.module": [
		305,
		3
	],
	"../pages/wallet/wallet.module": [
		306,
		2
	],
	"../pages/yourcart/yourcart.module": [
		307,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsPlacement: 'top',
                    platforms: {
                        android: {
                            tabsPlacement: 'top'
                        },
                        ios: {
                            tabsPlacement: 'top'
                        },
                        windows: {
                            tabsPlacement: 'top'
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/addcar/addcar.module#AddcarPageModule', name: 'AddcarPage', segment: 'addcar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addpayment/addpayment.module#AddpaymentPageModule', name: 'AddpaymentPage', segment: 'addpayment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/delivery/delivery.module#DeliveryPageModule', name: 'DeliveryPage', segment: 'delivery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deliverydetail/deliverydetail.module#DeliverydetailPageModule', name: 'DeliverydetailPage', segment: 'deliverydetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favourate/favourate.module#FavouratePageModule', name: 'FavouratePage', segment: 'favourate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail-one/item-detail-one.module#ItemDetailOnePageModule', name: 'ItemDetailOnePage', segment: 'item-detail-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderdetails/orderdetails.module#OrderdetailsPageModule', name: 'OrderdetailsPage', segment: 'orderdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promo/promo.module#PromoPageModule', name: 'PromoPage', segment: 'promo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ratting/ratting.module#RattingPageModule', name: 'RattingPage', segment: 'ratting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receipt/receipt.module#ReceiptPageModule', name: 'ReceiptPage', segment: 'receipt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-login/rider-login.module#RiderLoginPageModule', name: 'RiderLoginPage', segment: 'rider-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-order-list/rider-order-list.module#RiderOrderListPageModule', name: 'RiderOrderListPage', segment: 'rider-order-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-order-receipt/rider-order-receipt.module#RiderOrderReceiptPageModule', name: 'RiderOrderReceiptPage', segment: 'rider-order-receipt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-profile/rider-profile.module#RiderProfilePageModule', name: 'RiderProfilePage', segment: 'rider-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-order/rider-order.module#RiderOrderPageModule', name: 'RiderOrderPage', segment: 'rider-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-signup/rider-signup.module#RiderSignupPageModule', name: 'RiderSignupPage', segment: 'rider-signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider-verify/rider-verify.module#RiderVerifyPageModule', name: 'RiderVerifyPage', segment: 'rider-verify', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rider/rider.module#RiderPageModule', name: 'RiderPage', segment: 'rider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settingsedit/settingsedit.module#SettingseditPageModule', name: 'SettingseditPage', segment: 'settingsedit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/store-login/store-login.module#StoreLoginPageModule', name: 'StoreLoginPage', segment: 'store-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/store-profile/store-profile.module#StoreProfilePageModule', name: 'StoreProfilePage', segment: 'store-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/store-signup/store-signup.module#StoreSignupPageModule', name: 'StoreSignupPage', segment: 'store-signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/store-verify/store-verify.module#StoreVerifyPageModule', name: 'StoreVerifyPage', segment: 'store-verify', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uselocation-popover/uselocation-popover.module#UselocationPopoverPageModule', name: 'UselocationPopoverPage', segment: 'uselocation-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/store/store.module#StorePageModule', name: 'StorePage', segment: 'store', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/yourcart/yourcart.module#YourcartPageModule', name: 'YourcartPage', segment: 'yourcart', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'LoginPage';
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/app/app.html"*/'<!-- <ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu> -->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/kevin/Desktop/TMX_Projo/food-la-eats/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map