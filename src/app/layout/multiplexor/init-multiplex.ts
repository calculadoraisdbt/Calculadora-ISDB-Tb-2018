export class InitMultiplexor {
    load(){
        
        if(localStorage.getItem('ASI1Input')=== null || localStorage.getItem('ASI1Layer')=== null || localStorage.getItem('ASI1Output')=== null ||
            localStorage.getItem('ASI2Input')=== null || localStorage.getItem('ASI2Layer')=== null || localStorage.getItem('ASI2Output')=== null ||
        localStorage.getItem('ASI3Input')=== null || localStorage.getItem('ASI3Layer')=== null || localStorage.getItem('ASI3Output')=== null 
        
        ){
            console.log('No se encontraron ...');
            
            var ASI1Input  = [0,0,0,0,0,0,0,0,0,0];
            var ASI1Layer = ["Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A"];
            var ASI1Output  = [0,0,0,0,0,0,0,0,0,0];
            localStorage.setItem('ASI1Input', JSON.stringify(ASI1Input));
            localStorage.setItem('ASI1Layer', JSON.stringify(ASI1Layer));
            localStorage.setItem('ASI1Output', JSON.stringify(ASI1Output));

            var ASI2Input  = [0,0,0,0,0,0,0,0,0,0];
            var ASI2Layer = ["Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A"];
            var ASI2Output  = [0,0,0,0,0,0,0,0,0,0];
            localStorage.setItem('ASI2Input', JSON.stringify(ASI2Input));
            localStorage.setItem('ASI2Layer', JSON.stringify(ASI2Layer));
            localStorage.setItem('ASI2Output', JSON.stringify(ASI2Output));

            var ASI3Input  = [0,0,0,0,0,0,0,0,0,0];
            var ASI3Layer = ["Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A","Layer A"];
            var ASI3Output  = [0,0,0,0,0,0,0,0,0,0];
            localStorage.setItem('ASI3Input', JSON.stringify(ASI3Input));
            localStorage.setItem('ASI3Layer', JSON.stringify(ASI3Layer));
            localStorage.setItem('ASI3Output', JSON.stringify(ASI3Output));
        }else{
            console.log('Cargando ...');

        }
    }
}