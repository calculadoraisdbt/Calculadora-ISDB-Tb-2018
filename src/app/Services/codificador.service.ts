import { Injectable } from '@angular/core';
import { InitCodificador } from 'app/layout/codificador/init-codificador';

@Injectable()
export class CodificadorService extends InitCodificador {

  constructor() {
    super();
    this.load();
   }


    //VIDEO SOURCE

    getVideoSource(){

         var videoSource = JSON.parse(localStorage.getItem('videoSource'));
         return videoSource;

    }

   actualizarVideoSource(newParam : any , id){ 
      if(id === 'E1') {
         var videoSource = JSON.parse(localStorage.getItem('videoSource'));

          videoSource[0] = newParam;

          localStorage.setItem('videoSource', JSON.stringify(videoSource));

    }
   
     if(id === 'E2') {

         var videoSource = JSON.parse(localStorage.getItem('videoSource'));

          videoSource[1] = newParam;

          localStorage.setItem('videoSource', JSON.stringify(videoSource));

    }

     if(id === 'E3') {

         var videoSource = JSON.parse(localStorage.getItem('videoSource'));

          videoSource[2] = newParam;

          localStorage.setItem('videoSource', JSON.stringify(videoSource));

    }
}
   
//AUDIO SOURCE

 getAudioSource(){

         var audioSource = JSON.parse(localStorage.getItem('audioSource'));
         return audioSource;

    }

   actualizarAudioSource(newParam : any , id){ 
  
      if(id === 'E1') {

         var audioSource = JSON.parse(localStorage.getItem('audioSource'));

          audioSource[0] = newParam;

          localStorage.setItem('audioSource', JSON.stringify(audioSource));

    }
   
     if(id === 'E2') {

         var audioSource = JSON.parse(localStorage.getItem('audioSource'));

          audioSource[1] = newParam;

          localStorage.setItem('audioSource', JSON.stringify(audioSource));

    }

     if(id === 'E3') {

         var audioSource = JSON.parse(localStorage.getItem('audioSource'));

          audioSource[2] = newParam;

          localStorage.setItem('audioSource', JSON.stringify(audioSource));

    }
}

//AUDIO CODEC
 getAudioCodec(){

         var audioCodec = JSON.parse(localStorage.getItem('audioCodec'));
         return audioCodec;

    }

   actualizarAudioCodec(newParam : any , id){ 
  
      if(id === 'E1') {

         var audioCodec = JSON.parse(localStorage.getItem('audioCodec'));

          audioCodec[0] = newParam;

          localStorage.setItem('audioCodec', JSON.stringify(audioCodec));

    }
   
     if(id === 'E2') {

         var audioCodec = JSON.parse(localStorage.getItem('audioCodec'));

          audioCodec[1] = newParam;

          localStorage.setItem('audioCodec', JSON.stringify(audioCodec));

    }

     if(id === 'E3') {

         var audioCodec = JSON.parse(localStorage.getItem('audioCodec'));

          audioCodec[2] = newParam;

          localStorage.setItem('audioCodec', JSON.stringify(audioCodec));

    }
}

//AUDIO BIT RATE

 getAudioBitRate(){

         var audioBitRate = JSON.parse(localStorage.getItem('audioBitRate'));
         return audioBitRate;

    }

   actualizarAudioBitRate(newParam : any , id){ 
  
      if(id === 'E1') {

         var audioBitRate = JSON.parse(localStorage.getItem('audioBitRate'));

          audioBitRate[0] = newParam;

          localStorage.setItem('audioBitRate', JSON.stringify(audioBitRate));

    }
   
     if(id === 'E2') {

         var audioBitRate = JSON.parse(localStorage.getItem('audioBitRate'));

          audioBitRate[1] = newParam;

          localStorage.setItem('audioBitRate', JSON.stringify(audioBitRate));

    }

     if(id === 'E3') {

         var audioBitRate = JSON.parse(localStorage.getItem('audioBitRate'));

          audioBitRate[2] = newParam;

          localStorage.setItem('audioBitRate', JSON.stringify(audioBitRate));

    }
}

//VIDEO RESOLUTION
 getVideoResolution(){

         var videoResolution = JSON.parse(localStorage.getItem('videoResolution'));
         return videoResolution;

    }

   actualizarVideoResolution(newParam : any , id){ 
  
      if(id === 'E1') {

         var videoResolution = JSON.parse(localStorage.getItem('videoResolution'));

          videoResolution[0] = newParam;

          localStorage.setItem('videoResolution', JSON.stringify(videoResolution));

    }
   
     if(id === 'E2') {

         var audioBitRate = JSON.parse(localStorage.getItem('videoResolution'));

          videoResolution[1] = newParam;

          localStorage.setItem('videoResolution', JSON.stringify(videoResolution));

    }

     if(id === 'E3') {

         var audioBitRate = JSON.parse(localStorage.getItem('videoResolution'));

          videoResolution[2] = newParam;

          localStorage.setItem('videoResolution', JSON.stringify(videoResolution));

    }
}
//RATE CONTROL
 getRateControl(){

         var rateControl = JSON.parse(localStorage.getItem('rateControl'));
         return rateControl;

    }

   actualizarRateControl(newParam : any , id){ 
  
      if(id === 'E1') {

         var rateControl = JSON.parse(localStorage.getItem('rateControl'));

          rateControl[0] = newParam;

          localStorage.setItem('rateControl', JSON.stringify(rateControl));

    }
   
     if(id === 'E2') {

         var rateControl = JSON.parse(localStorage.getItem('rateControl'));

          rateControl[1] = newParam;

          localStorage.setItem('rateControl', JSON.stringify(rateControl));

    }

     if(id === 'E3') {

         var rateControl = JSON.parse(localStorage.getItem('rateControl'));

          rateControl[2] = newParam;

          localStorage.setItem('rateControl', JSON.stringify(rateControl));

    }
}

//VIDEO PROFILE
 getVideoProfile(){

         var videoProfile = JSON.parse(localStorage.getItem('videoProfile'));
         return videoProfile;

    }

   actualizarVideoProfile(newParam : any , id){ 
  
      if(id === 'E1') {

         var videoProfile = JSON.parse(localStorage.getItem('videoProfile'));

          videoProfile[0] = newParam;

          localStorage.setItem('videoProfile', JSON.stringify(videoProfile));

    }
   
     if(id === 'E2') {

         var videoProfile = JSON.parse(localStorage.getItem('videoProfile'));

          videoProfile[1] = newParam;

          localStorage.setItem('videoProfile', JSON.stringify(videoProfile));

    }

     if(id === 'E3') {

         var videoProfile = JSON.parse(localStorage.getItem('videoProfile'));

          videoProfile[2] = newParam;

          localStorage.setItem('videoProfile', JSON.stringify(videoProfile));

    }
}
//GOP SIZE
getGopSize(){

         var gopSize = JSON.parse(localStorage.getItem('gopSize'));
         return gopSize;

    }

   actualizarGopSize(newParam : any , id){ 
  
      if(id === 'E1') {

         var gopSize = JSON.parse(localStorage.getItem('gopSize'));

          gopSize[0] = newParam;

          localStorage.setItem('gopSize', JSON.stringify(gopSize));

    }
   
     if(id === 'E2') {

         var gopSize = JSON.parse(localStorage.getItem('gopSize'));

          gopSize[1] = newParam;

          localStorage.setItem('gopSize', JSON.stringify(gopSize));

    }

     if(id === 'E3') {

         var gopSize = JSON.parse(localStorage.getItem('gopSize'));

          gopSize[2] = newParam;

          localStorage.setItem('gopSize', JSON.stringify(gopSize));

    }
}
//VIDEO BURST SIZE
getVideoBurstSize(){

         var videoBurstSize = JSON.parse(localStorage.getItem('videoBurstSize'));
         return videoBurstSize;

    }

   actualizarVideoBurstSize(newParam : any , id){ 
  
      if(id === 'E1') {

         var videoBurstSize = JSON.parse(localStorage.getItem('videoBurstSize'));

          videoBurstSize[0] = newParam;

          localStorage.setItem('videoBurstSize', JSON.stringify(videoBurstSize));

    }
   
     if(id === 'E2') {

         var videoBurstSize = JSON.parse(localStorage.getItem('videoBurstSize'));

          videoBurstSize[1] = newParam;

          localStorage.setItem('videoBurstSize', JSON.stringify(videoBurstSize));

    }

     if(id === 'E3') {

         var videoBurstSize = JSON.parse(localStorage.getItem('videoBurstSize'));

          videoBurstSize[2] = newParam;

          localStorage.setItem('videoBurstSize', JSON.stringify(videoBurstSize));

    }
}
//VIDEO CODEC
getVideoCodec(){

         var videoCodec = JSON.parse(localStorage.getItem('videoCodec'));
         return videoCodec;

    }

   actualizarVideoCodec(newParam : any , id){ 
  
      if(id === 'E1') {

         var videoCodec = JSON.parse(localStorage.getItem('videoCodec'));

          videoCodec[0] = newParam;

          localStorage.setItem('videoCodec', JSON.stringify(videoCodec));

    }
   
     if(id === 'E2') {

         var videoCodec = JSON.parse(localStorage.getItem('videoCodec'));

          videoCodec[1] = newParam;

          localStorage.setItem('videoCodec', JSON.stringify(videoCodec));

    }

     if(id === 'E3') {

         var videoCodec = JSON.parse(localStorage.getItem('videoCodec'));

          videoCodec[2] = newParam;

          localStorage.setItem('videoCodec', JSON.stringify(videoCodec));

    }
}
//FRAME DECIMATION
getFrameDecimation(){

         var frameDecimation = JSON.parse(localStorage.getItem('frameDecimation'));
         return frameDecimation;

    }

   actualizarFrameDecimation(newParam : any , id){ 
  
      if(id === 'E1') {

         var frameDecimation = JSON.parse(localStorage.getItem('frameDecimation'));

          frameDecimation[0] = newParam;

          localStorage.setItem('frameDecimation', JSON.stringify(frameDecimation));

    }
   
     if(id === 'E2') {

         var frameDecimation = JSON.parse(localStorage.getItem('frameDecimation'));

          frameDecimation[1] = newParam;

          localStorage.setItem('frameDecimation', JSON.stringify(frameDecimation));

    }

     if(id === 'E3') {

         var frameDecimation = JSON.parse(localStorage.getItem('frameDecimation'));

          frameDecimation[2] = newParam;

          localStorage.setItem('frameDecimation', JSON.stringify(frameDecimation));

    }
}
//OUTPUT INTERFACE
getOutputInterface(){

         var outputInterface = JSON.parse(localStorage.getItem('outputInterface'));
         return outputInterface;

    }

   actualizarOutputInterface(newParam : any , id){ 
  
      if(id === 'E1') {

         var outputInterface = JSON.parse(localStorage.getItem('outputInterface'));

          outputInterface[0] = newParam;

          localStorage.setItem('outputInterface', JSON.stringify(outputInterface));

    }
   
     if(id === 'E2') {

         var outputInterface = JSON.parse(localStorage.getItem('outputInterface'));

          outputInterface[1] = newParam;

          localStorage.setItem('outputInterface', JSON.stringify(outputInterface));

    }

     if(id === 'E3') {

         var outputInterface = JSON.parse(localStorage.getItem('outputInterface'));

          outputInterface[2] = newParam;

          localStorage.setItem('outputInterface', JSON.stringify(outputInterface));

    }
}
//OUTPUT Format
getOutputFormat(){

         var outputFormat = JSON.parse(localStorage.getItem('outputFormat'));
         return outputFormat;

    }

   actualizarOutputFormat(newParam : any , id){ 
  
      if(id === 'E1') {

         var outputFormat = JSON.parse(localStorage.getItem('outputFormat'));

          outputFormat[0] = newParam;

          localStorage.setItem('outputFormat', JSON.stringify(outputFormat));

    }
   
     if(id === 'E2') {

         var outputFormat = JSON.parse(localStorage.getItem('outputFormat'));

          outputFormat[1] = newParam;

          localStorage.setItem('outputFormat', JSON.stringify(outputFormat));

    }

     if(id === 'E3') {

         var outputFormat = JSON.parse(localStorage.getItem('outputFormat'));

          outputFormat[2] = newParam;

          localStorage.setItem('outputFormat', JSON.stringify(outputFormat));

    }
}

//VIDEO BIT RATE
obtenerVideoBitRate(){
    var videoBitRate = JSON.parse(localStorage.getItem('videoBitRate'));
    return videoBitRate;
    

}
actualizarVideoBitRate(nuevo : any){
   var videoBitRate = JSON.parse(localStorage.getItem('videoBitRate'));
   videoBitRate = nuevo ;
   localStorage.setItem('videoBitRate', JSON.stringify(videoBitRate)); 
}
 
// DEST IP ADDRESS
obtenerDestIpAddress(){
    var destIpAddress = JSON.parse(localStorage.getItem('destIpAddress'));
    return destIpAddress;
    

}
actualizarDestIpAddress(nuevo : any){
   var destIpAddress = JSON.parse(localStorage.getItem('destIpAddress'));
   destIpAddress = nuevo ;
   localStorage.setItem('destIpAddress', JSON.stringify(destIpAddress)); 
}
// DEST IP ADDRESS
obtenerDestPort(){
    var destPort = JSON.parse(localStorage.getItem('destPort'));
    return destPort;
    

}
actualizarDestPort(nuevo : any){
   var destPort = JSON.parse(localStorage.getItem('destPort'));
   destPort = nuevo ;
   localStorage.setItem('destPort', JSON.stringify(destPort)); 
}
//TS BIT RATE
obtenerTsBitRate(){
    var tsBitRate = JSON.parse(localStorage.getItem('tsBitRate'));
    return tsBitRate;
    

}
actualizarTsBitRate(nuevo : any){
   var tsBitRate = JSON.parse(localStorage.getItem('tsBitRate'));
   tsBitRate = nuevo ;
   localStorage.setItem('tsBitRate', JSON.stringify(tsBitRate)); 
}
//ASI PCR INTERVAL
obtenerAsiPcrInterval(){
    var asiPcrInterval = JSON.parse(localStorage.getItem('asiPcrInterval'));
    return asiPcrInterval;
    

}
actualizarAsiPcrInterval(nuevo : any){
   var asiPcrInterval = JSON.parse(localStorage.getItem('asiPcrInterval'));
   asiPcrInterval = nuevo ;
   localStorage.setItem('asiPcrInterval', JSON.stringify(asiPcrInterval)); 
}
//PID AUDIO
obtenerPidAudio(){
    var pidAudio = JSON.parse(localStorage.getItem('pidAudio'));
    return pidAudio;
    

}
actualizarPidAudio(nuevo : any){
   var pidAudio = JSON.parse(localStorage.getItem('pidAudio'));
   pidAudio = nuevo ;
   localStorage.setItem('pidAudio', JSON.stringify(pidAudio)); 
}
//PID VIDEO
obtenerPidVideo(){
    var pidVideo = JSON.parse(localStorage.getItem('pidVideo'));
    return pidVideo;
    

}
actualizarPidVideo(nuevo : any){
   var pidVideo = JSON.parse(localStorage.getItem('pidVideo'));
   pidVideo = nuevo ;
   localStorage.setItem('pidVideo', JSON.stringify(pidVideo)); 
}
//PID PCR
obtenerPidPcr(){
    var pidPcr = JSON.parse(localStorage.getItem('pidPcr'));
    return pidPcr;
    

}
actualizarPidPcr(nuevo : any){
   var pidPcr = JSON.parse(localStorage.getItem('pidPcr'));
   pidPcr = nuevo ;
   localStorage.setItem('pidPcr', JSON.stringify(pidPcr)); 
}
//PID LOCAL IP ADDRESS
obtenerLocalIpAddress(){
    var localIpAddress = JSON.parse(localStorage.getItem('localIpAddress'));
    return localIpAddress;
    

}
actualizarLocalIpAddress(nuevo : any){
   var localIpAddress = JSON.parse(localStorage.getItem('localIpAddress'));
   localIpAddress = nuevo ;
   localStorage.setItem('localIpAddress', JSON.stringify(localIpAddress)); 
}
//PID LOCAL NETMASK
obtenerLocalNetMask(){
    var localNetMask = JSON.parse(localStorage.getItem('localNetMask'));
    return localNetMask;
    

}
actualizarLocalNetMask(nuevo : any){
   var localNetMask = JSON.parse(localStorage.getItem('localNetMask'));
   localNetMask = nuevo ;
   localStorage.setItem('localNetMask', JSON.stringify(localNetMask)); 
}
//DEFAULT GATEWAY
obtenerDefaultGateway(){
    var defaultGateway = JSON.parse(localStorage.getItem('defaultGateway'));
    return defaultGateway;
    

}
actualizarDefaultGateway(nuevo : any){
   var defaultGateway = JSON.parse(localStorage.getItem('defaultGateway'));
   defaultGateway = nuevo ;
   localStorage.setItem('defaultGateway', JSON.stringify(defaultGateway)); 
}

obtenerEncoder1(){
    var encoder1 = JSON.parse(localStorage.getItem('encoder1'));
    return encoder1;
    

}
actualizarEncoder1(nuevo : any){
   var encoder1 = JSON.parse(localStorage.getItem('encoder1'));
   encoder1 = nuevo ;
   localStorage.setItem('encoder1', JSON.stringify(encoder1)); 
}

obtenerEncoder2(){
    var encoder2 = JSON.parse(localStorage.getItem('encoder2'));
    return encoder2;
    

}
actualizarEncoder2(nuevo : any){
   var encoder2 = JSON.parse(localStorage.getItem('encoder2'));
   encoder2 = nuevo ;
   localStorage.setItem('encoder2', JSON.stringify(encoder2)); 
}

obtenerEncoder3(){
    var encoder3 = JSON.parse(localStorage.getItem('encoder3'));
    return encoder3;
    

}
actualizarEncoder3(nuevo : any){
   var encoder3 = JSON.parse(localStorage.getItem('encoder3'));
   encoder3 = nuevo ;
   localStorage.setItem('encoder3', JSON.stringify(encoder3)); 
}

obtenerEncoderInit(){
    var encoderInit = JSON.parse(localStorage.getItem('encoderInit'));
    return encoderInit;
    

}
actualizarEncoderInit(nuevo : any){
   var encoderInit = JSON.parse(localStorage.getItem('encoderInit'));
   encoderInit = nuevo ;
   localStorage.setItem('encoderInit', JSON.stringify(encoderInit)); 
}

}