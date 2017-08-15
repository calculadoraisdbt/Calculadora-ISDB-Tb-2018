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
  codConSelected : string [] ;
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
   }

   
        

  ngOnInit() {
                this.calculoIntervaloGuarda(this.intSelected );

  }

  intSelection(value){

    
     this.intSelected = value;
     this._moduladorService.actualizarIntervalo(this.intSelected);

    this.calculoIntervaloGuarda(value);
    this.intGua = this._moduladorService.obtenerIntGua();   

        
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

    

}

codConSelection(value, id){
    if(id === 'capa A') {

        this.codConSelected[0] = value;
         this._moduladorService. actualizarCodificacionConvolucional(this.codConSelected[0], id);   

    }
     if (id === 'capa B') {

        this.codConSelected[1] = value;
        this._moduladorService. actualizarCodificacionConvolucional(this.codConSelected[1], id);  

    }
    if(id === 'capa C') {

        this.codConSelected[2] = value;
        this._moduladorService. actualizarCodificacionConvolucional(this.codConSelected[2], id);  

    }

    

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

}


