webpackJsonp([2],{

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

/***/ }),

/***/ "../../../../../src/app/layout/menu-interactivo/menu-interactivo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_interactivo_component__ = __webpack_require__("../../../../../src/app/layout/menu-interactivo/menu-interactivo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuInteractivoRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__menu_interactivo_component__["a" /* MenuInteractivoComponent */] }
];
var MenuInteractivoRoutingModule = (function () {
    function MenuInteractivoRoutingModule() {
    }
    return MenuInteractivoRoutingModule;
}());
MenuInteractivoRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], MenuInteractivoRoutingModule);

//# sourceMappingURL=menu-interactivo-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/menu-interactivo/menu-interactivo.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body>\n<div *ngIf=\"flujoASI1\">\n        <br>\n  <u><P>FLUJO ASI 1</P></u>  \n\n  Este flujo binario corresponde a la salida del Encoder 1. Esta organizado en paquetes de 188 bytes. \n  Contienen video y audio comprimidos en MPEG-4 AVC/H-264 y HE-ACC respectivamente.\n  <br><br>\n\n    <table class=\"table table-bordered\">\n    \n            <thead>\n                    <tr>\n                            <th>PID Audio</th>\n                            <th>PID Video</th>\n                            <th>PID PCR</th>\n                            <th>Intervalo de PCR [ms]</th>\n                            <th>TS Bitrate [Mbps]</th>\n                         \n                        </tr>\n            </thead>\n            <tbody>\n                    <tr>\n                            <td > {{pidAudio[0]}} </td>\n                            <td>{{pidVideo[0]}}</td>\n                            <td>{{pidPcr[0]}} </td>\n                            <td> {{asiPciInterval[0]}}</td>\n                            <td>{{tsBitrate[0]}}</td>\n                           \n                        </tr>\n                       \n            </tbody>\n    </table>\n    </div>\n    \n    <div *ngIf=\"flujoASI2\">\n            <br>\n       <u><P>FLUJO ASI 2</P></u> \n\n  Este flujo binario corresponde a la salida del Encoder 2. Esta organizado en paquetes de 188 bytes. \n  Contienen video y audio comprimidos en MPEG-4 AVC/H-264 y HE-ACC respectivamente.\n  <br><br>\n  \n        <table class=\"table table-bordered\">\n        \n                <thead>\n                        <tr>\n                                <th>PID Audio</th>\n                                <th>PID Video</th>\n                                <th>PID PCR</th>\n                                <th>Intervalo de PCR [ms]</th>\n                                <th>TS Bitrate [Mbps]</th>\n                               \n                            </tr>\n                </thead>\n                <tbody>\n                        <tr>\n                                <td > {{pidAudio[1]}} </td>\n                                <td>{{pidVideo[1]}}</td>\n                                <td>{{pidPcr[1]}} </td>\n                                <td> {{asiPciInterval[1]}}</td>\n                                <td>{{tsBitrate[1]}}</td>\n                               \n                            </tr>\n                           \n                </tbody>\n        </table>\n        </div>\n    \n        <div *ngIf=\"flujoASI3\">\n                <br>\n          <u><P>FLUJO ASI 3</P></u>  \n\n  Este flujo binario corresponde a la salida del Encoder 3. Esta organizado en paquetes de 188 bytes. \n  Contienen video y audio comprimidos en MPEG-4 AVC/H-264 y HE-ACC respectivamente.\n  <br><br>\n  \n            <table class=\"table table-bordered\">\n            \n                    <thead>\n                            <tr>\n                                    <th>PID Audio</th>\n                                    <th>PID Video</th>\n                                    <th>PID PCR</th>\n                                    <th>Intervalo de PCR [ms]</th>\n                                    <th>TS Bitrate [Mbps]</th>\n                                  \n                                </tr>\n                    </thead>\n                    <tbody>\n                            <tr>\n                                <td > {{pidAudio[2]}} </td>\n                                <td>{{pidVideo[2]}}</td>\n                                <td>{{pidPcr[2]}} </td>\n                                <td> {{asiPciInterval[2]}}</td>\n                                <td>{{tsBitrate[2]}}</td>\n                             \n                                </tr>\n                               \n                    </tbody>\n            </table>\n            </div>\n            <div *ngIf=\"flujoTS\">\n                      <u><P>FLUJO TS MPEG-2</P></u>  \n\n                      En el multiplexor se combinan las salidas de los 3 encoders con datos adicionales en forma de tablas\n                        con información  necesaria para la transmisión. La tasa binaria del flujo TS MPEG-2 \n                        es igual a la sumatoria de la tasa binaria de las tres entradas DVB-ASI.  \n                            \n            <br>  <br>  \n                        <table class=\"table table-bordered\">\n\n                                        <thead>\n                                                <tr>\n                                                        <th>TS Bitrate [Mbps]</th>\n                                                        <th>{{tsBitrateTotal}}</th>\n                                                    </tr>\n                                        </thead>\n                                </table>                    \n                    <P>Servicio 1</P>\n                    <table class=\"table table-bordered\">\n                            \n                                    <thead>\n                                            <tr>\n                                                    <th *ngIf=\"ASI1Enable[0]\">PID Out 1</th>\n                                                    <th *ngIf=\"ASI1Enable[1]\">PID Out 2</th>\n                                                    <th *ngIf=\"ASI1Enable[2]\">PID Out 3</th>\n                                                    <th *ngIf=\"ASI1Enable[3]\">PID Out 4</th>\n                                                    <th *ngIf=\"ASI1Enable[4]\">PID Out 5</th>\n                                                    <th *ngIf=\"ASI1Enable[5]\">PID Out 6</th>\n                                                    <th *ngIf=\"ASI1Enable[6]\">PID Out 7</th>\n                                                    <th *ngIf=\"ASI1Enable[7]\">PID Out 8</th>\n                                                    <th *ngIf=\"ASI1Enable[8]\">PID Out 9</th>\n                                                    <th *ngIf=\"ASI1Enable[9]\">PID Out 10</th>\n                                                </tr>\n                                    </thead>\n                                    <tbody>\n                                            <tr>\n                                                        <td *ngIf=\"ASI1Enable[0]\" > {{ASI1Output[0]}} </td>\n                                                        <td *ngIf=\"ASI1Enable[1]\" > {{ASI1Output[1]}} </td>\n                                                        <td *ngIf=\"ASI1Enable[2]\" > {{ASI1Output[2]}} </td>\n                                                        <td *ngIf=\"ASI1Enable[3]\" > {{ASI1Output[3]}} </td>\n                                                        <td *ngIf=\"ASI1Enable[4]\" > {{ASI1Output[4]}} </td>\n                                                        <td *ngIf=\"ASI1Enable[5]\" > {{ASI1Output[5]}} </td>\n                                                        <td *ngIf=\"ASI1Enable[6]\" > {{ASI1Output[6]}} </td>\n                                                        <td *ngIf=\"ASI1Enable[7]\" > {{ASI1Output[7]}} </td>\n                                                        <td *ngIf=\"ASI1Enable[8]\" > {{ASI1Output[8]}} </td>\n                                                        <td *ngIf=\"ASI1Enable[9]\" > {{ASI1Output[9]}} </td>\n\n                                                </tr>\n                                               \n                                    </tbody>\n                            </table>\n                            <P>Servicio 2</P>\n                            <table class=\"table table-bordered\">\n                                    \n                                            <thead>\n                                                    <tr>\n                                                        <th *ngIf=\"ASI2Enable[0]\">PID Out 1</th>\n                                                        <th *ngIf=\"ASI2Enable[1]\">PID Out 2</th>\n                                                        <th *ngIf=\"ASI2Enable[2]\">PID Out 3</th>\n                                                        <th *ngIf=\"ASI2Enable[3]\">PID Out 4</th>\n                                                        <th *ngIf=\"ASI2Enable[4]\">PID Out 5</th>\n                                                        <th *ngIf=\"ASI2Enable[5]\">PID Out 6</th>\n                                                        <th *ngIf=\"ASI2Enable[6]\">PID Out 7</th>\n                                                        <th *ngIf=\"ASI2Enable[7]\">PID Out 8</th>\n                                                        <th *ngIf=\"ASI2Enable[8]\">PID Out 9</th>\n                                                        <th *ngIf=\"ASI2Enable[9]\">PID Out 10</th>\n                                                        </tr>\n                                            </thead>\n                                            <tbody>\n                                                    <tr>\n                                                                <td *ngIf=\"ASI2Enable[0]\" > {{ASI2Output[0]}} </td>\n                                                                <td *ngIf=\"ASI2Enable[1]\" > {{ASI2Output[1]}} </td>\n                                                                <td *ngIf=\"ASI2Enable[2]\" > {{ASI2Output[2]}} </td>\n                                                                <td *ngIf=\"ASI2Enable[3]\" > {{ASI2Output[3]}} </td>\n                                                                <td *ngIf=\"ASI2Enable[4]\" > {{ASI2Output[4]}} </td>\n                                                                <td *ngIf=\"ASI2Enable[5]\" > {{ASI2Output[5]}} </td>\n                                                                <td *ngIf=\"ASI2Enable[6]\" > {{ASI2Output[6]}} </td>\n                                                                <td *ngIf=\"ASI2Enable[7]\" > {{ASI2Output[7]}} </td>\n                                                                <td *ngIf=\"ASI2Enable[8]\" > {{ASI2Output[8]}} </td>\n                                                                <td *ngIf=\"ASI2Enable[9]\" > {{ASI2Output[9]}} </td>\n                                                        </tr>\n                                                       \n                                            </tbody>\n                                    </table>   \n                                    <P>Servicio 3</P>\n                                    <table class=\"table table-bordered\">\n                                            \n                                                    <thead>\n                                                            <tr>\n                                                                <th *ngIf=\"ASI3Enable[0]\">PID Out 1</th>\n                                                                <th *ngIf=\"ASI3Enable[1]\">PID Out 2</th>\n                                                                <th *ngIf=\"ASI3Enable[2]\">PID Out 3</th>\n                                                                <th *ngIf=\"ASI3Enable[3]\">PID Out 4</th>\n                                                                <th *ngIf=\"ASI3Enable[4]\">PID Out 5</th>\n                                                                <th *ngIf=\"ASI3Enable[5]\">PID Out 6</th>\n                                                                <th *ngIf=\"ASI3Enable[6]\">PID Out 7</th>\n                                                                <th *ngIf=\"ASI3Enable[7]\">PID Out 8</th>\n                                                                <th *ngIf=\"ASI3Enable[8]\">PID Out 9</th>\n                                                                <th *ngIf=\"ASI3Enable[9]\">PID Out 10</th>\n                                                                </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                            <tr>\n                                                                        <td *ngIf=\"ASI3Enable[0]\" > {{ASI3Output[0]}} </td>\n                                                                        <td *ngIf=\"ASI3Enable[1]\" > {{ASI3Output[1]}} </td>\n                                                                        <td *ngIf=\"ASI3Enable[2]\" > {{ASI3Output[2]}} </td>\n                                                                        <td *ngIf=\"ASI3Enable[3]\" > {{ASI3Output[3]}} </td>\n                                                                        <td *ngIf=\"ASI3Enable[4]\" > {{ASI3Output[4]}} </td>\n                                                                        <td *ngIf=\"ASI3Enable[5]\" > {{ASI3Output[5]}} </td>\n                                                                        <td *ngIf=\"ASI3Enable[6]\" > {{ASI3Output[6]}} </td>\n                                                                        <td *ngIf=\"ASI3Enable[7]\" > {{ASI3Output[7]}} </td>\n                                                                        <td *ngIf=\"ASI3Enable[8]\" > {{ASI3Output[8]}} </td>\n                                                                        <td *ngIf=\"ASI3Enable[9]\" > {{ASI3Output[9]}} </td>\n                                                                </tr>\n                                                               \n                                                    </tbody>\n                                            </table>  \n                                            <P>Tablas</P>\n                                            <table class=\"table table-bordered\">\n                                                \n                                                <thead>\n                                                        <tr>\n                                                                <th></th>\n                                                                <th *ngIf=\"TableEnable[0]\">PAT</th>\n                                                                <th *ngIf=\"TableEnable[1]\">CAT</th>\n                                                                <th *ngIf=\"TableEnable[2]\">NIT</th>\n                                                                <th *ngIf=\"TableEnable[3]\">SDT</th>\n                                                                <th *ngIf=\"TableEnable[4]\">BIT</th>\n                                                                <th *ngIf=\"TableEnable[5]\">PMT1</th>\n                                                                <th *ngIf=\"TableEnable[6]\">PMT2</th>\n                                                                <th *ngIf=\"TableEnable[7]\">PMT3</th>\n                                                            </tr>\n                                                </thead>\n                                                <tbody>\n                                                        <tr>\n                                                                    <td><b>PID</b></td>\n                                                                    <td *ngIf=\"TableEnable[0]\">0</td>\n                                                                    <td *ngIf=\"TableEnable[1]\">1</td>\n                                                                    <td *ngIf=\"TableEnable[2]\">16</td>\n                                                                    <td *ngIf=\"TableEnable[3]\">17</td>\n                                                                    <td *ngIf=\"TableEnable[4]\">36</td>\n                                                                    <td *ngIf=\"TableEnable[5]\">{{TablePmtPid[0]}}</td>\n                                                                    <td *ngIf=\"TableEnable[6]\">{{TablePmtPid[1]}}</td>\n                                                                    <td *ngIf=\"TableEnable[7]\">{{TablePmtPid[2]}}</td>\n                                                        </tr>\n                                                        <tr>\n                                                                    <td><b>Layer</b></td>\n                                                                    <td *ngIf=\"TableEnable[0]\">{{tableLayer[0]}}</td>\n                                                                    <td *ngIf=\"TableEnable[1]\">{{tableLayer[1]}}</td>\n                                                                    <td *ngIf=\"TableEnable[2]\">{{tableLayer[2]}}</td>\n                                                                    <td *ngIf=\"TableEnable[3]\">{{tableLayer[3]}}</td>\n                                                                    <td *ngIf=\"TableEnable[4]\">{{tableLayer[4]}}</td>\n                                                                    <td *ngIf=\"TableEnable[5]\">{{tableLayer[5]}}</td>\n                                                                    <td *ngIf=\"TableEnable[6]\">{{tableLayer[6]}}</td>\n                                                                    <td *ngIf=\"TableEnable[7]\">{{tableLayer[7]}}</td>\n                                                            </tr>\n                                                           \n                                                </tbody>\n                                                                                </table>                                                                                       \n                    </div>\n\n\n\n\n    <div *ngIf=\"flujoBTS\">\n            <u><P>FLUJO BTS</P></u>\n\n            Este flujo posee una tasa binaria constante de 32,5 Mbps, lo cual se logra agregando una determinada cantidad\n            de paquetes nulos. A los paquetes TS se le agregan 16 bytes los cuales corresponden: 8 bytes al campo \"ISDB-Info\" y \n            8 bytes para incorporar un bloque de paridad Reed Solomon (opcional) para la corrección de bytes erróneos en cada TSP del \n            flujo BTS.\n\n            <br>  <br>  \n\n            <table class=\"table table-bordered\">\n                        \n                        <thead>\n                                <tr>\n                                        <th></th>\n                                        <th >Capa A</th>\n                                        <th >Capa B</th>\n                                        <th >Capa C</th>\n                                    </tr>\n                        </thead>\n                        <tbody>\n                                <tr>\n                                            <td ><b>Total de TSP</b></td>\n                                            <td >{{tspCapa[0]}}</td>\n                                            <td >{{tspCapa[1]}}</td>\n                                            <td >{{tspCapa[2]}}</td>\n                                            \n                                </tr>\n                                <tr>\n                                            <td><b>Nº de TSP nulos transportados por el BTS en un cuadro múltiplex</b></td>\n                                            <td  colspan=\"3\"  style=\"text-align:center;\" >{{tspNulos}} + 1 Paquete IIP</td>\n\n\n                                    </tr>\n                                   \n                        </tbody>\n                                                        </table> \n            </div>\n    \n     \n   \n          <!-- Beginning of CoffeeCup Image Map -->\n          \n                        <div style=\"overflow-y:auto;\">\n                                        <img  src=\"https://image.ibb.co/koxX8k/MENU2.png\"    usemap=\"#menu\" border=0>\n                                        <map  name=\"menu\">\n                                          <area shape=\"rect\"   coords=\"202,26,315,119\" href=\"codificador\" (click)=\"SeleccionEncoder1()\"  alt=\"\" >\n                                          <area shape=\"rect\" coords=\"203,153,316,247\" href=\"codificador\" (click)=\"SeleccionEncoder2()\" alt=\"\" >\n                                          <area shape=\"rect\"  coords=\"202,282,315,375\" href=\"codificador\" (click)=\"SeleccionEncoder3()\" alt=\"\" >\n                                          <area shape=\"rect\"   coords=\"411,140,462,260\" href=\"multiplexor\"  alt=\"\" >\n                                          <area shape=\"rect\" coords=\"591,140,641,259\" href=\"remux\"  alt=\"\" >\n                                          <area shape=\"rect\"  coords=\"769,140,819,260\"   href=\"modulador\">\n                                          <area shape=\"poly\" coords=\"319,68,348,68,348,168,394,168,394,161,410,171,394,180,394,173,341,173,341,74,320,74,320,68\"  (click)=\"ASI1()\" alt=\"\" >\n                                          <area shape=\"poly\" coords=\"318,196,394,196,394,190,411,200,394,209,394,202,320,202,320,195\"(click)=\"ASI2()\"   alt=\"\" >\n                                          <area shape=\"poly\" coords=\"319,326,342,326,342,227,395,227,394,222,410,231,394,240,394,234,348,234,348,331,319,331,319,325\" (click)=\"ASI3()\"  alt=\"\">\n                                          <area shape=\"poly\" coords=\"466,197,573,197,573,190,592,199,574,209,574,202,466,202,466,197\" (click)=\"TSmethod()\"alt=\"\">\n                                          <area shape=\"poly\" coords=\"645,196,752,196,752,191,769,199,752,208,752,203,646,202,646,197\" (click)=\"BTSmethod()\" alt=\"\">\n                                        </map>\n                \n                          </div>\n          \n         \n\n<!-- End of CoffeeCup Image Map -->\n\n     \n\n\n    </body>\n<!-- Beginning of CoffeeCup Image Map Responsive Scripts --> \n<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js\"></script>\n<script src=\"jquery.rwdImageMaps.min.js\"></script>\n<script>$(document).ready(function(e) {$('img[usemap]').rwdImageMaps();});</script>\n<!-- End of CoffeeCup Image Map Responsive Scripts --> \n"

/***/ }),

/***/ "../../../../../src/app/layout/menu-interactivo/menu-interactivo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td {\n  border: 2px solid #000; }\n\n.table tr {\n  border: 2px solid #000; }\n\n.table th {\n  border: 2px solid #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/menu-interactivo/menu-interactivo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_Services_codificador_service__ = __webpack_require__("../../../../../src/app/Services/codificador.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_Services_multiplexor_service__ = __webpack_require__("../../../../../src/app/Services/multiplexor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_Services_modulador_service__ = __webpack_require__("../../../../../src/app/Services/modulador.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuInteractivoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuInteractivoComponent = (function () {
    function MenuInteractivoComponent(_codificadorService, _multiplexorService, _moduladorService) {
        this._codificadorService = _codificadorService;
        this._multiplexorService = _multiplexorService;
        this._moduladorService = _moduladorService;
        this.flujoTS = false;
        this.flujoBTS = false;
        this.flujoASI1 = false;
        this.flujoASI2 = false;
        this.flujoASI3 = false;
        // del codificador
        this.pidAudio = [];
        this.pidVideo = [];
        this.pidPcr = [];
        this.tsBitrate = [];
        this.asiPciInterval = [];
        // del multiplexor
        this.tableLayer = [];
        this.TablePmtPid = [];
        this.TableEnable = [];
        this.ASI1Enable = [];
        this.ASI2Enable = [];
        this.ASI3Enable = [];
        this.ASI1Output = [];
        this.ASI2Output = [];
        this.ASI3Output = [];
        this.tspCapa = [];
        this.pidAudio = this._codificadorService.obtenerPidAudio();
        this.pidVideo = this._codificadorService.obtenerPidVideo();
        this.pidPcr = this._codificadorService.obtenerPidPcr();
        this.tsBitrate = this._codificadorService.obtenerTsBitRate();
        this.asiPciInterval = this._codificadorService.obtenerAsiPcrInterval();
        this.sumTsTotal();
        this._codificadorService.obtenerEncoder1();
        this._codificadorService.obtenerEncoder2();
        this._codificadorService.obtenerEncoder3();
        this.tableLayer = this._multiplexorService.obtenerTableLayer();
        this.TablePmtPid = this._multiplexorService.obtenerTablePmtPid();
        this.TableEnable = this._multiplexorService.obtenerTableEnable();
        this.tspNulos = this._moduladorService.obtenerTspNulos();
        this.tspCapa = this._moduladorService.obtenerTspCapa();
        this.ASI1Enable = this._multiplexorService.obtenerASI1Enable();
        this.ASI2Enable = this._multiplexorService.obtenerASI2Enable();
        this.ASI3Enable = this._multiplexorService.obtenerASI3Enable();
        this.ASI1Output = this._multiplexorService.obtenerASI1Output();
        this.ASI2Output = this._multiplexorService.obtenerASI2Output();
        this.ASI3Output = this._multiplexorService.obtenerASI3Output();
    }
    MenuInteractivoComponent.prototype.ngOnInit = function () {
    };
    MenuInteractivoComponent.prototype.sumTsTotal = function () {
        this.tsBitrateTotal = (+this.tsBitrate[0] + +this.tsBitrate[1] + +this.tsBitrate[2]);
    };
    MenuInteractivoComponent.prototype.ASI1 = function () {
        this.flujoASI1 = true;
        this.flujoASI2 = false;
        this.flujoASI3 = false;
        this.flujoBTS = false;
        this.flujoTS = false;
    };
    MenuInteractivoComponent.prototype.ASI2 = function () {
        this.flujoASI1 = false;
        this.flujoASI2 = true;
        this.flujoASI3 = false;
        this.flujoBTS = false;
        this.flujoTS = false;
    };
    MenuInteractivoComponent.prototype.ASI3 = function () {
        this.flujoASI1 = false;
        this.flujoASI2 = false;
        this.flujoASI3 = true;
        this.flujoBTS = false;
        this.flujoTS = false;
    };
    MenuInteractivoComponent.prototype.TSmethod = function () {
        this.flujoASI1 = false;
        this.flujoASI2 = false;
        this.flujoASI3 = false;
        this.flujoTS = true;
        this.flujoBTS = false;
    };
    MenuInteractivoComponent.prototype.BTSmethod = function () {
        this.flujoASI1 = false;
        this.flujoASI2 = false;
        this.flujoASI3 = false;
        this.flujoTS = false;
        this.flujoBTS = true;
    };
    MenuInteractivoComponent.prototype.SeleccionEncoder1 = function () {
        this.encoder1 = true;
        this.encoder2 = false;
        this.encoder3 = false;
        this._codificadorService.actualizarEncoder1(this.encoder1);
        this._codificadorService.actualizarEncoder2(this.encoder2);
        this._codificadorService.actualizarEncoder3(this.encoder3);
        this._codificadorService.actualizarEncoderInit('encoder1');
    };
    MenuInteractivoComponent.prototype.SeleccionEncoder2 = function () {
        this.encoder1 = false;
        this.encoder2 = true;
        this.encoder3 = false;
        this._codificadorService.actualizarEncoder1(this.encoder1);
        this._codificadorService.actualizarEncoder2(this.encoder2);
        this._codificadorService.actualizarEncoder3(this.encoder3);
        this._codificadorService.actualizarEncoderInit('encoder2');
    };
    MenuInteractivoComponent.prototype.SeleccionEncoder3 = function () {
        this.encoder1 = false;
        this.encoder2 = false;
        this.encoder3 = true;
        this._codificadorService.actualizarEncoder1(this.encoder1);
        this._codificadorService.actualizarEncoder2(this.encoder2);
        this._codificadorService.actualizarEncoder3(this.encoder3);
        this._codificadorService.actualizarEncoderInit('encoder3');
    };
    return MenuInteractivoComponent;
}());
MenuInteractivoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-interactivo',
        template: __webpack_require__("../../../../../src/app/layout/menu-interactivo/menu-interactivo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/menu-interactivo/menu-interactivo.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_Services_codificador_service__["a" /* CodificadorService */], __WEBPACK_IMPORTED_MODULE_2_app_Services_multiplexor_service__["a" /* MultiplexorService */], __WEBPACK_IMPORTED_MODULE_3_app_Services_modulador_service__["a" /* ModuladorService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_Services_codificador_service__["a" /* CodificadorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_Services_codificador_service__["a" /* CodificadorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_Services_multiplexor_service__["a" /* MultiplexorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_Services_multiplexor_service__["a" /* MultiplexorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_Services_modulador_service__["a" /* ModuladorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_Services_modulador_service__["a" /* ModuladorService */]) === "function" && _c || Object])
], MenuInteractivoComponent);

var _a, _b, _c;
//# sourceMappingURL=menu-interactivo.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/menu-interactivo/menu-interactivo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_interactivo_routing_module__ = __webpack_require__("../../../../../src/app/layout/menu-interactivo/menu-interactivo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_interactivo_component__ = __webpack_require__("../../../../../src/app/layout/menu-interactivo/menu-interactivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuInteractivoModule", function() { return MenuInteractivoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MenuInteractivoModule = (function () {
    function MenuInteractivoModule() {
    }
    return MenuInteractivoModule;
}());
MenuInteractivoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__menu_interactivo_routing_module__["a" /* MenuInteractivoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__menu_interactivo_component__["a" /* MenuInteractivoComponent */],
        ]
    })
], MenuInteractivoModule);

//# sourceMappingURL=menu-interactivo.module.js.map

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

/***/ })

});
//# sourceMappingURL=2.chunk.js.map