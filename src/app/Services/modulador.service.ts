import { Injectable } from '@angular/core';
import { InitParam } from 'app/layout/modulador/resumen/init-param'

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
             console.log(typeof activado);
      return activado;

   }

}
