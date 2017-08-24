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
  var DeltaT1 : number; 
  var DeltaT2 : number; 
  var DeltaT3 : number; 
  var DeltaT4 : number; 
  var DeltaT1CR : number; 
  var DeltaT2CR : number; 
  var DeltaT3CR : number; 
  var DeltaT4CR : number; 
  var Deltas  = [] ;
  var menorRx2 : number = 0;
  var DeltaT1Rx2 : number; 
  var DeltaT2Rx2 : number; 
  var DeltaT3Rx2 : number; 
  var DeltaT4Rx2 : number; 
  var DeltaT1CRRx2 : number; 
  var DeltaT2CRRx2 : number; 
  var DeltaT3CRRx2 : number; 
  var DeltaT4CRRx2 : number; 
  var DeltasRx2 = [] ;

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
         var retardos = JSON.parse(localStorage.getItem('retardos'));
         var retartdosState = JSON.parse(localStorage.getItem('retardosState'));
         var retardoRed = JSON.parse(localStorage.getItem('retardoRed'));
         retardoRed = retardoRed*299.792458;
         console.log(retardoRed)

                var i =0;
                if(i === 0){
                            var pos_0 = new google.maps.LatLng(markers[0].lati, markers[0].longi); //TX1
                            var pos_1 = new google.maps.LatLng(markers[1].lati, markers[1].longi); //TX2
                            var pos_4 = new google.maps.LatLng(markers[4].lati, markers[4].longi); //TX3
                            var pos_5 = new google.maps.LatLng( markers[5].lati, markers[5].longi);//TX4
                            var pos_2 = new google.maps.LatLng( markers[2].lati, markers[2].longi);//RX1                      
                            var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);//OBST      
                            i++;

                }else{
                            var pos_0 = new google.maps.LatLng(lat0,lng0);
                            var pos_1 = new google.maps.LatLng(lat1,lng1);
                            var pos_4 = new google.maps.LatLng(lat4,lng4);
                            var pos_5 = new google.maps.LatLng(lat5,lng5);
                            var pos_2 = new google.maps.LatLng(lat2,lng2);
                            var pos_3 = new google.maps.LatLng(lat3,lng3);


                }

                
             
                
                    //TX1 -RX1
                    if(retartdosState[0] === true){
                        var tx1rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_2).toFixed(2)); 
                        var retarditen = retardos[0]*299.792458;
                        tx1rx1 = tx1rx1 + retarditen + retardoRed ;

                    } 
                    if (retartdosState[0] === false){
                        var tx1rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_2).toFixed(2)); 
                        tx1rx1 = tx1rx1 + retardoRed ;  

                        
                    }
                    //TX2 - RX1
                    if(retartdosState[1] === true){
                        var tx2rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_2).toFixed(2));
                        var retarditen = retardos[1]*299.792458;
                        tx2rx1 = tx2rx1 + retarditen + retardoRed ;

                    }
                    if(retartdosState[1] === false){
                        var tx2rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_2).toFixed(2));
                        tx2rx1 =  tx2rx1  + retardoRed ;

                    }
                    //TX3 - RX1
                    if(retartdosState[2] === true){
                        var tx3rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_2).toFixed(2));
                        var retarditen = retardos[2]*299.792458;
                        tx3rx1 = tx3rx1 + retarditen + retardoRed ;

                    }
                    if(retartdosState[2] === false){
                        var tx3rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_2).toFixed(2)); 
                        tx3rx1 =  tx3rx1  + retardoRed ;
 

                    }                    
                    //TX4 - RX1
                    if(retartdosState[3] === true){
                        var tx4rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_2).toFixed(2));
                        var retarditen = retardos[3]*299.792458;
                        console.log('retardo aca', retarditen)
                        tx4rx1 = tx4rx1 + retarditen + retardoRed ;
   
                    }
                    if(retartdosState[3] === false){
                        var tx4rx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_2).toFixed(2)); 
                        tx4rx1 =  tx4rx1  + retardoRed ; 

                    }                                        
                    //OBST - RX1
               var obstrx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_3, pos_2).toFixed(2));        
                    //TX1 -OBST
                    if(retartdosState[0] === true){
                        var tx1obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_3).toFixed(2));
                        var retarditen = retardos[0]*299.792458;
                        tx1obst = tx1obst + retarditen + retardoRed ;
                        var  tx1obstrx1= tx1obst + obstrx1;
                    } 
                    if (retartdosState[0] === false){
                        var tx1obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_3).toFixed(2));   
                        var  tx1obstrx1= tx1obst + obstrx1 ; 
                        tx1obstrx1 = tx1obstrx1 + retardoRed ;

                    }                    
                    //TX2 - OBST
                    if(retartdosState[1] === true){
                        var tx2obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_3).toFixed(2));
                        var retarditen = retardos[1]*299.792458;
                        tx2obst = tx2obst + retarditen + retardoRed ;
                        var  tx2obstrx1= tx2obst + obstrx1;
                    } 
                    if (retartdosState[1] === false){
                        var tx2obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_3).toFixed(2)); 
                        var  tx2obstrx1= tx2obst + obstrx1;   
                        tx2obstrx1 = tx2obstrx1 + retardoRed ;
                    }                                        
                    //TX3 - OBST
                    if(retartdosState[2] === true){
                        var tx3obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_3).toFixed(2)); 
                        var retarditen = retardos[2]*299.792458;
                        tx3obst = tx3obst + retarditen + retardoRed ;
                        var  tx3obstrx1= tx3obst + obstrx1;
                    } 
                    if (retartdosState[2] === false){
                        var tx3obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_3).toFixed(2)); 
                        var  tx3obstrx1= tx3obst + obstrx1;   
                        tx3obstrx1 = tx3obstrx1 + retardoRed ; 
                    }                                                            
                    //TX4 - OBST
                    if(retartdosState[3] === true){
                        var tx4obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_3).toFixed(2)); 
                        var retarditen = retardos[3]*299.792458;
                        tx4obst = tx4obst + retarditen + retardoRed ;
                        var  tx4obstrx1= tx4obst + obstrx1;
                    } 
                    if (retartdosState[3] === false){
                        var tx4obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_3).toFixed(2)); 
                        var  tx4obstrx1= tx4obst + obstrx1;  
                        tx4obstrx1 = tx4obstrx1 + retardoRed ;  
                    }                                                                                

         menorRx1 = Math.min(tx1rx1, tx2rx1,tx3rx1, tx4rx1 ,tx1obstrx1 ,tx2obstrx1, tx3obstrx1 , tx4obstrx1 ) ; 
         DeltaT1 = (tx1rx1-menorRx1) ;
         DeltaT2 = (tx2rx1-menorRx1 ) ;
         DeltaT3 = (tx3rx1-menorRx1) ;
         DeltaT4 = (tx4rx1-menorRx1) ;    
         DeltaT1CR = (tx1obstrx1-menorRx1) ;
         DeltaT2CR = (tx2obstrx1-menorRx1 ) ;
         DeltaT3CR = (tx3obstrx1-menorRx1) ;
         DeltaT4CR = (tx4obstrx1-menorRx1) ; 
         Deltas  = [DeltaT1,DeltaT2,DeltaT3,DeltaT4,DeltaT1CR,DeltaT2CR,DeltaT3CR,DeltaT4CR] ;   

    }  
    getDeltasRx1(){
        return Deltas;
    }




 distanciaMenorRx2(){
           var markers = JSON.parse(localStorage.getItem('markers'));
         var retardos = JSON.parse(localStorage.getItem('retardos'));
         var retartdosState = JSON.parse(localStorage.getItem('retardosState'));
         var retardoRed = JSON.parse(localStorage.getItem('retardoRed'));
         retardoRed = retardoRed*299.792458;
                var i =0;
                if(i === 0){
                            var pos_0 = new google.maps.LatLng(markers[0].lati, markers[0].longi); //TX1
                            var pos_1 = new google.maps.LatLng(markers[1].lati, markers[1].longi); //TX2
                            var pos_4 = new google.maps.LatLng(markers[4].lati, markers[4].longi); //TX3
                            var pos_5 = new google.maps.LatLng( markers[5].lati, markers[5].longi);//TX4
                            var pos_6 = new google.maps.LatLng( markers[6].lati, markers[6].longi);//RX2                      
                            var pos_3 = new google.maps.LatLng( markers[3].lati, markers[3].longi);//OBST      
                            i++;

                }else{
                            var pos_0 = new google.maps.LatLng(lat0,lng0);
                            var pos_1 = new google.maps.LatLng(lat1,lng1);
                            var pos_4 = new google.maps.LatLng(lat4,lng4);
                            var pos_5 = new google.maps.LatLng(lat5,lng5);
                            var pos_6 = new google.maps.LatLng(lat6,lng6);
                            var pos_3 = new google.maps.LatLng(lat3,lng3);
                        }

                    //TX1 -RX2
                    if(retartdosState[0] === true){
                        var tx1rx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_6).toFixed(2)); 
                        var retarditen = retardos[0]*299.792458;
                        tx1rx2 = tx1rx2 + retarditen + retardoRed ;

                    } 
                    if (retartdosState[0] === false){
                        var tx1rx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_6).toFixed(2)); 
                        tx1rx2 = tx1rx2 + retardoRed ;  

                        
                    }
                    //TX2 - RX2
                    if(retartdosState[1] === true){
                        var tx2rx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_6).toFixed(2));
                        var retarditen = retardos[1]*299.792458;
                        tx2rx2 = tx2rx2 + retarditen + retardoRed ;

                    }
                    if(retartdosState[1] === false){
                        var tx2rx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_6).toFixed(2));
                        tx2rx2 =  tx2rx2  + retardoRed ;

                    }
                    //TX3 - RX2
                    if(retartdosState[2] === true){
                        var tx3rx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_6).toFixed(2));
                        var retarditen = retardos[2]*299.792458;
                        tx3rx2 = tx3rx2 + retarditen + retardoRed ;

                    }
                    if(retartdosState[2] === false){
                        var tx3rx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_6).toFixed(2)); 
                        tx3rx2 =  tx3rx2  + retardoRed ;


                    }                    
                    //TX4 - RX2
                    if(retartdosState[3] === true){
                        var tx4rx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_6).toFixed(2));
                        var retarditen = retardos[3]*299.792458;
                        tx4rx2 = tx4rx2 + retarditen + retardoRed ;

                    }
                    if(retartdosState[3] === false){
                        var tx4rx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_6).toFixed(2)); 
                        tx4rx2 =  tx4rx2  + retardoRed ; 

                    }                                        
                    //OBST - RX2
               var obstrx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_3, pos_6).toFixed(2));        
                    //TX1 -OBST
                    if(retartdosState[0] === true){
                        var tx1obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_3).toFixed(2));
                        var retarditen = retardos[0]*299.792458;
                        tx1obst = tx1obst + retarditen + retardoRed ;
                        var  tx1obstrx1= tx1obst + obstrx2;
                    } 
                    if (retartdosState[0] === false){
                        var tx1obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_0, pos_3).toFixed(2));   
                        var  tx1obstrx2= tx1obst + obstrx2 ; 
                        tx1obstrx2 = tx1obstrx2 + retardoRed ;

                    }                    
                    //TX2 - OBST
                    if(retartdosState[1] === true){
                        var tx2obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_3).toFixed(2));
                        var retarditen = retardos[1]*299.792458;
                        tx2obst = tx2obst + retarditen + retardoRed ;
                        var  tx2obstrx2= tx2obst + obstrx2;
                    } 
                    if (retartdosState[1] === false){
                        var tx2obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_3).toFixed(2)); 
                        var  tx2obstrx2= tx2obst + obstrx2;   
                        tx2obstrx2 = tx2obstrx2 + retardoRed ;
                    }                                        
                    //TX3 - OBST
                    if(retartdosState[2] === true){
                        var tx3obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_3).toFixed(2)); 
                        var retarditen = retardos[2]*299.792458;
                        tx3obst = tx3obst + retarditen + retardoRed ;
                        var  tx3obstrx2= tx3obst + obstrx2;
                    } 
                    if (retartdosState[2] === false){
                        var tx3obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_4, pos_3).toFixed(2)); 
                        var  tx3obstrx2= tx3obst + obstrx2;   
                        tx3obstrx2 = tx3obstrx2 + retardoRed ; 
                    }                                                            
                    //TX4 - OBST
                    if(retartdosState[3] === true){
                        var tx4obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_3).toFixed(2)); 
                        var retarditen = retardos[3]*299.792458;
                        tx4obst = tx4obst + retarditen + retardoRed ;
                        var  tx4obstrx2= tx4obst + obstrx2;
                    } 
                    if (retartdosState[3] === false){
                        var tx4obst = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_5, pos_3).toFixed(2)); 
                        var  tx4obstrx2= tx4obst + obstrx2;  
                        tx4obstrx2 = tx4obstrx2 + retardoRed ;  
                    }                                                                                

         menorRx2 = Math.min(tx1rx2, tx2rx2,tx3rx2, tx4rx2 ,tx1obstrx2 ,tx2obstrx2, tx3obstrx2 , tx4obstrx2 ) ; 
         DeltaT1Rx2 = (tx1rx2-menorRx2) ;
         DeltaT2Rx2 = (tx2rx2-menorRx2 ) ;
         DeltaT3Rx2 = (tx3rx2-menorRx2) ;
         DeltaT4Rx2 = (tx4rx2-menorRx2) ;    
         DeltaT1CRRx2 = (tx1obstrx2-menorRx2) ;
         DeltaT2CRRx2 = (tx2obstrx2-menorRx2 ) ;
         DeltaT3CRRx2 = (tx3obstrx2-menorRx2) ;
         DeltaT4CRRx2 = (tx4obstrx2-menorRx2) ; 
         console.log(DeltaT4CRRx2)
         DeltasRx2 = [DeltaT1Rx2,DeltaT2Rx2,DeltaT3Rx2,DeltaT4Rx2,DeltaT1CRRx2,DeltaT2CRRx2,DeltaT3CRRx2,DeltaT4CRRx2] ;   

    }   

    getDeltasRx2(){
        return DeltasRx2;
    }

    getDistanacias(){
        var distCRtx1 = (1/((disttTx1Ob + disttObRx1)/1000))*1000;
        var distCRtx2 = (1/((disttTx2Ob + disttObRx1)/1000))*1000; 
        var distCRtx3 = (1/((disttTx3Ob + disttObRx1)/1000))*1000;
        var distCRtx4 = (1/((disttTx4Ob + disttObRx1)/1000))*1000;
        var DistanciasRx1 = [((1000/dist0)),((1000/dist)),((1000/distTx3Rx1)),((1000/distTx4Rx1)),distCRtx1,distCRtx2,distCRtx3,distCRtx4] ;
        return DistanciasRx1;
    }
    
    getDistanacias2(){
        var distCRtx1 = (1/((disttTx1Ob + disttObRx2)/1000))*1000;
        var distCRtx2 = (1/((disttTx2Ob + disttObRx2)/1000))*1000; 
        var distCRtx3 = (1/((disttTx3Ob + disttObRx2)/1000))*1000;
        var distCRtx4 = (1/((disttTx4Ob + disttObRx2)/1000))*1000;
        var DistanciasRx2 = [((1000/distTx1Rx2)),((1000/distTx2Rx2)),((1000/distTx3Rx2)),((1000/distTx4Rx2)),distCRtx1,distCRtx2,distCRtx3,distCRtx4] ;
        return DistanciasRx2;
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
               disttObRx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_2, pos_3).toFixed(2)); 
               var total = disttTx1Ob + disttObRx1;
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
               disttObRx1 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_2, pos_3).toFixed(2)); 
               var totalTx1Ob = disttTx1Ob + disttObRx1;
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
               disttObRx2 = parseFloat(google.maps.geometry.spherical.computeDistanceBetween (pos_6, pos_3).toFixed(2)); 
               var Tx1Rx2CR = disttTx1Ob + disttObRx2;
               Tx1Rx2CR = (Tx1Rx2CR/1000);
               var testTx1Rx2CR : any = document.getElementById("testTx1Rx2CR");
               testTx1Rx2CR.innerHTML = (Tx1Rx2CR).toFixed(2) + " Km";

    } 

// TIEMPO TX1 -RX2 CAMINO REFLEJADO
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
//DISTANCIA TX4 - RX1 CAMINO REFLEJADO

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

    //TIEMPO TX4 - RX1 CAMINO REFLEJADO

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


obtenerRetardos(){

    var retardos = JSON.parse(localStorage.getItem('retardos'));
      return retardos;


}

obtenerRetardosState(){

    var retardosState = JSON.parse(localStorage.getItem('retardosState'));
      return retardosState;


}

sumaRetardoTx1(retar : number , retState : any){
    
    var retardos =  this.obtenerRetardos();
    var retardosState = this.obtenerRetardosState();
    console.log(retardos[0]); 
    if(retar != retardos[0]) {
        retardos[0] = retar;
        retardosState[0] = retState;
        localStorage.setItem('retardos', JSON.stringify(retardos));     
        localStorage.setItem('retardosState', JSON.stringify(retardosState)); 
      //  console.log(dist0);
      //  dist0 = (dist0 + Number.parseInt(retardos[0], 10));
      //  console.log(dist0);
    }
    else{ }
   
}

sumaRetardoTx2(retar : number , retState : any){
     
    var retardos =  this.obtenerRetardos();
    var retardosState = this.obtenerRetardosState();
    console.log(retardos[1]);
    if(retar != retardos[1]) {
        retardos[1] = retar;
        retardosState[1] = retState;
        localStorage.setItem('retardos', JSON.stringify(retardos));     
        localStorage.setItem('retardosState', JSON.stringify(retardosState));
        console.log(retardos[1]); 
      //  console.log(dist0);
      //  dist0 = (dist0 + Number.parseInt(retardos[0], 10));
      //  console.log(dist0);
    }
    else{ }
   
}

sumaRetardoTx3(retar : number , retState : any){
     
    var retardos =  this.obtenerRetardos();
    var retardosState = this.obtenerRetardosState();
    console.log(retardos[2]);
    if(retar != retardos[2]) {
        retardos[2] = retar;
        retardosState[2] = retState;
        localStorage.setItem('retardos', JSON.stringify(retardos));     
        localStorage.setItem('retardosState', JSON.stringify(retardosState)); 
        console.log(retardos[2]); 
     //   console.log(dist0);
     //   dist0 = (dist0 + Number.parseInt(retardos[0], 10));
     //   console.log(dist0);
    }
    else{}
   
}

sumaRetardoTx4(retar : number , retState : any){
    
    var retardos =  this.obtenerRetardos();
    var retardosState = this.obtenerRetardosState();
    console.log(retardos[3]); 
    if(retar != retardos[3]) {
        retardos[3] = retar;
        retardosState[3] = retState;
        localStorage.setItem('retardos', JSON.stringify(retardos));     
        localStorage.setItem('retardosState', JSON.stringify(retardosState)); 
        console.log(retardos[3]); 
    //    console.log(dist0);
    //    dist0 = (dist0 + Number.parseInt(retardos[0], 10));
    //    console.log(dist0);
    }
    else{ }
   
}
obtenerRetardoRed(){
      var retardoRed = JSON.parse(localStorage.getItem('retardoRed'));
      return retardoRed;

}
actualizarRetardoRed(retar : any){
     var retardoRed = JSON.parse(localStorage.getItem('retardoRed'));
     retardoRed = retar ;
     localStorage.setItem('retardoRed', JSON.stringify(retardoRed)); 
}

obtenerTra0(){
    var tra0 = JSON.parse(localStorage.getItem('tra0'));
    return tra0;

}
actualizarTra0(nuevo : any){
   var tra0 = JSON.parse(localStorage.getItem('tra0'));
   tra0 = nuevo ;
   localStorage.setItem('tra0', JSON.stringify(tra0)); 
}

obtenerTra1(){
    var tra1 = JSON.parse(localStorage.getItem('tra1'));
    return tra1;

}
actualizarTra1(nuevo : any){
   var tra1 = JSON.parse(localStorage.getItem('tra1'));
   tra1 = nuevo ;
   localStorage.setItem('tra1', JSON.stringify(tra1)); 
}

obtenerTra2(){
    var tra2 = JSON.parse(localStorage.getItem('tra2'));
    return tra2;

}
actualizarTra2(nuevo : any){
   var tra2 = JSON.parse(localStorage.getItem('tra2'));
   tra2 = nuevo ;
   localStorage.setItem('tra2', JSON.stringify(tra2)); 
}

obtenerTra3(){
    var tra3 = JSON.parse(localStorage.getItem('tra3'));
    return tra3;

}
actualizarTra3(nuevo : any){
   var tra3 = JSON.parse(localStorage.getItem('tra3'));
   tra3 = nuevo ;
   localStorage.setItem('tra3', JSON.stringify(tra3)); 
}

obtenerRecep(){
    var recep = JSON.parse(localStorage.getItem('recep'));
    return recep;

}
actualizarRecep(nuevo : any){
   var recep = JSON.parse(localStorage.getItem('recep'));
   recep = nuevo ;
   localStorage.setItem('recep', JSON.stringify(recep)); 
}

obtenerRecep2(){
    var recep2 = JSON.parse(localStorage.getItem('recep2'));
    return recep2;

}
actualizarRecep2(nuevo : any){
    var recep2 = JSON.parse(localStorage.getItem('recep2'));
    recep2 = nuevo ;
    localStorage.setItem('recep2', JSON.stringify(recep2)); 
 }

obtenerObst(){
    var obst = JSON.parse(localStorage.getItem('obst'));
    return obst;

}
actualizarObst(nuevo : any){
   var obst = JSON.parse(localStorage.getItem('obst'));
   obst = nuevo ;
   localStorage.setItem('obst', JSON.stringify(obst)); 
}

obtenerPolarity(){
    var polarity = JSON.parse(localStorage.getItem('polarity'));
    return polarity;

}
actualizarPolarity(nuevo : any){
   var polarity = JSON.parse(localStorage.getItem('polarity'));
   polarity = nuevo ;
   localStorage.setItem('polarity', JSON.stringify(polarity)); 
}   

}
