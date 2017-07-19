import { Injectable,  } from '@angular/core';
import { Init } from 'app/layout/blank-page/init-markers';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

declare var google: any;
  var lat0 : number;
  var lng0 : number;
  var lat1 : number;
  var lng1 : number;
  var  lat2 : number;
   var lng3 : number;
  var  lat3 : number;
  var lng2 : number;
  var dist : number = 0;
  var dist0 : number = 0;
  var disttTx1Ob : number = 0;
  var disttObRx : number = 0;
  var disttTx2Ob : number = 0;
@Injectable()
export class MarkersService extends Init {



  constructor() {
    super();
    console.log('Servicio de marcador iniciado...');
    this.load();
   }

   obtenerMarcadores(){

      var markers = JSON.parse(localStorage.getItem('markers'));
      return markers;

   }

  // agregarMarcador(nuevoMarcador){
        //mostrar los marcadores
    //    var markers = JSON.parse(localStorage.getItem('markers'));

        //Agregar al arreglo
     //   markers.push(nuevoMarcador);

        //Configurar en el local Storage
      //  localStorage.setItem('markers', JSON.stringify(markers));


  // }

   actualizarMarcador(marker, nuevaLat, nuevaLng){
         
        //obtener los marcadores
        var markers = JSON.parse(localStorage.getItem('markers'));
          
             if (marker.nombre === 'Transmisor 1'){

                 lat0 = nuevaLat;
                 lng0 = nuevaLng;
                   markers[0].lati=nuevaLat;
                  markers[0].longi=nuevaLng;



              }

                if (marker.nombre === 'Transmisor 2'){

                   lat1 = nuevaLat;
                   lng1 = nuevaLng;
                    markers[1].lati=nuevaLat;
                     markers[1].longi=nuevaLng;


             }

              if (marker.nombre === 'Receptor'){

                  lat2 = nuevaLat;
                  lng2 = nuevaLng;
                   markers[2].lati=nuevaLat;
                     markers[2].longi=nuevaLng;

             }

               if (marker.nombre === 'Obstaculo'){

                  lat3 = nuevaLat;
                  lng3 = nuevaLng;
                   markers[3].lati=nuevaLat;
                     markers[3].longi=nuevaLng;

             }
              
          
          //Configurar en el local Storage
        localStorage.setItem('markers', JSON.stringify(markers));
     
   }


   computeDistanceBetween(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i : number =0;
                if(i === 0 ){
                              var pos_1 = new google.maps.LatLng(markers[1].lati, markers[1].longi);
	                            var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);
                              i++;
                }else {
                               var pos_1 = new google.maps.LatLng(lat1,lng1);
	                             var pos_2 = new google.maps.LatLng(lat2,lng2);

                }
                
                
                
               dist = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_2).toFixed(2));
               dist = (dist/1000)
               var testA : any = document.getElementById("testA");
               testA.innerHTML = dist + " Km";

    }


    computeDistanceBetween1(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i : number =0;
                if(i === 0){
                              var pos_0 = new google.maps.LatLng(markers[0].lati, markers[0].longi);
	                            var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);
                              i++;

                }else{
                              var pos_0 = new google.maps.LatLng(lat0,lng0);
	                            var pos_2 = new google.maps.LatLng(lat2,lng2);

                }
             
                

               dist0 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_2).toFixed(2)); 
               dist0 = (dist0/1000)
               var testB : any = document.getElementById("testB");
               testB.innerHTML = dist0 + " Km";

    }

  computeDistanceBetweenTx1Ob(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i : number =0;
                if(i === 0){
                              var pos_0 = new google.maps.LatLng(markers[0].lati, markers[0].longi);  //TX1
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_0 = new google.maps.LatLng(lat0,lng0);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                }
             
                

               disttTx1Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_3).toFixed(2)); 
               disttObRx = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_2, pos_3).toFixed(2)); 
               var total = disttTx1Ob + disttObRx;
               total = (total/1000)
               var testTx1Ob : any = document.getElementById("Tx1Ob");
               testTx1Ob.innerHTML = total + " Km";

    }          
              
    computeDistanceBetweenTx2Ob(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i : number =0;
                if(i === 0){
                              var pos_1 = new google.maps.LatLng(markers[0].lati, markers[1].longi);  //TX2
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_1 = new google.maps.LatLng(lat1,lng1);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                }
             
                

               disttTx2Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_3).toFixed(2)); 
               disttObRx = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_2, pos_3).toFixed(2)); 
               var total = (((disttTx2Ob + disttObRx)/299792458)*1000000).toFixed(2);
               var totald = (disttTx2Ob + disttObRx).toFixed(2);
               var testTx2Ob : any = document.getElementById("Tx2Ob");
               testTx2Ob.innerHTML = total + " µs" ;

    }          

    updtTx1(marker,  nuevaLat, nuevaLng){

      //obtener los marcadores
                   lat0 = nuevaLat;
                   lng0 = nuevaLng;
      

         //Configurar en el local Storage
        localStorage.setItem('markers', JSON.stringify(marker));           

      console.log(marker[0]);

    }

     updtTx2(marker,  nuevaLat, nuevaLng){

      //obtener los marcadores
                   lat1 = nuevaLat;
                   lng1 = nuevaLng;
    

         //Configurar en el local Storage
        localStorage.setItem('markers', JSON.stringify(marker));           



    }

    updtRx (marker,  nuevaLat, nuevaLng){

       //obtener los marcadores
                   lat2 = nuevaLat;
                   lng2 = nuevaLng;
    

         //Configurar en el local Storage
        localStorage.setItem('markers', JSON.stringify(marker));     

    }

    updtOb (marker,  nuevaLat, nuevaLng){

       //obtener los marcadores
                   lat3 = nuevaLat;
                   lng3 = nuevaLng;
    

         //Configurar en el local Storage
        localStorage.setItem('markers', JSON.stringify(marker));     

    }



    
   

}
