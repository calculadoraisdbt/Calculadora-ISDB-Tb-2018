import { Injectable } from '@angular/core';
import { InitParamMod } from 'app/layout/remux/init-paramMod';

@Injectable()
export class RemuxService extends InitParamMod {

  constructor() {
    super();
    this.load();
   }

   obteneridModuladores(){
    var idModuladores = JSON.parse(localStorage.getItem('idModuladores'));
    return idModuladores;
    

}
actualizaridModuladores(nuevo : any){
   var idModuladores = JSON.parse(localStorage.getItem('idModuladores'));
   idModuladores = nuevo ;
   localStorage.setItem('idModuladores', JSON.stringify(idModuladores)); 
}

obtenerRetardoBTS(){
  var retardoBTS = JSON.parse(localStorage.getItem('retardoBTS'));
  return retardoBTS;
  

}
actualizarRetardoBTS(nuevo : any){
 var retardoBTS = JSON.parse(localStorage.getItem('retardoBTS'));
 retardoBTS = nuevo ;
 localStorage.setItem('retardoBTS', JSON.stringify(retardoBTS)); 
}

obtenerRetardoDeTransmisor(){
  var retardoDeTransmisor = JSON.parse(localStorage.getItem('retardoDeTransmisor'));
  return retardoDeTransmisor;
  

}
actualizarRetardoDeTransmisor(nuevo : any){
 var retardoDeTransmisor = JSON.parse(localStorage.getItem('retardoDeTransmisor'));
 retardoDeTransmisor = nuevo ;
 localStorage.setItem('retardoDeTransmisor', JSON.stringify(retardoDeTransmisor)); 
}

}