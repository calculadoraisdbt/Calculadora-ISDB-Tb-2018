import { Injectable } from '@angular/core';
import { InitParam } from 'app/layout/remultiplexor/init-param';

//var tspNulos = [];

@Injectable()
export class ModuladorService extends InitParam {

  constructor() {
    super();
    this.load();
   }
   // FUNCIONES PARA EL INTERVALO
   obtenerIntervalo(){

      var intSelected = JSON.parse(localStorage.getItem('intSelected'));
      return intSelected;

   }

    obtenerIntGua(){

      var intGua = JSON.parse(localStorage.getItem('intGua'));
      return intGua;

   }

    actualizarIntGua(newParam : any){

          var intGua = JSON.parse(localStorage.getItem('intGua'));

          intGua = newParam;

          localStorage.setItem('intGua', JSON.stringify(intGua));


   }

   obteneralturaIntGua(){
      
            var alturaIntGua = JSON.parse(localStorage.getItem('alturaIntGua'));
            return alturaIntGua;
      
         }
      
          actualizarAlturaIntGua(newParam : any){
      
                var alturaIntGua = JSON.parse(localStorage.getItem('alturaIntGua'));
      
                alturaIntGua = newParam;
      
                localStorage.setItem('alturaIntGua', JSON.stringify(alturaIntGua));
      
      
         }
         obteneralturaIntGua2(){
            
                  var alturaIntGua2 = JSON.parse(localStorage.getItem('alturaIntGua2'));
                  return alturaIntGua2;
            
               }
            
                actualizarAlturaIntGua2(newParam : any){
            
                      var alturaIntGua2 = JSON.parse(localStorage.getItem('alturaIntGua2'));
            
                      alturaIntGua2 = newParam;
            
                      localStorage.setItem('alturaIntGua2', JSON.stringify(alturaIntGua2));
            
            
               }


   actualizarIntervalo(newParam : any){

          var intSelected = JSON.parse(localStorage.getItem('intSelected'));

          intSelected = newParam;

          localStorage.setItem('intSelected', JSON.stringify(intSelected));


   }
//FUNCIONES PARA EL MODO
    obtenerModo(){

      var modoSelected = JSON.parse(localStorage.getItem('modoSelected'));
      return modoSelected;
     

   }

   actualizarModo(newParam : any){

          var modoSelected = JSON.parse(localStorage.getItem('modoSelected'));

          modoSelected = newParam;

          localStorage.setItem('modoSelected', JSON.stringify(modoSelected));


   }

   //FUNCIONES PARA ESQUEMA DE MODULACION
    obtenerEsquemaModulacion(){

      var esqModSelected = JSON.parse(localStorage.getItem('esqModSelected'));
      return esqModSelected;
     

   }

   actualizarEsquemaModulacion(newParam : any , id){ 

    if(id === 'capa A') {

         var esqModSelected = JSON.parse(localStorage.getItem('esqModSelected'));

          esqModSelected[0] = newParam;

          localStorage.setItem('esqModSelected', JSON.stringify(esqModSelected));

    }
     if (id === 'capa B') {

          var esqModSelected = JSON.parse(localStorage.getItem('esqModSelected'));

          esqModSelected[1] = newParam;

          localStorage.setItem('esqModSelected', JSON.stringify(esqModSelected));


    }
    if(id === 'capa C') {

         var esqModSelected = JSON.parse(localStorage.getItem('esqModSelected'));

          esqModSelected[2] = newParam;

          localStorage.setItem('esqModSelected', JSON.stringify(esqModSelected));


    }}
    obtenerBp(){
      
            var bp = JSON.parse(localStorage.getItem('bp'));
            return bp;
           
      
         }
   actualizarBp(newParam0 : any , newParam1 : any,newParam2 : any){
            
            
                     var bp = JSON.parse(localStorage.getItem('bp'));
            
                     bp[0] = newParam0;
                     bp[1] = newParam1;
                     bp[2] = newParam2;
            
                      localStorage.setItem('bp', JSON.stringify(bp));
            
            
               }
         //FUNCIONES PARA CODIFICACION CONVOLUCIONAL
    obtenerCodificacionConvolucional(){

      var codConSelected = JSON.parse(localStorage.getItem('codConSelected'));
      return codConSelected;
     

   }

   actualizarCodificacionConvolucional(newParam : any , id){

    if(id === 'capa A') {

         var codConSelected = JSON.parse(localStorage.getItem('codConSelected'));

          codConSelected[0] = newParam;

          localStorage.setItem('codConSelected', JSON.stringify(codConSelected));

    }
     if (id === 'capa B') {

          var codConSelected = JSON.parse(localStorage.getItem('codConSelected'));

          codConSelected[1] = newParam;

          localStorage.setItem('codConSelected', JSON.stringify(codConSelected));


    }
    if(id === 'capa C') {

         var codConSelected = JSON.parse(localStorage.getItem('codConSelected'));

          codConSelected[2] = newParam;

          localStorage.setItem('codConSelected', JSON.stringify(codConSelected));


    }


   }

   obtenerKi(){
      
            var ki = JSON.parse(localStorage.getItem('ki'));
            return ki;
           
      
         }
   actualizarKi(newParam0 : any , newParam1 : any,newParam2 : any){
            
            
                     var ki = JSON.parse(localStorage.getItem('ki'));
            
                      ki[0] = newParam0;
                      ki[1] = newParam1;
                      ki[2] = newParam2;
            
                      localStorage.setItem('ki', JSON.stringify(ki));
            
            
               }
            
   //FUNCION PARA LOS SEGMENTOS

   obtenerSegmentoA(){

      var select1 = JSON.parse(localStorage.getItem('select1'));
      return select1;
     

   }

   obtenerSegmentoB(){

      var select2 = JSON.parse(localStorage.getItem('select2'));
      return select2;
     

   }

   obtenerSegmentoC(){

      var select3 = JSON.parse(localStorage.getItem('select3'));
      return select3;
     

   }

   actualizarSegmentoA(value){
            
            var select1 = JSON.parse(localStorage.getItem('select1'));
            select1 = value;
             localStorage.setItem('select1', JSON.stringify(select1));

   }

   actualizarSegmentoB(value){
            var select2 = JSON.parse(localStorage.getItem('select2'));
            select2 = value;
             localStorage.setItem('select2', JSON.stringify(select2));
   }

   actualizarSegmentoC(value){
            var select3 = JSON.parse(localStorage.getItem('select3'));
             select3 = value;
             localStorage.setItem('select3', JSON.stringify(select3));
      
   }

   actualizarActivado(value){
         var activado = JSON.parse(localStorage.getItem('activado'));
             activado = value;
             localStorage.setItem('activado', JSON.stringify(activado));
   }

   obtenerActivado(){
             var activado = JSON.parse(localStorage.getItem('activado'));

      return activado;

   }

   obtenerEntrelazadoDeTiempo(){
      
            var entrelazadoDeTiempo = JSON.parse(localStorage.getItem('entrelazadoDeTiempo'));
            return entrelazadoDeTiempo;
           
      
         }

         actualizarEntrelazadoDeTiempo(value){
            var entrelazadoDeTiempo = JSON.parse(localStorage.getItem('entrelazadoDeTiempo'));
            entrelazadoDeTiempo = value;
             localStorage.setItem('entrelazadoDeTiempo', JSON.stringify(entrelazadoDeTiempo));
      
   }

   obtenerTspNulos(){
      
            var tspNulos = JSON.parse(localStorage.getItem('tspNulos'));
            return tspNulos;
           
      
         }

         actualizarTspNulos(value){
            var tspNulos = JSON.parse(localStorage.getItem('tspNulos'));
            tspNulos = value;
             localStorage.setItem('tspNulos', JSON.stringify(tspNulos));
      
   }

   obtenerTspCapa(){
      
            var tspCapa = JSON.parse(localStorage.getItem('tspCapa'));
            return tspCapa;
           
      
         }

         actualizarTspCapa(value){
            var tspCapa = JSON.parse(localStorage.getItem('tspCapa'));
            tspCapa = value;
             localStorage.setItem('tspCapa', JSON.stringify(tspCapa));
      
   }

   /*obtenerTspNulos(value){
      
             tspNulos = value ;
      
         }

    tspNulosParaMenu(){
      return tspNulos;
    }*/
            
   
      
}
