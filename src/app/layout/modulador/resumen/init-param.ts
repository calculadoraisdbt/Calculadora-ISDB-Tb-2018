export class InitParam {

     

load(){
        
        if(localStorage.getItem('intSelected')=== null || localStorage.getItem('esqModSelected')=== null 
            ||localStorage.getItem('codConSelected')=== null ||localStorage.getItem('select1')=== null ||
        localStorage.getItem('select2')=== null ||localStorage.getItem('select3')=== null  ){
            console.log('No se encontraron parametros...');

            var intSelected = '1/4';
            var modoSelected = 'MODO 1';
            var esqModSelected = ['16-QAM','16-QAM','16-QAM'];
            var codConSelected = ['1/2','1/2', '1/2'];
            var select1 = 0;
            var select2 = 0;
            var select3 = 0;
            var activado = false;
            localStorage.setItem('intSelected', JSON.stringify(intSelected));
            localStorage.setItem('modoSelected', JSON.stringify(modoSelected));
            localStorage.setItem('esqModSelected', JSON.stringify(esqModSelected));
            localStorage.setItem('codConSelected', JSON.stringify(codConSelected));
           localStorage.setItem('select1', JSON.stringify(select1));
            localStorage.setItem('select2', JSON.stringify(select2));
            localStorage.setItem('select3', JSON.stringify(select3));
            localStorage.setItem('activado', JSON.stringify(activado));
        }else{
                console.log('Cargando parametros...');
        }

             

    }
}