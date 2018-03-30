webpackJsonp([5],{

/***/ "../../../../../src/app/Services/codificador.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_layout_codificador_init_codificador__ = __webpack_require__("../../../../../src/app/layout/codificador/init-codificador.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodificadorService; });
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


var CodificadorService = (function (_super) {
    __extends(CodificadorService, _super);
    function CodificadorService() {
        var _this = _super.call(this) || this;
        _this.load();
        return _this;
    }
    //VIDEO SOURCE
    CodificadorService.prototype.getVideoSource = function () {
        var videoSource = JSON.parse(localStorage.getItem('videoSource'));
        return videoSource;
    };
    CodificadorService.prototype.actualizarVideoSource = function (newParam, id) {
        if (id === 'E1') {
            var videoSource = JSON.parse(localStorage.getItem('videoSource'));
            videoSource[0] = newParam;
            localStorage.setItem('videoSource', JSON.stringify(videoSource));
        }
        if (id === 'E2') {
            var videoSource = JSON.parse(localStorage.getItem('videoSource'));
            videoSource[1] = newParam;
            localStorage.setItem('videoSource', JSON.stringify(videoSource));
        }
        if (id === 'E3') {
            var videoSource = JSON.parse(localStorage.getItem('videoSource'));
            videoSource[2] = newParam;
            localStorage.setItem('videoSource', JSON.stringify(videoSource));
        }
    };
    //AUDIO SOURCE
    CodificadorService.prototype.getAudioSource = function () {
        var audioSource = JSON.parse(localStorage.getItem('audioSource'));
        return audioSource;
    };
    CodificadorService.prototype.actualizarAudioSource = function (newParam, id) {
        if (id === 'E1') {
            var audioSource = JSON.parse(localStorage.getItem('audioSource'));
            audioSource[0] = newParam;
            localStorage.setItem('audioSource', JSON.stringify(audioSource));
        }
        if (id === 'E2') {
            var audioSource = JSON.parse(localStorage.getItem('audioSource'));
            audioSource[1] = newParam;
            localStorage.setItem('audioSource', JSON.stringify(audioSource));
        }
        if (id === 'E3') {
            var audioSource = JSON.parse(localStorage.getItem('audioSource'));
            audioSource[2] = newParam;
            localStorage.setItem('audioSource', JSON.stringify(audioSource));
        }
    };
    //AUDIO CODEC
    CodificadorService.prototype.getAudioCodec = function () {
        var audioCodec = JSON.parse(localStorage.getItem('audioCodec'));
        return audioCodec;
    };
    CodificadorService.prototype.actualizarAudioCodec = function (newParam, id) {
        if (id === 'E1') {
            var audioCodec = JSON.parse(localStorage.getItem('audioCodec'));
            audioCodec[0] = newParam;
            localStorage.setItem('audioCodec', JSON.stringify(audioCodec));
        }
        if (id === 'E2') {
            var audioCodec = JSON.parse(localStorage.getItem('audioCodec'));
            audioCodec[1] = newParam;
            localStorage.setItem('audioCodec', JSON.stringify(audioCodec));
        }
        if (id === 'E3') {
            var audioCodec = JSON.parse(localStorage.getItem('audioCodec'));
            audioCodec[2] = newParam;
            localStorage.setItem('audioCodec', JSON.stringify(audioCodec));
        }
    };
    //AUDIO BIT RATE
    CodificadorService.prototype.getAudioBitRate = function () {
        var audioBitRate = JSON.parse(localStorage.getItem('audioBitRate'));
        return audioBitRate;
    };
    CodificadorService.prototype.actualizarAudioBitRate = function (newParam, id) {
        if (id === 'E1') {
            var audioBitRate = JSON.parse(localStorage.getItem('audioBitRate'));
            audioBitRate[0] = newParam;
            localStorage.setItem('audioBitRate', JSON.stringify(audioBitRate));
        }
        if (id === 'E2') {
            var audioBitRate = JSON.parse(localStorage.getItem('audioBitRate'));
            audioBitRate[1] = newParam;
            localStorage.setItem('audioBitRate', JSON.stringify(audioBitRate));
        }
        if (id === 'E3') {
            var audioBitRate = JSON.parse(localStorage.getItem('audioBitRate'));
            audioBitRate[2] = newParam;
            localStorage.setItem('audioBitRate', JSON.stringify(audioBitRate));
        }
    };
    //VIDEO RESOLUTION
    CodificadorService.prototype.getVideoResolution = function () {
        var videoResolution = JSON.parse(localStorage.getItem('videoResolution'));
        return videoResolution;
    };
    CodificadorService.prototype.actualizarVideoResolution = function (newParam, id) {
        if (id === 'E1') {
            var videoResolution = JSON.parse(localStorage.getItem('videoResolution'));
            videoResolution[0] = newParam;
            localStorage.setItem('videoResolution', JSON.stringify(videoResolution));
        }
        if (id === 'E2') {
            var videoResolution = JSON.parse(localStorage.getItem('videoResolution'));
            videoResolution[1] = newParam;
            localStorage.setItem('videoResolution', JSON.stringify(videoResolution));
        }
        if (id === 'E3') {
            var videoResolution = JSON.parse(localStorage.getItem('videoResolution'));
            videoResolution[2] = newParam;
            localStorage.setItem('videoResolution', JSON.stringify(videoResolution));
        }
    };
    //RATE CONTROL
    CodificadorService.prototype.getRateControl = function () {
        var rateControl = JSON.parse(localStorage.getItem('rateControl'));
        return rateControl;
    };
    CodificadorService.prototype.actualizarRateControl = function (newParam, id) {
        if (id === 'E1') {
            var rateControl = JSON.parse(localStorage.getItem('rateControl'));
            rateControl[0] = newParam;
            localStorage.setItem('rateControl', JSON.stringify(rateControl));
        }
        if (id === 'E2') {
            var rateControl = JSON.parse(localStorage.getItem('rateControl'));
            rateControl[1] = newParam;
            localStorage.setItem('rateControl', JSON.stringify(rateControl));
        }
        if (id === 'E3') {
            var rateControl = JSON.parse(localStorage.getItem('rateControl'));
            rateControl[2] = newParam;
            localStorage.setItem('rateControl', JSON.stringify(rateControl));
        }
    };
    //VIDEO PROFILE
    CodificadorService.prototype.getVideoProfile = function () {
        var videoProfile = JSON.parse(localStorage.getItem('videoProfile'));
        return videoProfile;
    };
    CodificadorService.prototype.actualizarVideoProfile = function (newParam, id) {
        if (id === 'E1') {
            var videoProfile = JSON.parse(localStorage.getItem('videoProfile'));
            videoProfile[0] = newParam;
            localStorage.setItem('videoProfile', JSON.stringify(videoProfile));
        }
        if (id === 'E2') {
            var videoProfile = JSON.parse(localStorage.getItem('videoProfile'));
            videoProfile[1] = newParam;
            localStorage.setItem('videoProfile', JSON.stringify(videoProfile));
        }
        if (id === 'E3') {
            var videoProfile = JSON.parse(localStorage.getItem('videoProfile'));
            videoProfile[2] = newParam;
            localStorage.setItem('videoProfile', JSON.stringify(videoProfile));
        }
    };
    //GOP SIZE
    CodificadorService.prototype.getGopSize = function () {
        var gopSize = JSON.parse(localStorage.getItem('gopSize'));
        return gopSize;
    };
    CodificadorService.prototype.actualizarGopSize = function (newParam, id) {
        if (id === 'E1') {
            var gopSize = JSON.parse(localStorage.getItem('gopSize'));
            gopSize[0] = newParam;
            localStorage.setItem('gopSize', JSON.stringify(gopSize));
        }
        if (id === 'E2') {
            var gopSize = JSON.parse(localStorage.getItem('gopSize'));
            gopSize[1] = newParam;
            localStorage.setItem('gopSize', JSON.stringify(gopSize));
        }
        if (id === 'E3') {
            var gopSize = JSON.parse(localStorage.getItem('gopSize'));
            gopSize[2] = newParam;
            localStorage.setItem('gopSize', JSON.stringify(gopSize));
        }
    };
    //VIDEO BURST SIZE
    CodificadorService.prototype.getVideoBurstSize = function () {
        var videoBurstSize = JSON.parse(localStorage.getItem('videoBurstSize'));
        return videoBurstSize;
    };
    CodificadorService.prototype.actualizarVideoBurstSize = function (newParam, id) {
        if (id === 'E1') {
            var videoBurstSize = JSON.parse(localStorage.getItem('videoBurstSize'));
            videoBurstSize[0] = newParam;
            localStorage.setItem('videoBurstSize', JSON.stringify(videoBurstSize));
        }
        if (id === 'E2') {
            var videoBurstSize = JSON.parse(localStorage.getItem('videoBurstSize'));
            videoBurstSize[1] = newParam;
            localStorage.setItem('videoBurstSize', JSON.stringify(videoBurstSize));
        }
        if (id === 'E3') {
            var videoBurstSize = JSON.parse(localStorage.getItem('videoBurstSize'));
            videoBurstSize[2] = newParam;
            localStorage.setItem('videoBurstSize', JSON.stringify(videoBurstSize));
        }
    };
    //VIDEO CODEC
    CodificadorService.prototype.getVideoCodec = function () {
        var videoCodec = JSON.parse(localStorage.getItem('videoCodec'));
        return videoCodec;
    };
    CodificadorService.prototype.actualizarVideoCodec = function (newParam, id) {
        if (id === 'E1') {
            var videoCodec = JSON.parse(localStorage.getItem('videoCodec'));
            videoCodec[0] = newParam;
            localStorage.setItem('videoCodec', JSON.stringify(videoCodec));
        }
        if (id === 'E2') {
            var videoCodec = JSON.parse(localStorage.getItem('videoCodec'));
            videoCodec[1] = newParam;
            localStorage.setItem('videoCodec', JSON.stringify(videoCodec));
        }
        if (id === 'E3') {
            var videoCodec = JSON.parse(localStorage.getItem('videoCodec'));
            videoCodec[2] = newParam;
            localStorage.setItem('videoCodec', JSON.stringify(videoCodec));
        }
    };
    //FRAME DECIMATION
    CodificadorService.prototype.getFrameDecimation = function () {
        var frameDecimation = JSON.parse(localStorage.getItem('frameDecimation'));
        return frameDecimation;
    };
    CodificadorService.prototype.actualizarFrameDecimation = function (newParam, id) {
        if (id === 'E1') {
            var frameDecimation = JSON.parse(localStorage.getItem('frameDecimation'));
            frameDecimation[0] = newParam;
            localStorage.setItem('frameDecimation', JSON.stringify(frameDecimation));
        }
        if (id === 'E2') {
            var frameDecimation = JSON.parse(localStorage.getItem('frameDecimation'));
            frameDecimation[1] = newParam;
            localStorage.setItem('frameDecimation', JSON.stringify(frameDecimation));
        }
        if (id === 'E3') {
            var frameDecimation = JSON.parse(localStorage.getItem('frameDecimation'));
            frameDecimation[2] = newParam;
            localStorage.setItem('frameDecimation', JSON.stringify(frameDecimation));
        }
    };
    //OUTPUT INTERFACE
    CodificadorService.prototype.getOutputInterface = function () {
        var outputInterface = JSON.parse(localStorage.getItem('outputInterface'));
        return outputInterface;
    };
    CodificadorService.prototype.actualizarOutputInterface = function (newParam, id) {
        if (id === 'E1') {
            var outputInterface = JSON.parse(localStorage.getItem('outputInterface'));
            outputInterface[0] = newParam;
            localStorage.setItem('outputInterface', JSON.stringify(outputInterface));
        }
        if (id === 'E2') {
            var outputInterface = JSON.parse(localStorage.getItem('outputInterface'));
            outputInterface[1] = newParam;
            localStorage.setItem('outputInterface', JSON.stringify(outputInterface));
        }
        if (id === 'E3') {
            var outputInterface = JSON.parse(localStorage.getItem('outputInterface'));
            outputInterface[2] = newParam;
            localStorage.setItem('outputInterface', JSON.stringify(outputInterface));
        }
    };
    //OUTPUT Format
    CodificadorService.prototype.getOutputFormat = function () {
        var outputFormat = JSON.parse(localStorage.getItem('outputFormat'));
        return outputFormat;
    };
    CodificadorService.prototype.actualizarOutputFormat = function (newParam, id) {
        if (id === 'E1') {
            var outputFormat = JSON.parse(localStorage.getItem('outputFormat'));
            outputFormat[0] = newParam;
            localStorage.setItem('outputFormat', JSON.stringify(outputFormat));
        }
        if (id === 'E2') {
            var outputFormat = JSON.parse(localStorage.getItem('outputFormat'));
            outputFormat[1] = newParam;
            localStorage.setItem('outputFormat', JSON.stringify(outputFormat));
        }
        if (id === 'E3') {
            var outputFormat = JSON.parse(localStorage.getItem('outputFormat'));
            outputFormat[2] = newParam;
            localStorage.setItem('outputFormat', JSON.stringify(outputFormat));
        }
    };
    //VIDEO BIT RATE
    CodificadorService.prototype.obtenerVideoBitRate = function () {
        var videoBitRate = JSON.parse(localStorage.getItem('videoBitRate'));
        return videoBitRate;
    };
    CodificadorService.prototype.actualizarVideoBitRate = function (nuevo) {
        var videoBitRate = JSON.parse(localStorage.getItem('videoBitRate'));
        videoBitRate = nuevo;
        localStorage.setItem('videoBitRate', JSON.stringify(videoBitRate));
    };
    // DEST IP ADDRESS
    CodificadorService.prototype.obtenerDestIpAddress = function () {
        var destIpAddress = JSON.parse(localStorage.getItem('destIpAddress'));
        return destIpAddress;
    };
    CodificadorService.prototype.actualizarDestIpAddress = function (nuevo) {
        var destIpAddress = JSON.parse(localStorage.getItem('destIpAddress'));
        destIpAddress = nuevo;
        localStorage.setItem('destIpAddress', JSON.stringify(destIpAddress));
    };
    // DEST IP ADDRESS
    CodificadorService.prototype.obtenerDestPort = function () {
        var destPort = JSON.parse(localStorage.getItem('destPort'));
        return destPort;
    };
    CodificadorService.prototype.actualizarDestPort = function (nuevo) {
        var destPort = JSON.parse(localStorage.getItem('destPort'));
        destPort = nuevo;
        localStorage.setItem('destPort', JSON.stringify(destPort));
    };
    //TS BIT RATE
    CodificadorService.prototype.obtenerTsBitRate = function () {
        var tsBitRate = JSON.parse(localStorage.getItem('tsBitRate'));
        return tsBitRate;
    };
    CodificadorService.prototype.actualizarTsBitRate = function (nuevo) {
        var tsBitRate = JSON.parse(localStorage.getItem('tsBitRate'));
        tsBitRate = nuevo;
        localStorage.setItem('tsBitRate', JSON.stringify(tsBitRate));
    };
    //ASI PCR INTERVAL
    CodificadorService.prototype.obtenerAsiPcrInterval = function () {
        var asiPcrInterval = JSON.parse(localStorage.getItem('asiPcrInterval'));
        return asiPcrInterval;
    };
    CodificadorService.prototype.actualizarAsiPcrInterval = function (nuevo) {
        var asiPcrInterval = JSON.parse(localStorage.getItem('asiPcrInterval'));
        asiPcrInterval = nuevo;
        localStorage.setItem('asiPcrInterval', JSON.stringify(asiPcrInterval));
    };
    //PID AUDIO
    CodificadorService.prototype.obtenerPidAudio = function () {
        var pidAudio = JSON.parse(localStorage.getItem('pidAudio'));
        return pidAudio;
    };
    CodificadorService.prototype.actualizarPidAudio = function (nuevo) {
        var pidAudio = JSON.parse(localStorage.getItem('pidAudio'));
        pidAudio = nuevo;
        localStorage.setItem('pidAudio', JSON.stringify(pidAudio));
    };
    //PID VIDEO
    CodificadorService.prototype.obtenerPidVideo = function () {
        var pidVideo = JSON.parse(localStorage.getItem('pidVideo'));
        return pidVideo;
    };
    CodificadorService.prototype.actualizarPidVideo = function (nuevo) {
        var pidVideo = JSON.parse(localStorage.getItem('pidVideo'));
        pidVideo = nuevo;
        localStorage.setItem('pidVideo', JSON.stringify(pidVideo));
    };
    //PID PCR
    CodificadorService.prototype.obtenerPidPcr = function () {
        var pidPcr = JSON.parse(localStorage.getItem('pidPcr'));
        return pidPcr;
    };
    CodificadorService.prototype.actualizarPidPcr = function (nuevo) {
        var pidPcr = JSON.parse(localStorage.getItem('pidPcr'));
        pidPcr = nuevo;
        localStorage.setItem('pidPcr', JSON.stringify(pidPcr));
    };
    //PID LOCAL IP ADDRESS
    CodificadorService.prototype.obtenerLocalIpAddress = function () {
        var localIpAddress = JSON.parse(localStorage.getItem('localIpAddress'));
        return localIpAddress;
    };
    CodificadorService.prototype.actualizarLocalIpAddress = function (nuevo) {
        var localIpAddress = JSON.parse(localStorage.getItem('localIpAddress'));
        localIpAddress = nuevo;
        localStorage.setItem('localIpAddress', JSON.stringify(localIpAddress));
    };
    //PID LOCAL NETMASK
    CodificadorService.prototype.obtenerLocalNetMask = function () {
        var localNetMask = JSON.parse(localStorage.getItem('localNetMask'));
        return localNetMask;
    };
    CodificadorService.prototype.actualizarLocalNetMask = function (nuevo) {
        var localNetMask = JSON.parse(localStorage.getItem('localNetMask'));
        localNetMask = nuevo;
        localStorage.setItem('localNetMask', JSON.stringify(localNetMask));
    };
    //DEFAULT GATEWAY
    CodificadorService.prototype.obtenerDefaultGateway = function () {
        var defaultGateway = JSON.parse(localStorage.getItem('defaultGateway'));
        return defaultGateway;
    };
    CodificadorService.prototype.actualizarDefaultGateway = function (nuevo) {
        var defaultGateway = JSON.parse(localStorage.getItem('defaultGateway'));
        defaultGateway = nuevo;
        localStorage.setItem('defaultGateway', JSON.stringify(defaultGateway));
    };
    CodificadorService.prototype.obtenerEncoder1 = function () {
        var encoder1 = JSON.parse(localStorage.getItem('encoder1'));
        return encoder1;
    };
    CodificadorService.prototype.actualizarEncoder1 = function (nuevo) {
        var encoder1 = JSON.parse(localStorage.getItem('encoder1'));
        encoder1 = nuevo;
        localStorage.setItem('encoder1', JSON.stringify(encoder1));
    };
    CodificadorService.prototype.obtenerEncoder2 = function () {
        var encoder2 = JSON.parse(localStorage.getItem('encoder2'));
        return encoder2;
    };
    CodificadorService.prototype.actualizarEncoder2 = function (nuevo) {
        var encoder2 = JSON.parse(localStorage.getItem('encoder2'));
        encoder2 = nuevo;
        localStorage.setItem('encoder2', JSON.stringify(encoder2));
    };
    CodificadorService.prototype.obtenerEncoder3 = function () {
        var encoder3 = JSON.parse(localStorage.getItem('encoder3'));
        return encoder3;
    };
    CodificadorService.prototype.actualizarEncoder3 = function (nuevo) {
        var encoder3 = JSON.parse(localStorage.getItem('encoder3'));
        encoder3 = nuevo;
        localStorage.setItem('encoder3', JSON.stringify(encoder3));
    };
    CodificadorService.prototype.obtenerEncoderInit = function () {
        var encoderInit = JSON.parse(localStorage.getItem('encoderInit'));
        return encoderInit;
    };
    CodificadorService.prototype.actualizarEncoderInit = function (nuevo) {
        var encoderInit = JSON.parse(localStorage.getItem('encoderInit'));
        encoderInit = nuevo;
        localStorage.setItem('encoderInit', JSON.stringify(encoderInit));
    };
    return CodificadorService;
}(__WEBPACK_IMPORTED_MODULE_1_app_layout_codificador_init_codificador__["a" /* InitCodificador */]));
CodificadorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CodificadorService);

//# sourceMappingURL=codificador.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/codificador/codificador-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codificador_component__ = __webpack_require__("../../../../../src/app/layout/codificador/codificador.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodificadorRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__codificador_component__["a" /* CodificadorComponent */] }
];
var CodificadorRoutingModule = (function () {
    function CodificadorRoutingModule() {
    }
    return CodificadorRoutingModule;
}());
CodificadorRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], CodificadorRoutingModule);

//# sourceMappingURL=codificador-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/codificador/codificador.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Codificador A/V</h4>\n\n<head>        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n</head>\n<!-- Resultados  -->\n<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"card\">\n            <div class=\"card-block\" >\n                    <div class=\"btn-group btn-group-lg btn-responsive\" role=\"group\" aria-label=\"...\">\n                    <button  [class.active]=\"activeButtonName === 'encoder1'\" type=\"button\" class=\"btn btn-secondary btn-responsive\"(click)=\"encoderSelected('encoder1')\">Encoder 1</button>\n                    <button  [class.active]=\"activeButtonName === 'encoder2'\" type=\"button\" class=\"btn btn-secondary btn-responsive\" (click)=\"encoderSelected('encoder2')\">Encoder 2</button>\n                    <button  [class.active]=\"activeButtonName === 'encoder3'\" type=\"button\" class=\"btn btn-secondary btn-responsive\" (click)=\"encoderSelected('encoder3')\">Encoder 3</button>\n                </div> <br><br>\n\n                <div *ngIf=\"encoder1\">\n                        <div class=\"row\">\n                                <div class=\"col\">\n                                    <div class=\"card mb-3\">\n                                        <div class=\"card-header\">\n                                           <b>Encoder Setup 1</b> \n                                        </div>\n                                        <div class=\"card-block\">\n                                            <table class=\"table\" >\n                                                <tbody>\n                                                    <tr >\n                                                        <th scope=\"row\">Video Source</th>\n                                                        <td>\n                                                          <select [value]=\"videoSource[0]\" (change)=\"videoSourceSelected($event.target.value,'E1')\">\n                                                            <option value=\"SDI\">SDI</option>\n                                                            <option value=\"HDMI\">HDMI</option>\n                                                            <option value=\"Component\">Component</option>\n                                                            <option value=\"Composite\">Composite</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Audio Source</th>\n                                                        <td>\n                                                          <select [value]=\"audioSource[0]\" (change)=\"audioSourceSelected($event.target.value,'E1')\">\n                                                             <option  value=\"Analog Jacks\">Analog Jacks</option>\n                                                            <option  value=\"Channnels 1+2\">Channnels 1+2</option>\n                                                            <option  value=\"Channnels 3+4\">Channnels 3+4</option>\n                                                            <option  value=\"Channnels 5+6\">Channnels 5+6</option>\n                                                            <option  value=\"Channnels 7+8\">Channnels 7+8</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Audio Codec</th>\n                                                        <td>\n                                                          <select [value]=\"audioCodec[0]\" (change)=\"audioCodecSelected($event.target.value,'E1')\">\n                                                            <option value=\"AAC-LC ADTS\">AAC-LC ADTS</option>\n                                                            <option value=\"AAC-LC LATM\">AAC-LC LATM</option>\n                                                            <option value=\"PMC\">PMC</option>\n                                                            <option value=\"AC-3 Passthru\">AC-3 Passthru</option>\n                                                            <option value=\"None\">None</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Audio Bit Rate</th>\n                                                        <td>\n                                                          <select [value]=\"audioBitRate[0]\" (change)=\"audioBitRateSelected($event.target.value,'E1')\">\n                                                            <option value=\"64 Kbps\">64 Kbps</option>\n                                                            <option value=\"96 Kbps\">96 Kbps</option>\n                                                            <option value=\"128Kbps\">128 Kbps</option>\n                                                            <option value=\"192 Kbps\">192 Kbps</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video Resolution</th>\n                                                       <td>\n                                                          <select  [value]=\"videoResolution[0]\" (change)=\"videoResolutionSelected($event.target.value,'E1')\">\n                                                            <option value=\"Follow Input\">Follow Input</option>\n                                                            <option value=\"1080i (1920x1080)\">1080i (1920x1080)</option>\n                                                            <option value=\"1080p (1920x1080)\">1080p (1920x1080)</option>\n                                                            <option value=\"3/4 1080i (1440x1080)\">3/4 1080i (1440x1080)</option>\n                                                            <option value=\"720p (1280x720)\">720p (1280x720)</option>\n                                                            <option value=\"4/5 720p (1024x720)\">4/5 720p (1024x720)</option>\n                                                            <option value=\"16:9 PAL (1024x576)\">16:9 PAL (1024x576)</option>\n                                                            <option value=\"D1 NTSC (720x480)\">D1 NTSC (720x480)</option>\n                                                            <option value=\"D1 PAL (720x576)\">D1 PAL (720x576)</option>\n                                                            <option value=\"4-CIF (704x576)\">4-CIF (704x576)</option>\n                                                            <option value=\"VGA (640X480)\">VGA (640X480)</option>\n                                                            <option value=\"640X360\">640X360</option>\n                                                            <option value=\"2-CIF (352x576)\">2-CIF (352x576)</option>\n                                                            <option value=\"2-SIF (352x480)\">2-SIF (352x480)</option>\n                                                            <option value=\"CIF (352x288)\">CIF (352x288)</option>\n                                                            <option value=\"SIF (352x240)\">SIF (352x240)</option>\n                                                            <option value=\"QVGA(320x240)\">QVGA(320x240)</option>\n                                                            <option value=\"WQVGA(320x180)\">WQVGA(320x180)</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Rate Control</th>\n                                                        <td>\n                                                          <select  [value]=\"rateControl[0]\" (change)=\"rateControlSelected($event.target.value,'E1')\">\n                                                            <option value=\"CBR\">CBR</option>\n                                                            <option value=\"VBR\">VBR</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video Bit Rate [Mbps]</th>\n                                                       <td>\n                                                          <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"videoBitRate[0]\"  (change)=\" changeVideoBitRate()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video Profile</th>\n                                                       <td>\n                                                          <select  [value]=\"videoProfile[0]\" (change)=\"videoProfileSelected($event.target.value,'E1')\">\n                                                            <option value=\"Baseline\">Baseline</option>\n                                                            <option value=\"Main\">Main</option>\n                                                            <option value=\"High\">High</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Gop Size</th>\n                                                        <td>\n                                                          <select [value]=\"gopSize[0]\" (change)=\"gopSizeSelected($event.target.value,'E1')\">\n                                                            <option value=\"15 Frames\">15 Frames</option>\n                                                            <option value=\"30 Frames\">30 Frames</option>\n                                                            <option value=\"60 Frames\">60 Frames</option>\n                                                            <option value=\"120 Frames\">120 Frames</option>\n                                                            <option value=\"240 Frames\">240 Frames</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video burst size</th>\n                                                        <td>\n                                                          <select [value]=\"videoBurstSize[0]\" (change)=\"videoBurstSizeSelected($event.target.value,'E1')\">\n                                                            <option value=\"150ms\">150ms</option>\n                                                            <option value=\"200ms\">200ms</option>\n                                                            <option value=\"300ms\">300ms</option>\n                                                            <option value=\"400ms\">400ms</option>\n                                                            <option value=\"500ms\">500ms</option>\n                                                            <option value=\"600ms\">600ms</option>\n                                                            <option value=\"800ms\">800ms</option>\n                                                            <option value=\"1000ms\">1000ms</option>\n                                                            <option value=\"1200ms\">1200ms</option>\n                                                            <option value=\"1400ms\">1400ms</option>\n                                                            <option value=\"1600ms\">1600ms</option>\n                                                            <option value=\"1800ms\">1800ms</option>\n                                                            <option value=\"2000ms\">2000ms</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video Codec</th>\n                                                       <td>\n                                                          <select [value]=\"videoCodec[0]\" (change)=\"videoCodecSelected($event.target.value,'E1')\">\n                                                            <option value=\"H.264\">H.264</option>\n                                                            <option value=\"MPEG-2\">MPEG-2</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Frame Decimation</th>\n                                                       <td>\n                                                          <select [value]=\"frameDecimation[0]\" (change)=\"frameDecimationSelected($event.target.value,'E1')\">\n                                                            <option value=\"None\">None</option>\n                                                            <option value=\"1/2\">1/2</option>\n                                                            <option value=\"1/3\">1/3</option>\n                                                            <option value=\"1/4\">1/4</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                   \n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                <div class=\"col\">\n                                    <div class=\"card mb-3\">\n                                        <div class=\"card-header\"> <b>Output Setup 1</b></div>\n                                        <div class=\"card-block\">\n                                            <table class=\"table\">\n                                                <tbody>\n                                                    <tr>\n                                                        <th scope=\"row\">Output Interface</th>\n                                                        <td>\n                                                           <select [value]=\"outputInterface[0]\" (change)=\"outputInterfaceSelected($event.target.value,'E1')\">\n                                                            <option value=\"Ethernet(VBR)\">Ethernet(VBR)</option>\n                                                            <option value=\"ASI\">ASI</option>\n                                                            <option value=\"ASI + Ethernet(CBR)\">ASI + Ethernet(CBR)</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Output Format</th>\n                                                        <td>\n                                                           <select [value]=\"outputFormat[0]\" (change)=\"outputFormatSelected($event.target.value,'E1')\">\n                                                            <option value=\"RTP\">RTP</option>\n                                                            <option value=\"MPEG-2 TS\">MPEG-2 TS</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Dest IP Address</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] =\"destIpAddress[0]\" (change)=\"changeDestIpAddress()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Dest Port</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] =\"destPort[0]\" (change)=\"changeDestPort()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">TS Bitrate [Mbps]</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\" [(ngModel)] =\"tsBitrate[0]\" (change)=\"changeTsBitrate()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">ASI PCR Interval [ms]</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] =\"asiPciInterval[0]\" (change)=\"changeAsiPciInterval()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <th scope=\"row\">PID Audio</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] =\"pidAudio[0]\" (change)=\"changePidAudio()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <th scope=\"row\">PID Video</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] =\"pidVideo[0]\" (change)=\"changePidVideo()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <th scope=\"row\">PID PCR</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] =\"pidPcr[0]\" (change)=\"changePidPcr()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                    \n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                                    <div class=\"card mb-3\">\n                                        <div class=\"card-header\"><b>Local IP Setup 1</b></div>\n                                        <div class=\"card-block\">\n                                            <table class=\"table table-hover table-striped\" >\n                                                <tbody>\n                                                    <tr >\n                                                        <td >Local IP Address</td>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"   [(ngModel)] =\"localIpAddress[0]\" (change)=\"changeLocalIpAddress()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                       \n                                                    </tr>\n                                                    <tr >\n                                                        <td >Local Netmask</td>\n                                                        <td >\n                                                            <input type=\"text\" class=\"form-control\"   [(ngModel)] =\"localNetmask[0]\" (change)=\"changeLocalNetmask()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                       \n                                                    </tr>\n                                                    <tr >\n                                                        <td >Default Gateway</td>\n                                                        <td >\n                                                            <input type=\"text\" class=\"form-control\"   [(ngModel)] =\"defaultGateway[0]\" (change)=\"changeDefaultGateway()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                        \n                                                    </tr>\n                                              \n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div> \n                </div>\n\n                <div *ngIf=\"encoder2\">\n                        <div class=\"row\">\n                                <div class=\"col\">\n                                    <div class=\"card mb-3\">\n                                        <div class=\"card-header\">\n                                         <b>Encoder Setup 2</b>   \n                                        </div>\n                                        <div class=\"card-block\" id=\"encoder2\"  name=\"encoder2\" >\n                                            <table class=\"table\">\n                                                <tbody>\n                                                    <tr>\n                                                        <th scope=\"row\">Video Source</th>\n                                                        <td>\n                                                          <select  [value]=\"videoSource[1]\" (change)=\" videoSourceSelected($event.target.value, 'E2')\">\n                                                             <option value=\"SDI\">SDI</option>\n                                                            <option value=\"HDMI\">HDMI</option>\n                                                            <option value=\"Component\">Component</option>\n                                                            <option value=\"Composite\">Composite</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Audio Source</th>\n                                                        <td>\n                                                          <select [value]=\"audioSource[1]\" (change)=\"audioSourceSelected($event.target.value,'E2')\">\n                                                           <option  value=\"Analog Jacks\">Analog Jacks</option>\n                                                            <option  value=\"Channnels 1+2\">Channnels 1+2</option>\n                                                            <option  value=\"Channnels 3+4\">Channnels 3+4</option>\n                                                            <option  value=\"Channnels 5+6\">Channnels 5+6</option>\n                                                            <option  value=\"Channnels 7+8\">Channnels 7+8</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Audio Codec</th>\n                                                        <td>\n                                                          <select [value]=\"audioCodec[1]\" (change)=\"audioCodecSelected($event.target.value,'E2')\">\n                                                            <option value=\"AAC-LC ADTS\">AAC-LC ADTS</option>\n                                                            <option value=\"AAC-LC LATM\">AAC-LC LATM</option>\n                                                            <option value=\"PMC\">PMC</option>\n                                                            <option value=\"AC-3 Passthru\">AC-3 Passthru</option>\n                                                            <option value=\"None\">None</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Audio Bit Rate</th>\n                                                        <td>\n                                                           <select [value]=\"audioBitRate[1]\" (change)=\"audioBitRateSelected($event.target.value,'E2')\">\n                                                            <option value=\"64 Kbps\">64 Kbps</option>\n                                                            <option value=\"96 Kbps\">96 Kbps</option>\n                                                            <option value=\"128 Kbps\">128 Kbps</option>\n                                                            <option value=\"192 Kbps\">192 Kbps</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video Resolution</th>\n                                                       <td>\n                                                         <select  [value]=\"videoResolution[1]\" (change)=\"videoResolutionSelected($event.target.value,'E2')\">\n                                                            <option value=\"Follow Input\">Follow Input</option>\n                                                            <option value=\"1080i (1920x1080)\">1080i (1920x1080)</option>\n                                                            <option value=\"1080p (1920x1080)\">1080p (1920x1080)</option>\n                                                            <option value=\"3/4 1080i (1440x1080)\">3/4 1080i (1440x1080)</option>\n                                                            <option value=\"720p (1280x720)\">720p (1280x720)</option>\n                                                            <option value=\"4/5 720p (1024x720)\">4/5 720p (1024x720)</option>\n                                                            <option value=\"16:9 PAL (1024x576)\">16:9 PAL (1024x576)</option>\n                                                            <option value=\"D1 NTSC (720x480)\">D1 NTSC (720x480)</option>\n                                                            <option value=\"D1 PAL (720x576)\">D1 PAL (720x576)</option>\n                                                            <option value=\"4-CIF (704x576)\">4-CIF (704x576)</option>\n                                                            <option value=\"VGA (640X480)\">VGA (640X480)</option>\n                                                            <option value=\"640X360\">640X360</option>\n                                                            <option value=\"2-CIF (352x576)\">2-CIF (352x576)</option>\n                                                            <option value=\"2-SIF (352x480)\">2-SIF (352x480)</option>\n                                                            <option value=\"CIF (352x288)\">CIF (352x288)</option>\n                                                            <option value=\"SIF (352x240)\">SIF (352x240)</option>\n                                                            <option value=\"QVGA(320x240)\">QVGA(320x240)</option>\n                                                            <option value=\"WQVGA(320x180)\">WQVGA(320x180)</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Rate Control</th>\n                                                        <td>\n                                                          <select  [value]=\"rateControl[1]\" (change)=\"rateControlSelected($event.target.value,'E2')\">\n                                                            <option value=\"CBR\">CBR</option>\n                                                            <option value=\"VBR\">VBR</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video Bit Rate [Mbps]</th>\n                                                       <td>\n                                                          <input type=\"text\" class=\"form-control\"    [(ngModel)] = \"videoBitRate[1]\"(change)=\" changeVideoBitRate()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video Profile</th>\n                                                       <td>\n                                                        <select  [value]=\"videoProfile[1]\" (change)=\"videoProfileSelected($event.target.value,'E2')\">\n                                                            <option value=\"Baseline\">Baseline</option>\n                                                            <option value=\"Main\">Main</option>\n                                                            <option value=\"High\">High</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Gop Size</th>\n                                                        <td>\n                                                          <select [value]=\"gopSize[1]\" (change)=\"gopSizeSelected($event.target.value,'E2')\">\n                                                            <option value=\"15 Frames\">15 Frames</option>\n                                                            <option value=\"30 Frames\">30 Frames</option>\n                                                            <option value=\"60 Frames\">60 Frames</option>\n                                                            <option value=\"120 Frames\">120 Frames</option>\n                                                            <option value=\"240 Frames\">240 Frames</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video burst size</th>\n                                                        <td>\n                                                         <select [value]=\"videoBurstSize[1]\" (change)=\"videoBurstSizeSelected($event.target.value,'E2')\">\n                                                            <option value=\"150ms\">150ms</option>\n                                                            <option value=\"200ms\">200ms</option>\n                                                            <option value=\"300ms\">300ms</option>\n                                                            <option value=\"400ms\">400ms</option>\n                                                            <option value=\"500ms\">500ms</option>\n                                                            <option value=\"600ms\">600ms</option>\n                                                            <option value=\"800ms\">800ms</option>\n                                                            <option value=\"1000ms\">1000ms</option>\n                                                            <option value=\"1200ms\">1200ms</option>\n                                                            <option value=\"1400ms\">1400ms</option>\n                                                            <option value=\"1600ms\">1600ms</option>\n                                                            <option value=\"1800ms\">1800ms</option>\n                                                            <option value=\"2000ms\">2000ms</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video Codec</th>\n                                                       <td>\n                                                          <select [value]=\"videoCodec[1]\" (change)=\"videoCodecSelected($event.target.value,'E2')\">\n                                                            <option value=\"H.264\">H.264</option>\n                                                            <option value=\"MPEG-2\">MPEG-2</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Frame Decimation</th>\n                                                       <td>\n                                                        <select [value]=\"frameDecimation[1]\" (change)=\"frameDecimationSelected($event.target.value,'E2')\">\n                                                            <option value=\"None\">None</option>\n                                                            <option value=\"1/2\">1/2</option>\n                                                            <option value=\"1/3\">1/3</option>\n                                                            <option value=\"1/4\">1/4</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                   \n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                <div class=\"col\">\n                                    <div class=\"card mb-3\">\n                                        <div class=\"card-header\"> <b>Output Setup 2</b></div>\n                                        <div class=\"card-block\">\n                                            <table class=\"table\">\n                                                <tbody>\n                                                    <tr>\n                                                        <th scope=\"row\">Output Interface</th>\n                                                        <td>\n                                                          <select [value]=\"outputInterface[1]\" (change)=\"outputInterfaceSelected($event.target.value,'E2')\">\n                                                            <option value=\"Ethernet(VBR)\">Ethernet(VBR)</option>\n                                                            <option value=\"ASI\">ASI</option>\n                                                            <option value=\"ASI + Ethernet(CBR)\">ASI + Ethernet(CBR)</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Output Format</th>\n                                                        <td>\n                                                         <select [value]=\"outputFormat[1]\" (change)=\"outputFormatSelected($event.target.value,'E2')\">\n                                                            <option value=\"RTP\">RTP</option>\n                                                            <option value=\"MPEG-2 TS\">MPEG-2 TS</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Dest IP Address</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"   [(ngModel)] = \"destIpAddress[1]\" (change)=\"changeDestIpAddress()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Dest Port</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"destPort[1]\" (change)=\"changeDestPort()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">TS Bitrate [Mbps]</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"   [(ngModel)] = \"tsBitrate[1]\"  (change)=\"changeTsBitrate()\"   aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">ASI PCR Interval [ms]</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"   [(ngModel)] = \"asiPciInterval[1]\"  (change)=\"changeAsiPciInterval()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <th scope=\"row\">PID Audio</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"pidAudio[1]\"  (change)=\"changePidAudio()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <th scope=\"row\">PID Video</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"pidVideo[1]\" (change)=\"changePidVideo()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <th scope=\"row\">PID PCR</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\" [(ngModel)] = \"pidPcr[1]\"  (change)=\"changePidPcr()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                    \n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                    </div>\n                                    <div class=\"row\">\n                                    <div class=\"col\">\n                                    <div class=\"card mb-3\">\n                                        <div class=\"card-header\"> <b>Local IP Setup 2</b></div>\n                                        <div class=\"card-block\">\n                                            <table class=\"table table-hover table-striped\">\n                                                <tbody>\n                                                    <tr>\n                                                        <td>Local IP Address</td>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"   [(ngModel)] = \"localIpAddress[1]\" (change)=\"changeLocalIpAddress()\"   aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                       \n                                                    </tr>\n                                                    <tr>\n                                                        <td>Local Netmask</td>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"   [(ngModel)] = \"localNetmask[1]\"  (change)=\"changeLocalNetmask()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                       \n                                                    </tr>\n                                                    <tr>\n                                                        <td>Default Gateway</td>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\" [(ngModel)] = \"defaultGateway[1]\" (change)=\"changeDefaultGateway()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                        \n                                                    </tr>\n                                              \n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                                    </div>\n                                </div>\n                            </div> \n                </div>\n                <div *ngIf=\"encoder3\">\n                        <div class=\"row\">\n                                <div class=\"col\">\n                                    <div class=\"card mb-3\">\n                                        <div class=\"card-header\">\n                                          <b> Encoder Setup 3</b> \n                                        </div>\n                                        <div class=\"card-block\">\n                                            <table class=\"table\">\n                                                <tbody>\n                                                    <tr>\n                                                        <th scope=\"row\">Video Source</th>\n                                                        <td>\n                                                          <select  [value]=\"videoSource[2]\" (change)=\" videoSourceSelected($event.target.value, 'E3')\">\n                                                             <option value=\"SDI\">SDI</option>\n                                                            <option value=\"HDMI\">HDMI</option>\n                                                            <option value=\"Component\">Component</option>\n                                                            <option value=\"Composite\">Composite</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Audio Source</th>\n                                                        <td>\n                                                          <select  [value]=\"audioSource[2]\" (change)=\"audioSourceSelected($event.target.value,'E3')\">\n                                                            <option  value=\"Analog Jacks\">Analog Jacks</option>\n                                                            <option  value=\"Channnels 1+2\">Channnels 1+2</option>\n                                                            <option  value=\"Channnels 3+4\">Channnels 3+4</option>\n                                                            <option  value=\"Channnels 5+6\">Channnels 5+6</option>\n                                                            <option  value=\"Channnels 7+8\">Channnels 7+8</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Audio Codec</th>\n                                                        <td>\n                                                         <select [value]=\"audioCodec[2]\" (change)=\"audioCodecSelected($event.target.value,'E3')\">\n                                                            <option value=\"AAC-LC ADTS\">AAC-LC ADTS</option>\n                                                            <option value=\"AAC-LC LATM\">AAC-LC LATM</option>\n                                                            <option value=\"PMC\">PMC</option>\n                                                            <option value=\"AC-3 Passthru\">AC-3 Passthru</option>\n                                                            <option value=\"None\">None</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Audio Bit Rate</th>\n                                                        <td>\n                                                          <select [value]=\"audioBitRate[2]\" (change)=\"audioBitRateSelected($event.target.value,'E3')\">\n                                                            <option value=\"64 Kbps\">64 Kbps</option>\n                                                            <option value=\"96 Kbps\">96 Kbps</option>\n                                                            <option value=\"128 Kbps\">128 Kbps</option>\n                                                            <option value=\"192 Kbps\">192 Kbps</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video Resolution</th>\n                                                       <td>\n                                                         <select  [value]=\"videoResolution[2]\" (change)=\"videoResolutionSelected($event.target.value,'E3')\">\n                                                            <option value=\"Follow Input\">Follow Input</option>\n                                                            <option value=\"1080i (1920x1080)\">1080i (1920x1080)</option>\n                                                            <option value=\"1080p (1920x1080)\">1080p (1920x1080)</option>\n                                                            <option value=\"3/4 1080i (1440x1080)\">3/4 1080i (1440x1080)</option>\n                                                            <option value=\"720p (1280x720)\">720p (1280x720)</option>\n                                                            <option value=\"4/5 720p (1024x720)\">4/5 720p (1024x720)</option>\n                                                            <option value=\"16:9 PAL (1024x576)\">16:9 PAL (1024x576)</option>\n                                                            <option value=\"D1 NTSC (720x480)\">D1 NTSC (720x480)</option>\n                                                            <option value=\"D1 PAL (720x576)\">D1 PAL (720x576)</option>\n                                                            <option value=\"4-CIF (704x576)\">4-CIF (704x576)</option>\n                                                            <option value=\"VGA (640X480)\">VGA (640X480)</option>\n                                                            <option value=\"640X360\">640X360</option>\n                                                            <option value=\"2-CIF (352x576)\">2-CIF (352x576)</option>\n                                                            <option value=\"2-SIF (352x480)\">2-SIF (352x480)</option>\n                                                            <option value=\"CIF (352x288)\">CIF (352x288)</option>\n                                                            <option value=\"SIF (352x240)\">SIF (352x240)</option>\n                                                            <option value=\"QVGA(320x240)\">QVGA(320x240)</option>\n                                                            <option value=\"WQVGA(320x180)\">WQVGA(320x180)</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Rate Control</th>\n                                                        <td>\n                                                          <select  [value]=\"rateControl[2]\" (change)=\"rateControlSelected($event.target.value,'E3')\">\n                                                            <option value=\"CBR\">CBR</option>\n                                                            <option value=\"VBR\">VBR</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video Bit Rate [Mbps]</th>\n                                                       <td>\n                                                          <input type=\"text\" class=\"form-control\"   [(ngModel)] = \"videoBitRate[2]\" (change)=\" changeVideoBitRate()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video Profile</th>\n                                                       <td>\n                                                         <select  [value]=\"videoProfile[2]\" (change)=\"videoProfileSelected($event.target.value,'E3')\">\n                                                            <option value=\"Baseline\">Baseline</option>\n                                                            <option value=\"Main\">Main</option>\n                                                            <option value=\"High\">High</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Gop Size</th>\n                                                        <td>\n                                                           <select [value]=\"gopSize[2]\" (change)=\"gopSizeSelected($event.target.value,'E3')\">\n                                                            <option value=\"15 Frames\">15 Frames</option>\n                                                            <option value=\"30 Frames\">30 Frames</option>\n                                                            <option value=\"60 Frames\">60 Frames</option>\n                                                            <option value=\"120 Frames\">120 Frames</option>\n                                                            <option value=\"240 Frames\">240 Frames</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video burst size</th>\n                                                        <td>\n                                                         <select [value]=\"videoBurstSize[2]\" (change)=\"videoBurstSizeSelected($event.target.value,'E3')\">\n                                                            <option value=\"150ms\">150ms</option>\n                                                            <option value=\"200ms\">200ms</option>\n                                                            <option value=\"300ms\">300ms</option>\n                                                            <option value=\"400ms\">400ms</option>\n                                                            <option value=\"500ms\">500ms</option>\n                                                            <option value=\"600ms\">600ms</option>\n                                                            <option value=\"800ms\">800ms</option>\n                                                            <option value=\"1000ms\">1000ms</option>\n                                                            <option value=\"1200ms\">1200ms</option>\n                                                            <option value=\"1400ms\">1400ms</option>\n                                                            <option value=\"1600ms\">1600ms</option>\n                                                            <option value=\"1800ms\">1800ms</option>\n                                                            <option value=\"2000ms\">2000ms</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Video Codec</th>\n                                                       <td>\n                                                          <select [value]=\"videoCodec[2]\" (change)=\"videoCodecSelected($event.target.value,'E3')\">\n                                                            <option value=\"H.264\">H.264</option>\n                                                            <option value=\"MPEG-2\">MPEG-2</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Frame Decimation</th>\n                                                       <td>\n                                                         <select [value]=\"frameDecimation[2]\" (change)=\"frameDecimationSelected($event.target.value,'E3')\">\n                                                            <option value=\"None\">None</option>\n                                                            <option value=\"1/2\">1/2</option>\n                                                            <option value=\"1/3\">1/3</option>\n                                                            <option value=\"1/4\">1/4</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                   \n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                                    <div class=\"row\">\n                                <div class=\"col\">\n                                    <div class=\"card mb-3\">\n                                        <div class=\"card-header\"> <b>Output Setup 3</b></div>\n                                        <div class=\"card-block\">\n                                            <table class=\"table \">\n                                                <tbody>\n                                                    <tr>\n                                                        <th scope=\"row\">Output Interface</th>\n                                                        <td>\n                                                         <select [value]=\"outputInterface[2]\" (change)=\"outputInterfaceSelected($event.target.value,'E3')\">\n                                                            <option value=\"Ethernet(VBR)\">Ethernet(VBR)</option>\n                                                            <option value=\"ASI\">ASI</option>\n                                                            <option value=\"ASI + Ethernet(CBR)\">ASI + Ethernet(CBR)</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Output Format</th>\n                                                        <td>\n                                                          <select [value]=\"outputFormat[2]\" (change)=\"outputFormatSelected($event.target.value,'E3')\">\n                                                            <option value=\"RTP\">RTP</option>\n                                                            <option value=\"MPEG-2 TS\">MPEG-2 TS</option>\n                                                          </select>\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Dest IP Address</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"destIpAddress[2]\" (change)=\"changeDestIpAddress()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">Dest Port</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"destPort[2]\" (change)=\"changeDestPort()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">TS Bitrate [Mbps]</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"tsBitrate[2]\"    (change)=\"changeTsBitrate()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">ASI PCR Interval [ms]</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"   [(ngModel)] = \"asiPciInterval[2]\" (change)=\"changeAsiPciInterval()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                       <tr>\n                                                        <th scope=\"row\">PID Audio</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"pidAudio[2]\" (change)=\"changePidAudio()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <th scope=\"row\">PID Video</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"pidVideo[2]\" (change)=\"changePidVideo()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <th scope=\"row\">PID PCR</th>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\" [(ngModel)] = \"pidPcr[2]\"  (change)=\"changePidPcr()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                    </tr>\n                                                    \n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                                    <div class=\"card mb-3\">\n                                        <div class=\"card-header\"> <b>Local IP Setup 3</b></div>\n                                        <div class=\"card-block\">\n                                            <table class=\"table table-hover table-striped\">\n                                                <tbody>\n                                                    <tr>\n                                                        <td>Local IP Address</td>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"   [(ngModel)] = \"localIpAddress[2]\"  (change)=\"changeLocalIpAddress()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                       \n                                                    </tr>\n                                                    <tr>\n                                                        <td>Local Netmask</td>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"localNetmask[2]\" (change)=\"changeLocalNetmask()\"  aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                       \n                                                    </tr>\n                                                    <tr>\n                                                        <td>Default Gateway</td>\n                                                        <td>\n                                                            <input type=\"text\" class=\"form-control\"  [(ngModel)] = \"defaultGateway[2]\" (change)=\"changeDefaultGateway()\" aria-describedby=\"basic-addon1\">\n                                                        </td>\n                                                        \n                                                    </tr>\n                                              \n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div> \n                </div>\n            </div>\n        </div>\n    </div>\n    \n\n"

/***/ }),

/***/ "../../../../../src/app/layout/codificador/codificador.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td {\n  border: 2px solid #000; }\n\n.table tr {\n  border: 2px solid #000; }\n\n@media all and (max-width: 600px) {\n  select {\n    width: 100%;\n    max-width: 100%; } }\n\n@media all and (max-width: 600px) {\n  card {\n    width: 100%;\n    max-width: 100%; } }\n\n@media (max-width: 768px) {\n  .btn-responsive {\n    padding: 2px 4px;\n    font-size: 80%;\n    line-height: 1; } }\n\n@media (min-width: 769px) and (max-width: 992px) {\n  .btn-responsive {\n    padding: 4px 9px;\n    font-size: 90%;\n    line-height: 1.2; } }\n\n.active {\n  background-color: #838282; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/codificador/codificador.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_codificador_service__ = __webpack_require__("../../../../../src/app/Services/codificador.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodificadorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodificadorComponent = (function () {
    function CodificadorComponent(_codificadorService) {
        this._codificadorService = _codificadorService;
        this.videoBitRate = [];
        this.destIpAddress = [];
        this.destPort = [];
        this.tsBitrate = [];
        this.asiPciInterval = []; // en realidad en pcr Interval 
        this.pidAudio = [];
        this.pidVideo = [];
        this.pidPcr = [];
        this.localIpAddress = [];
        this.localNetmask = [];
        this.defaultGateway = [];
        this.activeButtonName = '';
        this.videoSource = this._codificadorService.getVideoSource();
        this.audioSource = this._codificadorService.getAudioSource();
        this.audioCodec = this._codificadorService.getAudioCodec();
        this.audioBitRate = this._codificadorService.getAudioBitRate();
        this.videoResolution = this._codificadorService.getVideoResolution();
        this.rateControl = this._codificadorService.getRateControl();
        this.videoProfile = this._codificadorService.getVideoProfile();
        this.gopSize = this._codificadorService.getGopSize();
        this.videoBurstSize = this._codificadorService.getVideoBurstSize();
        this.videoCodec = this._codificadorService.getVideoCodec();
        this.frameDecimation = this._codificadorService.getFrameDecimation();
        this.outputInterface = this._codificadorService.getOutputInterface();
        this.outputFormat = this._codificadorService.getOutputFormat();
        this.videoBitRate = this._codificadorService.obtenerVideoBitRate();
        this.destIpAddress = this._codificadorService.obtenerDestIpAddress();
        this.destPort = this._codificadorService.obtenerDestPort();
        this.tsBitrate = this._codificadorService.obtenerTsBitRate();
        this.asiPciInterval = this._codificadorService.obtenerAsiPcrInterval();
        this.pidAudio = this._codificadorService.obtenerPidAudio();
        this.pidVideo = this._codificadorService.obtenerPidVideo();
        this.pidPcr = this._codificadorService.obtenerPidPcr();
        this.localIpAddress = this._codificadorService.obtenerLocalIpAddress();
        this.localNetmask = this._codificadorService.obtenerLocalNetMask();
        this.defaultGateway = this._codificadorService.obtenerDefaultGateway();
        this.encoder1 = this._codificadorService.obtenerEncoder1();
        this.encoder2 = this._codificadorService.obtenerEncoder2();
        this.encoder3 = this._codificadorService.obtenerEncoder3();
        this.encoderInit = this._codificadorService.obtenerEncoderInit();
        this.activeButtonName = this.encoderInit;
    }
    CodificadorComponent.prototype.ngOnInit = function () {
    };
    //VIDEO SOURCE
    CodificadorComponent.prototype.videoSourceSelected = function (value, id) {
        if (id === "E1") {
            this.videoSource[0] = value;
            this._codificadorService.actualizarVideoSource(this.videoSource[0], id);
        }
        if (id === "E2") {
            this.videoSource[1] = value;
            this._codificadorService.actualizarVideoSource(this.videoSource[1], id);
        }
        if (id === "E3") {
            this.videoSource[2] = value;
            this._codificadorService.actualizarVideoSource(this.videoSource[2], id);
        }
    };
    //AUDIO SOURCE
    CodificadorComponent.prototype.audioSourceSelected = function (value, id) {
        if (id === "E1") {
            this.audioSource[0] = value;
            this._codificadorService.actualizarAudioSource(this.audioSource[0], id);
        }
        if (id === "E2") {
            this.audioSource[1] = value;
            this._codificadorService.actualizarAudioSource(this.audioSource[1], id);
        }
        if (id === "E3") {
            this.audioSource[2] = value;
            this._codificadorService.actualizarAudioSource(this.audioSource[2], id);
        }
    };
    //AUDIO CODEC
    CodificadorComponent.prototype.audioCodecSelected = function (value, id) {
        if (id === "E1") {
            this.audioCodec[0] = value;
            this._codificadorService.actualizarAudioCodec(this.audioCodec[0], id);
        }
        if (id === "E2") {
            this.audioCodec[1] = value;
            this._codificadorService.actualizarAudioCodec(this.audioCodec[1], id);
        }
        if (id === "E3") {
            this.audioCodec[2] = value;
            this._codificadorService.actualizarAudioCodec(this.audioCodec[2], id);
        }
    };
    //AUDIO BIT RATE
    CodificadorComponent.prototype.audioBitRateSelected = function (value, id) {
        if (id === "E1") {
            this.audioBitRate[0] = value;
            this._codificadorService.actualizarAudioBitRate(this.audioBitRate[0], id);
        }
        if (id === "E2") {
            this.audioBitRate[1] = value;
            this._codificadorService.actualizarAudioBitRate(this.audioBitRate[1], id);
        }
        if (id === "E3") {
            this.audioBitRate[2] = value;
            this._codificadorService.actualizarAudioBitRate(this.audioBitRate[2], id);
        }
    };
    //VIDEO RESOLUTION
    CodificadorComponent.prototype.videoResolutionSelected = function (value, id) {
        if (id === "E1") {
            this.videoResolution[0] = value;
            this._codificadorService.actualizarVideoResolution(this.videoResolution[0], id);
        }
        if (id === "E2") {
            this.videoResolution[1] = value;
            this._codificadorService.actualizarVideoResolution(this.videoResolution[1], id);
        }
        if (id === "E3") {
            this.videoResolution[2] = value;
            this._codificadorService.actualizarVideoResolution(this.videoResolution[2], id);
        }
    };
    // RATE CONTROL
    CodificadorComponent.prototype.rateControlSelected = function (value, id) {
        if (id === "E1") {
            this.rateControl[0] = value;
            this._codificadorService.actualizarRateControl(this.rateControl[0], id);
        }
        if (id === "E2") {
            this.rateControl[1] = value;
            this._codificadorService.actualizarRateControl(this.rateControl[1], id);
        }
        if (id === "E3") {
            this.rateControl[2] = value;
            this._codificadorService.actualizarRateControl(this.rateControl[2], id);
        }
    };
    //VIDEO BIT RATE
    //VIDEO PROFILE
    CodificadorComponent.prototype.videoProfileSelected = function (value, id) {
        if (id === "E1") {
            this.videoProfile[0] = value;
            this._codificadorService.actualizarVideoProfile(this.videoProfile[0], id);
        }
        if (id === "E2") {
            this.videoProfile[1] = value;
            this._codificadorService.actualizarVideoProfile(this.videoProfile[1], id);
        }
        if (id === "E3") {
            this.videoProfile[2] = value;
            this._codificadorService.actualizarVideoProfile(this.videoProfile[2], id);
        }
    };
    //GOP SIZE
    CodificadorComponent.prototype.gopSizeSelected = function (value, id) {
        if (id === "E1") {
            this.gopSize[0] = value;
            this._codificadorService.actualizarGopSize(this.gopSize[0], id);
        }
        if (id === "E2") {
            this.gopSize[1] = value;
            this._codificadorService.actualizarGopSize(this.gopSize[1], id);
        }
        if (id === "E3") {
            this.gopSize[2] = value;
            this._codificadorService.actualizarGopSize(this.gopSize[2], id);
        }
    };
    //VIDEO BURST SIZE
    CodificadorComponent.prototype.videoBurstSizeSelected = function (value, id) {
        if (id === "E1") {
            this.videoBurstSize[0] = value;
            this._codificadorService.actualizarVideoBurstSize(this.videoBurstSize[0], id);
        }
        if (id === "E2") {
            this.videoBurstSize[1] = value;
            this._codificadorService.actualizarVideoBurstSize(this.videoBurstSize[1], id);
        }
        if (id === "E3") {
            this.videoBurstSize[2] = value;
            this._codificadorService.actualizarVideoBurstSize(this.videoBurstSize[2], id);
        }
    };
    //VIDEO CODEC
    CodificadorComponent.prototype.videoCodecSelected = function (value, id) {
        if (id === "E1") {
            this.videoCodec[0] = value;
            this._codificadorService.actualizarVideoCodec(this.videoCodec[0], id);
        }
        if (id === "E2") {
            this.videoCodec[1] = value;
            this._codificadorService.actualizarVideoCodec(this.videoCodec[1], id);
        }
        if (id === "E3") {
            this.videoCodec[2] = value;
            this._codificadorService.actualizarVideoCodec(this.videoCodec[2], id);
        }
    };
    //FRAME DECIMATION
    CodificadorComponent.prototype.frameDecimationSelected = function (value, id) {
        if (id === "E1") {
            this.frameDecimation[0] = value;
            this._codificadorService.actualizarFrameDecimation(this.frameDecimation[0], id);
        }
        if (id === "E2") {
            this.frameDecimation[1] = value;
            this._codificadorService.actualizarFrameDecimation(this.frameDecimation[1], id);
        }
        if (id === "E3") {
            this.frameDecimation[2] = value;
            this._codificadorService.actualizarFrameDecimation(this.frameDecimation[2], id);
        }
    };
    //OUTPUT INTERFACE
    CodificadorComponent.prototype.outputInterfaceSelected = function (value, id) {
        if (id === "E1") {
            this.outputInterface[0] = value;
            this._codificadorService.actualizarOutputInterface(this.outputInterface[0], id);
        }
        if (id === "E2") {
            this.outputInterface[1] = value;
            this._codificadorService.actualizarOutputInterface(this.outputInterface[1], id);
        }
        if (id === "E3") {
            this.outputInterface[2] = value;
            this._codificadorService.actualizarOutputInterface(this.outputInterface[2], id);
        }
    };
    //OUTPUT FORMAT
    CodificadorComponent.prototype.outputFormatSelected = function (value, id) {
        if (id === 'E1') {
            this.outputFormat[0] = value;
            this._codificadorService.actualizarOutputFormat(this.outputFormat[0], id);
        }
        if (id === 'E2') {
            this.outputFormat[1] = value;
            this._codificadorService.actualizarOutputFormat(this.outputFormat[1], id);
        }
        if (id === 'E3') {
            this.outputFormat[2] = value;
            this._codificadorService.actualizarOutputFormat(this.outputFormat[2], id);
        }
    };
    CodificadorComponent.prototype.changeVideoBitRate = function () {
        this._codificadorService.actualizarVideoBitRate(this.videoBitRate);
    };
    CodificadorComponent.prototype.changeDestIpAddress = function () {
        this._codificadorService.actualizarDestIpAddress(this.destIpAddress);
    };
    CodificadorComponent.prototype.changeDestPort = function () {
        this._codificadorService.actualizarDestPort(this.destPort);
    };
    CodificadorComponent.prototype.changeTsBitrate = function () {
        this._codificadorService.actualizarTsBitRate(this.tsBitrate);
    };
    CodificadorComponent.prototype.changeAsiPciInterval = function () {
        this._codificadorService.actualizarAsiPcrInterval(this.asiPciInterval);
    };
    CodificadorComponent.prototype.changePidAudio = function () {
        this._codificadorService.actualizarPidAudio(this.pidAudio);
    };
    CodificadorComponent.prototype.changePidVideo = function () {
        this._codificadorService.actualizarPidVideo(this.pidVideo);
    };
    CodificadorComponent.prototype.changePidPcr = function () {
        this._codificadorService.actualizarPidPcr(this.pidPcr);
    };
    CodificadorComponent.prototype.changeLocalIpAddress = function () {
        this._codificadorService.actualizarLocalIpAddress(this.localIpAddress);
    };
    CodificadorComponent.prototype.changeLocalNetmask = function () {
        this._codificadorService.actualizarLocalNetMask(this.localNetmask);
    };
    CodificadorComponent.prototype.changeDefaultGateway = function () {
        this._codificadorService.actualizarDefaultGateway(this.defaultGateway);
    };
    CodificadorComponent.prototype.encoderSelected = function (value) {
        if (value === "encoder1") {
            this.activeButtonName = value;
            this.encoder1 = true;
            this.encoder2 = false;
            this.encoder3 = false;
            this._codificadorService.actualizarEncoder1(this.encoder1);
            this._codificadorService.actualizarEncoder2(this.encoder2);
            this._codificadorService.actualizarEncoder3(this.encoder3);
            this._codificadorService.actualizarEncoderInit('encoder1');
        }
        if (value === "encoder2") {
            this.activeButtonName = value;
            this.encoder1 = false;
            this.encoder2 = true;
            this.encoder3 = false;
            this._codificadorService.actualizarEncoder1(this.encoder1);
            this._codificadorService.actualizarEncoder2(this.encoder2);
            this._codificadorService.actualizarEncoder3(this.encoder3);
            this._codificadorService.actualizarEncoderInit('encoder2');
        }
        if (value === "encoder3") {
            this.activeButtonName = value;
            this.encoder1 = false;
            this.encoder2 = false;
            this.encoder3 = true;
            this._codificadorService.actualizarEncoder1(this.encoder1);
            this._codificadorService.actualizarEncoder2(this.encoder2);
            this._codificadorService.actualizarEncoder3(this.encoder3);
            this._codificadorService.actualizarEncoderInit('encoder3');
        }
        this.lastSelected = value;
    };
    return CodificadorComponent;
}());
CodificadorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-codificador',
        template: __webpack_require__("../../../../../src/app/layout/codificador/codificador.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/codificador/codificador.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_Services_codificador_service__["a" /* CodificadorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_codificador_service__["a" /* CodificadorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_codificador_service__["a" /* CodificadorService */]) === "function" && _a || Object])
], CodificadorComponent);

var _a;
//# sourceMappingURL=codificador.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/codificador/codificador.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codificador_routing_module__ = __webpack_require__("../../../../../src/app/layout/codificador/codificador-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__codificador_component__ = __webpack_require__("../../../../../src/app/layout/codificador/codificador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodificadorModule", function() { return CodificadorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CodificadorModule = (function () {
    function CodificadorModule() {
    }
    return CodificadorModule;
}());
CodificadorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__codificador_routing_module__["a" /* CodificadorRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__codificador_component__["a" /* CodificadorComponent */],
        ]
    })
], CodificadorModule);

//# sourceMappingURL=codificador.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/codificador/init-codificador.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitCodificador; });
var InitCodificador = (function () {
    function InitCodificador() {
    }
    InitCodificador.prototype.load = function () {
        if (localStorage.getItem('videoSource') === null || localStorage.getItem('audioSource') === null || localStorage.getItem('audioCodec') === null
            || localStorage.getItem('audioBitRate') === null || localStorage.getItem('videoResolution') === null || localStorage.getItem('videoResolution') === null
            || localStorage.getItem('videoProfile') === null || localStorage.getItem('gopSize') === null || localStorage.getItem('videoBurstSize') === null
            || localStorage.getItem('outputInterface') === null || localStorage.getItem('outputFormat') === null || localStorage.getItem('videoBitRate') === null
            || localStorage.getItem('destIpAddress') === null || localStorage.getItem('destPort') === null || localStorage.getItem('tsBitRate') === null
            || localStorage.getItem('asiPcrInterval') === null || localStorage.getItem('pidAudio') === null || localStorage.getItem('pidVideo') === null
            || localStorage.getItem('pidPcr') === null || localStorage.getItem('localIpAddress') === null || localStorage.getItem('localNetMask') === null
            || localStorage.getItem('defaultGateway') === null) {
            var videoSource = ['SDI', 'SDI', 'SDI'];
            var audioSource = ['Analog Jacks', 'Analog Jacks', 'Analog Jacks'];
            var audioCodec = ['AAC-LC ADTS', 'AAC-LC ADTS', 'AAC-LC ADTS'];
            var audioBitRate = ['64 Kbps', '64 Kbps', '64 Kbps'];
            var videoResolution = ['Follow Input', 'Follow Input', 'Follow Input'];
            var rateControl = ['CBR', 'CBR', 'CBR'];
            var videoProfile = ['Baseline', 'Baseline', 'Baseline'];
            var gopSize = ['15 Frames', '15 Frames', '15 Frames'];
            var videoBurstSize = ['150ms', '150ms', '150ms'];
            var videoCodec = ['H.264', 'H.264', 'H.264'];
            var frameDecimation = ['None', 'None', 'None'];
            var outputInterface = ['Ethernet(VBR)', 'Ethernet(VBR)', 'Ethernet(VBR)'];
            var outputFormat = ['RTP', 'RTP', 'RTP'];
            var videoBitRate = ['0', '0', '0'];
            var destIpAddress = ['0.0.0.0', '0.0.0.0', '0.0.0.0'];
            var destPort = ['0', '0', '0'];
            var tsBitRate = ['0', '0', '0'];
            var asiPcrInterval = ['0', '0', '0'];
            var pidAudio = ['0', '0', '0'];
            var pidVideo = ['0', '0', '0'];
            var pidPcr = ['0', '0', '0'];
            var localIpAddress = ['0.0.0.0', '0.0.0.0', '0.0.0.0'];
            var localNetMask = ['0.0.0.0', '0.0.0.0', '0.0.0.0'];
            var defaultGateway = ['0.0.0.0', '0.0.0.0', '0.0.0.0'];
            var encoder1 = false;
            var encoder2 = false;
            var encoder3 = false;
            localStorage.setItem('videoSource', JSON.stringify(videoSource));
            localStorage.setItem('audioSource', JSON.stringify(audioSource));
            localStorage.setItem('audioCodec', JSON.stringify(audioCodec));
            localStorage.setItem('audioBitRate', JSON.stringify(audioBitRate));
            localStorage.setItem('videoResolution', JSON.stringify(videoResolution));
            localStorage.setItem('rateControl', JSON.stringify(rateControl));
            localStorage.setItem('videoProfile', JSON.stringify(videoProfile));
            localStorage.setItem('gopSize', JSON.stringify(gopSize));
            localStorage.setItem('videoBurstSize', JSON.stringify(videoBurstSize));
            localStorage.setItem('videoCodec', JSON.stringify(videoCodec));
            localStorage.setItem('frameDecimation', JSON.stringify(frameDecimation));
            localStorage.setItem('outputInterface', JSON.stringify(outputInterface));
            localStorage.setItem('outputFormat', JSON.stringify(outputFormat));
            localStorage.setItem('videoBitRate', JSON.stringify(videoBitRate));
            localStorage.setItem('destIpAddress', JSON.stringify(destIpAddress));
            localStorage.setItem('destPort', JSON.stringify(destPort));
            localStorage.setItem('tsBitRate', JSON.stringify(tsBitRate));
            localStorage.setItem('asiPcrInterval', JSON.stringify(asiPcrInterval));
            localStorage.setItem('pidAudio', JSON.stringify(pidAudio));
            localStorage.setItem('pidVideo', JSON.stringify(pidVideo));
            localStorage.setItem('pidPcr', JSON.stringify(pidPcr));
            localStorage.setItem('localIpAddress', JSON.stringify(localIpAddress));
            localStorage.setItem('localNetMask', JSON.stringify(localNetMask));
            localStorage.setItem('defaultGateway', JSON.stringify(defaultGateway));
            localStorage.setItem('encoder1', JSON.stringify(encoder1));
            localStorage.setItem('encoder2', JSON.stringify(encoder2));
            localStorage.setItem('encoder3', JSON.stringify(encoder3));
        }
        else { }
    };
    return InitCodificador;
}());

//# sourceMappingURL=init-codificador.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map