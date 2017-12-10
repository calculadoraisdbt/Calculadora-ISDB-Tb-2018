export class InitParamMod {
    
         
    
    load(){
        if(localStorage.getItem('idModuladores')=== null ||localStorage.getItem('retardoBTS')=== null ||localStorage.getItem('retardoDeTransmisor')=== null  ){
            console.log('No se encontraron parametros...');
      
                var idModuladores = ["Ingrese ID Modulador 1","Ingrese ID Modulador 2","Ingrese ID Modulador 3","Ingrese ID Modulador 4"];
                var retardoBTS = [0,0,0,0];
                var retardoDeTransmisor = [0,0,0,0];
                var nombreEstacion = ["TX1","TX2","TX3","TX4"];
                localStorage.setItem('idModuladores', JSON.stringify(idModuladores));
                localStorage.setItem('retardoBTS', JSON.stringify(retardoBTS));
                localStorage.setItem('retardoDeTransmisor', JSON.stringify(retardoDeTransmisor));
                localStorage.setItem('nombreEstacion', JSON.stringify(nombreEstacion));
                
            }else{
                
            }
            
    
                 
    
        }
    }