export class InitParamMod {
    
         
    
    load(){
            
            if(localStorage.getItem('idModuladores')=== null ){
                console.log('No se encontraron parametros...');
    
                var idModuladores = ["Ingrese ID Modulador 1","Ingrese ID Modulador 2","Ingrese ID Modulador 3","Ingrese ID Modulador 4"];
                
                localStorage.setItem('idModuladores', JSON.stringify(idModuladores));
       
                           }else{
                    console.log('Cargando parametros...');
            }
    
                 
    
        }
    }