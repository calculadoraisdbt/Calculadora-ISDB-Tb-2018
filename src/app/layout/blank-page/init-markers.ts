export class Init {

     

load(){
    if(localStorage.getItem('markers')=== null || localStorage.getItem('retardoRed')=== null  || localStorage.getItem('idModulador')=== null || localStorage.getItem('modo')=== null || localStorage.getItem('estan')=== null){
        console.log('No se encontraron marcadores...');

    
            var markers = [
                {   
                nombre: 'Transmisor 1',
                lati: -31.416667,
                longi : -64.183333,                   //0
                arrastrable : true,
                },
                {
                nombre: 'Transmisor 2',
                lati: -31.516667,
                longi : -64.283333,                //1
                arrastrable : true,
                },             
                {
                nombre: 'Receptor 1',
                lati: -31.316667,
                longi : -64.383333,                   //2
                arrastrable : true,
                },
                {
                nombre: 'Obstaculo',
                lati: -31.316667,
                longi : -64.383333,               //3
                arrastrable : true,
                },
             {
                nombre: 'Transmisor 3',
                lati: -31.326667,
                longi : -64.583333,                   //4
                arrastrable : true,
                },
                {
                nombre: 'Transmisor 4',
                lati: -31.616667,
                longi : -64.383333,                //5
                arrastrable : true,
                },
                {
                nombre: 'Receptor 2',
                lati: -31.616667,
                longi : -64.383333,              //6
                arrastrable : true,
                },

            ]; 

            var retardos = [0,0,0,0];
            var retardosState = [false,false,false,false];
            var retardoRed = 0; 
            var tra0 = false;
            var tra1 = false;
            var tra2 = false;
            var tra3 = false;
            var recep = false;
            var recep2 = false;
            var obst  = false;   
            var polarity = ["Atraso (+)","Atraso (+)","Atraso (+)","Atraso (+)"];
            var idModulador = ["Ingrese ID Modulador 1","Ingrese ID Modulador 2","Ingrese ID Modulador 3","Ingrese ID Modulador 4"];  
            var modo = ["Dinamico","Dinamico","Dinamico","Dinamico"];
            var negativeOn1 = false; 
            var negativeOn2 = false; 
            var negativeOn3 = false; 
            var negativeOn4 = false;  
            var enableSFN = true;
            var estan = [false,false,false,false,false,false,false];
            var retardosEstaticos = [0,0,0,0];
            localStorage.setItem('markers', JSON.stringify(markers));
            localStorage.setItem('retardos', JSON.stringify(retardos));
            localStorage.setItem('retardosState', JSON.stringify(retardosState));
            localStorage.setItem('retardoRed', JSON.stringify(retardoRed));
            localStorage.setItem('tra0', JSON.stringify(tra0));
            localStorage.setItem('tra1', JSON.stringify(tra1));
            localStorage.setItem('tra2', JSON.stringify(tra2));
            localStorage.setItem('tra3', JSON.stringify(tra3));
            localStorage.setItem('recep', JSON.stringify(recep));
            localStorage.setItem('recep2', JSON.stringify(recep2));
            localStorage.setItem('obst', JSON.stringify(obst));
            localStorage.setItem('polarity', JSON.stringify(polarity));
            localStorage.setItem('idModulador', JSON.stringify(idModulador));
            localStorage.setItem('modo', JSON.stringify(modo));
            localStorage.setItem('negativeOn1', JSON.stringify(negativeOn1));
            localStorage.setItem('negativeOn2', JSON.stringify(negativeOn2));
            localStorage.setItem('negativeOn3', JSON.stringify(negativeOn3));
            localStorage.setItem('negativeOn4', JSON.stringify(negativeOn4));
            localStorage.setItem('enableSFN', JSON.stringify(enableSFN));
            localStorage.setItem('estan', JSON.stringify(estan));
            localStorage.setItem('retardosEstaticos', JSON.stringify(retardosEstaticos));
        }else{
            console.log('Cargando marcadores...');
    }

                

    }
}