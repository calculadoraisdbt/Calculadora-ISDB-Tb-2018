export class Init {

     

load(){
        
        if(localStorage.getItem('markers')=== null ){
            console.log('No se encontraron marcadores...');

            var markers = [
                {   
                nombre: 'Transmisor 1',
                lati: -31.416667,
                longi : -64.183333,
                arrastrable : true,
                },
                {
                nombre: 'Transmisor 2',
                lati: -31.516667,
                longi : -64.283333,
                arrastrable : true,
                },
                {
                nombre: 'Receptor',
                lati: -31.316667,
                longi : -64.383333,
                arrastrable : true,
                },
                {
                nombre: 'Obstaculo',
                lati: -31.316667,
                longi : -64.383333,
                arrastrable : true,
                },

            ];  
            localStorage.setItem('markers', JSON.stringify(markers));
        }else{
                console.log('Cargando marcadores...');
        }

             

    }
}