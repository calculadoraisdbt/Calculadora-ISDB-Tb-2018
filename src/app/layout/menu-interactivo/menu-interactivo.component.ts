import { Component, OnInit } from '@angular/core';
import { CodificadorService } from 'app/Services/codificador.service';
import { MultiplexorService } from 'app/Services/multiplexor.service';
import { ModuladorService } from 'app/Services/modulador.service';


@Component({
  selector: 'app-menu-interactivo',
  templateUrl: './menu-interactivo.component.html',
  styleUrls: ['./menu-interactivo.component.scss'],
  providers: [CodificadorService,MultiplexorService,ModuladorService]
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
  encoder1: boolean  ;
  encoder2 : boolean ;
  encoder3 : boolean ;
// del multiplexor
  tableLayer = [];
  TablePmtPid = [];
  TableEnable = [];
// del remultiplexor
  tspNulos;
  tspCapa = [] ;
  constructor(private _codificadorService:CodificadorService,private _multiplexorService:MultiplexorService,
    private _moduladorService:ModuladorService) { 
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
    
  }
  

  ngOnInit() {
  }

  sumTsTotal(){
   this.tsBitrateTotal = (+this.tsBitrate[0] + +this.tsBitrate[1] + +this.tsBitrate[2]);
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

SeleccionEncoder1(){

  this.encoder1 = true;
  this.encoder2 = false;
  this.encoder3 = false;
  this._codificadorService.actualizarEncoder1(this.encoder1);
  this._codificadorService.actualizarEncoder2(this.encoder2);
  this._codificadorService.actualizarEncoder3(this.encoder3);
  this._codificadorService.actualizarEncoderInit('encoder1');
}

SeleccionEncoder2(){
  
    this.encoder1 = false;
    this.encoder2 = true;
    this.encoder3 = false;
    this._codificadorService.actualizarEncoder1(this.encoder1);
    this._codificadorService.actualizarEncoder2(this.encoder2);
    this._codificadorService.actualizarEncoder3(this.encoder3);
    this._codificadorService.actualizarEncoderInit('encoder2');
  }

  SeleccionEncoder3(){
    
      this.encoder1 = false;
      this.encoder2 = false;
      this.encoder3 = true;
      this._codificadorService.actualizarEncoder1(this.encoder1);
      this._codificadorService.actualizarEncoder2(this.encoder2);
      this._codificadorService.actualizarEncoder3(this.encoder3);
      this._codificadorService.actualizarEncoderInit('encoder3');
    }

}
