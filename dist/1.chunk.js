webpackJsonp([1],{

/***/ "../../../../../src/app/Services/modulador.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_layout_remultiplexor_init_param__ = __webpack_require__("../../../../../src/app/layout/remultiplexor/init-param.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuladorService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//var tspNulos = [];
var ModuladorService = (function (_super) {
    __extends(ModuladorService, _super);
    function ModuladorService() {
        var _this = _super.call(this) || this;
        _this.load();
        return _this;
    }
    // FUNCIONES PARA EL INTERVALO
    ModuladorService.prototype.obtenerIntervalo = function () {
        var intSelected = JSON.parse(localStorage.getItem('intSelected'));
        return intSelected;
    };
    ModuladorService.prototype.obtenerIntGua = function () {
        var intGua = JSON.parse(localStorage.getItem('intGua'));
        return intGua;
    };
    ModuladorService.prototype.actualizarIntGua = function (newParam) {
        var intGua = JSON.parse(localStorage.getItem('intGua'));
        intGua = newParam;
        localStorage.setItem('intGua', JSON.stringify(intGua));
    };
    ModuladorService.prototype.obteneralturaIntGua = function () {
        var alturaIntGua = JSON.parse(localStorage.getItem('alturaIntGua'));
        return alturaIntGua;
    };
    ModuladorService.prototype.actualizarAlturaIntGua = function (newParam) {
        var alturaIntGua = JSON.parse(localStorage.getItem('alturaIntGua'));
        alturaIntGua = newParam;
        localStorage.setItem('alturaIntGua', JSON.stringify(alturaIntGua));
    };
    ModuladorService.prototype.obteneralturaIntGua2 = function () {
        var alturaIntGua2 = JSON.parse(localStorage.getItem('alturaIntGua2'));
        return alturaIntGua2;
    };
    ModuladorService.prototype.actualizarAlturaIntGua2 = function (newParam) {
        var alturaIntGua2 = JSON.parse(localStorage.getItem('alturaIntGua2'));
        alturaIntGua2 = newParam;
        localStorage.setItem('alturaIntGua2', JSON.stringify(alturaIntGua2));
    };
    ModuladorService.prototype.actualizarIntervalo = function (newParam) {
        var intSelected = JSON.parse(localStorage.getItem('intSelected'));
        intSelected = newParam;
        localStorage.setItem('intSelected', JSON.stringify(intSelected));
    };
    //FUNCIONES PARA EL MODO
    ModuladorService.prototype.obtenerModo = function () {
        var modoSelected = JSON.parse(localStorage.getItem('modoSelected'));
        return modoSelected;
    };
    ModuladorService.prototype.actualizarModo = function (newParam) {
        var modoSelected = JSON.parse(localStorage.getItem('modoSelected'));
        modoSelected = newParam;
        localStorage.setItem('modoSelected', JSON.stringify(modoSelected));
    };
    //FUNCIONES PARA ESQUEMA DE MODULACION
    ModuladorService.prototype.obtenerEsquemaModulacion = function () {
        var esqModSelected = JSON.parse(localStorage.getItem('esqModSelected'));
        return esqModSelected;
    };
    ModuladorService.prototype.actualizarEsquemaModulacion = function (newParam, id) {
        if (id === 'capa A') {
            var esqModSelected = JSON.parse(localStorage.getItem('esqModSelected'));
            esqModSelected[0] = newParam;
            localStorage.setItem('esqModSelected', JSON.stringify(esqModSelected));
        }
        if (id === 'capa B') {
            var esqModSelected = JSON.parse(localStorage.getItem('esqModSelected'));
            esqModSelected[1] = newParam;
            localStorage.setItem('esqModSelected', JSON.stringify(esqModSelected));
        }
        if (id === 'capa C') {
            var esqModSelected = JSON.parse(localStorage.getItem('esqModSelected'));
            esqModSelected[2] = newParam;
            localStorage.setItem('esqModSelected', JSON.stringify(esqModSelected));
        }
    };
    ModuladorService.prototype.obtenerBp = function () {
        var bp = JSON.parse(localStorage.getItem('bp'));
        return bp;
    };
    ModuladorService.prototype.actualizarBp = function (newParam0, newParam1, newParam2) {
        var bp = JSON.parse(localStorage.getItem('bp'));
        bp[0] = newParam0;
        bp[1] = newParam1;
        bp[2] = newParam2;
        localStorage.setItem('bp', JSON.stringify(bp));
    };
    //FUNCIONES PARA CODIFICACION CONVOLUCIONAL
    ModuladorService.prototype.obtenerCodificacionConvolucional = function () {
        var codConSelected = JSON.parse(localStorage.getItem('codConSelected'));
        return codConSelected;
    };
    ModuladorService.prototype.actualizarCodificacionConvolucional = function (newParam, id) {
        if (id === 'capa A') {
            var codConSelected = JSON.parse(localStorage.getItem('codConSelected'));
            codConSelected[0] = newParam;
            localStorage.setItem('codConSelected', JSON.stringify(codConSelected));
        }
        if (id === 'capa B') {
            var codConSelected = JSON.parse(localStorage.getItem('codConSelected'));
            codConSelected[1] = newParam;
            localStorage.setItem('codConSelected', JSON.stringify(codConSelected));
        }
        if (id === 'capa C') {
            var codConSelected = JSON.parse(localStorage.getItem('codConSelected'));
            codConSelected[2] = newParam;
            localStorage.setItem('codConSelected', JSON.stringify(codConSelected));
        }
    };
    ModuladorService.prototype.obtenerKi = function () {
        var ki = JSON.parse(localStorage.getItem('ki'));
        return ki;
    };
    ModuladorService.prototype.actualizarKi = function (newParam0, newParam1, newParam2) {
        var ki = JSON.parse(localStorage.getItem('ki'));
        ki[0] = newParam0;
        ki[1] = newParam1;
        ki[2] = newParam2;
        localStorage.setItem('ki', JSON.stringify(ki));
    };
    //FUNCION PARA LOS SEGMENTOS
    ModuladorService.prototype.obtenerSegmentoA = function () {
        var select1 = JSON.parse(localStorage.getItem('select1'));
        return select1;
    };
    ModuladorService.prototype.obtenerSegmentoB = function () {
        var select2 = JSON.parse(localStorage.getItem('select2'));
        return select2;
    };
    ModuladorService.prototype.obtenerSegmentoC = function () {
        var select3 = JSON.parse(localStorage.getItem('select3'));
        return select3;
    };
    ModuladorService.prototype.actualizarSegmentoA = function (value) {
        var select1 = JSON.parse(localStorage.getItem('select1'));
        select1 = value;
        localStorage.setItem('select1', JSON.stringify(select1));
    };
    ModuladorService.prototype.actualizarSegmentoB = function (value) {
        var select2 = JSON.parse(localStorage.getItem('select2'));
        select2 = value;
        localStorage.setItem('select2', JSON.stringify(select2));
    };
    ModuladorService.prototype.actualizarSegmentoC = function (value) {
        var select3 = JSON.parse(localStorage.getItem('select3'));
        select3 = value;
        localStorage.setItem('select3', JSON.stringify(select3));
    };
    ModuladorService.prototype.actualizarActivado = function (value) {
        var activado = JSON.parse(localStorage.getItem('activado'));
        activado = value;
        localStorage.setItem('activado', JSON.stringify(activado));
    };
    ModuladorService.prototype.obtenerActivado = function () {
        var activado = JSON.parse(localStorage.getItem('activado'));
        return activado;
    };
    ModuladorService.prototype.obtenerEntrelazadoDeTiempo = function () {
        var entrelazadoDeTiempo = JSON.parse(localStorage.getItem('entrelazadoDeTiempo'));
        return entrelazadoDeTiempo;
    };
    ModuladorService.prototype.actualizarEntrelazadoDeTiempo = function (value) {
        var entrelazadoDeTiempo = JSON.parse(localStorage.getItem('entrelazadoDeTiempo'));
        entrelazadoDeTiempo = value;
        localStorage.setItem('entrelazadoDeTiempo', JSON.stringify(entrelazadoDeTiempo));
    };
    ModuladorService.prototype.obtenerTspNulos = function () {
        var tspNulos = JSON.parse(localStorage.getItem('tspNulos'));
        return tspNulos;
    };
    ModuladorService.prototype.actualizarTspNulos = function (value) {
        var tspNulos = JSON.parse(localStorage.getItem('tspNulos'));
        tspNulos = value;
        localStorage.setItem('tspNulos', JSON.stringify(tspNulos));
    };
    ModuladorService.prototype.obtenerTspCapa = function () {
        var tspCapa = JSON.parse(localStorage.getItem('tspCapa'));
        return tspCapa;
    };
    ModuladorService.prototype.actualizarTspCapa = function (value) {
        var tspCapa = JSON.parse(localStorage.getItem('tspCapa'));
        tspCapa = value;
        localStorage.setItem('tspCapa', JSON.stringify(tspCapa));
    };
    return ModuladorService;
}(__WEBPACK_IMPORTED_MODULE_1_app_layout_remultiplexor_init_param__["a" /* InitParam */]));
ModuladorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ModuladorService);

//# sourceMappingURL=modulador.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Buttons</div>\n            <div class=\"card-block\">\n                <p *ngFor=\"let alert of alerts\">\n                    <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/alert/alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export AlertComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = (function () {
    function AlertComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        });
    }
    AlertComponent.prototype.ngOnInit = function () { };
    AlertComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/layout/bs-component/components/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/bs-component/components/alert/alert.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AlertComponent);

//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\n    <div class=\"col col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Radio Button group (<strong>Using ngModel</strong>)\n            </div>\n            <div class=\"card-block\">\n                <div [(ngModel)]=\"model\" ngbRadioGroup name=\"radioBasic\">\n                    <label class=\"btn btn-primary\">\n                        <input type=\"radio\" [value]=\"1\"> Left (pre-checked)\n                    </label>\n                    <label class=\"btn btn-primary\">\n                        <input type=\"radio\" value=\"middle\"> Middle\n                    </label>\n                    <label class=\"btn btn-primary\">\n                        <input type=\"radio\" [value]=\"false\"> Right\n                    </label>\n                </div>\n                <div class=\"alert alert-info mb-0\">\n                    <strong>Selected Value: </strong>{{model}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Radio Button group (<strong>Ractive Forms</strong>)\n            </div>\n            <div class=\"card-block\">\n                <form [formGroup]=\"radioGroupForm\">\n                    <div ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\n                        <label class=\"btn btn-primary\">\n                            <input type=\"radio\" [value]=\"1\"> Left (pre-checked)\n                        </label>\n                        <label class=\"btn btn-primary\">\n                            <input type=\"radio\" value=\"middle\"> Middle\n                        </label>\n                        <label class=\"btn btn-primary\">\n                            <input type=\"radio\" [value]=\"false\"> Right\n                        </label>\n                    </div>\n                    <div class=\"alert alert-info mb-0\">\n                        <strong>Selected Value: </strong>{{radioGroupForm.value.model}}\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* unused harmony export ButtonsComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsComponent = (function () {
    function ButtonsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.model = 1;
    }
    ButtonsComponent.prototype.ngOnInit = function () {
        this.radioGroupForm = this.formBuilder.group({
            model: 1
        });
    };
    return ButtonsComponent;
}());
ButtonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-buttons',
        template: __webpack_require__("../../../../../src/app/layout/bs-component/components/buttons/buttons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/bs-component/components/buttons/buttons.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object])
], ButtonsComponent);

var _a;
//# sourceMappingURL=buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/collapse/collapse.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Collapse</div>\n            <div class=\"card-block\">\n                <p>\n                    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\"\n                        [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n                        Toggle\n                    </button>\n                </p>\n                <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n                    <div class=\"card\">\n                        <div class=\"card-block\">\n                            You can collapse this card by clicking Toggle\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/collapse/collapse.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/collapse/collapse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export CollapseComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CollapseComponent = (function () {
    function CollapseComponent() {
        this.isCollapsed = false;
    }
    return CollapseComponent;
}());
CollapseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-collapse',
        template: __webpack_require__("../../../../../src/app/layout/bs-component/components/collapse/collapse.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/bs-component/components/collapse/collapse.component.scss")]
    })
], CollapseComponent);

//# sourceMappingURL=collapse.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/date-picker/date-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Date Picker</div>\n            <div class=\"card-block\">\n                <form class=\"form-inline mb-3\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n                            <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\n                                <span class=\"fa fa-calendar\"></span>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n                <div class=\"alert alert-info mb-0\">\n                    <strong>Model: </strong> {{ model | json }}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/date-picker/date-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/date-picker/date-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export DatePickerComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatePickerComponent = (function () {
    function DatePickerComponent() {
    }
    DatePickerComponent.prototype.ngOnInit = function () {
    };
    return DatePickerComponent;
}());
DatePickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-date-picker',
        template: __webpack_require__("../../../../../src/app/layout/bs-component/components/date-picker/date-picker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/bs-component/components/date-picker/date-picker.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DatePickerComponent);

//# sourceMappingURL=date-picker.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/dropdown/dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">Dropdown</div>\n    <div class=\"card-block\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div ngbDropdown class=\"d-inline-block\">\n                    <button class=\"btn btn-outline-primary\" id=\"dropdownMenu1\" ngbDropdownToggle>Toggle dropdown</button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n                        <button class=\"dropdown-item\">Action - 1</button>\n                        <button class=\"dropdown-item\">Another Action</button>\n                        <button class=\"dropdown-item\">Something else is here</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col text-right\">\n                <div ngbDropdown [up]=\"true\" class=\"d-inline-block\">\n                    <button class=\"btn btn-outline-primary\" id=\"dropdownMenu2\" ngbDropdownToggle>Toggle dropup</button>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu2\">\n                        <button class=\"dropdown-item\">Action - 1</button>\n                        <button class=\"dropdown-item\">Another Action</button>\n                        <button class=\"dropdown-item\">Something else is here</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr>\n        <p class=\"mb-2\">You can easily control dropdowns programmatically using the exported dropdown instance.</p>\n        <div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\n            <button class=\"btn btn-outline-primary\" id=\"dropdownMenu1\" ngbDropdownToggle>Toggle dropdown</button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n                <button class=\"dropdown-item\">Action - 1</button>\n                <button class=\"dropdown-item\">Another Action</button>\n                <button class=\"dropdown-item\">Something else is here</button>\n            </div>\n\n            <button class=\"btn btn-outline-success\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\n            <button class=\"btn btn-outline-danger\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/dropdown/dropdown.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export DropdownComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownComponent = (function () {
    function DropdownComponent() {
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    return DropdownComponent;
}());
DropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dropdown',
        template: __webpack_require__("../../../../../src/app/layout/bs-component/components/dropdown/dropdown.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/bs-component/components/dropdown/dropdown.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DropdownComponent);

//# sourceMappingURL=dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttons_buttons_component__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/buttons/buttons.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_alert_component__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/alert/alert.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal_component__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/modal/modal.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collapse_collapse_component__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/collapse/collapse.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_picker_date_picker_component__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/date-picker/date-picker.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_dropdown_component__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/dropdown/dropdown.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagination_pagination_component__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/pagination/pagination.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pop_over_pop_over_component__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/pop-over/pop-over.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progressbar_progressbar_component__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/progressbar/progressbar.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/tabs/tabs.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__tabs_tabs_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tooltip_tooltip_component__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/tooltip/tooltip.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__timepicker_timepicker_component__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/timepicker/timepicker.component.ts");
/* unused harmony namespace reexport */












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Modal</div>\n            <!-- Large modal -->\n            <div class=\"card-block\">\n                <button class=\"btn btn-primary\" (click)=\"open(content)\">Large modal</button>\n                <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Modal title</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <p>One fine body&hellip;</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/modal/modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* unused harmony export ModalComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return ModalComponent;
}());
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__("../../../../../src/app/layout/bs-component/components/modal/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/bs-component/components/modal/modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object])
], ModalComponent);

var _a;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col col-sm-6\">\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">Basic Pagination</div>\n            <div class=\"card-block\">\n                <div class=\"text-uppercase text-muted fs-12\">Default pagination</div>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"defaultPagination\"></ngb-pagination>\n                <div class=\"text-uppercase text-muted fs-12\">directionLinks = false</div>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"defaultPagination\" [directionLinks]=\"false\"></ngb-pagination>\n                <div class=\"text-uppercase text-muted fs-12\">boundaryLinks = true</div>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"defaultPagination\" [boundaryLinks]=\"true\"></ngb-pagination>\n                <div class=\"alert alert-info\">\n                    <b>Current page: </b>{{defaultPagination}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col col-sm-6\">\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">Advanced Pagination</div>\n            <div class=\"card-block\">\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = false</div>\n                <ngb-pagination [collectionSize]=\"120\" [(page)]=\"advancedPagination\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = true</div>\n                <ngb-pagination [collectionSize]=\"120\" [(page)]=\"advancedPagination\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = true, ellipses = false</div>\n                <ngb-pagination [collectionSize]=\"120\" [(page)]=\"advancedPagination\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\n                <div class=\"alert alert-info\">\n                    <b>Current page: </b>{{advancedPagination}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col col-sm-6\">\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">Pagination size</div>\n            <div class=\"card-block\">\n                <ngb-pagination [collectionSize]=\"50\" [(page)]=\"paginationSize\" size=\"lg\"></ngb-pagination>\n                <ngb-pagination [collectionSize]=\"50\" [(page)]=\"paginationSize\"></ngb-pagination>\n                <ngb-pagination [collectionSize]=\"50\" [(page)]=\"paginationSize\" size=\"sm\"></ngb-pagination>\n            </div>\n        </div>\n    </div>\n    <div class=\"col col-sm-6\">\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">Disabled pagination</div>\n            <div class=\"card-block\">\n                <p>Pagination control can be disabled:</p>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"disabledPagination\" [disabled]='isDisabled'></ngb-pagination>\n                <hr>\n                <button class=\"btn btn-outline-primary\" (click)=\"toggleDisabled()\">\n                    Toggle disabled\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/pagination/pagination.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export PaginationComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = (function () {
    function PaginationComponent() {
        this.defaultPagination = 1;
        this.advancedPagination = 1;
        this.paginationSize = 1;
        this.disabledPagination = 1;
        this.isDisabled = true;
    }
    PaginationComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    return PaginationComponent;
}());
PaginationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pagination',
        template: __webpack_require__("../../../../../src/app/layout/bs-component/components/pagination/pagination.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/bs-component/components/pagination/pagination.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PaginationComponent);

//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/pop-over/pop-over.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\n    <div class=\"card-header\">\n        Pop over\n    </div>\n    <div class=\"card-block\">\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\"\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">\n          Popover on top\n        </button>\n\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"right\"\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\n          Popover on right\n        </button>\n\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"bottom\"\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\n          Popover on bottom\n        </button>\n\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"left\"\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">\n          Popover on left\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/pop-over/pop-over.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/pop-over/pop-over.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export PopOverComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopOverComponent = (function () {
    function PopOverComponent() {
    }
    PopOverComponent.prototype.ngOnInit = function () {
    };
    return PopOverComponent;
}());
PopOverComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pop-over',
        template: __webpack_require__("../../../../../src/app/layout/bs-component/components/pop-over/pop-over.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/bs-component/components/pop-over/pop-over.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PopOverComponent);

//# sourceMappingURL=pop-over.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/progressbar/progressbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\n    <div class=\"card-header\">Progressbar</div>\n    <div class=\"card-block\">\n        <p><ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar></p>\n        <p><ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\n        <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar></p>\n        <p><ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar></p>\n        <p><ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar></p>\n        <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar></p>\n        <p class=\"mb-0\"><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar></p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/progressbar/progressbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/progressbar/progressbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export ProgressbarComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressbarComponent = (function () {
    function ProgressbarComponent() {
    }
    ProgressbarComponent.prototype.ngOnInit = function () {
    };
    return ProgressbarComponent;
}());
ProgressbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-progressbar',
        template: __webpack_require__("../../../../../src/app/layout/bs-component/components/progressbar/progressbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/bs-component/components/progressbar/progressbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProgressbarComponent);

//# sourceMappingURL=progressbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Tabset</div>\n            <div class=\"card-block\">\n                <ngb-tabset>\n                    <ngb-tab title=\"Simple\">\n                        <ng-template ngbTabContent>\n                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab>\n                        <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n                        <ng-template ngbTabContent>\n                            <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                            craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                            cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                            yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                            shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                            sint qui sapiente accusamus tattooed echo park.</p>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n                        <ng-template ngbTabContent>\n                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                        </ng-template>\n                    </ngb-tab>\n                </ngb-tabset>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Pills</div>\n            <div class=\"card-block\">\n                <ngb-tabset type=\"pills\">\n                    <ngb-tab title=\"Simple\">\n                        <ng-template ngbTabContent>\n                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab>\n                        <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n                        <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n                            <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                            craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                            cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                            yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                            shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                            sint qui sapiente accusamus tattooed echo park.</p>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n                        <ng-template ngbTabContent>\n                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                        </ng-template>\n                    </ngb-tab>\n                </ngb-tabset>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/tabs/tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsComponent = (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    return TabsComponent;
}());
TabsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__("../../../../../src/app/layout/bs-component/components/tabs/tabs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/bs-component/components/tabs/tabs.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TabsComponent);

//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/timepicker/timepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Timepicker (<b>Default</b>)</div>\n            <div class=\"card-block\">\n                <ngb-timepicker [(ngModel)]=\"defaultTime\"></ngb-timepicker>\n                <div class=\"alert alert-info\">\n                    <b>Selected time: </b>{{defaultTime | json}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Timepicker (<b>Default</b>)</div>\n            <div class=\"card-block\">\n                <ngb-timepicker [(ngModel)]=\"meridianTime\" [meridian]=\"meridian\"></ngb-timepicker>\n                <button class=\"btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">\n                    Meridian - {{meridian ? \"ON\" : \"OFF\"}}\n                </button>\n                <div class=\"alert alert-info mt-3 mb-0\">\n                    <b>Selected time: </b>{{meridianTime | json}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Timepicker (<b>Seconds</b>)</div>\n            <div class=\"card-block\">\n                <ngb-timepicker [(ngModel)]=\"SecondsTime\" [seconds]=\"seconds\"></ngb-timepicker>\n                <button class=\"btn btn-sm btn-outline-{{seconds ? 'success' : 'danger'}}\" (click)=\"toggleSeconds()\">\n                    Seconds - {{seconds ? \"ON\" : \"OFF\"}}\n                </button>\n                <div class=\"alert alert-info mt-3 mb-0\">\n                    <b>Selected time: </b>{{SecondsTime | json}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6 mt-3\">\n        <div class=\"card\">\n            <div class=\"card-header\">Timepicker (<b>Custom Step</b>)</div>\n            <div class=\"card-block\">\n                <ngb-timepicker [(ngModel)]=\"customTime\" [seconds]=\"true\"\n                [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <label for=\"changeHourStep\">Hour Step</label>\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"hourStep\" />\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <label for=\"changeMinuteStep\">Minute Step</label>\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"minuteStep\" />\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <label for=\"changeSecondStep\">Second Step</label>\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"secondStep\" />\n                    </div>\n                </div>\n                <div class=\"alert alert-info mt-3 mb-0\">\n                    <b>Selected time: </b>{{customTime | json}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/timepicker/timepicker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/timepicker/timepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export TimepickerComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimepickerComponent = (function () {
    function TimepickerComponent() {
        this.defaultTime = { hour: 13, minute: 30 };
        this.meridianTime = { hour: 13, minute: 30 };
        this.meridian = true;
        this.SecondsTime = { hour: 13, minute: 30, second: 30 };
        this.seconds = true;
        this.customTime = { hour: 13, minute: 30, second: 0 };
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
    }
    TimepickerComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    TimepickerComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    return TimepickerComponent;
}());
TimepickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timepicker',
        template: __webpack_require__("../../../../../src/app/layout/bs-component/components/timepicker/timepicker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/bs-component/components/timepicker/timepicker.component.scss")]
    })
], TimepickerComponent);

//# sourceMappingURL=timepicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        Tooltip\n    </div>\n    <div class=\"card-block\">\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n          Tooltip on top\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n          Tooltip on right\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n          Tooltip on bottom\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n          Tooltip on left\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/tooltip/tooltip.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/bs-component/components/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export TooltipComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipComponent = (function () {
    function TooltipComponent() {
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    return TooltipComponent;
}());
TooltipComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tooltip',
        template: __webpack_require__("../../../../../src/app/layout/bs-component/components/tooltip/tooltip.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/bs-component/components/tooltip/tooltip.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TooltipComponent);

//# sourceMappingURL=tooltip.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/remultiplexor/init-param.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitParam; });
var InitParam = (function () {
    function InitParam() {
    }
    InitParam.prototype.load = function () {
        if (localStorage.getItem('intSelected') === null || localStorage.getItem('esqModSelected') === null
            || localStorage.getItem('codConSelected') === null || localStorage.getItem('select1') === null ||
            localStorage.getItem('select2') === null || localStorage.getItem('select3') === null || localStorage.getItem('entrelazadoDeTiempo') === null
            || localStorage.getItem('alturaIntGua') === null || localStorage.getItem('alturaIntGua2') === null || localStorage.getItem('tspCapa') === null) {
            var intSelected = '1/4';
            var modoSelected = 'MODO 1';
            var esqModSelected = ['QPSK', 'QPSK', 'QPSK'];
            var codConSelected = ["1/2", "1/2", "1/2"];
            var select1 = 0;
            var select2 = 0;
            var select3 = 0;
            var activado = false;
            var entrelazadoDeTiempo = [0, 0, 0];
            localStorage.setItem('intSelected', JSON.stringify(intSelected));
            localStorage.setItem('modoSelected', JSON.stringify(modoSelected));
            localStorage.setItem('esqModSelected', JSON.stringify(esqModSelected));
            localStorage.setItem('codConSelected', JSON.stringify(codConSelected));
            localStorage.setItem('select1', JSON.stringify(select1));
            localStorage.setItem('select2', JSON.stringify(select2));
            localStorage.setItem('select3', JSON.stringify(select3));
            localStorage.setItem('activado', JSON.stringify(activado));
            localStorage.setItem('entrelazadoDeTiempo', JSON.stringify(entrelazadoDeTiempo));
            //resultados
            var intGua = 63;
            localStorage.setItem('intGua', JSON.stringify(intGua));
            var ki = [1 / 2, 1 / 2, 1 / 2];
            localStorage.setItem('ki', JSON.stringify(ki));
            var bp = [2, 2, 2];
            localStorage.setItem('bp', JSON.stringify(bp));
            var alturaIntGua = 60;
            localStorage.setItem('alturaIntGua', JSON.stringify(alturaIntGua));
            var alturaIntGua2 = 60;
            localStorage.setItem('alturaIntGua2', JSON.stringify(alturaIntGua2));
            var tspNulos = 1279;
            localStorage.setItem('tspNulos', JSON.stringify(tspNulos));
            var tspCapa = [0, 0, 0];
            localStorage.setItem('tspCapa', JSON.stringify(tspCapa));
        }
        else {
        }
    };
    return InitParam;
}());

//# sourceMappingURL=init-param.js.map

/***/ }),

/***/ "../../../../../src/app/layout/remultiplexor/remultiplexor-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remultiplexor_component__ = __webpack_require__("../../../../../src/app/layout/remultiplexor/remultiplexor.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemultiplexorRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__remultiplexor_component__["a" /* RemultiplexorComponent */] }
];
var RemultiplexorRoutingModule = (function () {
    function RemultiplexorRoutingModule() {
    }
    return RemultiplexorRoutingModule;
}());
RemultiplexorRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], RemultiplexorRoutingModule);

//# sourceMappingURL=remultiplexor-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/remultiplexor/remultiplexor.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Remultiplexor</h4>\n<div class=\"row\">\n    <div class=\"col \">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">\n                Parámetros Variables\n            </div>\n            <div class=\"card-block \">\n                <div class=\"form-group\">\n                <label>Modo:</label>\n                <select [value]=\"modoSelected\" class=\"form-control-mb-12\" \n                 (change)=\"modo($event.target.value)\">\n                    <option value=\"MODO 1\" >MODO 1</option>\n                    <option value=\"MODO 2\">MODO 2</option>\n                    <option value=\"MODO 3\" >MODO 3</option>\n                </select>\n                 <label>Intervalo de Guarda:</label>\n                <select [value]=\"intSelected\" class=\"form-control-mb-12\"\n                (change)=\"intSelection($event.target.value)\" >\n                    <option  value=\"1/4\">1/4</option>\n                    <option value=\"1/8\">1/8</option>\n                    <option  value=\"1/16\">1/16</option>\n                    <option  value=\"1/32\">1/32</option>\n                </select> <br>\n                  <label> One-Seg: </label>\n                    <button (click)=\"onActivado()\">{{ activado ? 'Activado' : 'Desactivado' }}</button>\n                    <div class=\"row\">\n                      <div class=\"col\">\n                     <table class=\"table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th style=\"text-align:center;\">Capa A</th>\n      <th style=\"text-align:center;\">Capa B</th>\n      <th style=\"text-align:center;\">Capa C</th>\n      </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\" >Nº de Segmentos [N<sub>S</sub>]:</th>\n      <td style=\"text-align:center;\"> <select [(ngModel)]=\"select1\" [disabled]=\"activado\" (change)=\"saveValueA(select1)\">\n              <option *ngFor=\"let o of options | slice:0:getLimit(select1)\" [ngValue]=\"o\">{{ o }}</option>\n              </select> </td>\n      <td style=\"text-align:center;\"> <select [(ngModel)]=\"select2\" (change)=\"saveValueB(select2)\">\n              <option *ngFor=\"let o of options | slice:0:getLimit(select2)\" [ngValue]=\"o\">{{ o }}</option>\n              </select> </td>\n      <td style=\"text-align:center;\"> <select [(ngModel)]=\"select3\" (change)=\"saveValueC(select3)\">\n               <option *ngFor=\"let o of options | slice:0:getLimit(select3)\" [ngValue]=\"o\">{{ o }}</option>\n              </select></td>\n                  </tr>\n    <tr>\n      <th scope=\"row\">Esquema de Modulación:</th>\n      <td style=\"text-align:center;\">  <select class=\"form-control-mb-12\" [value]=\"esqModSelected[0]\" (change)=\"esqModSelection($event.target.value, 'capa A')\">\n                   <option value=\"QPSK\">QPSK</option>\n                    <option value=\"16-QAM\">16-QAM</option>\n                    <option value=\"64-QAM\">64-QAM</option>\n                    <option value=\"DQPSK\">DQPSK</option>\n                </select> </td>\n      <td style=\"text-align:center;\"> <select  class=\"form-control-mb-12\" [value]=\"esqModSelected[1]\" (change)=\"esqModSelection($event.target.value,'capa B')\">\n                    <option value=\"QPSK\">QPSK</option>\n                    <option value=\"16-QAM\">16-QAM</option>\n                    <option value=\"64-QAM\">64-QAM</option>\n                    <option value=\"DQPSK\">DQPSK</option>\n                </select> </td>\n      <td style=\"text-align:center;\"> <select  class=\"form-control-mb-12\" [value]=\"esqModSelected[2]\" (change)=\"esqModSelection($event.target.value, 'capa C')\">\n                     <option value=\"QPSK\">QPSK</option>\n                    <option value=\"16-QAM\">16-QAM</option>\n                    <option value=\"64-QAM\">64-QAM</option>\n                    <option value=\"DQPSK\">DQPSK</option>\n                </select></td>\n                  </tr>\n    <tr>\n      <th scope=\"row\">Codificación  Convolucional [K<sub>I</sub>]</th>\n      <td style=\"text-align:center;\"><select class=\"form-control-mb-12\"  [(ngModel)]=\"codConSelected[0]\" (change)=\"codConSelection(codConSelected[0], 'capa A')\">\n               <option value=\"1/2\">1/2</option>\n                    <option value=\"2/3\">2/3</option>\n                    <option value=\"3/4\">3/4</option>\n                    <option value=\"5/6\">5/6</option>\n                    <option value=\"7/8\">7/8</option>\n                </select></td>\n      <td style=\"text-align:center;\">  <select class=\"form-control-mb-12\" [value]=\"codConSelected[1]\" (change)=\"codConSelection($event.target.value, 'capa B')\">\n                  <option value=\"1/2\">1/2</option>\n                    <option value=\"2/3\">2/3</option>\n                    <option value=\"3/4\">3/4</option>\n                    <option value=\"5/6\">5/6</option>\n                    <option value=\"7/8\">7/8</option>\n                </select> </td>\n      <td style=\"text-align:center;\"> <select class=\"form-control-mb-12\" [value]=\"codConSelected[2]\"  (change)=\"codConSelection($event.target.value, 'capa C')\">\n               <option value=\"1/2\">1/2</option>\n                    <option value=\"2/3\">2/3</option>\n                    <option value=\"3/4\">3/4</option>\n                    <option value=\"5/6\">5/6</option>\n                    <option value=\"7/8\">7/8</option>\n                </select> </td>\n       </tr>\n       <tr>\n        <th scope=\"row\">Entrelazado de tiempo [I]</th>\n        <td style=\"text-align:center;\"><select [(ngModel)]=\"entrelazadoDeTiempo[0]\" name=\"entrelazadoDeTiempo[0]\" (change)=\"guardarValoresEntrelazado()\" class=\"form-control-mb-12\" >\n                      <option *ngIf=\"modoBoolean[0]\" >0</option>\n                      <option *ngIf=\"modoBoolean[0]\" >4</option>\n                      <option *ngIf=\"modoBoolean[0]\">8</option>\n                      <option *ngIf=\"modoBoolean[0]\">16</option>\n                      <option *ngIf=\"modoBoolean[1]\" >0</option>\n                      <option *ngIf=\"modoBoolean[1]\">2</option>\n                      <option  *ngIf=\"modoBoolean[1]\">4</option>\n                      <option *ngIf=\"modoBoolean[1]\" >8</option>\n                      <option  *ngIf=\"modoBoolean[2]\">0</option>\n                      <option *ngIf=\"modoBoolean[2]\" >1</option>\n                      <option *ngIf=\"modoBoolean[2]\" >2</option>\n                      <option *ngIf=\"modoBoolean[2]\" >4</option>          \n                    </select> </td>        \n        <td style=\"text-align:center;\">  <select  [(ngModel)]=\"entrelazadoDeTiempo[1]\"  name=\"entrelazadoDeTiempo[1]\"  (change)=\"guardarValoresEntrelazado()\"class=\"form-control-mb-12\" >\n          <option *ngIf=\"modoBoolean[0]\" >0</option>\n          <option *ngIf=\"modoBoolean[0]\" >4</option>\n          <option *ngIf=\"modoBoolean[0]\">8</option>\n          <option *ngIf=\"modoBoolean[0]\">16</option>\n          <option *ngIf=\"modoBoolean[1]\" >0</option>\n          <option *ngIf=\"modoBoolean[1]\">2</option>\n          <option  *ngIf=\"modoBoolean[1]\">4</option>\n          <option *ngIf=\"modoBoolean[1]\" >8</option>\n          <option  *ngIf=\"modoBoolean[2]\">0</option>\n          <option *ngIf=\"modoBoolean[2]\" >1</option>\n          <option *ngIf=\"modoBoolean[2]\" >2</option>\n          <option *ngIf=\"modoBoolean[2]\" >4</option>        \n                  </select> </td>\n        <td style=\"text-align:center;\"> <select [(ngModel)]=\"entrelazadoDeTiempo[2]\" name=\"entrelazadoDeTiempo[2]\"  (change)=\"guardarValoresEntrelazado()\" class=\"form-control-mb-12\" >\n          <option *ngIf=\"modoBoolean[0]\" >0</option>\n          <option *ngIf=\"modoBoolean[0]\" >4</option>\n          <option *ngIf=\"modoBoolean[0]\">8</option>\n          <option *ngIf=\"modoBoolean[0]\">16</option>\n          <option *ngIf=\"modoBoolean[1]\" >0</option>\n          <option *ngIf=\"modoBoolean[1]\">2</option>\n          <option  *ngIf=\"modoBoolean[1]\">4</option>\n          <option *ngIf=\"modoBoolean[1]\" >8</option>\n          <option  *ngIf=\"modoBoolean[2]\">0</option>\n          <option *ngIf=\"modoBoolean[2]\" >1</option>\n          <option *ngIf=\"modoBoolean[2]\" >2</option>\n          <option *ngIf=\"modoBoolean[2]\" >4</option>        \n                  </select> </td>\n         </tr>\n  </tbody>\n</table>\n                      </div>\n                    </div>\n<div *ngIf=\"!isValidSuma()\" class=\"alert alert-danger\">\n    <strong>La suma de los segmentos asignados debe ser 13</strong> \n</div>\n      \n            </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Resultados  -->\n<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Resultados</div>\n            <div class=\"card-block\">\n                <ngb-tabset >\n \n                    <ngb-tab [disabled]=\"!isValidSuma()\">\n                        <ng-template ngbTabTitle> <b>Parámetros  Generales</b> </ng-template>\n                        <ng-template ngbTabContent>\n                          <table class=\"table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th ><span *ngIf=\"modoBoolean[0]\" style=\"color:orange\"> <b>Modo 1 </b></span> \n          <span *ngIf=\"!modoBoolean[0]\">Modo 1</span></th>\n          <th ><span *ngIf=\"modoBoolean[1]\" style=\"color:orange\"> <b>Modo 2 </b></span> \n            <span *ngIf=\"!modoBoolean[1]\">Modo 2</span></th>\n            <th ><span *ngIf=\"modoBoolean[2]\" style=\"color:orange\"> <b>Modo 3 </b></span> \n              <span *ngIf=\"!modoBoolean[2]\">Modo 3</span></th>\n    </tr>\n  </thead>\n  <tbody>\n      <tr>\n          <th scope=\"row\">Ancho de banda efectivo : BW<sub>CH</sub> [Mhz]</th>\n          <td>{{(((bws*13)+(bws/ls1))/1000).toFixed(4)}}</td>\n          <td>{{(((bws*13)+(bws/ls2))/1000).toFixed(4)}}</td>\n          <td>{{(((bws*13)+(bws/ls3))/1000).toFixed(4)}}</td>\n        </tr>\n        <tr>\n            <th scope=\"row\">Payload total A+B+C: [Mbps] </th>\n            <td>{{((ki[0]*(188/204))*((bp[0]*select1*portadoraDeDatos[0])/(tg1+(1/(bws/ls1))*1000))+(ki[1]*(188/204))*((bp[1]*select2*portadoraDeDatos[1])/(tg2+(1/(bws/ls2))*1000))+(ki[2]*(188/204))*((bp[2]*select3*portadoraDeDatos[2])/(tg3+(1/(bws/ls3))*1000))).toFixed(3)}}</td>\n            <td>{{((ki[0]*(188/204))*((bp[0]*select1*portadoraDeDatos[0])/(tg1+(1/(bws/ls1))*1000))+(ki[1]*(188/204))*((bp[1]*select2*portadoraDeDatos[1])/(tg2+(1/(bws/ls2))*1000))+(ki[2]*(188/204))*((bp[2]*select3*portadoraDeDatos[2])/(tg3+(1/(bws/ls3))*1000))).toFixed(3)}}</td>\n            <td>{{((ki[0]*(188/204))*((bp[0]*select1*portadoraDeDatos[0])/(tg1+(1/(bws/ls1))*1000))+(ki[1]*(188/204))*((bp[1]*select2*portadoraDeDatos[1])/(tg2+(1/(bws/ls2))*1000))+(ki[2]*(188/204))*((bp[2]*select3*portadoraDeDatos[2])/(tg3+(1/(bws/ls3))*1000))).toFixed(3)}}</td>\n          </tr>\n          <tr>\n    <tr>\n      <th scope=\"row\">Número  total de portadoras: L [Port]</th>\n        <td>{{(ls1*ns)+1}}</td>\n      <td>{{(ls2*ns)+1}}</td>\n      <td>{{(ls3*ns)+1}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Nº de portadoras por segmento: L<sub>s</sub> [Port]</th>\n      <td>{{ls1}}</td>\n      <td>{{ls2}}</td>\n      <td>{{ls3}}</td>\n    </tr>\n\n    <tr>\n      <th scope=\"row\" >Anchura de banda del segmento: BW<sub>s</sub> [Khz]</th>\n      <td>{{(bws)}}</td>\n      <td>{{bws}}</td>\n      <td>{{bws}}</td>\n  \n    </tr>\n    <tr>\n      <th scope=\"row\">Separación  entre portadoras: Δf [Khz] </th>\n      <td>{{(bws/ls1).toFixed(3)}}</td>\n      <td>{{(bws/ls2).toFixed(3)}}</td>\n      <td>{{(bws/ls3).toFixed(3)}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Tiempo útil de símbolo: T <sub>u</sub> [useg]</th>\n      <td>{{((1/(bws/ls1))*1000).toFixed(2)}}</td>\n      <td>{{((1/(bws/ls2))*1000).toFixed(2)}}</td>\n      <td>{{((1/(bws/ls3))*1000).toFixed(2)}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Intervalo de guarda: T<sub>G</sub> [useg]</th>\n      <td>{{tg1}}</td>\n      <td>{{tg2}}</td>\n      <td>{{tg3}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Tiempo de símbolo: T<sub>s</sub> [useg]</th>\n     <td>{{(tg1+(1/(bws/ls1))*1000).toFixed(2)}}</td>\n      <td>{{(tg2+(1/(bws/ls2))*1000).toFixed(2)}}</td>\n      <td>{{(tg3+(1/(bws/ls3))*1000).toFixed(2)}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\"  >Frecuencia de símbolo: f<sub>s</sub> [Hz]</th>\n      <td>{{((1/(tg1+(1/(bws/ls1))*1000))*1000000).toFixed(2)}}</td>\n      <td>{{((1/(tg2+(1/(bws/ls2))*1000))*1000000).toFixed(2)}}</td>\n      <td>{{((1/(tg3+(1/(bws/ls3))*1000))*1000000).toFixed(2)}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Nº de símbolos OFDM por cuadro: F [Simb]</th>\n      <td>{{f}}</td>\n      <td>{{f}}</td>\n      <td>{{f}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Tiempo de cuadro: T<sub>F</sub> [ms]</th>\n      <td>{{((f*(tg1+(1/(bws/ls1))*1000))/1000).toFixed(2)}}</td>\n      <td>{{((f*(tg2+(1/(bws/ls2))*1000))/1000).toFixed(2)}}</td>\n      <td>{{((f*(tg3+(1/(bws/ls3))*1000))/1000).toFixed(2)}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Frecuencia de cuadro: F <sub>f</sub> [Hz]: </th>\n      <td>{{((1/((f*(tg1+(1/(bws/ls1))*1000))/1000))*1000).toFixed(2)}}</td>\n      <td>{{((1/((f*(tg2+(1/(bws/ls2))*1000))/1000))*1000).toFixed(2)}}</td>\n      <td>{{((1/((f*(tg3+(1/(bws/ls3))*1000))/1000))*1000).toFixed(2)}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Muestras por símbolo OFDM: S[bins]</th>\n      <td>2048</td>\n      <td>4096</td>\n      <td>8192</td>\n    </tr>\n    <tr>\n      <th scope=\"row\" >Frecuencia de muestreo IFFT: f <sub>IFTT</sub> [Mhz]</th>\n      <td>{{(2048/252).toFixed(7)}}</td>\n      <td>{{(2048/252).toFixed(7)}}</td>\n      <td>{{(2048/252).toFixed(7)}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Periodo de muestreo IFFT: T <sub>m</sub> [useg]</th>\n      <td>{{(1/(2048/252)).toFixed(3)}}</td>\n      <td>{{(1/(2048/252)).toFixed(3)}}</td>\n      <td>{{(1/(2048/252)).toFixed(3)}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Total de pulsos por símbolo OFDM: N <sub> pulsos </sub></th>\n      <td>{{pps[0]}}</td>\n      <td>{{pps[1]}}</td>\n      <td>{{pps[2]}}</td>\n    </tr>\n  </tbody>\n</table>          \n                        </ng-template>\n                    </ngb-tab>\n\n                     <ngb-tab [disabled]=\"!isValidSuma()\">\n                        <ng-template ngbTabTitle><b>Cuadro Multiplex</b> </ng-template>\n                        <ng-template ngbTabContent>\n                           <table class=\"table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th ><span *ngIf=\"modoBoolean[0]\" style=\"color:orange\"> <b>Modo 1 </b></span> \n        <span *ngIf=\"!modoBoolean[0]\">Modo 1</span></th>\n        <th ><span *ngIf=\"modoBoolean[1]\" style=\"color:orange\"> <b>Modo 2 </b></span> \n          <span *ngIf=\"!modoBoolean[1]\">Modo 2</span></th>\n          <th ><span *ngIf=\"modoBoolean[2]\" style=\"color:orange\"> <b>Modo 3 </b></span> \n            <span *ngIf=\"!modoBoolean[2]\">Modo 3</span></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Duración del TSP: T<sub>TSP</sub> [us]</th>\n      <td>{{50.203135}}</td>\n      <td>{{50.203135}}</td>\n      <td>{{50.203135}}</td>\n    </tr>\n    <tr>\n        <th scope=\"row\"> Nº de TSP transportados por el BTS en un cuadro múltiplex: N<sub>BTS</sub> </th>\n        <td>{{Nbts[0]}} </td>\n        <td>{{Nbts[1]}}</td>\n        <td>{{Nbts[2]}}</td>\n     </tr>\n     <tr>\n      <td rowspan=\"2\"  > <b>Nº de TSP nulos transportados por el BTS en un cuadro múltiplex: ΣTSP<sub>nul</sub></b> </td>\n      <td>{{(Nbts[0]-(((Nmodo1[0])*select1)+((Nmodo1[1])*select2)+((Nmodo1[2])*select3)))-1}}</td>\n      <td>{{(Nbts[1]-(((Nmodo2[0])*select1)+((Nmodo2[1])*select2)+((Nmodo2[2])*select3)))-1}}</td>\n      <td>{{(Nbts[2]-(((Nmodo3[0])*select1)+((Nmodo3[1])*select2)+((Nmodo3[2])*select3)))-1}}</td>\n    </tr>\n    <tr>\n      <td> Paquete IIP: 1 </td>\n      <td>Paquete IIP: 1</td>\n      <td>Paquete IIP: 1</td>\n   </tr>\n    <tr>\n      <th scope=\"row\">Frecuencia reloj del BTS (4 flFFT): f<sub>R</sub> [Mhz]</th>\n      <td>{{(4*(2048/252)).toFixed(4)}}</td>\n      <td>{{(4*(2048/252)).toFixed(4)}}</td>\n      <td>{{(4*(2048/252)).toFixed(4)}}</td>\n    </tr>&nbsp;\n    <tr>\n\n  </tbody>\n</table>               \n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab [disabled]=\"!isValidSuma()\">\n                        <ng-template ngbTabTitle><b>Capa A</b> </ng-template>\n                        <ng-template ngbTabContent>\n                           <table class=\"table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th ><span *ngIf=\"modoBoolean[0]\" style=\"color:orange\"> <b>Modo 1 </b></span> \n        <span *ngIf=\"!modoBoolean[0]\">Modo 1</span></th>\n        <th ><span *ngIf=\"modoBoolean[1]\" style=\"color:orange\"> <b>Modo 2 </b></span> \n          <span *ngIf=\"!modoBoolean[1]\">Modo 2</span></th>\n          <th ><span *ngIf=\"modoBoolean[2]\" style=\"color:orange\"> <b>Modo 3 </b></span> \n            <span *ngIf=\"!modoBoolean[2]\">Modo 3</span></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Número de bits por portadora: b<sub>P</sub> </th>\n      <td>{{bp[0]}}</td>\n      <td>{{bp[0]}}</td>\n      <td>{{bp[0]}}</td>\n    </tr>&nbsp;\n    <tr>\n\n    <tr>\n      <th scope=\"row\">Nº TSP por segmento por cuadro: N </th>\n      <td>{{Nmodo1[0]}}</td>\n      <td>{{Nmodo2[0]}}</td>\n      <td>{{Nmodo3[0]}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\" > Tasa binaria neta de la Capa A: R <sub>A</sub> [Mbps]</th>\n      <td>{{((ki[0]*(188/204))*((bp[0]*select1*portadoraDeDatos[0])/(tg1+(1/(bws/ls1))*1000))).toFixed(3)}}</td>\n      <td>{{((ki[0]*(188/204))*((bp[0]*select1*portadoraDeDatos[0])/(tg1+(1/(bws/ls1))*1000))).toFixed(3)}}</td>\n      <td>{{((ki[0]*(188/204))*((bp[0]*select1*portadoraDeDatos[0])/(tg1+(1/(bws/ls1))*1000))).toFixed(3)}}</td>\n  \n    </tr>\n    <tr>\n      <th scope=\"row\">Total de TSP para la Capa A: N <sub>S</sub> x N [TSP<sub>S</sub>]   </th>\n      <td>{{((Nmodo1[0])*(select1))}}</td>\n      <td>{{((Nmodo2[0])*(select1))}}</td>\n      <td>{{((Nmodo3[0])*(select1))}}</td>\n    </tr>\n  </tbody>\n</table>               \n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab  [disabled]=\"!isValidSuma()\">\n                        <ng-template ngbTabTitle><b>Capa B</b> </ng-template>\n                        <ng-template ngbTabContent>\n                           <table class=\"table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th ><span *ngIf=\"modoBoolean[0]\" style=\"color:orange\"> <b>Modo 1 </b></span> \n        <span *ngIf=\"!modoBoolean[0]\">Modo 1</span></th>\n        <th ><span *ngIf=\"modoBoolean[1]\" style=\"color:orange\"> <b>Modo 2 </b></span> \n          <span *ngIf=\"!modoBoolean[1]\">Modo 2</span></th>\n          <th ><span *ngIf=\"modoBoolean[2]\" style=\"color:orange\"> <b>Modo 3 </b></span> \n            <span *ngIf=\"!modoBoolean[2]\">Modo 3</span></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Número de bits por portadora: b<sub>P</sub> </th>\n      <td>{{bp[1]}}</td>\n      <td>{{bp[1]}}</td>\n      <td>{{bp[1]}}</td>\n    </tr>&nbsp;\n    <tr>\n\n    <tr>\n      <th scope=\"row\">Nº TSP por segmento por cuadro: N </th>\n      <td>{{Nmodo1[1]}}</td>\n      <td>{{Nmodo2[1]}}</td>\n      <td>{{Nmodo3[1]}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\" > Tasa binaria neta de la Capa B: R <sub>B</sub> [Mbps]</th>\n      <td>{{((ki[1]*(188/204))*((bp[1]*select2*portadoraDeDatos[1])/(tg2+(1/(bws/ls2))*1000))).toFixed(3)}}</td>\n      <td>{{((ki[1]*(188/204))*((bp[1]*select2*portadoraDeDatos[1])/(tg2+(1/(bws/ls2))*1000))).toFixed(3)}}</td>\n      <td>{{((ki[1]*(188/204))*((bp[1]*select2*portadoraDeDatos[1])/(tg2+(1/(bws/ls2))*1000))).toFixed(3)}}</td>\n  \n    </tr>\n    <tr>\n      <th scope=\"row\">Total de TSP para la Capa B: N <sub>S</sub> x N [TSP<sub>S</sub>]   </th>\n      <td>{{((Nmodo1[1])*(select2))}}</td>\n      <td>{{((Nmodo2[1])*(select2))}}</td>\n      <td>{{((Nmodo3[1])*(select2))}}</td>\n    </tr>\n  </tbody>\n</table>               \n     \n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab  [disabled]=\"!isValidSuma()\">\n                        <ng-template ngbTabTitle><b>Capa C</b> </ng-template>\n                        <ng-template ngbTabContent>\n                           <table class=\"table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th ><span *ngIf=\"modoBoolean[0]\" style=\"color:orange\"> <b>Modo 1 </b></span> \n        <span *ngIf=\"!modoBoolean[0]\">Modo 1</span></th>\n        <th ><span *ngIf=\"modoBoolean[1]\" style=\"color:orange\"> <b>Modo 2 </b></span> \n          <span *ngIf=\"!modoBoolean[1]\">Modo 2</span></th>\n          <th ><span *ngIf=\"modoBoolean[2]\" style=\"color:orange\"> <b>Modo 3 </b></span> \n            <span *ngIf=\"!modoBoolean[2]\">Modo 3</span></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Número de bits por portadora: b<sub>P</sub> </th>\n      <td>{{bp[2]}}</td>\n      <td>{{bp[2]}}</td>\n      <td>{{bp[2]}}</td>\n    </tr>&nbsp;\n    <tr>\n\n    <tr>\n      <th scope=\"row\">Nº TSP por segmento por cuadro: N </th>\n      <td>{{Nmodo1[2]}}</td>\n      <td>{{Nmodo2[2]}}</td>\n      <td>{{Nmodo3[2]}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\" > Tasa binaria neta de la Capa C: R <sub>C</sub> [Mbps]</th>\n      <td>{{((ki[2]*(188/204))*((bp[2]*select3*portadoraDeDatos[2])/(tg3+(1/(bws/ls3))*1000))).toFixed(3)}}</td>\n      <td>{{((ki[2]*(188/204))*((bp[2]*select3*portadoraDeDatos[2])/(tg3+(1/(bws/ls3))*1000))).toFixed(3)}}</td>\n      <td>{{((ki[2]*(188/204))*((bp[2]*select3*portadoraDeDatos[2])/(tg3+(1/(bws/ls3))*1000))).toFixed(3)}}</td>\n  \n    </tr>\n    <tr>\n      <th scope=\"row\">Total de TSP para la Capa C: N <sub>S</sub> x N [TSP<sub>S</sub>]   </th>\n      <td>{{((Nmodo1[2])*(select3))}}</td>\n      <td>{{((Nmodo2[2])*(select3))}}</td>\n      <td>{{((Nmodo3[2])*(select3))}}</td>\n    </tr>\n  </tbody>\n</table>                                      \n                        </ng-template>\n                    </ngb-tab>\n                </ngb-tabset>\n            </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "../../../../../src/app/layout/remultiplexor/remultiplexor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-small {\n  width: 350px; }\n\n.underline {\n  text-decoration: underline; }\n\n.table td {\n  border: 2px solid #000; }\n\n.table tr {\n  border: 2px solid #000; }\n\n.table th {\n  border: 2px solid #000; }\n\n@media all and (max-width: 600px) {\n  select {\n    width: 100%;\n    max-width: 100%; } }\n\n.table {\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/remultiplexor/remultiplexor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_modulador_service__ = __webpack_require__("../../../../../src/app/Services/modulador.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemultiplexorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemultiplexorComponent = (function () {
    function RemultiplexorComponent(_moduladorService) {
        this._moduladorService = _moduladorService;
        this.intSelected = "";
        this.modoSelected = "";
        this.modoBoolean = [];
        this.oneSeg = false;
        this.mostMenos = true;
        this.oneSegseg = "";
        this.options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.tu1 = 252;
        this.tu2 = 504;
        this.tu3 = 1008;
        this.bw = 6;
        this.bws = 428.57;
        this.ns = 13;
        this.ls1 = 108;
        this.ls2 = 216;
        this.ls3 = 432;
        this.f = 204;
        this.pps = [];
        this.Nmodo1 = [];
        this.Nmodo2 = [];
        this.Nmodo3 = [];
        this.Nbts = [];
        this.entrelazadoDeTiempo = [];
        this.portadoraDeDatos = [96, 192, 384];
        this.tspNulos = [];
        this.tspCapaModo1 = [];
        this.tspCapaModo2 = [];
        this.tspCapaModo3 = [];
        this.intSelected = this._moduladorService.obtenerIntervalo();
        this.modoSelected = this._moduladorService.obtenerModo();
        this.esqModSelected = this._moduladorService.obtenerEsquemaModulacion();
        this.codConSelected = this._moduladorService.obtenerCodificacionConvolucional();
        this.select1 = this._moduladorService.obtenerSegmentoA();
        this.select2 = this._moduladorService.obtenerSegmentoB();
        this.select3 = this._moduladorService.obtenerSegmentoC();
        this.activado = this._moduladorService.obtenerActivado();
        this.intGua = this._moduladorService.obtenerIntGua();
        this.ki = this._moduladorService.obtenerKi();
        this.bp = this._moduladorService.obtenerBp();
        this.entrelazadoDeTiempo = this._moduladorService.obtenerEntrelazadoDeTiempo();
    }
    RemultiplexorComponent.prototype.ngOnInit = function () {
        this.calculoIntervaloGuarda(this.intSelected);
        this.calculoKi(this.codConSelected[0], this.codConSelected[1], this.codConSelected[2]);
        this.detDeltaGuarda(this.intSelected);
        this.calculoBp(this.esqModSelected[0], this.esqModSelected[1], this.esqModSelected[2]);
        this.pulsosPorSimbolo(this.intSelected);
        this.numeroTSP();
        this.modoParaEntrelazado();
        this.calculoTspNulos();
    };
    RemultiplexorComponent.prototype.intSelection = function (value) {
        this.intSelected = value;
        this._moduladorService.actualizarIntervalo(this.intSelected);
        this.calculoIntervaloGuarda(value);
        this.detDeltaGuarda(value);
        this.pulsosPorSimbolo(value);
        this.numeroTSP();
        this.calculoTspNulos();
    };
    RemultiplexorComponent.prototype.detDeltaGuarda = function (value) {
        if (value === "1/4") {
            this.deltaGuarda = 1 / 4;
        }
        if (value === "1/8") {
            this.deltaGuarda = 1 / 8;
        }
        if (value === "1/16") {
            this.deltaGuarda = 1 / 16;
        }
        if (value === "1/32") {
            this.deltaGuarda = 1 / 32;
        }
    };
    RemultiplexorComponent.prototype.change = function () {
        var change = document.getElementById("oneseg");
        if (change.innerHTML === "Desactivado") {
            change.innerHTML = "Activado";
            this.oneSeg = true;
            this.oneSegseg = "1";
        }
        else {
            change.innerHTML = "Desactivado";
            this.oneSeg = false;
            this.oneSegseg = "";
        }
    };
    RemultiplexorComponent.prototype.modo = function (value) {
        this.modoSelected = value;
        this._moduladorService.actualizarModo(this.modoSelected);
        this.calculoIntervaloGuarda(this.intSelected);
        this.modoParaEntrelazado();
        this.calculoTspNulos();
        this.calculoTspCapa();
    };
    RemultiplexorComponent.prototype.modoParaEntrelazado = function () {
        if (this.modoSelected === "MODO 1") {
            this.modoBoolean[0] = true;
            this.modoBoolean[2] = false;
            this.modoBoolean[1] = false;
        }
        if (this.modoSelected === "MODO 2") {
            this.modoBoolean[1] = true;
            this.modoBoolean[0] = false;
            this.modoBoolean[2] = false;
        }
        if (this.modoSelected === "MODO 3") {
            this.modoBoolean[2] = true;
            this.modoBoolean[1] = false;
            this.modoBoolean[0] = false;
        }
    };
    RemultiplexorComponent.prototype.guardarValoresEntrelazado = function () {
        this._moduladorService.actualizarEntrelazadoDeTiempo(this.entrelazadoDeTiempo);
    };
    RemultiplexorComponent.prototype.esqModSelection = function (value, id) {
        if (id === 'capa A') {
            this.esqModSelected[0] = value;
            this._moduladorService.actualizarEsquemaModulacion(this.esqModSelected[0], id);
        }
        if (id === 'capa B') {
            this.esqModSelected[1] = value;
            this._moduladorService.actualizarEsquemaModulacion(this.esqModSelected[1], id);
        }
        if (id === 'capa C') {
            this.esqModSelected[2] = value;
            this._moduladorService.actualizarEsquemaModulacion(this.esqModSelected[2], id);
        }
        this.calculoBp(this.esqModSelected[0], this.esqModSelected[1], this.esqModSelected[2]);
        this.calculoTspNulos();
    };
    RemultiplexorComponent.prototype.calculoBp = function (value0, value1, value2) {
        if (value0 === 'QPSK') {
            this.bp[0] = 2;
        }
        if (value0 === 'DQPSK') {
            this.bp[0] = 2;
        }
        if (value0 === '16-QAM') {
            this.bp[0] = 4;
        }
        if (value0 === '64-QAM') {
            this.bp[0] = 6;
        }
        if (value1 === 'QPSK') {
            this.bp[1] = 2;
        }
        if (value1 === 'DQPSK') {
            this.bp[1] = 2;
        }
        if (value1 === '16-QAM') {
            this.bp[1] = 4;
        }
        if (value1 === '64-QAM') {
            this.bp[1] = 6;
        }
        if (value2 === 'QPSK') {
            this.bp[2] = 2;
        }
        if (value2 === 'DQPSK') {
            this.bp[2] = 2;
        }
        if (value2 === '16-QAM') {
            this.bp[2] = 4;
        }
        if (value2 === '64-QAM') {
            this.bp[2] = 6;
        }
        this.cantidadPaquetesTSP();
    };
    RemultiplexorComponent.prototype.codConSelection = function (value, id) {
        if (id === 'capa A') {
            this.codConSelected[0] = value;
            this._moduladorService.actualizarCodificacionConvolucional(this.codConSelected[0], id);
        }
        if (id === 'capa B') {
            this.codConSelected[1] = value;
            this._moduladorService.actualizarCodificacionConvolucional(this.codConSelected[1], id);
        }
        if (id === 'capa C') {
            this.codConSelected[2] = value;
            this._moduladorService.actualizarCodificacionConvolucional(this.codConSelected[2], id);
        }
        this.calculoKi(this.codConSelected[0], this.codConSelected[1], this.codConSelected[2]);
        this.cantidadPaquetesTSP();
        this.calculoTspNulos();
    };
    RemultiplexorComponent.prototype.getLimit = function (value) {
        // get the sum of the select's
        var suma = this.select1 + this.select2 + this.select3;
        // we minus the total plus this value as we still 
        // need the option that is selected
        return this.options.length - suma + value;
    };
    RemultiplexorComponent.prototype.saveValueA = function (value) {
        this._moduladorService.actualizarSegmentoA(value);
        this.calculoTspNulos();
        this.calculoTspCapa();
        // call service or whatever to save the value
    };
    RemultiplexorComponent.prototype.saveValueB = function (value) {
        this._moduladorService.actualizarSegmentoB(value);
        this.calculoTspNulos();
        this.calculoTspCapa();
        // call service or whatever to save the value
    };
    RemultiplexorComponent.prototype.saveValueC = function (value) {
        this._moduladorService.actualizarSegmentoC(value);
        this.calculoTspNulos();
        this.calculoTspCapa();
        // call service or whatever to save the value
    };
    RemultiplexorComponent.prototype.saveActivado = function (value) {
        this._moduladorService.actualizarActivado(value);
    };
    RemultiplexorComponent.prototype.onActivado = function () {
        // check if we are inactive
        if (!this.activado) {
            // set the select options
            this.select1 = 1;
            this.select2 = 0;
            this.select3 = 0;
            this.saveValueA(this.select1);
            this.saveValueB(this.select2);
            this.saveValueC(this.select3);
        }
        // toggle active
        this.activado = !this.activado;
        this.saveActivado(this.activado);
    };
    RemultiplexorComponent.prototype.isValidSuma = function () {
        var suma = this.select1 + this.select2 + this.select3;
        return suma === 13;
    };
    // Funciones modelo 
    RemultiplexorComponent.prototype.calculoIntervaloGuarda = function (valor) {
        if (valor == "1/4") {
            this.tg1 = (this.tu1) / 4;
            this.tg2 = (this.tu2) / 4;
            this.tg3 = (this.tu3) / 4;
            if (this.modoSelected === 'MODO 1') {
                this._moduladorService.actualizarIntGua(this.tg1);
            }
            if (this.modoSelected === 'MODO 2') {
                this._moduladorService.actualizarIntGua(this.tg2);
            }
            if (this.modoSelected === 'MODO 3') {
                this._moduladorService.actualizarIntGua(this.tg3);
            }
        }
        if (valor == "1/8") {
            this.tg1 = (this.tu1) / 8;
            this.tg2 = (this.tu2) / 8;
            this.tg3 = (this.tu3) / 8;
            if (this.modoSelected === 'MODO 1') {
                this._moduladorService.actualizarIntGua(this.tg1);
            }
            if (this.modoSelected === 'MODO 2') {
                this._moduladorService.actualizarIntGua(this.tg2);
            }
            if (this.modoSelected === 'MODO 3') {
                this._moduladorService.actualizarIntGua(this.tg3);
            }
        }
        if (valor == "1/16") {
            this.tg1 = (this.tu1) / 16;
            this.tg2 = (this.tu2) / 16;
            this.tg3 = (this.tu3) / 16;
            if (this.modoSelected === 'MODO 1') {
                this._moduladorService.actualizarIntGua(this.tg1);
            }
            if (this.modoSelected === 'MODO 2') {
                this._moduladorService.actualizarIntGua(this.tg2);
            }
            if (this.modoSelected === 'MODO 3') {
                this._moduladorService.actualizarIntGua(this.tg3);
            }
        }
        if (valor == "1/32") {
            this.tg1 = (this.tu1) / 32;
            this.tg2 = (this.tu2) / 32;
            this.tg3 = (this.tu3) / 32;
            if (this.modoSelected === 'MODO 1') {
                this._moduladorService.actualizarIntGua(this.tg1);
            }
            if (this.modoSelected === 'MODO 2') {
                this._moduladorService.actualizarIntGua(this.tg2);
            }
            if (this.modoSelected === 'MODO 3') {
                this._moduladorService.actualizarIntGua(this.tg3);
            }
        }
    };
    RemultiplexorComponent.prototype.calculoKi = function (value0, value1, value2) {
        if (value0 === "1/2") {
            this.ki[0] = 1 / 2;
        }
        if (value0 === "2/3") {
            this.ki[0] = 2 / 3;
        }
        if (value0 === "3/4") {
            this.ki[0] = 3 / 4;
        }
        if (value0 === "5/6") {
            this.ki[0] = 5 / 6;
        }
        if (value0 === "7/8") {
            this.ki[0] = 7 / 8;
        }
        if (value1 === "1/2") {
            this.ki[1] = 1 / 2;
        }
        if (value1 === "2/3") {
            this.ki[1] = 2 / 3;
        }
        if (value1 === "3/4") {
            this.ki[1] = 3 / 4;
        }
        if (value1 === "5/6") {
            this.ki[1] = 5 / 6;
        }
        if (value1 === "7/8") {
            this.ki[1] = 7 / 8;
        }
        if (value2 === "1/2") {
            this.ki[2] = 1 / 2;
        }
        if (value2 === "2/3") {
            this.ki[2] = 2 / 3;
        }
        if (value2 === "3/4") {
            this.ki[2] = 3 / 4;
        }
        if (value2 === "5/6") {
            this.ki[2] = 5 / 6;
        }
        if (value2 === "7/8") {
            this.ki[2] = 7 / 8;
        }
        this._moduladorService.actualizarKi(this.ki[0], this.ki[1], this.ki[2]);
    };
    //PULSOS POR SIMBOLO OFDM
    RemultiplexorComponent.prototype.pulsosPorSimbolo = function (value) {
        if (value === "1/4") {
            this.pps[0] = '2560';
            this.pps[1] = '5120';
            this.pps[2] = '10240';
        }
        if (value === "1/8") {
            this.pps[0] = '2304';
            this.pps[1] = '4608';
            this.pps[2] = '9216';
        }
        if (value === "1/16") {
            this.pps[0] = '2176';
            this.pps[1] = '4352';
            this.pps[2] = '8704';
        }
        if (value === "1/32") {
            this.pps[0] = '2112';
            this.pps[1] = '4224';
            this.pps[2] = '8448';
        }
    };
    //N CANTIDAD DE PAQUETES TSP POR SEGMENTO Y POR CUADRO OFDM
    RemultiplexorComponent.prototype.cantidadPaquetesTSP = function () {
        //CAPA A
        if (this.bp[0] === 2) {
            if (this.ki[0] === 1 / 2) {
                this.Nmodo1[0] = 12;
                this.Nmodo2[0] = 24;
                this.Nmodo3[0] = 48;
            }
            ;
            if (this.ki[0] === 2 / 3) {
                this.Nmodo1[0] = 16;
                this.Nmodo2[0] = 32;
                this.Nmodo3[0] = 64;
            }
            ;
            if (this.ki[0] === 3 / 4) {
                this.Nmodo1[0] = 18;
                this.Nmodo2[0] = 36;
                this.Nmodo3[0] = 72;
            }
            ;
            if (this.ki[0] === 5 / 6) {
                this.Nmodo1[0] = 20;
                this.Nmodo2[0] = 40;
                this.Nmodo3[0] = 80;
            }
            ;
            if (this.ki[0] === 7 / 8) {
                this.Nmodo1[0] = 21;
                this.Nmodo2[0] = 42;
                this.Nmodo3[0] = 84;
            }
            ;
        }
        if (this.bp[0] === 4) {
            if (this.ki[0] === 1 / 2) {
                this.Nmodo1[0] = 24;
                this.Nmodo2[0] = 48;
                this.Nmodo3[0] = 96;
            }
            ;
            if (this.ki[0] === 2 / 3) {
                this.Nmodo1[0] = 32;
                this.Nmodo2[0] = 64;
                this.Nmodo3[0] = 128;
            }
            ;
            if (this.ki[0] === 3 / 4) {
                this.Nmodo1[0] = 36;
                this.Nmodo2[0] = 72;
                this.Nmodo3[0] = 144;
            }
            ;
            if (this.ki[0] === 5 / 6) {
                this.Nmodo1[0] = 40;
                this.Nmodo2[0] = 80;
                this.Nmodo3[0] = 160;
            }
            ;
            if (this.ki[0] === 7 / 8) {
                this.Nmodo1[0] = 42;
                this.Nmodo2[0] = 84;
                this.Nmodo3[0] = 168;
            }
            ;
        }
        if (this.bp[0] === 6) {
            if (this.ki[0] === 1 / 2) {
                this.Nmodo1[0] = 36;
                this.Nmodo2[0] = 72;
                this.Nmodo3[0] = 144;
            }
            ;
            if (this.ki[0] === 2 / 3) {
                this.Nmodo1[0] = 48;
                this.Nmodo2[0] = 96;
                this.Nmodo3[0] = 192;
            }
            ;
            if (this.ki[0] === 3 / 4) {
                this.Nmodo1[0] = 58;
                this.Nmodo2[0] = 108;
                this.Nmodo3[0] = 216;
            }
            ;
            if (this.ki[0] === 5 / 6) {
                this.Nmodo1[0] = 60;
                this.Nmodo2[0] = 120;
                this.Nmodo3[0] = 240;
            }
            ;
            if (this.ki[0] === 7 / 8) {
                this.Nmodo1[0] = 63;
                this.Nmodo2[0] = 126;
                this.Nmodo3[0] = 252;
            }
            ;
        }
        //CAPA B
        if (this.bp[1] === 2) {
            if (this.ki[1] === 1 / 2) {
                this.Nmodo1[1] = 12;
                this.Nmodo2[1] = 24;
                this.Nmodo3[1] = 48;
            }
            ;
            if (this.ki[1] === 2 / 3) {
                this.Nmodo1[1] = 16;
                this.Nmodo2[1] = 32;
                this.Nmodo3[1] = 64;
            }
            ;
            if (this.ki[1] === 3 / 4) {
                this.Nmodo1[1] = 18;
                this.Nmodo2[1] = 36;
                this.Nmodo3[1] = 72;
            }
            ;
            if (this.ki[1] === 5 / 6) {
                this.Nmodo1[1] = 20;
                this.Nmodo2[1] = 40;
                this.Nmodo3[1] = 80;
            }
            ;
            if (this.ki[1] === 7 / 8) {
                this.Nmodo1[1] = 21;
                this.Nmodo2[1] = 42;
                this.Nmodo3[1] = 84;
            }
            ;
        }
        if (this.bp[1] === 4) {
            if (this.ki[1] === 1 / 2) {
                this.Nmodo1[1] = 24;
                this.Nmodo2[1] = 48;
                this.Nmodo3[1] = 96;
            }
            ;
            if (this.ki[1] === 2 / 3) {
                this.Nmodo1[1] = 32;
                this.Nmodo2[1] = 64;
                this.Nmodo3[1] = 128;
            }
            ;
            if (this.ki[1] === 3 / 4) {
                this.Nmodo1[1] = 36;
                this.Nmodo2[1] = 72;
                this.Nmodo3[1] = 144;
            }
            ;
            if (this.ki[1] === 5 / 6) {
                this.Nmodo1[1] = 40;
                this.Nmodo2[1] = 80;
                this.Nmodo3[1] = 160;
            }
            ;
            if (this.ki[1] === 7 / 8) {
                this.Nmodo1[1] = 42;
                this.Nmodo2[1] = 84;
                this.Nmodo3[1] = 168;
            }
            ;
        }
        if (this.bp[1] === 6) {
            if (this.ki[1] === 1 / 2) {
                this.Nmodo1[1] = 36;
                this.Nmodo2[1] = 72;
                this.Nmodo3[1] = 144;
            }
            ;
            if (this.ki[1] === 2 / 3) {
                this.Nmodo1[1] = 48;
                this.Nmodo2[1] = 96;
                this.Nmodo3[1] = 192;
            }
            ;
            if (this.ki[1] === 3 / 4) {
                this.Nmodo1[1] = 58;
                this.Nmodo2[1] = 108;
                this.Nmodo3[1] = 216;
            }
            ;
            if (this.ki[1] === 5 / 6) {
                this.Nmodo1[1] = 60;
                this.Nmodo2[1] = 120;
                this.Nmodo3[1] = 240;
            }
            ;
            if (this.ki[1] === 7 / 8) {
                this.Nmodo1[1] = 63;
                this.Nmodo2[1] = 126;
                this.Nmodo3[1] = 252;
            }
            ;
        }
        //CAPA C
        if (this.bp[2] === 2) {
            if (this.ki[2] === 1 / 2) {
                this.Nmodo1[2] = 12;
                this.Nmodo2[2] = 24;
                this.Nmodo3[2] = 48;
            }
            ;
            if (this.ki[2] === 2 / 3) {
                this.Nmodo1[2] = 16;
                this.Nmodo2[2] = 32;
                this.Nmodo3[2] = 64;
            }
            ;
            if (this.ki[2] === 3 / 4) {
                this.Nmodo1[2] = 18;
                this.Nmodo2[2] = 36;
                this.Nmodo3[2] = 72;
            }
            ;
            if (this.ki[2] === 5 / 6) {
                this.Nmodo1[2] = 20;
                this.Nmodo2[2] = 40;
                this.Nmodo3[2] = 80;
            }
            ;
            if (this.ki[2] === 7 / 8) {
                this.Nmodo1[2] = 21;
                this.Nmodo2[2] = 42;
                this.Nmodo3[2] = 84;
            }
            ;
        }
        if (this.bp[2] === 4) {
            if (this.ki[2] === 1 / 2) {
                this.Nmodo1[2] = 24;
                this.Nmodo2[2] = 48;
                this.Nmodo3[2] = 96;
            }
            ;
            if (this.ki[2] === 2 / 3) {
                this.Nmodo1[2] = 32;
                this.Nmodo2[2] = 64;
                this.Nmodo3[2] = 128;
            }
            ;
            if (this.ki[2] === 3 / 4) {
                this.Nmodo1[2] = 36;
                this.Nmodo2[2] = 72;
                this.Nmodo3[2] = 144;
            }
            ;
            if (this.ki[2] === 5 / 6) {
                this.Nmodo1[2] = 40;
                this.Nmodo2[2] = 80;
                this.Nmodo3[2] = 160;
            }
            ;
            if (this.ki[2] === 7 / 8) {
                this.Nmodo1[2] = 42;
                this.Nmodo2[2] = 84;
                this.Nmodo3[2] = 168;
            }
            ;
        }
        if (this.bp[2] === 6) {
            if (this.ki[2] === 1 / 2) {
                this.Nmodo1[2] = 36;
                this.Nmodo2[2] = 72;
                this.Nmodo3[2] = 144;
            }
            ;
            if (this.ki[2] === 2 / 3) {
                this.Nmodo1[2] = 48;
                this.Nmodo2[2] = 96;
                this.Nmodo3[2] = 192;
            }
            ;
            if (this.ki[2] === 3 / 4) {
                this.Nmodo1[2] = 58;
                this.Nmodo2[2] = 108;
                this.Nmodo3[2] = 216;
            }
            ;
            if (this.ki[2] === 5 / 6) {
                this.Nmodo1[2] = 60;
                this.Nmodo2[2] = 120;
                this.Nmodo3[2] = 240;
            }
            ;
            if (this.ki[2] === 7 / 8) {
                this.Nmodo1[2] = 63;
                this.Nmodo2[2] = 126;
                this.Nmodo3[2] = 252;
            }
            ;
        }
        this.calculoTspCapa();
    };
    RemultiplexorComponent.prototype.numeroTSP = function () {
        if (this.intSelected === '1/4') {
            this.Nbts[0] = 1280;
            this.Nbts[1] = 2560;
            this.Nbts[2] = 5120;
        }
        if (this.intSelected === '1/8') {
            this.Nbts[0] = 1152;
            this.Nbts[1] = 2304;
            this.Nbts[2] = 4608;
        }
        if (this.intSelected === '1/16') {
            this.Nbts[0] = 1088;
            this.Nbts[1] = 2176;
            this.Nbts[2] = 4352;
        }
        if (this.intSelected === '1/32') {
            this.Nbts[0] = 1056;
            this.Nbts[1] = 2112;
            this.Nbts[2] = 4224;
        }
    };
    RemultiplexorComponent.prototype.calculoTspNulos = function () {
        this.tspNulos[0] = (this.Nbts[0] - (((this.Nmodo1[0]) * this.select1) + ((this.Nmodo1[1]) * this.select2) + ((this.Nmodo1[2]) * this.select3))) - 1;
        this.tspNulos[1] = (this.Nbts[1] - (((this.Nmodo2[0]) * this.select1) + ((this.Nmodo2[1]) * this.select2) + ((this.Nmodo2[2]) * this.select3))) - 1;
        this.tspNulos[2] = (this.Nbts[2] - (((this.Nmodo3[0]) * this.select1) + ((this.Nmodo3[1]) * this.select2) + ((this.Nmodo3[2]) * this.select3))) - 1;
        if (this.modoSelected === 'MODO 1') {
            this._moduladorService.actualizarTspNulos(this.tspNulos[0]);
        }
        if (this.modoSelected === 'MODO 2') {
            this._moduladorService.actualizarTspNulos(this.tspNulos[1]);
        }
        if (this.modoSelected === 'MODO 3') {
            this._moduladorService.actualizarTspNulos(this.tspNulos[2]);
        }
    };
    RemultiplexorComponent.prototype.calculoTspCapa = function () {
        this.tspCapaModo1 = [((this.Nmodo1[0]) * this.select1), ((this.Nmodo1[1]) * this.select2), ((this.Nmodo1[2]) * this.select3)];
        this.tspCapaModo2 = [((this.Nmodo2[0]) * this.select1), ((this.Nmodo2[1]) * this.select2), ((this.Nmodo2[2]) * this.select3)];
        this.tspCapaModo3 = [((this.Nmodo3[0]) * this.select1), ((this.Nmodo3[1]) * this.select2), ((this.Nmodo3[2]) * this.select3)];
        if (this.modoSelected === 'MODO 1') {
            this._moduladorService.actualizarTspCapa(this.tspCapaModo1);
        }
        if (this.modoSelected === 'MODO 2') {
            this._moduladorService.actualizarTspCapa(this.tspCapaModo2);
        }
        if (this.modoSelected === 'MODO 3') {
            this._moduladorService.actualizarTspCapa(this.tspCapaModo3);
        }
    };
    return RemultiplexorComponent;
}());
RemultiplexorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-remultiplexor',
        template: __webpack_require__("../../../../../src/app/layout/remultiplexor/remultiplexor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/remultiplexor/remultiplexor.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_Services_modulador_service__["a" /* ModuladorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_modulador_service__["a" /* ModuladorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_modulador_service__["a" /* ModuladorService */]) === "function" && _a || Object])
], RemultiplexorComponent);

var _a;
//# sourceMappingURL=remultiplexor.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/remultiplexor/remultiplexor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remultiplexor_routing_module__ = __webpack_require__("../../../../../src/app/layout/remultiplexor/remultiplexor-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__remultiplexor_component__ = __webpack_require__("../../../../../src/app/layout/remultiplexor/remultiplexor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_layout_bs_component_components__ = __webpack_require__("../../../../../src/app/layout/bs-component/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemultiplexorModule", function() { return RemultiplexorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RemultiplexorModule = (function () {
    function RemultiplexorModule() {
    }
    return RemultiplexorModule;
}());
RemultiplexorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__remultiplexor_routing_module__["a" /* RemultiplexorRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__remultiplexor_component__["a" /* RemultiplexorComponent */], __WEBPACK_IMPORTED_MODULE_6_app_layout_bs_component_components__["a" /* TabsComponent */],
        ]
    })
], RemultiplexorModule);

//# sourceMappingURL=remultiplexor.module.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map