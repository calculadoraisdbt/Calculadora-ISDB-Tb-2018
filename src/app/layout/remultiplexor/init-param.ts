export class InitParam {

     

load(){
        
        if(localStorage.getItem('intSelected')=== null || localStorage.getItem('esqModSelected')=== null 
            ||localStorage.getItem('codConSelected')=== null ||localStorage.getItem('select1')=== null ||
        localStorage.getItem('select2')=== null ||localStorage.getItem('select3')=== null ||localStorage.getItem('entrelazadoDeTiempo')=== null 
        ||localStorage.getItem('alturaIntGua')=== null||localStorage.getItem('alturaIntGua2')=== null ||localStorage.getItem('tspCapa')=== null){
            

            var intSelected = '1/4';
            var modoSelected = 'MODO 1';
            var esqModSelected = ['QPSK','QPSK','QPSK'];
            var codConSelected = ["1/2","1/2","1/2"];
            var select1 = 0;
            var select2 = 0;
            var select3 = 0;
            var activado = false;
            var entrelazadoDeTiempo = [0,0,0]; 
            localStorage.setItem('intSelected', JSON.stringify(intSelected));
            localStorage.setItem('modoSelected', JSON.stringify(modoSelected));
            localStorage.setItem('esqModSelected', JSON.stringify(esqModSelected));
            localStorage.setItem('codConSelected', JSON.stringify(codConSelected));
            localStorage.setItem('select1', JSON.stringify(select1));
            localStorage.setItem('select2', JSON.stringify(select2));
            localStorage.setItem('select3', JSON.stringify(select3));
            localStorage.setItem('activado', JSON.stringify(activado));
            localStorage.setItem('entrelazadoDeTiempo', JSON.stringify(entrelazadoDeTiempo));
            //resultados
            var intGua =63;
            localStorage.setItem('intGua', JSON.stringify(intGua));
            var ki = [1/2,1/2,1/2];
            localStorage.setItem('ki', JSON.stringify(ki));
            var bp = [2,2,2];
            localStorage.setItem('bp', JSON.stringify(bp));
            var alturaIntGua = 60;
            localStorage.setItem('alturaIntGua', JSON.stringify(alturaIntGua));
            var alturaIntGua2 = 60;
            localStorage.setItem('alturaIntGua2', JSON.stringify(alturaIntGua2));
            var tspNulos = 1279;
            localStorage.setItem('tspNulos', JSON.stringify(tspNulos));
            var tspCapa = [0,0,0];
            localStorage.setItem('tspCapa', JSON.stringify(tspCapa));
        }else{
               
        }

             

    }
}