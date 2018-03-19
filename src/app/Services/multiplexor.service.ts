import { Injectable } from '@angular/core';
import { InitMultiplexor } from 'app/layout/multiplexor/init-multiplex'

@Injectable()
export class MultiplexorService extends InitMultiplexor {

  constructor() {
    super();
    this.load();
    
   }

//ASI 1
   obtenerASI1Input(){
    var ASI1Input = JSON.parse(localStorage.getItem('ASI1Input'));
    return ASI1Input;
    

}
actualizarASI1Input(nuevo : any){
   var ASI1Input = JSON.parse(localStorage.getItem('ASI1Input'));
   ASI1Input = nuevo ;
   localStorage.setItem('ASI1Input', JSON.stringify(ASI1Input)); 
}

obtenerASI1Layer(){
    var ASI1Layer = JSON.parse(localStorage.getItem('ASI1Layer'));
    return ASI1Layer;
    

}
actualizarASI1Layer(nuevo : any){
   var ASI1Layer = JSON.parse(localStorage.getItem('ASI1Layer'));
   ASI1Layer = nuevo ;
   localStorage.setItem('ASI1Layer', JSON.stringify(ASI1Layer)); 
}

obtenerASI1Output(){
    var ASI1Output = JSON.parse(localStorage.getItem('ASI1Output'));
    return ASI1Output;
    

}
actualizarASI1Output(nuevo : any){
   var ASI1Output = JSON.parse(localStorage.getItem('ASI1Output'));
   ASI1Output = nuevo ;
   localStorage.setItem('ASI1Output', JSON.stringify(ASI1Output)); 
}

obtenerASI1Enable(){
    var ASI1Enable = JSON.parse(localStorage.getItem('ASI1Enable'));
    return ASI1Enable;
    

}
actualizarASI1Enable(nuevo : any){
   var ASI1Enable = JSON.parse(localStorage.getItem('ASI1Enable'));
   ASI1Enable = nuevo ;
   localStorage.setItem('ASI1Enable', JSON.stringify(ASI1Enable)); 
}



//ASI 2
obtenerASI2Input(){
    var ASI2Input = JSON.parse(localStorage.getItem('ASI2Input'));

    return ASI2Input;
    

}
actualizarASI2Input(nuevo : any){
   var ASI2Input = JSON.parse(localStorage.getItem('ASI2Input'));
   ASI2Input = nuevo ;
   localStorage.setItem('ASI2Input', JSON.stringify(ASI2Input)); 
}

obtenerASI2Layer(){
    var ASI2Layer = JSON.parse(localStorage.getItem('ASI2Layer'));

    return ASI2Layer;
    

}
actualizarASI2Layer(nuevo : any){
   var ASI2Layer = JSON.parse(localStorage.getItem('ASI2Layer'));
   ASI2Layer = nuevo ;
   localStorage.setItem('ASI2Layer', JSON.stringify(ASI2Layer)); 
}

obtenerASI2Output(){
    var ASI2Output = JSON.parse(localStorage.getItem('ASI2Output'));
    return ASI2Output;
    

}
actualizarASI2Output(nuevo : any){
   var ASI2Output = JSON.parse(localStorage.getItem('ASI2Output'));
   ASI2Output = nuevo ;
   localStorage.setItem('ASI2Output', JSON.stringify(ASI2Output)); 
}

obtenerASI2Enable(){
    var ASI2Enable = JSON.parse(localStorage.getItem('ASI2Enable'));
    return ASI2Enable;
    

}
actualizarASI2Enable(nuevo : any){
   var ASI2Enable = JSON.parse(localStorage.getItem('ASI2Enable'));
   ASI2Enable = nuevo ;
   localStorage.setItem('ASI2Enable', JSON.stringify(ASI2Enable)); 
}
//ASI 3
obtenerASI3Input(){
    var ASI3Input = JSON.parse(localStorage.getItem('ASI3Input'));
    return ASI3Input;
    

}
actualizarASI3Input(nuevo : any){
   var ASI3Input = JSON.parse(localStorage.getItem('ASI3Input'));
   ASI3Input = nuevo ;
   localStorage.setItem('ASI3Input', JSON.stringify(ASI3Input)); 
}

obtenerASI3Layer(){
    var ASI3Layer = JSON.parse(localStorage.getItem('ASI3Layer'));
    return ASI3Layer;
    

}
actualizarASI3Layer(nuevo : any){
   var ASI3Layer = JSON.parse(localStorage.getItem('ASI3Layer'));
   ASI3Layer = nuevo ;
   localStorage.setItem('ASI3Layer', JSON.stringify(ASI3Layer)); 
}

obtenerASI3Output(){
    var ASI3Output = JSON.parse(localStorage.getItem('ASI3Output'));
    return ASI3Output;
    

}
actualizarASI3Output(nuevo : any){
   var ASI3Output = JSON.parse(localStorage.getItem('ASI3Output'));
   ASI3Output = nuevo ;
   localStorage.setItem('ASI3Output', JSON.stringify(ASI3Output)); 
}
obtenerASI3Enable(){
    var ASI3Enable = JSON.parse(localStorage.getItem('ASI3Enable'));
    return ASI3Enable;
    

}
actualizarASI3Enable(nuevo : any){
   var ASI3Enable = JSON.parse(localStorage.getItem('ASI3Enable'));
   ASI3Enable = nuevo ;
   localStorage.setItem('ASI3Enable', JSON.stringify(ASI3Enable)); 
}

// TABLAS

obtenerTableLayer(){
    var TableLayer = JSON.parse(localStorage.getItem('TableLayer'));
    return TableLayer;
    

}
actualizarTableLayer(nuevo : any){
   var TableLayer = JSON.parse(localStorage.getItem('TableLayer'));
   TableLayer = nuevo ;
   localStorage.setItem('TableLayer', JSON.stringify(TableLayer)); 
}

obtenerTablePmtPid(){
    var TablePmtPid = JSON.parse(localStorage.getItem('TablePmtPid'));
    return TablePmtPid;
    

}
actualizarTablePmtPid(nuevo : any){
   var TablePmtPid = JSON.parse(localStorage.getItem('TablePmtPid'));
   TablePmtPid = nuevo ;
   localStorage.setItem('TablePmtPid', JSON.stringify(TablePmtPid)); 
}

obtenerTableEnable(){
    var TableEnable = JSON.parse(localStorage.getItem('TableEnable'));
    return TableEnable;
    

}
actualizarTableEnable(nuevo : any){
   var TableEnable = JSON.parse(localStorage.getItem('TableEnable'));
   TableEnable = nuevo ;
   localStorage.setItem('TableEnable', JSON.stringify(TableEnable)); 
}

}