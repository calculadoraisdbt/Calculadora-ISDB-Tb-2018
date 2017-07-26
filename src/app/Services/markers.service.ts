import { Injectable,  } from '@angular/core';
import { Init } from 'app/layout/blank-page/init-markers';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

declare var google: any;
  var lat0 : number;
  var lng0 : number;
  var lat1 : number;
  var lng1 : number;
  var  lat2 : number;
  var lng2 : number;
   var lng3 : number;
  var  lat3 : number;
  var lng4 : number;
  var  lat4 : number;
  var lng5 : number;
  var  lat5 : number;
    var lng6 : number;
  var  lat6 : number;
  
  var dist : number = 0;
  var dist0 : number = 0;
  var distTx3Rx1 : number = 0;
  var distTx4Rx1 : number = 0 ;
  var distTx1Rx2 : number = 0;
  var distTx2Rx2 : number = 0;
  var distTx3Rx2 : number = 0;
  var distTx4Rx2 : number = 0;
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

              if (marker.nombre === 'Receptor 1'){

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
               if (marker.nombre === 'Transmisor 3'){

                   lat4 = nuevaLat;
                   lng4 = nuevaLng;
                    markers[4].lati=nuevaLat;
                     markers[4].longi=nuevaLng;


             }
               if (marker.nombre === 'Transmisor 4'){

                   lat5 = nuevaLat;
                   lng5 = nuevaLng;
                    markers[5].lati=nuevaLat;
                     markers[5].longi=nuevaLng;


             }
                    if (marker.nombre === 'Receptor 2'){

                   lat6 = nuevaLat;
                   lng6 = nuevaLng;
                    markers[6].lati=nuevaLat;
                     markers[6].longi=nuevaLng;


             }
              
          
          //Configurar en el local Storage
        localStorage.setItem('markers', JSON.stringify(markers));
     
   }
//Distancia TX1-RX1
computeDistanceBetween1(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
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
               testB.innerHTML = (dist0).toFixed(2)  + " Km";

    }
//DISTANCIA TX1-RX2
computeDistanceBetweenTx1Rx2(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_0 = new google.maps.LatLng(markers[0].lati, markers[0].longi);
	                            var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);
                              i++;

                }else{
                              var pos_0 = new google.maps.LatLng(lat0,lng0);
	                            var pos_6 = new google.maps.LatLng(lat6,lng6);

                }

                
             
                

               distTx1Rx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_6).toFixed(2)); 
               distTx1Rx2 = (distTx1Rx2/1000);
               var testdistTx1Rx2 : any = document.getElementById("testdistTx1Rx2");
               testdistTx1Rx2.innerHTML = (distTx1Rx2).toFixed(2)  + " Km";
               console.log(testdistTx1Rx2);

    }
//DISTANCIA TX2-RX1

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
               testA.innerHTML = (dist).toFixed(2) + " Km";

    }


    
//DISTANCIA TX2-RX2

   computeDistanceBetweenTx2Rx2(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i : number =0;
                if(i === 0 ){
                              var pos_1 = new google.maps.LatLng(markers[1].lati, markers[1].longi);
	                            var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);
                              i++;
                }else {
                               var pos_1 = new google.maps.LatLng(lat1,lng1);
	                             var pos_6 = new google.maps.LatLng(lat6,lng6);

                }
                
                
                
               distTx2Rx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_6).toFixed(2));
               distTx2Rx2 = (distTx2Rx2/1000)
               var testdistTx2Rx2 : any = document.getElementById("testdistTx2Rx2");
               testdistTx2Rx2.innerHTML = (distTx2Rx2).toFixed(2) + " Km";

    }




//DISTANCIA TX3-RX1
       computeDistanceBetweenTx3Rx1(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_4 = new google.maps.LatLng(markers[4].lati, markers[4].longi);
	                            var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);
                              i++;

                }else{
                              var pos_4 = new google.maps.LatLng(lat4,lng4);
	                            var pos_2 = new google.maps.LatLng(lat2,lng2);

                }
             
                

               distTx3Rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_2).toFixed(2)); 
               distTx3Rx1 = (distTx3Rx1/1000)
               var testdistTx3Rx1 : any = document.getElementById("testdistTx3Rx1");
               testdistTx3Rx1.innerHTML = (distTx3Rx1).toFixed(2)  + " Km";

    }

    // DISTANCIA TX3-RX2
       computeDistanceBetweenTx3Rx2(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_4 = new google.maps.LatLng(markers[4].lati, markers[4].longi);
	                            var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);
                              i++;

                }else{
                              var pos_4 = new google.maps.LatLng(lat4,lng4);
	                            var pos_6 = new google.maps.LatLng(lat6,lng6);

                }
             
                

               distTx3Rx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_6).toFixed(2)); 
               distTx3Rx2 = (distTx3Rx2/1000)
               var testdistTx3Rx2 : any = document.getElementById("testdistTx3Rx2");
               testdistTx3Rx2.innerHTML = (distTx3Rx2).toFixed(2)  + " Km";

    }

//DISTANCIA TX4- RX1

       computeDistanceBetweenTx4Rx1(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_5 = new google.maps.LatLng(markers[5].lati, markers[5].longi);
	                            var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);
                              i++;

                }else{
                              var pos_5 = new google.maps.LatLng(lat5,lng5);
	                            var pos_2 = new google.maps.LatLng(lat2,lng2);

                }
             
                

               distTx4Rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_2).toFixed(2)); 
               distTx4Rx1 = (distTx4Rx1/1000)
               var testdistTx4Rx1 : any = document.getElementById("testdistTx4Rx1");
               testdistTx4Rx1.innerHTML = (distTx4Rx1).toFixed(2)  + " Km";

    }

//DISTANCIA TX4-RX2

       computeDistanceBetweenTx4Rx2(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_5 = new google.maps.LatLng(markers[5].lati, markers[5].longi);
	                            var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);
                              i++;

                }else{
                              var pos_5 = new google.maps.LatLng(lat5,lng5);
	                            var pos_6 = new google.maps.LatLng(lat6,lng6);

                }
             
                

               distTx4Rx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_6).toFixed(2)); 
               distTx4Rx2 = (distTx4Rx2/1000)
               var testdistTx4Rx2 : any = document.getElementById("testdistTx4Rx2");
               testdistTx4Rx2.innerHTML = (distTx4Rx2).toFixed(2)  + " Km";

    }

//DISTANCIA TX1-RX1 CAMINO REFLEJADO
  computeDistanceBetweenTx1Ob(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
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
               testTx1Ob.innerHTML = (total).toFixed(2) + " Km";

    }          
              
    computeDistanceBetweenTx2Ob(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
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

    updtTx3(marker,  nuevaLat, nuevaLng){

      //obtener los marcadores
                   lat4 = nuevaLat;
                   lng4 = nuevaLng;
    

         //Configurar en el local Storage
        localStorage.setItem('markers', JSON.stringify(marker));           



    }

    updtTx4(marker,  nuevaLat, nuevaLng){

      //obtener los marcadores
                   lat5 = nuevaLat;
                   lng5 = nuevaLng;
    

         //Configurar en el local Storage
        localStorage.setItem('markers', JSON.stringify(marker));           



    }

     updtRx2 (marker,  nuevaLat, nuevaLng){

       //obtener los marcadores
                   lat6 = nuevaLat;
                   lng6 = nuevaLng;
    

         //Configurar en el local Storage
        localStorage.setItem('markers', JSON.stringify(marker));     

    }



    
   

}
