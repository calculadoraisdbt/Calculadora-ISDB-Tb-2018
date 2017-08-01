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
  var disttObRx1 : number = 0;
  var disttTx2Ob : number = 0;
  var disttObRx2 : number = 0;
  var disttTx3Ob : number = 0;
  var disttTx4Ob : number = 0;
  var tiempoTx1Rx1 : number = 0;
  var tiempoTx1Rx2 : number = 0;
  var tiempoTx2Rx2 : number = 0;
  var distTx2Rx1 : number = 0;
  var tiempoTx2Rx1 : number = 0;
  var tiempoTx3Rx1 : number = 0 ;
  var tiempoTx3Rx2 : number = 0;
  var tiempoTx4Rx1 : number = 0;
  var tiempoTx4Rx2 : number = 0;
  var tiempoTx1Ob : number = 0;
  var tiempoTx1Rx2CR : number = 0;
  var tiempoTx2Rx1CR : number = 0;
  var tiempoTx2Rx2CR : number = 0;
  var tiempoTx3Rx1CR : number = 0;
  var tiempoTx3Rx2CR : number = 0;
  var tiempoTx4Rx1CR : number = 0;
  var tiempoTx4Rx2CR : number = 0;
  var menorRx1 : number = 0;
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

     distanciaMenorRx1(){
         var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                            var pos_0 = new google.maps.LatLng(markers[0].lati, markers[0].longi); 
                            var pos_1 = new google.maps.LatLng(markers[1].lati, markers[1].longi);
                            var pos_4 = new google.maps.LatLng(markers[4].lati, markers[4].longi);
                            var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);
                            var pos_5 = new google.maps.LatLng( markers[5].lati, markers[5].longi);
                                
                            i++;

                }else{
                            var pos_0 = new google.maps.LatLng(lat0,lng0);
                            var pos_2 = new google.maps.LatLng(lat2,lng2);
                            var pos_1 = new google.maps.LatLng(lat1,lng1);
                            var pos_4 = new google.maps.LatLng(lat4,lng4);
                            var pos_5 = new google.maps.LatLng(lat5,lng5);
                }

                
             
                

               var tx1rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_2).toFixed(2)); 
               tx1rx1 = (tx1rx1/1000);
               var tx2rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_2).toFixed(2));
               tx2rx1 = (tx2rx1/1000);
               var tx3rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_2).toFixed(2)); 
               tx3rx1 = (tx3rx1/1000);
               var tx4rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_2).toFixed(2)); 
               tx4rx1 = (tx4rx1/1000);

        menorRx1 = Math.min(tx1rx1, tx2rx1,tx3rx1, tx4rx1  ) ; 
        console.log(menorRx1);
        var DeltaT1 = (tx1rx1-menorRx1) ;
                console.log(DeltaT1);
        var DeltaT2 = (tx2rx1-menorRx1 ) ;
                console.log(DeltaT2);
        var DeltaT3 = (tx3rx1-menorRx1) ;
                console.log(DeltaT3);
        var DeltaT4 = (tx4rx1-menorRx1) ;    
                console.log(DeltaT4);

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
               dist0 = (dist0/1000);
               var testB : any = document.getElementById("testB");
               testB.innerHTML = (dist0).toFixed(2)  + " Km";


    }

  
// TIEMPO TX1 -RX1
computeTimeBetweenTx1Rx1(){
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
               dist0 = (dist0/1000);
               tiempoTx1Rx1 =  ((dist0/299792458)*1000000);
               var testtiempoTx1Rx1 : any = document.getElementById("testtiempoTx1Rx1");
               testtiempoTx1Rx1.innerHTML = (tiempoTx1Rx1).toFixed(2)  + " µS";

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

    }
//TIEMPO TX1 -RX2

computeTimeBetweenTx1Rx2(){
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
                tiempoTx1Rx2 =  ((distTx1Rx2/299792458)*1000000);
               var testtiempoTx1Rx2 : any = document.getElementById("testtiempoTx1Rx2");
               testtiempoTx1Rx2.innerHTML = (tiempoTx1Rx2).toFixed(2)  + " µS";

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
               dist = (dist/1000);
               var testA : any = document.getElementById("testA");
               testA.innerHTML = (dist).toFixed(2) + " Km";

    }

//TIEMPO TX2 -RX1

 computeTimeBetweenTx2Rx1(){
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
                
                
                
               distTx2Rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_2).toFixed(2));
               distTx2Rx1 = (distTx2Rx1/1000);
               tiempoTx2Rx1 =  ((distTx2Rx1/299792458)*1000000);
               var testtiempoTx2Rx1 : any = document.getElementById("testtiempoTx2Rx1");
               testtiempoTx2Rx1.innerHTML = (tiempoTx2Rx1).toFixed(2)  + " µS";

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
               distTx2Rx2 = (distTx2Rx2/1000);
               var testdistTx2Rx2 : any = document.getElementById("testdistTx2Rx2");
               testdistTx2Rx2.innerHTML = (distTx2Rx2).toFixed(2) + " Km";

    }


//TIEMPO TX2-RX2

 computeTimeBetweenTx2Rx2(){
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
               distTx2Rx2 = (distTx2Rx2/1000);
                tiempoTx2Rx2 =  ((distTx2Rx2/299792458)*1000000);
               var testtiempoTx2Rx2 : any = document.getElementById("testtiempoTx2Rx2");
               testtiempoTx2Rx2.innerHTML = (tiempoTx2Rx2).toFixed(2)  + " µS";

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
               distTx3Rx1 = (distTx3Rx1/1000);
               var testdistTx3Rx1 : any = document.getElementById("testdistTx3Rx1");
               testdistTx3Rx1.innerHTML = (distTx3Rx1).toFixed(2)  + " Km";

    }

// TIEMPO TX3-RX1
 computeTimeBetweenTx3Rx1(){
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
               distTx3Rx1 = (distTx3Rx1/1000);
                tiempoTx3Rx1 =  ((distTx3Rx1/299792458)*1000000);
               var testtiempoTx3Rx1 : any = document.getElementById("testtiempoTx3Rx1");
               testtiempoTx3Rx1.innerHTML = (tiempoTx3Rx1).toFixed(2)  + " µS";

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
               distTx3Rx2 = (distTx3Rx2/1000);
               var testdistTx3Rx2 : any = document.getElementById("testdistTx3Rx2");
               testdistTx3Rx2.innerHTML = (distTx3Rx2).toFixed(2)  + " Km";

    }

// TIEMPO TX3-RX2

 computeTimeBetweenTx3Rx2(){
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
               distTx3Rx2 = (distTx3Rx2/1000);
                 tiempoTx3Rx2 =  ((distTx3Rx2/299792458)*1000000);
               var testtiempoTx3Rx2 : any = document.getElementById("testtiempoTx3Rx2");
               testtiempoTx3Rx2.innerHTML = (tiempoTx3Rx2).toFixed(2)  + " µS";

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
//TIEMPO TX4- RX1
   computeTimeBetweenTx4Rx1(){
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
               distTx4Rx1 = (distTx4Rx1/1000);
                tiempoTx4Rx1 =  ((distTx4Rx1/299792458)*1000000);
               var testtiempoTx4Rx1 : any = document.getElementById("testtiempoTx4Rx1");
               testtiempoTx4Rx1.innerHTML = (tiempoTx4Rx1).toFixed(2)  + " µS";

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
// TIIEMPO TX4 -RX2 
       computeTimeBetweenTx4Rx2(){
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
                tiempoTx4Rx2 =  ((distTx4Rx1/299792458)*1000000);
               var testtiempoTx4Rx2 : any = document.getElementById("testtiempoTx4Rx2");
               testtiempoTx4Rx2.innerHTML = (tiempoTx4Rx2).toFixed(2)  + " µS";

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
               total = (total/1000);
               var testTx1Ob : any = document.getElementById("testTx1Ob");      
               testTx1Ob.innerHTML = (total).toFixed(2) + " Km";
               console.log(testTx1Ob);

    }  

// TIEMPO TX1-RX1 CAMINO REFLEJADO
  computeTimeBetweenTx1Ob(){
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
               var totalTx1Ob = disttTx1Ob + disttObRx;
               totalTx1Ob = (totalTx1Ob/1000);
               tiempoTx1Ob =  ((totalTx1Ob/299792458)*1000000);
               var testtiempoTx1Ob : any = document.getElementById("testtiempoTx1Ob");
               testtiempoTx1Ob.innerHTML = (tiempoTx1Ob).toFixed(2)  + " µS";

    }  

              
    //DISTANCIA TX1-RX2 CAMINO REFLEJADO
  computeDistanceBetweenTx1Rx2CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_0 = new google.maps.LatLng(markers[0].lati, markers[0].longi);  //TX1
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_0 = new google.maps.LatLng(lat0,lng0);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                }
             
                

               disttTx1Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_3).toFixed(2)); 
               disttObRx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_6, pos_3).toFixed(2)); 
               var Tx1Rx2CR = disttTx1Ob + disttObRx1;
               Tx1Rx2CR = (Tx1Rx2CR/1000);
               var testTx1Rx2CR : any = document.getElementById("testTx1Rx2CR");
               testTx1Rx2CR.innerHTML = (Tx1Rx2CR).toFixed(2) + " Km";

    } 

// TIEMPO RX1 -RX2 CAMINO REFLEJADO
  computeTimeBetweenTx1Rx2CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_0 = new google.maps.LatLng(markers[0].lati, markers[0].longi);  //TX1
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_0 = new google.maps.LatLng(lat0,lng0);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                }
             
                

               disttTx1Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_3).toFixed(2)); 
               disttObRx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_6, pos_3).toFixed(2)); 
               var distTx1Rx2CR = disttTx1Ob + disttObRx2;
               distTx1Rx2CR = (distTx1Rx2CR/1000);
               tiempoTx1Rx2CR =  ((distTx1Rx2CR/299792458)*1000000);
               var testtiempoTx1Rx2CR : any = document.getElementById("testtiempoTx1Rx2CR");
               testtiempoTx1Rx2CR.innerHTML = (tiempoTx1Rx2CR).toFixed(2)  + " µS";

    } 

//DISTANCIA TX2 RX1 CAMINO REFLEJADO
computeDistanceBetweenTx2Rx1CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_1 = new google.maps.LatLng(markers[1].lati, markers[1].longi);  
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_1 = new google.maps.LatLng(lat1,lng1);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                }
             
                

               disttTx2Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_3).toFixed(2)); 
               disttObRx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_2, pos_3).toFixed(2)); 
               var Tx2Rx1CR = disttTx2Ob + disttObRx1;
               Tx2Rx1CR = (Tx2Rx1CR/1000);
               var testTx2Rx1CR : any = document.getElementById("testTx2Rx1CR");
               testTx2Rx1CR.innerHTML = (Tx2Rx1CR).toFixed(2) + " Km";

    } 

    //TIEMPO TX2 RX1 CAMINO REFLEJADO
computeTimeBetweenTx2Rx1CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_1 = new google.maps.LatLng(markers[1].lati, markers[1].longi);  
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_1 = new google.maps.LatLng(lat1,lng1);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                }
             
                

               disttTx2Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_3).toFixed(2)); 
               disttObRx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_2, pos_3).toFixed(2)); 
               var Tx2Rx1CR = disttTx2Ob + disttObRx1;
               Tx2Rx1CR = (Tx2Rx1CR/1000);
               tiempoTx2Rx1CR =  ((Tx2Rx1CR/299792458)*1000000);
               var testtiempoTx2Rx1CR : any = document.getElementById("testtiempoTx2Rx1CR");
               testtiempoTx2Rx1CR.innerHTML = (tiempoTx2Rx1CR).toFixed(2)  + " µS";

    } 
    //DISTANCIA TX2 - RX2 CAMINO REFLEJADO

    computeDistanceBetweenTx2Rx2CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_1 = new google.maps.LatLng(markers[1].lati, markers[1].longi);  
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_1 = new google.maps.LatLng(lat1,lng1);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                }
             
                

               disttTx2Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_3).toFixed(2)); 
               disttObRx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_6, pos_3).toFixed(2)); 
               var Tx2Rx2CR = disttTx2Ob + disttObRx2;
               Tx2Rx2CR = (Tx2Rx2CR/1000);
               var testTx2Rx2CR : any = document.getElementById("testTx2Rx2CR");
               testTx2Rx2CR.innerHTML = (Tx2Rx2CR).toFixed(2) + " Km";

    } 
 //TIEMPO TX2 - RX2 CAMINO REFLEJADO

    computeTimeBetweenTx2Rx2CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_1 = new google.maps.LatLng(markers[1].lati, markers[1].longi);  
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_1 = new google.maps.LatLng(lat1,lng1);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                }
             
                

               disttTx2Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_3).toFixed(2)); 
               disttObRx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_6, pos_3).toFixed(2)); 
               var Tx2Rx2CR = disttTx2Ob + disttObRx2;
               Tx2Rx2CR = (Tx2Rx2CR/1000);
                tiempoTx2Rx2CR =  ((Tx2Rx2CR/299792458)*1000000);
               var testtiempoTx2Rx2CR : any = document.getElementById("testtiempoTx2Rx2CR");
               testtiempoTx2Rx2CR.innerHTML = (tiempoTx2Rx2CR).toFixed(2)  + " µS";

    } 
  //DISTANCIA TX3 -RX1 CAMINO REFLEJADO

      computeDistanceBetweenTx3Rx1CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_4 = new google.maps.LatLng(markers[4].lati, markers[4].longi);  
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_4 = new google.maps.LatLng(lat4,lng4);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                }
             
                

               disttTx3Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_3).toFixed(2)); 
               disttObRx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_2, pos_3).toFixed(2)); 
               var Tx3Rx1CR = disttTx3Ob + disttObRx1;
               Tx3Rx1CR = (Tx3Rx1CR/1000);
               var testTx3Rx1CR : any = document.getElementById("testTx3Rx1CR");
               testTx3Rx1CR.innerHTML = (Tx3Rx1CR).toFixed(2) + " Km";

    } 

 //TIEMPO TX3 -RX1 CAMINO REFLEJADO

      computeTimeBetweenTx3Rx1CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_4 = new google.maps.LatLng(markers[4].lati, markers[4].longi);  
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_4 = new google.maps.LatLng(lat4,lng4);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                }
             
                

               disttTx3Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_3).toFixed(2)); 
               disttObRx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_2, pos_3).toFixed(2)); 
               var Tx3Rx1CR = disttTx3Ob + disttObRx1;
               Tx3Rx1CR = (Tx3Rx1CR/1000);
               tiempoTx3Rx1CR =  ((Tx3Rx1CR/299792458)*1000000);
               var testtiempoTx3Rx1CR : any = document.getElementById("testtiempoTx3Rx1CR");
               testtiempoTx3Rx1CR.innerHTML = (tiempoTx3Rx1CR).toFixed(2)  + " µS";
    } 



//DISTANCIA TX3 -RX2 CAMINO REFLEJADO

      computeDistanceBetweenTx3Rx2CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_4 = new google.maps.LatLng(markers[4].lati, markers[4].longi);  
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_4 = new google.maps.LatLng(lat4,lng4);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                }
             
                

               disttTx3Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_3).toFixed(2)); 
               disttObRx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_6, pos_3).toFixed(2)); 
               var Tx3Rx2CR = disttTx3Ob + disttObRx2;
               Tx3Rx2CR = (Tx3Rx2CR/1000);
               var testTx3Rx2CR : any = document.getElementById("testTx3Rx2CR");
               testTx3Rx2CR.innerHTML = (Tx3Rx2CR).toFixed(2) + " Km";

    } 

    //TIEMPO TX3 -RX2 CAMINO REFLEJADO

      computeTimeBetweenTx3Rx2CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_4 = new google.maps.LatLng(markers[4].lati, markers[4].longi);  
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_4 = new google.maps.LatLng(lat4,lng4);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                }
             
                

               disttTx3Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_3).toFixed(2)); 
               disttObRx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_6, pos_3).toFixed(2)); 
               var Tx3Rx2CR = disttTx3Ob + disttObRx2;
               Tx3Rx2CR = (Tx3Rx2CR/1000);
               tiempoTx3Rx2CR =  ((Tx3Rx2CR/299792458)*1000000);
               var testtiempoTx3Rx2CR : any = document.getElementById("testtiempoTx3Rx2CR");
               testtiempoTx3Rx2CR.innerHTML = (tiempoTx3Rx2CR).toFixed(2)  + " µS";

    } 
//DISTANCIA TX4 - RX2 CAMINO REFLEJADO

      computeDistanceBetweenTx4Rx1CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_5 = new google.maps.LatLng(markers[5].lati, markers[5].longi);  
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_5 = new google.maps.LatLng(lat5,lng5);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                }
             
                

               disttTx4Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_3).toFixed(2)); 
               disttObRx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_2, pos_3).toFixed(2)); 
               var Tx4Rx1CR = disttTx4Ob + disttObRx1;
               Tx4Rx1CR = (Tx4Rx1CR/1000);
               var testTx4Rx1CR : any = document.getElementById("testTx4Rx1CR");
               testTx4Rx1CR.innerHTML = (Tx4Rx1CR).toFixed(2) + " Km";

    } 

    //TIEMPO TX4 - RX2 CAMINO REFLEJADO

      computeTimeBetweenTx4Rx1CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_5 = new google.maps.LatLng(markers[5].lati, markers[5].longi);  
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_5 = new google.maps.LatLng(lat5,lng5);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);  //RECEPTOR
                }
             
                

               disttTx4Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_3).toFixed(2)); 
               disttObRx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_2, pos_3).toFixed(2)); 
               var Tx4Rx1CR = disttTx4Ob + disttObRx1;
               Tx4Rx1CR = (Tx4Rx1CR/1000);
               tiempoTx4Rx1CR =  ((Tx4Rx1CR/299792458)*1000000);
               var testtiempoTx4Rx1CR : any = document.getElementById("testtiempoTx4Rx1CR");
               testtiempoTx4Rx1CR.innerHTML = (tiempoTx4Rx1CR).toFixed(2)  + " µS";

    } 
//DISTANCIA TX4 - RX2 CAMINO REFLEJADO

      computeDistanceBetweenTx4Rx2CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_5 = new google.maps.LatLng(markers[5].lati, markers[5].longi);  
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_5 = new google.maps.LatLng(lat5,lng5);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_6= new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                }
             
                

               disttTx4Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_3).toFixed(2)); 
               disttObRx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_6, pos_3).toFixed(2)); 
               var Tx4Rx2CR = disttTx4Ob + disttObRx2;
               Tx4Rx2CR = (Tx4Rx2CR/1000);
               var testTx4Rx2CR : any = document.getElementById("testTx4Rx2CR");
               testTx4Rx2CR.innerHTML = (Tx4Rx2CR).toFixed(2) + " Km";

    } 
//TIEMPO TX4 - RX2 CAMINO REFLEJADO

      computeTimeBetweenTx4Rx2CR(){
                var markers = JSON.parse(localStorage.getItem('markers'));
                var i =0;
                if(i === 0){
                              var pos_5 = new google.maps.LatLng(markers[5].lati, markers[5].longi);  
                              var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);  //OBSTACULO
                              var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                              i++;

                }else{
                              var pos_5 = new google.maps.LatLng(lat5,lng5);
	                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                              var pos_6= new google.maps.LatLng( markers[6].lati, markers[6].longi);  //RECEPTOR
                }
             
                

               disttTx4Ob = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_3).toFixed(2)); 
               disttObRx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_6, pos_3).toFixed(2)); 
               var Tx4Rx2CR = disttTx4Ob + disttObRx2;
               Tx4Rx2CR = (Tx4Rx2CR/1000);
               tiempoTx4Rx2CR =  ((Tx4Rx2CR/299792458)*1000000);
               var testtiempoTx4Rx2CR : any = document.getElementById("testtiempoTx4Rx2CR");
               testtiempoTx4Rx2CR.innerHTML = (tiempoTx4Rx2CR).toFixed(2)  + " µS";
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
