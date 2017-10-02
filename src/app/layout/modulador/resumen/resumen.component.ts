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
  modoBoolean = [] ;
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
  pps = [];
  Nmodo1 = [] ;
  Nmodo2 = [] ;
  Nmodo3 = [] ;
  Nbts = [] ;
  entrelazadoDeTiempo = [] ;

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
           this.entrelazadoDeTiempo = this._moduladorService.obtenerEntrelazadoDeTiempo();
   }

   
        

  ngOnInit() {
                this.calculoIntervaloGuarda(this.intSelected );
                this.calculoKi(this.codConSelected[0],this.codConSelected[1],this.codConSelected[2]);
                this.detDeltaGuarda(this.intSelected);
                this.calculoBp(this.esqModSelected[0],this.esqModSelected[1],this.esqModSelected[2]);
                this.pulsosPorSimbolo(this.intSelected );
                this.numeroTSP();
                this.modoParaEntrelazado();

  }

  intSelection(value){

    
     this.intSelected = value;
     this._moduladorService.actualizarIntervalo(this.intSelected);

    this.calculoIntervaloGuarda(value);
    this.detDeltaGuarda(value);
    this.pulsosPorSimbolo(value );
    this.numeroTSP();
        
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
     this.modoParaEntrelazado();
}

modoParaEntrelazado(){
    if(this.modoSelected === "MODO 1"){
        this.modoBoolean[0] = true;
        this.modoBoolean[2] = false;
        this.modoBoolean[1] = false;
    }
    if(this.modoSelected === "MODO 2"){
       this.modoBoolean[1] = true;
       this.modoBoolean[0] = false;
       this.modoBoolean[2] = false;
    }
    if(this.modoSelected === "MODO 3"){
        this.modoBoolean[2] = true;
        this.modoBoolean[1] = false;
        this.modoBoolean[0] = false;
       }
       console.log("aca boolean",this.modoBoolean)
}

guardarValoresEntrelazado(){
    this._moduladorService.actualizarEntrelazadoDeTiempo(this.entrelazadoDeTiempo);
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

    this.calculoBp(this.esqModSelected[0],this.esqModSelected[1],this.esqModSelected[2]);
   
    

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
    this.cantidadPaquetesTSP();
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
    this.cantidadPaquetesTSP();
    

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

//PULSOS POR SIMBOLO OFDM

pulsosPorSimbolo(value){
    if(value === "1/4"){
        this.pps[0] = '2560';
        this.pps[1] = '5120'; 
        this.pps[2] = '10240';

    }

    if(value === "1/8"){
        this.pps[0] = '2304';
        this.pps[1] = '4608'; 
        this.pps[2] = '9216';
                
    }
    if(value === "1/16"){
        
        this.pps[0] = '2176';
        this.pps[1] = '4352'; 
        this.pps[2] = '8704';           
    } 
    if(value === "1/32"){
        this.pps[0] = '2112';
        this.pps[1] = '4224'; 
        this.pps[2] = '8448';           
                                
    }


}

//N CANTIDAD DE PAQUETES TSP POR SEGMENTO Y POR CUADRO OFDM

cantidadPaquetesTSP(){
//CAPA A
    if(this.bp[0] === 2 ){
        
            if(this.ki[0] === 1/2){ 
                this.Nmodo1[0] = 12 ;
                this.Nmodo2[0] = 24 ;
                this.Nmodo3[0] = 48 ;
            };
            if(this.ki[0] === 2/3){
                this.Nmodo1[0] = 16 ;
                this.Nmodo2[0] = 32 ;
                this.Nmodo3[0] = 64 ;                
            };
            if(this.ki[0] === 3/4){
                this.Nmodo1[0] = 18 ;
                this.Nmodo2[0] = 36 ;
                this.Nmodo3[0] = 72 ;                
            };
            if(this.ki[0] === 5/6){
                this.Nmodo1[0] = 20 ;
                this.Nmodo2[0] = 40 ;
                this.Nmodo3[0] = 80 ;                
            };
            if(this.ki[0] === 7/8){
                this.Nmodo1[0] = 21 ;
                this.Nmodo2[0] = 42 ;
                this.Nmodo3[0] = 84 ;                
            };
            }

            if(this.bp[0] === 4 ){
                if(this.ki[0] === 1/2){ 
                    this.Nmodo1[0] = 24 ;
                    this.Nmodo2[0] = 48 ;
                    this.Nmodo3[0] = 96 ;
                };
                if(this.ki[0] === 2/3){
                    this.Nmodo1[0] = 32 ;
                    this.Nmodo2[0] = 64 ;
                    this.Nmodo3[0] = 128 ;                
                };
                if(this.ki[0] === 3/4){
                    this.Nmodo1[0] = 36 ;
                    this.Nmodo2[0] = 72 ;
                    this.Nmodo3[0] = 144 ;                
                };
                if(this.ki[0] === 5/6){
                    this.Nmodo1[0] = 40 ;
                    this.Nmodo2[0] = 80 ;
                    this.Nmodo3[0] = 160 ;                
                };
                if(this.ki[0] === 7/8){
                    this.Nmodo1[0] = 42 ;
                    this.Nmodo2[0] = 84 ;
                    this.Nmodo3[0] = 168 ;                
                };

            }


                if(this.bp[0] === 6 ){
                    if(this.ki[0] === 1/2){ 
                        this.Nmodo1[0] = 36 ;
                        this.Nmodo2[0] = 72 ;
                        this.Nmodo3[0] = 144 ;
                    };
                    if(this.ki[0] === 2/3){
                        this.Nmodo1[0] = 48 ;
                        this.Nmodo2[0] = 96 ;
                        this.Nmodo3[0] = 192 ;                
                    };
                    if(this.ki[0] === 3/4){
                        this.Nmodo1[0] = 58 ;
                        this.Nmodo2[0] = 108 ;
                        this.Nmodo3[0] = 216 ;                
                    };
                    if(this.ki[0] === 5/6){
                        this.Nmodo1[0] = 60 ;
                        this.Nmodo2[0] = 120 ;
                        this.Nmodo3[0] = 240 ;                
                    };
                    if(this.ki[0] === 7/8){
                        this.Nmodo1[0] = 63 ;
                        this.Nmodo2[0] = 126 ;
                        this.Nmodo3[0] = 252 ;                
                    };                            
                }
//CAPA B
if(this.bp[1] === 2 ){
        if(this.ki[1] === 1/2){ 
            this.Nmodo1[1] = 12 ;
            this.Nmodo2[1] = 24 ;
            this.Nmodo3[1] = 48 ;
        };
        if(this.ki[1] === 2/3){
            this.Nmodo1[1] = 16 ;
            this.Nmodo2[1] = 32 ;
            this.Nmodo3[1] = 64 ;                
        };
        if(this.ki[1] === 3/4){
            this.Nmodo1[1] = 18 ;
            this.Nmodo2[1] = 36 ;
            this.Nmodo3[1] = 72 ;                
        };
        if(this.ki[1] === 5/6){
            this.Nmodo1[1] = 20 ;
            this.Nmodo2[1] = 40 ;
            this.Nmodo3[1] = 80 ;                
        };
        if(this.ki[1] === 7/8){
            this.Nmodo1[1] = 21 ;
            this.Nmodo2[1] = 42 ;
            this.Nmodo3[1] = 84 ;                
        };

        }

        if(this.bp[1] === 4 ){
            if(this.ki[1] === 1/2){ 
                this.Nmodo1[1] = 24 ;
                this.Nmodo2[1] = 48 ;
                this.Nmodo3[1] = 96 ;
            };
            if(this.ki[1] === 2/3){
                this.Nmodo1[1] = 32 ;
                this.Nmodo2[1] = 64 ;
                this.Nmodo3[1] = 128 ;                
            };
            if(this.ki[1] === 3/4){
                this.Nmodo1[1] = 36 ;
                this.Nmodo2[1] = 72 ;
                this.Nmodo3[1] = 144 ;                
            };
            if(this.ki[1] === 5/6){
                this.Nmodo1[1] = 40 ;
                this.Nmodo2[1] = 80 ;
                this.Nmodo3[1] = 160 ;                
            };
            if(this.ki[1] === 7/8){
                this.Nmodo1[1] = 42 ;
                this.Nmodo2[1] = 84 ;
                this.Nmodo3[1] = 168 ;                
            };

        }


            if(this.bp[1] === 6 ){
                if(this.ki[1] === 1/2){ 
                    this.Nmodo1[1] = 36 ;
                    this.Nmodo2[1] = 72 ;
                    this.Nmodo3[1] = 144 ;
                };
                if(this.ki[1] === 2/3){
                    this.Nmodo1[1] = 48 ;
                    this.Nmodo2[1] = 96 ;
                    this.Nmodo3[1] = 192 ;                
                };
                if(this.ki[1] === 3/4){
                    this.Nmodo1[1] = 58 ;
                    this.Nmodo2[1] = 108 ;
                    this.Nmodo3[1] = 216 ;                
                };
                if(this.ki[1] === 5/6){
                    this.Nmodo1[1] = 60 ;
                    this.Nmodo2[1] = 120 ;
                    this.Nmodo3[1] = 240 ;                
                };
                if(this.ki[1] === 7/8){
                    this.Nmodo1[1] = 63 ;
                    this.Nmodo2[1] = 126 ;
                    this.Nmodo3[1] = 252 ;                
                };                            
            }
//CAPA C
console.log("entra aca", this.bp[0])
if(this.bp[2] === 2 ){
        if(this.ki[2] === 1/2){ 
            this.Nmodo1[2] = 12 ;
            this.Nmodo2[2] = 24 ;
            this.Nmodo3[2] = 48 ;
        };
        if(this.ki[2] === 2/3){
            this.Nmodo1[2] = 16 ;
            this.Nmodo2[2] = 32 ;
            this.Nmodo3[2] = 64 ;                
        };
        if(this.ki[2] === 3/4){
            this.Nmodo1[2] = 18 ;
            this.Nmodo2[2] = 36 ;
            this.Nmodo3[2] = 72 ;                
        };
        if(this.ki[2] === 5/6){
            this.Nmodo1[2] = 20 ;
            this.Nmodo2[2] = 40 ;
            this.Nmodo3[2] = 80 ;                
        };
        if(this.ki[2] === 7/8){
            this.Nmodo1[2] = 21 ;
            this.Nmodo2[2] = 42 ;
            this.Nmodo3[2] = 84 ;                
        };

        }

        if(this.bp[2] === 4 ){
            if(this.ki[2] === 1/2){ 
                this.Nmodo1[2] = 24 ;
                this.Nmodo2[2] = 48 ;
                this.Nmodo3[2] = 96 ;
            };
            if(this.ki[2] === 2/3){
                this.Nmodo1[2] = 32 ;
                this.Nmodo2[2] = 64 ;
                this.Nmodo3[2] = 128 ;                
            };
            if(this.ki[2] === 3/4){
                this.Nmodo1[2] = 36 ;
                this.Nmodo2[2] = 72 ;
                this.Nmodo3[2] = 144 ;                
            };
            if(this.ki[2] === 5/6){
                this.Nmodo1[2] = 40 ;
                this.Nmodo2[2] = 80 ;
                this.Nmodo3[2] = 160 ;                
            };
            if(this.ki[2] === 7/8){
                this.Nmodo1[2] = 42 ;
                this.Nmodo2[2] = 84 ;
                this.Nmodo3[2] = 168 ;                
            };

        }


            if(this.bp[2] === 6 ){
                if(this.ki[2] === 1/2){ 
                    this.Nmodo1[2] = 36 ;
                    this.Nmodo2[2] = 72 ;
                    this.Nmodo3[2] = 144 ;
                };
                if(this.ki[2] === 2/3){
                    this.Nmodo1[2] = 48 ;
                    this.Nmodo2[2] = 96 ;
                    this.Nmodo3[2] = 192 ;                
                };
                if(this.ki[2] === 3/4){
                    this.Nmodo1[2] = 58 ;
                    this.Nmodo2[2] = 108 ;
                    this.Nmodo3[2] = 216 ;                
                };
                if(this.ki[2] === 5/6){
                    this.Nmodo1[2] = 60 ;
                    this.Nmodo2[2] = 120 ;
                    this.Nmodo3[2] = 240 ;                
                };
                if(this.ki[2] === 7/8){
                    this.Nmodo1[2] = 63 ;
                    this.Nmodo2[2] = 126 ;
                    this.Nmodo3[2] = 252 ;                
                };                            
            }                            
}


numeroTSP(){

    if(this.intSelected === '1/4'){
        this.Nbts[0] = 1280 ; 
        this.Nbts[1] = 2560 ; 
        this.Nbts[2] = 5120 ;         
    }
    if(this.intSelected === '1/8'){
        this.Nbts[0] = 1152 ; 
        this.Nbts[1] = 2304 ; 
        this.Nbts[2] = 4608 ;   
    }
    if(this.intSelected === '1/16'){
        this.Nbts[0] = 1088 ; 
        this.Nbts[1] = 2176 ; 
        this.Nbts[2] = 4352 ;           
                
    }
    if(this.intSelected === '1/32'){
        this.Nbts[0] = 1056 ; 
        this.Nbts[1] = 2112 ; 
        this.Nbts[2] = 4224 ;                   
                        
    }            
}

}

