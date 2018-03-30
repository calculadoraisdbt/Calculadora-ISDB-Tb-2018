webpackJsonp([4],{

/***/ "../../../../../src/app/Services/multiplexor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_layout_multiplexor_init_multiplex__ = __webpack_require__("../../../../../src/app/layout/multiplexor/init-multiplex.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiplexorService; });
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


var MultiplexorService = (function (_super) {
    __extends(MultiplexorService, _super);
    function MultiplexorService() {
        var _this = _super.call(this) || this;
        _this.load();
        return _this;
    }
    //ASI 1
    MultiplexorService.prototype.obtenerASI1Input = function () {
        var ASI1Input = JSON.parse(localStorage.getItem('ASI1Input'));
        return ASI1Input;
    };
    MultiplexorService.prototype.actualizarASI1Input = function (nuevo) {
        var ASI1Input = JSON.parse(localStorage.getItem('ASI1Input'));
        ASI1Input = nuevo;
        localStorage.setItem('ASI1Input', JSON.stringify(ASI1Input));
    };
    MultiplexorService.prototype.obtenerASI1Layer = function () {
        var ASI1Layer = JSON.parse(localStorage.getItem('ASI1Layer'));
        return ASI1Layer;
    };
    MultiplexorService.prototype.actualizarASI1Layer = function (nuevo) {
        var ASI1Layer = JSON.parse(localStorage.getItem('ASI1Layer'));
        ASI1Layer = nuevo;
        localStorage.setItem('ASI1Layer', JSON.stringify(ASI1Layer));
    };
    MultiplexorService.prototype.obtenerASI1Output = function () {
        var ASI1Output = JSON.parse(localStorage.getItem('ASI1Output'));
        return ASI1Output;
    };
    MultiplexorService.prototype.actualizarASI1Output = function (nuevo) {
        var ASI1Output = JSON.parse(localStorage.getItem('ASI1Output'));
        ASI1Output = nuevo;
        localStorage.setItem('ASI1Output', JSON.stringify(ASI1Output));
    };
    MultiplexorService.prototype.obtenerASI1Enable = function () {
        var ASI1Enable = JSON.parse(localStorage.getItem('ASI1Enable'));
        return ASI1Enable;
    };
    MultiplexorService.prototype.actualizarASI1Enable = function (nuevo) {
        var ASI1Enable = JSON.parse(localStorage.getItem('ASI1Enable'));
        ASI1Enable = nuevo;
        localStorage.setItem('ASI1Enable', JSON.stringify(ASI1Enable));
    };
    //ASI 2
    MultiplexorService.prototype.obtenerASI2Input = function () {
        var ASI2Input = JSON.parse(localStorage.getItem('ASI2Input'));
        return ASI2Input;
    };
    MultiplexorService.prototype.actualizarASI2Input = function (nuevo) {
        var ASI2Input = JSON.parse(localStorage.getItem('ASI2Input'));
        ASI2Input = nuevo;
        localStorage.setItem('ASI2Input', JSON.stringify(ASI2Input));
    };
    MultiplexorService.prototype.obtenerASI2Layer = function () {
        var ASI2Layer = JSON.parse(localStorage.getItem('ASI2Layer'));
        return ASI2Layer;
    };
    MultiplexorService.prototype.actualizarASI2Layer = function (nuevo) {
        var ASI2Layer = JSON.parse(localStorage.getItem('ASI2Layer'));
        ASI2Layer = nuevo;
        localStorage.setItem('ASI2Layer', JSON.stringify(ASI2Layer));
    };
    MultiplexorService.prototype.obtenerASI2Output = function () {
        var ASI2Output = JSON.parse(localStorage.getItem('ASI2Output'));
        return ASI2Output;
    };
    MultiplexorService.prototype.actualizarASI2Output = function (nuevo) {
        var ASI2Output = JSON.parse(localStorage.getItem('ASI2Output'));
        ASI2Output = nuevo;
        localStorage.setItem('ASI2Output', JSON.stringify(ASI2Output));
    };
    MultiplexorService.prototype.obtenerASI2Enable = function () {
        var ASI2Enable = JSON.parse(localStorage.getItem('ASI2Enable'));
        return ASI2Enable;
    };
    MultiplexorService.prototype.actualizarASI2Enable = function (nuevo) {
        var ASI2Enable = JSON.parse(localStorage.getItem('ASI2Enable'));
        ASI2Enable = nuevo;
        localStorage.setItem('ASI2Enable', JSON.stringify(ASI2Enable));
    };
    //ASI 3
    MultiplexorService.prototype.obtenerASI3Input = function () {
        var ASI3Input = JSON.parse(localStorage.getItem('ASI3Input'));
        return ASI3Input;
    };
    MultiplexorService.prototype.actualizarASI3Input = function (nuevo) {
        var ASI3Input = JSON.parse(localStorage.getItem('ASI3Input'));
        ASI3Input = nuevo;
        localStorage.setItem('ASI3Input', JSON.stringify(ASI3Input));
    };
    MultiplexorService.prototype.obtenerASI3Layer = function () {
        var ASI3Layer = JSON.parse(localStorage.getItem('ASI3Layer'));
        return ASI3Layer;
    };
    MultiplexorService.prototype.actualizarASI3Layer = function (nuevo) {
        var ASI3Layer = JSON.parse(localStorage.getItem('ASI3Layer'));
        ASI3Layer = nuevo;
        localStorage.setItem('ASI3Layer', JSON.stringify(ASI3Layer));
    };
    MultiplexorService.prototype.obtenerASI3Output = function () {
        var ASI3Output = JSON.parse(localStorage.getItem('ASI3Output'));
        return ASI3Output;
    };
    MultiplexorService.prototype.actualizarASI3Output = function (nuevo) {
        var ASI3Output = JSON.parse(localStorage.getItem('ASI3Output'));
        ASI3Output = nuevo;
        localStorage.setItem('ASI3Output', JSON.stringify(ASI3Output));
    };
    MultiplexorService.prototype.obtenerASI3Enable = function () {
        var ASI3Enable = JSON.parse(localStorage.getItem('ASI3Enable'));
        return ASI3Enable;
    };
    MultiplexorService.prototype.actualizarASI3Enable = function (nuevo) {
        var ASI3Enable = JSON.parse(localStorage.getItem('ASI3Enable'));
        ASI3Enable = nuevo;
        localStorage.setItem('ASI3Enable', JSON.stringify(ASI3Enable));
    };
    // TABLAS
    MultiplexorService.prototype.obtenerTableLayer = function () {
        var TableLayer = JSON.parse(localStorage.getItem('TableLayer'));
        return TableLayer;
    };
    MultiplexorService.prototype.actualizarTableLayer = function (nuevo) {
        var TableLayer = JSON.parse(localStorage.getItem('TableLayer'));
        TableLayer = nuevo;
        localStorage.setItem('TableLayer', JSON.stringify(TableLayer));
    };
    MultiplexorService.prototype.obtenerTablePmtPid = function () {
        var TablePmtPid = JSON.parse(localStorage.getItem('TablePmtPid'));
        return TablePmtPid;
    };
    MultiplexorService.prototype.actualizarTablePmtPid = function (nuevo) {
        var TablePmtPid = JSON.parse(localStorage.getItem('TablePmtPid'));
        TablePmtPid = nuevo;
        localStorage.setItem('TablePmtPid', JSON.stringify(TablePmtPid));
    };
    MultiplexorService.prototype.obtenerTableEnable = function () {
        var TableEnable = JSON.parse(localStorage.getItem('TableEnable'));
        return TableEnable;
    };
    MultiplexorService.prototype.actualizarTableEnable = function (nuevo) {
        var TableEnable = JSON.parse(localStorage.getItem('TableEnable'));
        TableEnable = nuevo;
        localStorage.setItem('TableEnable', JSON.stringify(TableEnable));
    };
    return MultiplexorService;
}(__WEBPACK_IMPORTED_MODULE_1_app_layout_multiplexor_init_multiplex__["a" /* InitMultiplexor */]));
MultiplexorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MultiplexorService);

//# sourceMappingURL=multiplexor.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/multiplexor/init-multiplex.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitMultiplexor; });
var InitMultiplexor = (function () {
    function InitMultiplexor() {
    }
    InitMultiplexor.prototype.load = function () {
        if (localStorage.getItem('ASI1Input') === null || localStorage.getItem('ASI1Layer') === null || localStorage.getItem('ASI1Output') === null ||
            localStorage.getItem('ASI2Input') === null || localStorage.getItem('ASI2Layer') === null || localStorage.getItem('ASI2Output') === null ||
            localStorage.getItem('ASI3Input') === null || localStorage.getItem('ASI3Layer') === null || localStorage.getItem('ASI3Output') === null
            || localStorage.getItem('ASI1Enable') === null || localStorage.getItem('ASI2Enable') === null || localStorage.getItem('ASI3Enable') === null
            || localStorage.getItem('TableLayer') === null || localStorage.getItem('TablePmtPid') === null || localStorage.getItem('TableEnable') === null) {
            var ASI1Input = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
            var ASI1Layer = ["Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A"];
            var ASI1Output = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
            var ASI1Enable = [false, false, false, false, false, false, false, false, false, false];
            localStorage.setItem('ASI1Input', JSON.stringify(ASI1Input));
            localStorage.setItem('ASI1Layer', JSON.stringify(ASI1Layer));
            localStorage.setItem('ASI1Output', JSON.stringify(ASI1Output));
            localStorage.setItem('ASI1Enable', JSON.stringify(ASI1Enable));
            var ASI2Input = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
            var ASI2Layer = ["Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A"];
            var ASI2Output = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
            var ASI2Enable = [false, false, false, false, false, false, false, false, false, false];
            localStorage.setItem('ASI2Input', JSON.stringify(ASI2Input));
            localStorage.setItem('ASI2Layer', JSON.stringify(ASI2Layer));
            localStorage.setItem('ASI2Output', JSON.stringify(ASI2Output));
            localStorage.setItem('ASI2Enable', JSON.stringify(ASI2Enable));
            var ASI3Input = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
            var ASI3Layer = ["Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A"];
            var ASI3Output = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
            var ASI3Enable = [false, false, false, false, false, false, false, false, false, false];
            localStorage.setItem('ASI3Input', JSON.stringify(ASI3Input));
            localStorage.setItem('ASI3Layer', JSON.stringify(ASI3Layer));
            localStorage.setItem('ASI3Output', JSON.stringify(ASI3Output));
            localStorage.setItem('ASI3Enable', JSON.stringify(ASI3Enable));
            var TableLayer = ["Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A", "Layer A"];
            var TablePmtPid = ['-', '-', '-'];
            var TableEnable = [false, false, false, false, false, false, false, false];
            localStorage.setItem('TableLayer', JSON.stringify(TableLayer));
            localStorage.setItem('TablePmtPid', JSON.stringify(TablePmtPid));
            localStorage.setItem('TableEnable', JSON.stringify(TableEnable));
        }
        else { }
    };
    return InitMultiplexor;
}());

//# sourceMappingURL=init-multiplex.js.map

/***/ }),

/***/ "../../../../../src/app/layout/multiplexor/multiplexor-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiplexor_component__ = __webpack_require__("../../../../../src/app/layout/multiplexor/multiplexor.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiplexorRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__multiplexor_component__["a" /* MultiplexorComponent */] }
];
var MultiplexorRoutingModule = (function () {
    function MultiplexorRoutingModule() {
    }
    return MultiplexorRoutingModule;
}());
MultiplexorRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], MultiplexorRoutingModule);

//# sourceMappingURL=multiplexor-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/multiplexor/multiplexor.component.html":
/***/ (function(module, exports) {

module.exports = " <h4>Multiplexor</h4>\n \n <ngb-tabset>\n                    <ngb-tab >\n                            <ng-template ngbTabTitle> <b>ASI 1</b> </ng-template>\n                        <ng-template ngbTabContent>\n                                <br>\n                                <button \n                                type=\"button\"\n                                 class=\"btn btn-sm btn-secondary\"\n                                 data-toggle=\"tooltip\" data-placement=\"top\" \n                                 (click)=\"updateASI1()\">Aplicar Cambios ASI 1</button> <br><br>\n                                 <div class=\"alert alert-warning\" role=\"alert\"> \n                                    <strong>Atencion!</strong>No puede haber PID Out iguales \n                                  </div>\n                           <table class=\"table\" >\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>PID In</th>\n                            <th>Layer Out</th>\n                            <th>PID Out</th>\n                            <th>Enable</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI1Input[0]\" name=\"ASI1Input[0]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select  [(ngModel)]=\"ASI1Layer[0]\" name=\"ASI1Layer[0]\" >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI1Output[0]\"  name=\"ASI1Output[0]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI1Enable[0]\"  name=\"ASI1Enable[0]\" id=\"ASI1Enable[0]\"> Enable</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                              <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI1Input[1]\"  name=\"ASI1Input[1]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI1Layer[1]\" name=\"ASI1Layer[1]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI1Output[1]\"  name=\"ASI1Output[1]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI1Enable[1]\"    name=\"ASI1Enable[1]\" id=\"ASI1Enable[1]\"> Enable</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                           <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI1Input[2]\"  name=\"ASI1Input[2]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI1Layer[2]\" name=\"ASI1Layer[2]\" >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI1Output[2]\"  name=\"ASI1Output[2]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI1Enable[2]\"   name=\"ASI1Enable[2]\" id=\"ASI1Enable[2]\"> Enable</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">4</th>\n                             <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI1Input[3]\"  name=\"ASI1Input[3]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI1Layer[3]\" name=\"ASI1Layer[3]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI1Output[3]\"  name=\"ASI1Output[3]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI1Enable[3]\"   name=\"ASI1Enable[3]\" id=\"ASI1Enable[3]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">5</th>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI1Input[4]\"  name=\"ASI1Input[4]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI1Layer[4]\" name=\"ASI1Layer[4]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI1Output[4]\"  name=\"ASI1Output[4]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI1Enable[4]\"   name=\"ASI1Enable[4]\" id=\"ASI1Enable[4]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">6</th>\n                              <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI1Input[5]\"  name=\"ASI1Input[5]\" aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI1Layer[5]\" name=\"ASI1Layer[5]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI1Output[5]\"  name=\"ASI1Output[5]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\"  [(ngModel)]=\"ASI1Enable[5]\"  name=\"ASI1Enable[5]\" id=\"ASI1Enable[5]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">7</th>\n                             <td> <input type=\"text\" class=\"form-control\"    [(ngModel)]=\"ASI1Input[6]\"  name=\"ASI1Input[6]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI1Layer[6]\" name=\"ASI1Layer[6]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI1Output[6]\"  name=\"ASI1Output[6]\"    aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI1Enable[6]\"   name=\"ASI1Enable[6]\" id=\"ASI1Enable[6]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">8</th>\n                             <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI1Input[7]\"  name=\"ASI1Input[7]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI1Layer[7]\" name=\"ASI1Layer[7]\"   >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI1Output[7]\"  name=\"ASI1Output[7]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI1Enable[7]\"   name=\"ASI1Enable[7]\" id=\"ASI1Enable[7]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">9</th>\n                             <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI1Input[8]\"  name=\"ASI1Input[8]\" aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI1Layer[8]\" name=\"ASI1Layer[8]\" >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ASI1Output[8]\"  name=\"ASI1Output[8]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI1Enable[8]\"   name=\"Enable\" id=\"Enable\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">10</th>\n                             <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI1Input[9]\"  name=\"ASI1Input[9]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI1Layer[9]\" name=\"ASI1Layer[9]\" >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ASI1Output[9]\"  name=\"ASI1Output[9]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI1Enable[9]\" name=\"ASI1Enable[9]\" id=\"ASI1Enable[9]\"> Enable</td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                \n\n                        </ng-template>\n                    </ngb-tab>\n                       <ngb-tab >\n                            <ng-template ngbTabTitle> <b>ASI 2</b> </ng-template>\n                        <ng-template ngbTabContent>\n                                <br>\n                                <button \n                                type=\"button\"\n                                 class=\"btn btn-sm btn-secondary\"\n                                 data-toggle=\"tooltip\" data-placement=\"top\"\n                                 (click)=\"updateASI2()\">Aplicar Cambios ASI 2</button> <br><br>\n                                 <div class=\"alert alert-warning\" role=\"alert\"> \n                                    <strong>Atencion!</strong>No puede haber PID Out iguales \n                                  </div>\n                                                  <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>PID In</th>\n                            <th>Layer Out</th>\n                            <th>PID Out</th>\n                            <th>Enable</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI2Input[0]\" name=\"ASI2Input[0]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><select  [(ngModel)]=\"ASI2Layer[0]\" name=\"ASI2Layer[0]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI2Output[0]\"  name=\"ASI2Output[0]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI2Enable[0]\"  name=\"ASI2Enable[0]\" id=\"ASI2Enable[0]\"> Enable</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                              <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI2Input[1]\"  name=\"ASI2Input[1]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI2Layer[1]\" name=\"ASI2Layer[1]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI2Output[1]\"  name=\"ASI2Output[1]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI2Enable[1]\"  name=\"ASI2Enable[1]\" id=\"ASI2Enable[1]\"> Enable</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                           <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI2Input[2]\"  name=\"ASI2Input[2]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI2Layer[2]\" name=\"ASI2Layer[2]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI2Output[2]\"  name=\"ASI2Output[2]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI2Enable[2]\"  name=\"ASI2Enable[2]\" id=\"ASI2Enable[2]\"> Enable</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">4</th>\n                             <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI2Input[3]\"  name=\"ASI2Input[3]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI2Layer[3]\" name=\"ASI2Layer[3]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI2Output[3]\"  name=\"ASI2Output[3]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\"  [(ngModel)]=\"ASI2Enable[3]\" name=\"ASI2Enable[3]\" id=\"ASI2Enable[3]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">5</th>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI2Input[4]\"  name=\"ASI2Input[4]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI2Layer[4]\" name=\"ASI2Layer[4]\" >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI2Output[4]\"  name=\"ASI2Output[4]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI2Enable[4]\"  name=\"ASI2Enable[4]\" id=\"ASI2Enable[4]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">6</th>\n                              <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI2Input[5]\"  name=\"ASI2Input[5]\" aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI2Layer[5]\" name=\"ASI2Layer[5]\">\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI2Output[5]\"  name=\"ASI2Output[5]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI2Enable[5]\"  name=\"ASI2Enable[5]\" id=\"ASI2Enable[5]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">7</th>\n                             <td> <input type=\"text\" class=\"form-control\"    [(ngModel)]=\"ASI2Input[6]\"  name=\"ASI2Input[6]\" aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI2Layer[6]\" name=\"ASI2Layer[6]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI2Output[6]\"  name=\"ASI2Output[6]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\"  [(ngModel)]=\"ASI2Enable[6]\" name=\"ASI2Enable[6]\" id=\"ASI2Enable[6]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">8</th>\n                             <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI2Input[7]\"  name=\"ASI2Input[7]\" aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI2Layer[7]\" name=\"ASI2Layer[7]\" >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI2Output[7]\"  name=\"ASI2Output[7]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI2Enable[7]\"  name=\"ASI2Enable[7]\" id=\"ASI2Enable[7]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">9</th>\n                             <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI2Input[8]\"  name=\"ASI2Input[8]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI2Layer[8]\" name=\"ASI2Layer[8]\" >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ASI2Output[8]\"  name=\"ASI2Output[8]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI2Enable[8]\"  name=\"ASI2Enable[8]\" id=\"ASI2Enable[8]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">10</th>\n                             <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI2Input[9]\"  name=\"ASI2Input[9]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI2Layer[9]\" name=\"ASI2Layer[9]\" >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ASI2Output[9]\"  name=\"ASI2Output[9]\" aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI2Enable[9]\"  name=\"ASI2Enable[9]\" id=\"ASI2Enable[9]\"> Enable</td>\n                        </tr>\n                    </tbody>\n                </table>   \n               \n                        </ng-template>\n                    </ngb-tab>\n                       <ngb-tab >\n                            <ng-template ngbTabTitle> <b>ASI 3</b> </ng-template>\n                        <ng-template ngbTabContent>\n                                <br>\n                                <button \n                                type=\"button\"\n                                 class=\"btn btn-sm btn-secondary\"\n                                 data-toggle=\"tooltip\" data-placement=\"top\" \n                                 (click)=\"updateASI3()\">Aplicar Cambios ASI 3</button> <br><br>\n                                 <div class=\"alert alert-warning\" role=\"alert\"> \n                                    <strong>Atencion!</strong>No puede haber PID Out iguales \n                                  </div>\n                                                   <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>PID In</th>\n                            <th>Layer Out</th>\n                            <th>PID Out</th>\n                            <th>Enable</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI3Input[0]\" name=\"ASI3Input[0]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select  [(ngModel)]=\"ASI3Layer[0]\" name=\"ASI3Layer[0]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI3Output[0]\"  name=\"ASI3Output[0]\" aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\"  [(ngModel)]=\"ASI3Enable[0]\" name=\"ASI3Enable[0]\" id=\"ASI3Enable[0]\"> Enable</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                              <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI3Input[1]\"  name=\"ASI3Input[1]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI3Layer[1]\" name=\"ASI3Layer[1]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI3Output[1]\"  name=\"ASI3Output[1]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI3Enable[1]\"  name=\"ASI3Enable[1]\" id=\"ASI3Enable[1]\"> Enable</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                           <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI3Input[2]\"  name=\"ASI3Input[2]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI3Layer[2]\" name=\"ASI3Layer[2]\" >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI3Output[2]\"  name=\"ASI3Output[2]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\"  [(ngModel)]=\"ASI3Enable[2]\" name=\"ASI3Enable[2]\" id=\"ASI3Enable[2]\"> Enable</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">4</th>\n                             <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI3Input[3]\"  name=\"ASI3Input[3]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI3Layer[3]\" name=\"ASI3Layer[3]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI3Output[3]\"  name=\"ASI3Output[3]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\"  [(ngModel)]=\"ASI3Enable[3]\" name=\"ASI3Enable[3]\" id=\"ASI3Enable[3]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">5</th>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI3Input[4]\"  name=\"ASI3Input[4]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI3Layer[4]\" name=\"ASI3Layer[4]\" >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI3Output[4]\"  name=\"ASI3Output[4]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\"  [(ngModel)]=\"ASI3Enable[4]\" name=\"ASI3Enable[4]\" id=\"ASI3Enable[4]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">6</th>\n                              <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI3Input[5]\"  name=\"ASI3Input[5]\" aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI3Layer[5]\" name=\"ASI3Layer[5]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"ASI3Output[5]\"  name=\"ASI3Output[5]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI3Enable[5]\"  name=\"ASI3Enable[5]\" id=\"ASI3Enable[5]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">7</th>\n                             <td> <input type=\"text\" class=\"form-control\"    [(ngModel)]=\"ASI3Input[6]\"  name=\"ASI3Input[6]\" aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI3Layer[6]\" name=\"ASI3Layer[6]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI3Output[6]\"  name=\"ASI3Output[6]\"   aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\"  [(ngModel)]=\"ASI3Enable[6]\" name=\"ASI3Enable[6]\" id=\"ASI3Enable[6]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">8</th>\n                             <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI3Input[7]\"  name=\"ASI3Input[7]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI3Layer[7]\" name=\"ASI3Layer[7]\"  >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI3Output[7]\"  name=\"ASI3Output[7]\"    aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI3Enable[7]\"  name=\"ASI3Enable[7]\" id=\"ASI3Enable[7]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">9</th>\n                             <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI3Input[8]\"  name=\"ASI3Input[8]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI3Layer[8]\" name=\"ASI3Layer[8]\" >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ASI3Output[8]\"  name=\"ASI3Output[8]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\"  [(ngModel)]=\"ASI3Enable[8]\" name=\"ASI3Enable[8]\" id=\"ASI3Enable[8]\"> Enable</td>\n                        </tr>\n                           <tr>\n                            <th scope=\"row\">10</th>\n                             <td> <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"ASI3Input[9]\"  name=\"ASI3Input[9]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><select [(ngModel)]=\"ASI3Layer[9]\" name=\"ASI3Layer[9]\" >\n                                <option value=\"Layer A\">Layer A</option>\n                                <option value=\"Layer B\">Layer B</option>\n                                <option value=\"Layer C\">Layer C</option>\n                              </select></td>\n                            <td> <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ASI3Output[9]\"  name=\"ASI3Output[9]\"  aria-describedby=\"basic-addon1\"></td>\n                            <td><input type=\"checkbox\" [(ngModel)]=\"ASI3Enable[9]\"  name=\"ASI3Enable[9]\" id=\"ASI3Enable[9]\"> Enable</td>\n                        </tr>\n                    </tbody>                \n                </table>\n              \n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab >\n                            <ng-template ngbTabTitle> <b>Tables</b> </ng-template>\n                            <ng-template ngbTabContent>\n                                <br>\n                                    <button \n                                    type=\"button\"\n                                     class=\"btn btn-sm btn-secondary\"\n                                     data-toggle=\"tooltip\" data-placement=\"top\"\n                                     (click)=\"updateTables()\">Aplicar Cambios Tablas</button> <br><br>\n                                    <div *ngIf=\"duplicate4\" class=\"alert alert-danger\">\n                                            <strong>No puede haber PID iguales</strong> \n                                        </div>\n                                    <table class=\"table table-bordered\">\n                                            <thead>\n                                                <tr>\n                                                    <th>#</th>\n                                                    <th>Table</th>\n                                                    <th>PID</th>\n                                                    <th>Layer</th>\n                                                    <th>Enable</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <th scope=\"row\">1</th>\n                                                    <td> <p>PAT</p></td>\n                                                    <td><p>0</p></td>\n                                                    <td><select   [(ngModel)]=\"TableLayer[0]\" name=\"TableLayer[0]\"   >\n                                                        <option value=\"Layer A\">Layer A</option>\n                                                        <option value=\"Layer B\">Layer B</option>\n                                                        <option value=\"Layer C\">Layer C</option>\n                                                      </select></td>    \n                                                    <td><input type=\"checkbox\" [(ngModel)]=\"TableEnable[0]\"  name=\"TableEnable[0]\" id=\"TableEnable[0]\" > Enable</td>\n                                                </tr>\n                                                <tr>\n                                                    <th scope=\"row\">2</th>\n                                                    <td> <p>CAT</p></td>\n                                                    <td><p>1</p></td>\n                                                    <td><select  [(ngModel)]=\"TableLayer[1]\" name=\"TableLayer[1]\"    >\n                                                        <option value=\"Layer A\">Layer A</option>\n                                                        <option value=\"Layer B\">Layer B</option>\n                                                        <option value=\"Layer C\">Layer C</option>\n                                                      </select></td>    \n                                                    <td><input type=\"checkbox\"  [(ngModel)]=\"TableEnable[1]\"  name=\"TableEnable[1]\" id=\"TableEnable[1]\" > Enable</td>\n                                              </tr>\n                                                <tr>\n                                                    <th scope=\"row\">3</th>\n                                                    <td> <p>NIT</p></td>\n                                                    <td><p>16</p></td>\n                                                    <td><select   [(ngModel)]=\"TableLayer[2]\" name=\"TableLayer[2]\"  >\n                                                        <option value=\"Layer A\">Layer A</option>\n                                                        <option value=\"Layer B\">Layer B</option>\n                                                        <option value=\"Layer C\">Layer C</option>\n                                                      </select></td>    \n                                                    <td><input type=\"checkbox\"  [(ngModel)]=\"TableEnable[2]\"  name=\"TableEnable[2]\" id=\"TableEnable[2]\" > Enable</td>\n                                                </tr>\n                                                <tr>\n                                                    <th scope=\"row\">4</th>\n                                                    <td> <p>SDT</p></td>\n                                                    <td><p>17</p></td>\n                                                    <td><select  [(ngModel)]=\"TableLayer[3]\" name=\"TableLayer[3]\" >\n                                                        <option value=\"Layer A\">Layer A</option>\n                                                        <option value=\"Layer B\">Layer B</option>\n                                                        <option value=\"Layer C\">Layer C</option>\n                                                      </select></td>    \n                                                    <td><input type=\"checkbox\"   [(ngModel)]=\"TableEnable[3]\"  name=\"TableEnable[3]\" id=\"TableEnable[3]\" > Enable</td>\n                                                \n                                                </tr>\n                                                   <tr>\n                                                    <th scope=\"row\">5</th>\n                                                    <td> <p>BIT</p></td>\n                                                    <td><p>36</p></td>\n                                                    <td><select   [(ngModel)]=\"TableLayer[4]\" name=\"TableLayer[4]\"  >\n                                                        <option value=\"Layer A\">Layer A</option>\n                                                        <option value=\"Layer B\">Layer B</option>\n                                                        <option value=\"Layer C\">Layer C</option>\n                                                      </select></td>    \n                                                    <td><input type=\"checkbox\"   [(ngModel)]=\"TableEnable[4]\"  name=\"TableEnable[4]\" id=\"TableEnable[4]\" > Enable</td>\n                                                </tr>                                    \n                                                   <tr>\n                                                    <th scope=\"row\">6</th>\n                                                    <td> <p>PMT1</p></td>\n                                                    <td> <input type=\"text\" [(ngModel)]=\"TablePmtPid[0]\"  name=\"TablePmtPid[0]\" class=\"form-control\" aria-describedby=\"basic-addon1\"></td>\n                                                    <td><select  [(ngModel)]=\"TableLayer[5]\" name=\"TableLayer[5]\"   >\n                                                        <option value=\"Layer A\">Layer A</option>\n                                                        <option value=\"Layer B\">Layer B</option>\n                                                        <option value=\"Layer C\">Layer C</option>\n                                                      </select></td>    \n                                                    <td><input type=\"checkbox\"   [(ngModel)]=\"TableEnable[5]\"  name=\"TableEnable[5]\" id=\"TableEnable[5]\" > Enable</td>\n                                                </tr>\n                                                   <tr>\n                                                    <th scope=\"row\">7</th>\n                                                    <td> <p>PMT2</p></td>\n                                                    <td> <input type=\"text\" [(ngModel)]=\"TablePmtPid[1]\"  name=\"TablePmtPid[1]\" class=\"form-control\"  aria-describedby=\"basic-addon1\"></td>\n                                                    <td><select   [(ngModel)]=\"TableLayer[6]\" name=\"TableLayer[6]\"   >\n                                                        <option value=\"Layer A\">Layer A</option>\n                                                        <option value=\"Layer B\">Layer B</option>\n                                                        <option value=\"Layer C\">Layer C</option>\n                                                      </select></td>    \n                                                    <td><input type=\"checkbox\"  [(ngModel)]=\"TableEnable[6]\"  name=\"TableEnable[6]\" id=\"TableEnable[6]\" > Enable</td>\n                                                </tr>\n                                                   <tr>\n                                                    <th scope=\"row\">8</th>\n                                                    <td> <p>PMT3</p></td>\n                                                    <td> <input type=\"text\" [(ngModel)]=\"TablePmtPid[2]\"  name=\"TablePmtPid[2]\" class=\"form-control\" aria-describedby=\"basic-addon1\"></td>\n                                                    <td><select  [(ngModel)]=\"TableLayer[7]\" name=\"TableLayer[7]\"  >\n                                                        <option value=\"Layer A\">Layer A</option>\n                                                        <option value=\"Layer B\">Layer B</option>\n                                                        <option value=\"Layer C\">Layer C</option>\n                                                      </select></td>    \n                                                    <td><input type=\"checkbox\"  [(ngModel)]=\"TableEnable[7]\"  name=\"TableEnable[7]\" id=\"TableEnable[7]\" > Enable</td>\n                                                </tr>\n                                                     \n                                            </tbody>                \n                                        </table>\n                            </ng-template>\n                    </ngb-tab>\n </ngb-tabset>"

/***/ }),

/***/ "../../../../../src/app/layout/multiplexor/multiplexor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td {\n  border: 2px solid #000; }\n\n.table tr {\n  border: 2px solid #000; }\n\n.table th {\n  border: 2px solid #000; }\n\n@media all and (max-width: 600px) {\n  select {\n    width: 100%;\n    max-width: 100%; } }\n\nselect {\n  max-width: 100%;\n  text-overflow: ellipsis; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/multiplexor/multiplexor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_multiplexor_service__ = __webpack_require__("../../../../../src/app/Services/multiplexor.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiplexorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultiplexorComponent = (function () {
    function MultiplexorComponent(_multiplexorService) {
        this._multiplexorService = _multiplexorService;
        //ASI 1
        this.ASI1Input = this._multiplexorService.obtenerASI1Input();
        this.ASI1Layer = this._multiplexorService.obtenerASI1Layer();
        this.ASI1Output = this._multiplexorService.obtenerASI1Output();
        this.ASI1Enable = this._multiplexorService.obtenerASI1Enable();
        //ASI 2
        this.ASI2Input = this._multiplexorService.obtenerASI2Input();
        this.ASI2Layer = this._multiplexorService.obtenerASI2Layer();
        this.ASI2Output = this._multiplexorService.obtenerASI2Output();
        this.ASI2Enable = this._multiplexorService.obtenerASI2Enable();
        //ASI 3
        this.ASI3Input = this._multiplexorService.obtenerASI3Input();
        this.ASI3Layer = this._multiplexorService.obtenerASI3Layer();
        this.ASI3Output = this._multiplexorService.obtenerASI3Output();
        this.ASI3Enable = this._multiplexorService.obtenerASI3Enable();
        //TABLAS
        this.TableLayer = this._multiplexorService.obtenerTableLayer();
        this.TablePmtPid = this._multiplexorService.obtenerTablePmtPid();
        this.TableEnable = this._multiplexorService.obtenerTableEnable();
    }
    MultiplexorComponent.prototype.ngOnInit = function () {
    };
    //ASI 1
    MultiplexorComponent.prototype.updateASI1 = function () {
        this._multiplexorService.actualizarASI1Input(this.ASI1Input);
        this._multiplexorService.actualizarASI1Layer(this.ASI1Layer);
        this._multiplexorService.actualizarASI1Output(this.ASI1Output);
        this._multiplexorService.actualizarASI1Enable(this.ASI1Enable);
    };
    //ASI 2
    MultiplexorComponent.prototype.updateASI2 = function () {
        this._multiplexorService.actualizarASI2Input(this.ASI2Input);
        this._multiplexorService.actualizarASI2Layer(this.ASI2Layer);
        this._multiplexorService.actualizarASI2Output(this.ASI2Output);
        this._multiplexorService.actualizarASI2Enable(this.ASI2Enable);
    };
    //ASI 3
    MultiplexorComponent.prototype.updateASI3 = function () {
        this._multiplexorService.actualizarASI3Input(this.ASI3Input);
        this._multiplexorService.actualizarASI3Layer(this.ASI3Layer);
        this._multiplexorService.actualizarASI3Output(this.ASI3Output);
        this._multiplexorService.actualizarASI3Enable(this.ASI3Enable);
    };
    //TABLES
    MultiplexorComponent.prototype.updateTables = function () {
        this._multiplexorService.actualizarTableLayer(this.TableLayer);
        this._multiplexorService.actualizarTablePmtPid(this.TablePmtPid);
        this._multiplexorService.actualizarTableEnable(this.TableEnable);
    };
    return MultiplexorComponent;
}());
MultiplexorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-multiplexor',
        template: __webpack_require__("../../../../../src/app/layout/multiplexor/multiplexor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/multiplexor/multiplexor.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_Services_multiplexor_service__["a" /* MultiplexorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_multiplexor_service__["a" /* MultiplexorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_multiplexor_service__["a" /* MultiplexorService */]) === "function" && _a || Object])
], MultiplexorComponent);

var _a;
//# sourceMappingURL=multiplexor.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/multiplexor/multiplexor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiplexor_routing_module__ = __webpack_require__("../../../../../src/app/layout/multiplexor/multiplexor-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multiplexor_component__ = __webpack_require__("../../../../../src/app/layout/multiplexor/multiplexor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplexorModule", function() { return MultiplexorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MultiplexorModule = (function () {
    function MultiplexorModule() {
    }
    return MultiplexorModule;
}());
MultiplexorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__multiplexor_routing_module__["a" /* MultiplexorRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__multiplexor_component__["a" /* MultiplexorComponent */],
        ]
    })
], MultiplexorModule);

//# sourceMappingURL=multiplexor.module.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map