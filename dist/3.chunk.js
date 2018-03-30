webpackJsonp([3],{

/***/ "../../../../../src/app/Services/remux.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_layout_modulador_init_paramMod__ = __webpack_require__("../../../../../src/app/layout/modulador/init-paramMod.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemuxService; });
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


var RemuxService = (function (_super) {
    __extends(RemuxService, _super);
    function RemuxService() {
        var _this = _super.call(this) || this;
        _this.load();
        return _this;
    }
    RemuxService.prototype.obteneridModuladores = function () {
        var idModuladores = JSON.parse(localStorage.getItem('idModuladores'));
        return idModuladores;
    };
    RemuxService.prototype.actualizaridModuladores = function (nuevo) {
        var idModuladores = JSON.parse(localStorage.getItem('idModuladores'));
        idModuladores = nuevo;
        localStorage.setItem('idModuladores', JSON.stringify(idModuladores));
    };
    RemuxService.prototype.obtenerRetardoBTS = function () {
        var retardoBTS = JSON.parse(localStorage.getItem('retardoBTS'));
        return retardoBTS;
    };
    RemuxService.prototype.actualizarRetardoBTS = function (nuevo) {
        var retardoBTS = JSON.parse(localStorage.getItem('retardoBTS'));
        retardoBTS = nuevo;
        localStorage.setItem('retardoBTS', JSON.stringify(retardoBTS));
    };
    RemuxService.prototype.obtenerRetardoDeTransmisor = function () {
        var retardoDeTransmisor = JSON.parse(localStorage.getItem('retardoDeTransmisor'));
        return retardoDeTransmisor;
    };
    RemuxService.prototype.actualizarRetardoDeTransmisor = function (nuevo) {
        var retardoDeTransmisor = JSON.parse(localStorage.getItem('retardoDeTransmisor'));
        retardoDeTransmisor = nuevo;
        localStorage.setItem('retardoDeTransmisor', JSON.stringify(retardoDeTransmisor));
    };
    RemuxService.prototype.obtenerNombreEstacion = function () {
        var nombreEstacion = JSON.parse(localStorage.getItem('nombreEstacion'));
        return nombreEstacion;
    };
    RemuxService.prototype.actualizarNombreEstacion = function (nuevo) {
        var nombreEstacion = JSON.parse(localStorage.getItem('nombreEstacion'));
        nombreEstacion = nuevo;
        localStorage.setItem('nombreEstacion', JSON.stringify(nombreEstacion));
    };
    return RemuxService;
}(__WEBPACK_IMPORTED_MODULE_1_app_layout_modulador_init_paramMod__["a" /* InitParamMod */]));
RemuxService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], RemuxService);

//# sourceMappingURL=remux.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/modulador/init-paramMod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitParamMod; });
var InitParamMod = (function () {
    function InitParamMod() {
    }
    InitParamMod.prototype.load = function () {
        if (localStorage.getItem('nombreEstacion') === null || localStorage.getItem('idModuladores') === null || localStorage.getItem('retardoBTS') === null || localStorage.getItem('retardoDeTransmisor') === null) {
            var idModuladores = ["Ingrese ID Modulador 1", "Ingrese ID Modulador 2", "Ingrese ID Modulador 3", "Ingrese ID Modulador 4"];
            var retardoBTS = [0, 0, 0, 0];
            var retardoDeTransmisor = [0, 0, 0, 0];
            var nombreEstacion = ["TX1", "TX2", "TX3", "TX4"];
            localStorage.setItem('idModuladores', JSON.stringify(idModuladores));
            localStorage.setItem('retardoBTS', JSON.stringify(retardoBTS));
            localStorage.setItem('retardoDeTransmisor', JSON.stringify(retardoDeTransmisor));
            localStorage.setItem('nombreEstacion', JSON.stringify(nombreEstacion));
        }
        else {
        }
    };
    return InitParamMod;
}());

//# sourceMappingURL=init-paramMod.js.map

/***/ }),

/***/ "../../../../../src/app/layout/modulador/modulador-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modulador_component__ = __webpack_require__("../../../../../src/app/layout/modulador/modulador.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuladorRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__modulador_component__["a" /* ModuladorComponent */] }
];
var ModuladorRoutingModule = (function () {
    function ModuladorRoutingModule() {
    }
    return ModuladorRoutingModule;
}());
ModuladorRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ModuladorRoutingModule);

//# sourceMappingURL=modulador-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/modulador/modulador.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Resultados  -->\n<h4>Modulador</h4>\n<div class=\"row\">\n  <div class=\"col\">\n      <div class=\"card\">\n          <div class=\"card-block\">\n              <ngb-tabset>\n                  <ngb-tab >\n                        <ng-template ngbTabTitle> <b>Modulador 1</b> </ng-template>\n                      <ng-template ngbTabContent>\n                            <table class=\"table\">\n                                <tbody>\n                                        <tr>\n                                                <th scope=\"row\">Nombre de la estación</th>\n                                                <td>\n                                                    <input type=\"text\" [(ngModel)]=\"nombreEstacion[0]\" name=\"nombreEstacion[0]\" (change)=\"cambioNombre()\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                                </td>\n                                            </tr>\n                                    <tr>\n                                        <th scope=\"row\">ID</th>\n                                        <td>\n                                            <input type=\"text\" [(ngModel)]=\"idModuladores[0]\" name=\"idModuladores[0]\" (change)=\"mod()\"class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <th scope=\"row\">Retardo BTS: Dt<sub>E1</sub> (x100ns)</th>\n                                        <td>\n                                            <input type=\"text\" [(ngModel)]=\"retardoBTS[0]\"  (change)=\"RetardoBTS()\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <th scope=\"row\">Retardo de Transmisor: Dt<sub>TX1</sub>  (x100ns)</th>\n                                        <td>\n                                            <input [(ngModel)]=\"retardoDeTransmisor[0]\" name=\"retardoDeTransmisor[0]\" (change)=\"RetardoDeTransmisor()\" type=\"text\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <th scope=\"row\">Sumatoria de retardos: Dt<sub>TX1</sub> +  Dt<sub>E1</sub> (x100ns)</th>\n                                        <td>\n                                        {{sumaRetardo[0]}}\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <th scope=\"row\">Configuración</th>\n                                       <td>\n                                          <select >\n                                              <option value=\"BTS\">BTS</option>\n                                            <option disabled value=\"Local\">Local</option>\n\n                                          </select>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                      </ng-template>\n                  </ngb-tab>\n                  <ngb-tab >\n                        <ng-template ngbTabTitle> <b>Modulador 2</b> </ng-template>\n                      <ng-template ngbTabContent>\n                          <table class=\"table\">\n                              <tbody>\n                                    <tr>\n                                            <th scope=\"row\">Nombre de la estación</th>\n                                            <td>\n                                                <input type=\"text\" [(ngModel)]=\"nombreEstacion[1]\" name=\"nombreEstacion[1]\" (change)=\"cambioNombre()\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                            </td>\n                                        </tr>\n                                  <tr>\n                                      <th scope=\"row\">ID</th>\n                                      <td>\n                                          <input type=\"text\" [(ngModel)]=\"idModuladores[1]\" name=\"idModuladores[1]\"   (change)=\"mod()\"class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                      </td>\n                                  </tr>\n                                  \n                                        <tr>\n                                                <th scope=\"row\">Retardo BTS: Dt<sub>E2</sub>  (x100ns)</th>\n                                                <td>\n                                                    <input type=\"text\" [(ngModel)]=\"retardoBTS[1]\" name=\"retardoBTS[1]\" (change)=\"RetardoBTS()\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">Retardo de Transmisor: Dt<sub>TX2</sub>  (x100ns)</th>\n                                                <td>\n                                                    <input  [(ngModel)]=\"retardoDeTransmisor[1]\" name=\"retardoDeTransmisor[1]\" (change)=\"RetardoDeTransmisor()\" type=\"text\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">Sumatoria de retardos: Dt<sub>TX2</sub> +  Dt<sub>E2</sub> (x100ns)</th>\n                                                <td>\n                                                    {{sumaRetardo[1]}}\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                      <th scope=\"row\">Configuración</th>\n                                     <td>\n                                        <select >\n                                            <option value=\"BTS\">BTS</option>\n                                          <option disabled value=\"Local\">Local</option>\n\n                                        </select>\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>                        \n                      </ng-template>\n                  </ngb-tab>\n                  <ngb-tab >\n                        <ng-template ngbTabTitle> <b>Modulador 3</b> </ng-template>\n                      <ng-template ngbTabContent>\n                          <table class=\"table\">\n                              <tbody>\n                                    <tr>\n                                            <th scope=\"row\">Nombre de la estación</th>\n                                            <td>\n                                                <input type=\"text\" [(ngModel)]=\"nombreEstacion[2]\" name=\"nombreEstacion[2]\" (change)=\"cambioNombre()\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                            </td>\n                                        </tr>\n                                  <tr>\n                                      <th scope=\"row\">ID</th>\n                                      <td>\n                                          <input type=\"text\" [(ngModel)]=\"idModuladores[2]\" name=\"idModuladores[2]\" (change)=\"mod()\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                      </td>\n                                  </tr>\n                                  \n                                        <tr>\n                                                <th scope=\"row\">Retardo BTS: Dt<sub>E3</sub>  (x100ns)</th>\n                                                <td>\n                                                    <input [(ngModel)]=\"retardoBTS[2]\" name=\"retardoBTS[2]\" (change)=\"RetardoBTS()\" type=\"text\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">Retardo de Transmisor: Dt<sub>TX3</sub>  (x100ns)</th>\n                                                <td>\n                                                    <input  [(ngModel)]=\"retardoDeTransmisor[2]\" name=\"retardoDeTransmisor[2]\" (change)=\"RetardoDeTransmisor()\" type=\"text\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">Sumatoria de retardos: Dt<sub>TX3</sub> +  Dt<sub>E3</sub> (x100ns)</th>\n                                                <td>\n                                                    {{sumaRetardo[2]}}\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                      <th scope=\"row\">Configuración</th>\n                                     <td>\n                                        <select >\n                                            <option value=\"BTS\">BTS</option>\n                                          <option disabled value=\"Local\">Local</option>\n\n                                        </select>\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>                        \n                      </ng-template>\n                  </ngb-tab>\n                  <ngb-tab >\n                        <ng-template ngbTabTitle> <b>Modulador 4</b> </ng-template>\n                      <ng-template ngbTabContent>\n                          <table class=\"table\">\n                              <tbody>\n                                    <tr>\n                                            <th scope=\"row\">Nombre de la estación</th>\n                                            <td>\n                                                <input type=\"text\" [(ngModel)]=\"nombreEstacion[3]\" name=\"nombreEstacion[3]\" (change)=\"cambioNombre()\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                            </td>\n                                        </tr>\n                                  <tr>\n                                      <th scope=\"row\">ID</th>\n                                      <td>\n                                          <input type=\"text\" [(ngModel)]=\"idModuladores[3]\" name=\"idModuladores[3]\"  (change)=\"mod()\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                        <th scope=\"row\">Retardo BTS: Dt<sub>E4</sub> (x100ns)</th>\n                                        <td>\n                                            <input [(ngModel)]=\"retardoBTS[3]\" name=\"retardoBTS[3]\"  (change)=\"RetardoBTS()\" type=\"text\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <th scope=\"row\">Retardo de Transmisor: Dt<sub>TX4</sub>  (x100ns)</th>\n                                        <td>\n                                            <input  [(ngModel)]=\"retardoDeTransmisor[3]\" name=\"retardoDeTransmisor[3]\" (change)=\"RetardoDeTransmisor()\" type=\"text\" class=\"form-control\"  aria-describedby=\"basic-addon1\">\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                            <th scope=\"row\">Sumatoria de retardos: Dt<sub>TX4</sub> +  Dt<sub>E4</sub> (x100ns)</th>\n                                        <td>\n                                            {{sumaRetardo[3]}}\n                                        </td>\n                                    </tr>\n                                  <tr>\n                                      <th scope=\"row\">Configuración</th>\n                                     <td>\n                                        <select >\n                                            <option value=\"BTS\">BTS</option>\n                                          <option disabled value=\"Local\">Local</option>\n\n                                        </select>\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>                        \n                      </ng-template>\n                  </ngb-tab>\n              </ngb-tabset>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/modulador/modulador.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td {\n  border: 2px solid #000; }\n\n.table tr {\n  border: 2px solid #000; }\n\n.table th {\n  border: 2px solid #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/modulador/modulador.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_remux_service__ = __webpack_require__("../../../../../src/app/Services/remux.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuladorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuladorComponent = (function () {
    function ModuladorComponent(_remuxService) {
        this._remuxService = _remuxService;
        this.sumaRetardo = [];
        this.nombreEstacion = this._remuxService.obtenerNombreEstacion();
        this.idModuladores = this._remuxService.obteneridModuladores();
        this.retardoBTS = this._remuxService.obtenerRetardoBTS();
        this.retardoDeTransmisor = this._remuxService.obtenerRetardoDeTransmisor();
    }
    ModuladorComponent.prototype.ngOnInit = function () {
        this.nombreEstacion = this._remuxService.obtenerNombreEstacion();
        this.sumaTotal();
    };
    ModuladorComponent.prototype.mod = function () {
        this._remuxService.actualizaridModuladores(this.idModuladores);
    };
    ModuladorComponent.prototype.RetardoBTS = function () {
        this._remuxService.actualizarRetardoBTS(this.retardoBTS);
        this.sumaTotal();
    };
    ModuladorComponent.prototype.RetardoDeTransmisor = function () {
        this._remuxService.actualizarRetardoDeTransmisor(this.retardoDeTransmisor);
        this.sumaTotal();
    };
    ModuladorComponent.prototype.sumaTotal = function () {
        this.sumaRetardo[0] = +this.retardoBTS[0] + +this.retardoDeTransmisor[0];
        this.sumaRetardo[1] = +this.retardoBTS[1] + +this.retardoDeTransmisor[1];
        this.sumaRetardo[2] = +this.retardoBTS[2] + +this.retardoDeTransmisor[2];
        this.sumaRetardo[3] = +this.retardoBTS[3] + +this.retardoDeTransmisor[3];
    };
    ModuladorComponent.prototype.cambioNombre = function () {
        this._remuxService.actualizarNombreEstacion(this.nombreEstacion);
    };
    return ModuladorComponent;
}());
ModuladorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modulador',
        template: __webpack_require__("../../../../../src/app/layout/modulador/modulador.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/modulador/modulador.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_Services_remux_service__["a" /* RemuxService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_remux_service__["a" /* RemuxService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_remux_service__["a" /* RemuxService */]) === "function" && _a || Object])
], ModuladorComponent);

var _a;
//# sourceMappingURL=modulador.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/modulador/modulador.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modulador_routing_module__ = __webpack_require__("../../../../../src/app/layout/modulador/modulador-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modulador_component__ = __webpack_require__("../../../../../src/app/layout/modulador/modulador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuladorModule", function() { return ModuladorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ModuladorModule = (function () {
    function ModuladorModule() {
    }
    return ModuladorModule;
}());
ModuladorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__modulador_routing_module__["a" /* ModuladorRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__modulador_component__["a" /* ModuladorComponent */],
        ]
    })
], ModuladorModule);

//# sourceMappingURL=modulador.module.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map