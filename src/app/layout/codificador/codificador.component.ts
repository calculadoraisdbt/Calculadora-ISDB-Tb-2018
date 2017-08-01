import { Component, OnInit } from '@angular/core';
import { CodificadorService } from 'app/Services/codificador.service'
@Component({
  selector: 'app-codificador',
  templateUrl: './codificador.component.html',
  styleUrls: ['./codificador.component.scss'],
   providers: [CodificadorService]
})
export class CodificadorComponent implements OnInit {

  videoBitRate = [];
  destIpAddress = [];
  destPort = [];
  TsBitrate = [];
  AsiPciInterval = [];
  LocalIpAddress = [];
  LocalNetmask = [];
  DefaultGateway = [];

  //Dropdowns

  videoSource : string [] ;
  audioSource : string [] ;
  audioCodec : string [] ;
  audioBitRate  : string [] ;
  videoResolution  : string [] ;
  rateControl  : string [] ;
  videoProfile  : string [] ;
  gopSize : string [] ;
  videoBurstSize : string [] ;
  videoCodec : string [] ;
  frameDecimation : string [] ; 
  outputInterface : string [] ; 
  outputFormat : string [] ; 
  
  constructor(private _codificadorService:CodificadorService) {

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
    console.log(this.outputFormat)

   }  

  ngOnInit() {}

  //VIDEO SOURCE

  videoSourceSelected(value,id){
            
             if(id === "E1"){ 
            this.videoSource[0] = value;  
            this._codificadorService.actualizarVideoSource(this.videoSource[0], id); }

             if(id === "E2"){ 
            this.videoSource[1] = value;
            this._codificadorService.actualizarVideoSource(this.videoSource[1], id); }

             if(id === "E3"){ 
            this.videoSource[2] = value;
            this._codificadorService.actualizarVideoSource(this.videoSource[2], id); }

  }

  //AUDIO SOURCE

    audioSourceSelected(value,id){
            
             if(id === "E1"){ 
            this.audioSource[0] = value;  
            this._codificadorService.actualizarAudioSource(this.audioSource[0], id); }

             if(id === "E2"){ 
            this.audioSource[1] = value;
            this._codificadorService.actualizarAudioSource(this.audioSource[1], id); }

             if(id === "E3"){ 
            this.audioSource[2] = value;
            this._codificadorService.actualizarAudioSource(this.audioSource[2], id); }

  }

  //AUDIO CODEC

   audioCodecSelected(value,id){
            
             if(id === "E1"){ 
            this.audioCodec[0] = value;  
            this._codificadorService.actualizarAudioCodec(this.audioCodec[0], id); }

             if(id === "E2"){ 
            this.audioCodec[1] = value;
            this._codificadorService.actualizarAudioCodec(this.audioCodec[1], id); }

             if(id === "E3"){ 
            this.audioCodec[2] = value;
            this._codificadorService.actualizarAudioCodec(this.audioCodec[2], id); }

  }

  //AUDIO BIT RATE

   audioBitRateSelected(value,id){
            
             if(id === "E1"){ 
            this.audioBitRate[0] = value;  
            this._codificadorService.actualizarAudioBitRate(this.audioBitRate[0], id); }

             if(id === "E2"){ 
            this.audioBitRate[1] = value;
            this._codificadorService.actualizarAudioBitRate(this.audioBitRate[1], id); }

             if(id === "E3"){ 
            this.audioBitRate[2] = value;
            this._codificadorService.actualizarAudioBitRate(this.audioBitRate[2], id); }

  }

  //VIDEO RESOLUTION

   videoResolutionSelected(value,id){
            
             if(id === "E1"){ 
            this.videoResolution[0] = value;  
            this._codificadorService.actualizarVideoResolution(this.videoResolution[0], id); }

             if(id === "E2"){ 
            this.videoResolution[1] = value;
            this._codificadorService.actualizarVideoResolution(this.videoResolution[1], id); }

             if(id === "E3"){ 
            this.videoResolution[2] = value;
            this._codificadorService.actualizarVideoResolution(this.videoResolution[2], id); }

  }


// RATE CONTROL

 rateControlSelected(value,id){
            
             if(id === "E1"){ 
            this.rateControl[0] = value;  
            this._codificadorService.actualizarRateControl(this.rateControl[0], id); }

             if(id === "E2"){ 
            this.rateControl[1] = value;
            this._codificadorService.actualizarRateControl(this.rateControl[1], id); }

             if(id === "E3"){ 
            this.rateControl[2] = value;
            this._codificadorService.actualizarRateControl(this.rateControl[2], id); }

  }
//VIDEO BIT RATE

//VIDEO PROFILE
 videoProfileSelected(value,id){
            
             if(id === "E1"){ 
            this.videoProfile[0] = value;  
            this._codificadorService.actualizarVideoProfile(this.videoProfile[0], id); }

             if(id === "E2"){ 
            this.videoProfile[1] = value;
            this._codificadorService.actualizarVideoProfile(this.videoProfile[1], id); }

             if(id === "E3"){ 
            this.videoProfile[2] = value;
            this._codificadorService.actualizarVideoProfile(this.videoProfile[2], id); }

  }
//GOP SIZE
 gopSizeSelected(value,id){
            
             if(id === "E1"){ 
            this.gopSize[0] = value;  
            this._codificadorService.actualizarGopSize(this.gopSize[0], id); }

             if(id === "E2"){ 
            this.gopSize[1] = value;
            this._codificadorService.actualizarGopSize(this.gopSize[1], id); }

             if(id === "E3"){ 
            this.gopSize[2] = value;
            this._codificadorService.actualizarGopSize(this.gopSize[2], id); }

  }
//VIDEO BURST SIZE
videoBurstSizeSelected(value,id){
            
             if(id === "E1"){ 
            this.videoBurstSize[0] = value;  
            this._codificadorService.actualizarVideoBurstSize(this.videoBurstSize[0], id); }

             if(id === "E2"){ 
            this.videoBurstSize[1] = value;
            this._codificadorService.actualizarVideoBurstSize(this.videoBurstSize[1], id); }

             if(id === "E3"){ 
            this.videoBurstSize[2] = value;
            this._codificadorService.actualizarVideoBurstSize(this.videoBurstSize[2], id); }

  }
//VIDEO CODEC
videoCodecSelected(value,id){
            
             if(id === "E1"){ 
            this.videoCodec[0] = value;  
            this._codificadorService.actualizarVideoCodec(this.videoCodec[0], id); }

             if(id === "E2"){ 
            this.videoCodec[1] = value;
            this._codificadorService.actualizarVideoCodec(this.videoCodec[1], id); }

             if(id === "E3"){ 
            this.videoCodec[2] = value;
            this._codificadorService.actualizarVideoCodec(this.videoCodec[2], id); }

  }

  //FRAME DECIMATION
frameDecimationSelected(value,id){
            
             if(id === "E1"){ 
            this.frameDecimation[0] = value;  
            this._codificadorService.actualizarFrameDecimation(this.frameDecimation[0], id); }

             if(id === "E2"){ 
            this.frameDecimation[1] = value;
            this._codificadorService.actualizarFrameDecimation(this.frameDecimation[1], id); }

             if(id === "E3"){ 
            this.frameDecimation[2] = value;
            this._codificadorService.actualizarFrameDecimation(this.frameDecimation[2], id); }

  }
  //OUTPUT INTERFACE
outputInterfaceSelected(value,id){
            
             if(id === "E1"){ 
            this.outputInterface[0] = value;  
            this._codificadorService.actualizarOutputInterface(this.outputInterface[0], id); }

             if(id === "E2"){ 
            this.outputInterface[1] = value;
            this._codificadorService.actualizarOutputInterface(this.outputInterface[1], id); }

             if(id === "E3"){ 
            this.outputInterface[2] = value;
            this._codificadorService.actualizarOutputInterface(this.outputInterface[2], id); }

  }
           //OUTPUT FORMAT
outputFormatSelected(value,id){
            
             if(id === "E1"){ 
            this.outputFormat[0] = value;  
            this._codificadorService.actualizarOutputFormat(this.outputFormat[0], id); }

             if(id === "E2"){ 
            this.outputFormat[1] = value;
            this._codificadorService.actualizarOutputFormat(this.outputFormat[1], id); }

             if(id === "E3"){ 
            this.outputFormat[2] = value;
            this._codificadorService.actualizarOutputFormat(this.outputFormat[2], id); }

  }
}
