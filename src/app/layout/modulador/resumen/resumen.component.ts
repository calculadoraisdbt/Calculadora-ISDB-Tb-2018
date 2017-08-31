import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModuladorService } from 'app/Services/modulador.service'

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
  providers: [ModuladorService]
})
export class ResumenComponent implements OnInit {

  intSelected : string = "" ;
  modoSelected : string = "" ;
  esqModSelected : string [] ;
  codConSelected ;
  oneSeg : boolean = false;
  mostMenos : boolean = true;
  oneSegseg : string = "";
  segCapaASelected : number ;
  segCapaBSelected : number ;
  segCapaCSelected : number ;
  options = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
  select1  ;
  select2  ;
  select3  ;
  activado ;
  tu1 : number = 252;
  tg1 : number ;
  tu2 : number = 504;
  tg2 : number ;
  tu3 : number = 1008;
  tg3 : number ;
  bw : number = 6 ;
  bws : number = 428.57;
  ns : number = 13;
  ls1 : number = 108;
  ls2 : number = 216;
  ls3 : number = 432;
  f : number = 204;
  intGua : number ;
  ki ;
  deltaGuarda;
  bp ;

  constructor(private _moduladorService:ModuladorService) {

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
   }

   
        

  ngOnInit() {
                this.calculoIntervaloGuarda(this.intSelected );
                this.calculoKi(this.codConSelected[0],this.codConSelected[1],this.codConSelected[2]);
                this.detDeltaGuarda(this.intSelected);
                this.calculoBp(this.esqModSelected[0],this.esqModSelected[1],this.esqModSelected[2])

  }

  intSelection(value){

    
     this.intSelected = value;
     this._moduladorService.actualizarIntervalo(this.intSelected);

    this.calculoIntervaloGuarda(value);
    this.detDeltaGuarda(value);
        
  }

  detDeltaGuarda(value) {
        if(value === "1/4"){
            this.deltaGuarda = 1/4;
        }
        if(value === "1/8"){
            this.deltaGuarda = 1/8;
        }
        if(value === "1/16"){
            this.deltaGuarda = 1/16;
        }
        if(value === "1/32"){
            this.deltaGuarda = 1/32;
        }
    

  }


  change(){

   var change = document.getElementById("oneseg");
                    if (change.innerHTML === "Desactivado")
                    {
                        change.innerHTML = "Activado";
                        this.oneSeg = true ;
                        this.oneSegseg = "1" ;
                    }
                    else {
                        change.innerHTML = "Desactivado";
                        this.oneSeg = false ;
                        this.oneSegseg = "" ;
                    }
}

modo(value){

     this.modoSelected = value;
     this._moduladorService.actualizarModo(this.modoSelected);
     this.calculoIntervaloGuarda(this.intSelected);




}

esqModSelection(value, id){
    if(id === 'capa A') {

        this.esqModSelected[0] = value;
         this._moduladorService.actualizarEsquemaModulacion(this.esqModSelected[0], id);   

    }
     if (id === 'capa B') {

        this.esqModSelected[1] = value;
        this._moduladorService.actualizarEsquemaModulacion(this.esqModSelected[1], id);  

    }
    if(id === 'capa C') {

        this.esqModSelected[2] = value;
        this._moduladorService.actualizarEsquemaModulacion(this.esqModSelected[2], id);  

    }

    this.calculoBp(this.esqModSelected[0],this.esqModSelected[1],this.esqModSelected[2])
    

}

calculoBp(value0 : any,value1 : any,value2 : any){
    if(value0 === 'QPSK'){
        this.bp[0] = 2;
    }
    if(value0 === 'DQPSK'){
        this.bp[0] = 2;
    }
    if(value0 === '16-QAM'){
        this.bp[0] = 4;
    }
    if(value0 === '64-QAM'){
        this.bp[0] = 6;
    }
    
    if(value1 === 'QPSK'){
        this.bp[1] = 2;
    }
    if(value1 === 'DQPSK'){
        this.bp[1] = 2;
    }
    if(value1 === '16-QAM'){
        this.bp[1] = 4;
    }
    if(value1 === '64-QAM'){
        this.bp[1] = 6;
    }

    if(value2 === 'QPSK'){
        this.bp[2] = 2;
    }
    if(value2 === 'DQPSK'){
        this.bp[2] = 2;
    }
    if(value2 === '16-QAM'){
        this.bp[2] = 4;
    }
    if(value2 === '64-QAM'){
        this.bp[2] = 6;
    }
        
}   
codConSelection(value, id){
    
    if(id === 'capa A') {

        this.codConSelected[0] = value ;
        this._moduladorService.actualizarCodificacionConvolucional(this.codConSelected[0], id);   

    }
     if (id === 'capa B') {
        this.codConSelected[1] = value;
        this._moduladorService. actualizarCodificacionConvolucional(this.codConSelected[1], id);  

    }
    if(id === 'capa C') {
        this.codConSelected[2] = value;
        this._moduladorService. actualizarCodificacionConvolucional(this.codConSelected[2], id);  

    }

    this.calculoKi(this.codConSelected[0], this.codConSelected[1],this.codConSelected[2]);
    

}

 getLimit(value) {
    // get the sum of the select's
    const suma = this.select1 + this.select2 + this.select3;

    // we minus the total plus this value as we still 
    // need the option that is selected
    return this.options.length - suma + value;
  }
  
  saveValueA(value) {
        this._moduladorService.actualizarSegmentoA(value);
    // call service or whatever to save the value
  }

   saveValueB(value) {
       this._moduladorService.actualizarSegmentoB(value);
    // call service or whatever to save the value
  }

   saveValueC(value) {
       this._moduladorService.actualizarSegmentoC(value);
    // call service or whatever to save the value
  }

  saveActivado(value){
        this._moduladorService.actualizarActivado(value);

  }

  onActivado() {
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

  }

  isValidSuma() {
    const suma = this.select1 + this.select2 + this.select3;
    return suma === 13;
  }

  // Funciones modelo 

calculoIntervaloGuarda(valor : any ) {

     if (valor == "1/4"){

            this.tg1=(this.tu1)/4;
            this.tg2=(this.tu2)/4;
            this.tg3=(this.tu3)/4;

            if(this.modoSelected === 'MODO 1'){
                this._moduladorService.actualizarIntGua(this.tg1);
            }
             if(this.modoSelected === 'MODO 2'){
                this._moduladorService.actualizarIntGua(this.tg2);
            }
             if(this.modoSelected === 'MODO 3'){
                this._moduladorService.actualizarIntGua(this.tg3);
            }
            


     }
        if (valor == "1/8"){

            this.tg1=(this.tu1)/8;
            this.tg2=(this.tu2)/8;
            this.tg3=(this.tu3)/8;
             if(this.modoSelected === 'MODO 1'){
                this._moduladorService.actualizarIntGua(this.tg1);
            }
             if(this.modoSelected === 'MODO 2'){
                this._moduladorService.actualizarIntGua(this.tg2);
            }
             if(this.modoSelected === 'MODO 3'){
                this._moduladorService.actualizarIntGua(this.tg3);
            }


     }
        if (valor == "1/16"){

            this.tg1=(this.tu1)/16;
            this.tg2=(this.tu2)/16;
            this.tg3=(this.tu3)/16;
            if(this.modoSelected === 'MODO 1'){
                this._moduladorService.actualizarIntGua(this.tg1);
            }
             if(this.modoSelected === 'MODO 2'){
                this._moduladorService.actualizarIntGua(this.tg2);
            }
             if(this.modoSelected === 'MODO 3'){
                this._moduladorService.actualizarIntGua(this.tg3);
            }


     }
        if (valor == "1/32"){

            this.tg1=(this.tu1)/32;
            this.tg2=(this.tu2)/32;
            this.tg3=(this.tu3)/32;
            if(this.modoSelected === 'MODO 1'){
                this._moduladorService.actualizarIntGua(this.tg1);
            }
             if(this.modoSelected === 'MODO 2'){
                this._moduladorService.actualizarIntGua(this.tg2);
            }
             if(this.modoSelected === 'MODO 3'){
                this._moduladorService.actualizarIntGua(this.tg3);
            }

     }

    
}

calculoKi(value0 : any, value1: any,value2: any){


    if(value0 === "1/2"){
        this.ki[0] = 1/2; 
    }
    if(value0 === "2/3"){
        this.ki[0] = 2/3; 
    }
    if(value0 === "3/4"){
        this.ki[0] = 3/4; 
    }
    if(value0 === "5/6"){
        this.ki[0] = 5/6; 
    }
    if(value0 === "7/8"){
        this.ki[0] = 7/8; 
    }

    if(value1 === "1/2"){
        this.ki[1] = 1/2; 
    }
    if(value1 === "2/3"){
        this.ki[1] = 2/3; 
    }
    if(value1 === "3/4"){
        this.ki[1] = 3/4; 
    }
    if(value1 === "5/6"){
        this.ki[1] = 5/6; 
    }
    if(value1 === "7/8"){
        this.ki[1] = 7/8; 
    }

    if(value2 === "1/2"){
        this.ki[2] = 1/2; 
    }
    if(value2 === "2/3"){
        this.ki[2] = 2/3; 
    }
    if(value2 === "3/4"){
        this.ki[2] = 3/4; 
    }
    if(value2 === "5/6"){
        this.ki[2] = 5/6; 
    }
    if(value2 === "7/8"){
        this.ki[2] = 7/8; 
    }
    this._moduladorService.actualizarKi(this.ki[0],this.ki[1],this.ki[2]);
}

}
