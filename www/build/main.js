webpackJsonp([2],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaserestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
Generated class for the FirebaserestProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var FirebaserestProvider = /** @class */ (function () {
    function FirebaserestProvider(http, afs, afAuth) {
        this.http = http;
        this.afs = afs;
        this.afAuth = afAuth;
        console.log('Hello FirebaserestProvider Provider');
    }
    /* API REST*/
    FirebaserestProvider.prototype.obtenerPersonas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.snapshotChangesSubscription = _this.afs.collection('personas').valueChanges()
                .subscribe(function (snapshots) {
                resolve(snapshots);
            });
        });
    };
    FirebaserestProvider.prototype.unsubscribeOnLogOut = function () {
        this.snapshotChangesSubscription.unsubscribe();
    };
    FirebaserestProvider.prototype.agregarPersona = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('personas').add({
                rfc: value.rfc,
                name: value.name,
                calle: value.calle,
                callenumero: value.callenumero,
                telefono: value.telefono,
                email: value.emailc,
                activo: value.activo,
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    FirebaserestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], FirebaserestProvider);
    return FirebaserestProvider;
}());

//# sourceMappingURL=firebaserest.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebaserest_firebaserest__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultaPage = /** @class */ (function () {
    function ConsultaPage(navCtrl, db) {
        this.navCtrl = navCtrl;
        this.db = db;
    }
    /*ionViewWillEnter(){
      console.log("ionViewWillEnter")
      for(let i = 0; i < 100000; i++){
        console.log(i);
      }
    }*/
    ConsultaPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //console.log("ionViewDidEnter")
                    return [4 /*yield*/, this.db.obtenerPersonas()
                            .then(function (personas) {
                            _this.personas = personas;
                            console.log("constructor" + _this.personas);
                        })];
                    case 1:
                        //console.log("ionViewDidEnter")
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConsultaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consulta',template:/*ion-inline-start:"/home/javier/DAM/U2-T08/src/pages/consulta/consulta.html"*/'<!--\n  Generated template for the ConsultaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      CONSULTAR\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-item style="font-size:90%" ion-item *ngFor="let persona of personas">\n    <ion-card>\n      <ion-card-content>\n        <ion-title>RFC:{{persona.rfc}}</ion-title>\n      </ion-card-content>\n      <ion-card-header>\n        <ion-title>Nombre:{{persona.name}}</ion-title>\n      </ion-card-header>\n      <ion-card-header>\n        <ion-title>Calle:{{persona.calle}}</ion-title>\n      </ion-card-header>\n      <ion-card-header>\n        <ion-title>Calle Numero:{{persona.callenumero}}</ion-title>\n      </ion-card-header>\n      <ion-card-header>\n        <ion-title>Telefono:{{persona.telefono}}</ion-title>\n      </ion-card-header>\n      <ion-card-header>\n          <ion-title>Correo:{{persona.email}}</ion-title>\n        </ion-card-header>\n        <ion-card-header>\n            <ion-title>Activo:{{persona.activo}}</ion-title>\n          </ion-card-header>\n    </ion-card>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/javier/DAM/U2-T08/src/pages/consulta/consulta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebaserest_firebaserest__["a" /* FirebaserestProvider */]])
    ], ConsultaPage);
    return ConsultaPage;
}());

//# sourceMappingURL=consulta.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consulta_consulta__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(252);
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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__consulta_consulta__["a" /* ConsultaPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/javier/DAM/U2-T08/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="AGREGAR"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="CONSULTAR"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/javier/DAM/U2-T08/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
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
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/consulta/consulta.module": [
		524,
		1
	],
	"../pages/tabs/tabs.module": [
		525,
		0
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
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebaserest_firebaserest__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, db, formBuilder) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.validation_messages = {
            'rfc': [
                { type: 'required', message: 'ingrese un RFC correcto' },
                { type: 'pattern', message: 'Se requiere un  RFC Valido.' },
                { type: 'minlength', message: 'debe contener minimo 12 caracteres' },
                { type: 'maxlength', message: 'debe contener maximo 13 caracteres' }
            ],
            'name': [
                { type: 'required', message: 'Se requiere un nombre o razon ' },
            ],
            'calle': [
                { type: 'required', message: 'Se requiere una calle ' },
            ],
            'callenumero': [
                { type: 'required', message: 'Se requiere numero de calle ' },
            ],
            'telefono': [
                { type: 'required', message: 'Se requiere un telefono ' },
                { type: 'minlength', message: 'debe contener max 13 caracteres' }
            ],
            'emailc': [
                { type: 'required', message: 'Se requiere un correo ' },
                { type: 'pattern', message: 'Se requiere un correo valido' }
            ],
            'activo': [
                { type: 'required', message: 'seleccione la opcion' },
            ]
        };
    }
    HomePage.prototype.ionViewWillLoad = function () {
        this.validations_form = this.formBuilder.group({
            rfc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(12),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(13),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern(/^([A-Z]{3,4})?(?:-?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))?(?:-?)?([A-Z\d]{2})([A\d])$/)
            ])),
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required
            ])),
            calle: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required
            ])),
            callenumero: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required
            ])),
            telefono: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(10),
            ])),
            emailc: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"),
            ])),
            activo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required
            ]))
        });
    };
    HomePage.prototype.agregarPersona = function (valor) {
        console.log(valor);
        this.db.agregarPersona(valor);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/javier/DAM/U2-T08/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      REGISTRO\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form class="form" [formGroup]="validations_form"  (ngSubmit)="agregarPersona(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="primary">RFC:</ion-label>\n      <ion-input   type="text" formControlName="rfc"></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.rfc">\n        <div class="error-message" *ngIf="validations_form.get(\'rfc\').hasError(validation.type) && (validations_form.get(\'rfc\').dirty || validations_form.get(\'rfc\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label floating color="primary">Nombre o Razón social:</ion-label>\n      <ion-input type="text" formControlName="name" class="form-controll" required></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.name">\n        <div class="error-message" *ngIf="validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label floating color="primary">Calle</ion-label>\n      <ion-input type="text" formControlName="calle" class="form-controll" required></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.calle">\n        <div class="error-message" *ngIf="validations_form.get(\'calle\').hasError(validation.type) && (validations_form.get(\'calle\').dirty || validations_form.get(\'calle\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label floating color="primary">#</ion-label>\n      <ion-input type="number" formControlName="callenumero" class="form-controll" required></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.callenumero">\n        <div class="error-message" *ngIf="validations_form.get(\'callenumero\').hasError(validation.type) && (validations_form.get(\'callenumero\').dirty || validations_form.get(\'callenumero\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label floating color="primary">telefono</ion-label>\n      <ion-input type="text" formControlName="telefono" class="form-control" required></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.telefono">\n        <div class="error-message" *ngIf="validations_form.get(\'telefono\').hasError(validation.type) && (validations_form.get(\'telefono\').dirty || validations_form.get(\'telefono\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label floating color="primary">Email</ion-label>\n      <ion-input type="email" formControlName="emailc" class="form-control" required></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.emailc">\n        <div class="error-message" *ngIf="validations_form.get(\'emailc\').hasError(validation.type) && (validations_form.get(\'emailc\').dirty || validations_form.get(\'emailc\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label>Activo</ion-label>\n      <ion-checkbox checked="true" formControlName="activo"></ion-checkbox>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.activo">\n        <div class="error-message" *ngIf="validations_form.get(\'activo\').hasError(validation.type) && (validations_form.get(\'activo\').dirty || validations_form.get(\'activo\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <br>\n    <button ion-button type="submit" [disabled]="!validations_form.valid"   block>AGREGAR</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/javier/DAM/U2-T08/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebaserest_firebaserest__["a" /* FirebaserestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(439);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire_database__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_storage__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_auth__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_firestore__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_firebaserest_firebaserest__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var config = {
    apiKey: "AIzaSyB5jG7DHUJOt3kqzuP64IajDio2RS67WiE",
    authDomain: "dam20182-u2.firebaseapp.com",
    databaseURL: "https://dam20182-u2.firebaseio.com",
    projectId: "dam20182-u2",
    storageBucket: "dam20182-u2.appspot.com",
    messagingSenderId: "693927428303"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__["a" /* ConsultaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/consulta/consulta.module#ConsultaPageModule', name: 'ConsultaPage', segment: 'consulta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_fire__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_11__angular_fire_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_fire_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__["a" /* ConsultaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_firestore__["a" /* AngularFirestore */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_firebaserest_firebaserest__["a" /* FirebaserestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/javier/DAM/U2-T08/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/javier/DAM/U2-T08/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[306]);
//# sourceMappingURL=main.js.map