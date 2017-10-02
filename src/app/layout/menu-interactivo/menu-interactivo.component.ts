import { Component, OnInit } from '@angular/core';
import { CodificadorService } from 'app/Services/codificador.service'

@Component({
  selector: 'app-menu-interactivo',
  templateUrl: './menu-interactivo.component.html',
  styleUrls: ['./menu-interactivo.component.scss'],
  providers: [CodificadorService]
})
export class MenuInteractivoComponent implements OnInit {
  
  flujoTS : boolean = false ;
  flujoBTS : boolean = false ;
  flujoASI1 : boolean = false ;
  flujoASI2 : boolean = false ;
  flujoASI3 : boolean = false ;
 // del codificador
  pidAudio = [];
  pidVideo = [];
  pidPcr = [];
  tsBitrate = [];
  asiPciInterval = [];
  tsBitrateTotal   ;
  constructor(private _codificadorService:CodificadorService) { 
    this.pidAudio = this._codificadorService.obtenerPidAudio();
    this.pidVideo = this._codificadorService.obtenerPidVideo();
    this.pidPcr = this._codificadorService.obtenerPidPcr();
    this.tsBitrate = this._codificadorService.obtenerTsBitRate();
    this.asiPciInterval = this._codificadorService.obtenerAsiPcrInterval();
    this.sumTsTotal();
  }
  

  ngOnInit() {
  }

  sumTsTotal(){
   this.tsBitrateTotal = (+this.tsBitrate[0] + +this.tsBitrate[1] + +this.tsBitrate[2]);
   console.log("total aca", this.tsBitrateTotal)
  }
  ASI1(){
    this.flujoASI1 = true ;
    this.flujoASI2 = false ;
    this.flujoASI3 = false ;
    this.flujoBTS = false; 
    this.flujoTS = false ;
  }

  ASI2(){
    this.flujoASI1 = false ;
    this.flujoASI2 = true ;
    this.flujoASI3 = false ;
    this.flujoBTS = false; 
    this.flujoTS = false ;
  }

  ASI3(){
    this.flujoASI1 = false ;
    this.flujoASI2 = false ;
    this.flujoASI3 = true ;
    this.flujoBTS = false; 
    this.flujoTS = false ;
  }

  TSmethod(){
    this.flujoASI1 = false ;   
    this.flujoASI2 = false ;
    this.flujoASI3 = false ; 
this.flujoTS = true; 
this.flujoBTS = false; 

}

BTSmethod(){
  this.flujoASI1 = false ;   
  this.flujoASI2 = false ;
  this.flujoASI3 = false ; 
this.flujoTS = false ; 
this.flujoBTS = true; 

}

}
