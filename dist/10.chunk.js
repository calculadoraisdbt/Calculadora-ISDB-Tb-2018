webpackJsonp([10],{

/***/ "../../../../../src/app/layout/creditos/creditos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creditos_component__ = __webpack_require__("../../../../../src/app/layout/creditos/creditos.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditosRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__creditos_component__["a" /* CreditosComponent */] }
];
var CreditosRoutingModule = (function () {
    function CreditosRoutingModule() {
    }
    return CreditosRoutingModule;
}());
CreditosRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], CreditosRoutingModule);

//# sourceMappingURL=creditos-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/creditos/creditos.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    \r\n    <div class=\"card-body\">\r\n      <h4 style=\"text-align: left;\" class=\"card-title\"><b>Calculadora ISDB-Tb V2.0</b></h4>\r\n      <p>Complemento del Libro </p>\r\n      <img src=\"assets/images/tapa.jpg\"width=\"350px\"  /><br><br>\r\n      <p style=\"text-align: left;\" class=\"card-text\">Transmisión de Televisión Digital Terrestre en la Norma ISDB-Tb -  <br/>\r\n        Tratado fundamental para Estudiantes Avanzados, Técnicos y Profesionales <br> <br>\r\n      </p> \r\n      <p><b>Autores:</b ></p>\r\n        <p style=\"text-align: left;\">Ing. Néstor Oscar Pisciotta<br>Ing. Carlos Guillermo Liendo<br>\r\n            Ing. Roberto Carlos Lauro </p>\r\n            <p style=\"text-align: left;\"><b>Desarrollo del software:</b></p>\r\n            <p style=\"text-align: left;\">Versión 2.0: Ing. Maximiliano Fried<br>Versión 1.0: Ing. Nicolás Liendo</p>\r\n            <p style=\"text-align: left;\"><b>Consultas:</b><br> clientes.conosur@cenegage.com</p>\r\n            <p style=\"text-align: left;\"><b>Editorial Cengage Learning</b><br> <img  src=\"assets/images/cenegage.jpg\" width=\"150px\" /><br> http://www.cengage.com<br>ISBN: 978-987-1954-08-7</p>\r\n            <p style=\"text-align: left;\"><b>Empresas auspiciantes:\r\n            </b><br> <img  src=\"assets/images/lie.jpg\" width=\"150px\" /><br> http://www.liecom.com<br> <br>  <img  src=\"assets/images/edinec.jpg\" width=\"150px\" /><br>http://www.edinec.com.ar <br><br>\r\n            <img  src=\"assets/images/consulfem.jpg\" width=\"150px\" /> <br>http://www.consulfem.com </p> \r\n            <p style=\"text-align: left;\"><b>Agradecimiento a las empresas:</b><br>VIDEOSWITCH<br>http://www.videoswitch.tv<br><br>HITACHI-LINEAR <br>http://www.hitachi-linear.com.br</p>\r\n    </div>\r\n \r\n\r\n    \r\n    \r\n\r\n  "

/***/ }),

/***/ "../../../../../src/app/layout/creditos/creditos.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/creditos/creditos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CreditosComponent = (function () {
    function CreditosComponent() {
    }
    CreditosComponent.prototype.ngOnInit = function () { };
    return CreditosComponent;
}());
CreditosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-creditos',
        template: __webpack_require__("../../../../../src/app/layout/creditos/creditos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/creditos/creditos.component.scss")],
    })
], CreditosComponent);

//# sourceMappingURL=creditos.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/creditos/creditos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creditos_routing_module__ = __webpack_require__("../../../../../src/app/layout/creditos/creditos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creditos_component__ = __webpack_require__("../../../../../src/app/layout/creditos/creditos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditosModule", function() { return CreditosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CreditosModule = (function () {
    function CreditosModule() {
    }
    return CreditosModule;
}());
CreditosModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__creditos_routing_module__["a" /* CreditosRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__creditos_component__["a" /* CreditosComponent */],
        ]
    })
], CreditosModule);

//# sourceMappingURL=creditos.module.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map