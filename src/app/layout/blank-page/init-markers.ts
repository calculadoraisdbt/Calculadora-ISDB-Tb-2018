export class Init {

     

load(){
        
        if(localStorage.getItem('markers')=== null || localStorage.getItem('retardoRed')=== null ){
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
            
            localStorage.setItem('markers', JSON.stringify(markers));
            localStorage.setItem('retardos', JSON.stringify(retardos));
            localStorage.setItem('retardosState', JSON.stringify(retardosState));
            localStorage.setItem('retardoRed', JSON.stringify(retardoRed));
            }else{
                    console.log('Cargando marcadores...');
            }

                

    }
}