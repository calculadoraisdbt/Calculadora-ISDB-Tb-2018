import { Component, OnInit, } from '@angular/core';
import { Marker } from './marker';
import { MarkersService } from 'app/Services/markers.service';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    providers: [MarkersService]
})
export class BlankPageComponent implements OnInit {
        resultDist : number = 0;
         markers : Marker[];
        constructor( private _markerService:MarkersService) { 
            this.markers = this._markerService.obtenerMarcadores();
          
        }
        ngOnInit() {}
    //Posicion inicial Mapa
    lat: number = -31.416667 ;
    lng: number = -64.183333; 
    zoom: number = 8;
    tra0: boolean = false;
    tra1: boolean = false;
    recep: boolean = false;
    obst: boolean = false;
    newLatTx1 : string ;     
    newLongTx1 : string ;    
    newLatTx2  : string ;  
    newLongTx2 : string ;  
    newLatRx : string ;  
    newLongRx : string ;  
    newLatOb : string ;  
    newLongOb : string ;  
   // nombreMarcador : string;
   // latitudMarcador: string;
   // longitudMarcador: string;
    posicionFinalMarcador(marcador:any,$event:any){

            console.log("Posicion final: ", marcador, $event);

            var nuevaLati = $event.coords.lat;
            var nuevaLongi = $event.coords.lng;

            var actuaMarcador = {

                nombre: marcador.nombre,
                lati: parseFloat(marcador.lati),
                longi: parseFloat(marcador.longi),
                arrastrable: true,
                
                
            }

            
            
              
            this._markerService.actualizarMarcador(actuaMarcador, nuevaLati, nuevaLongi);
            
    }

    
    show (){
            
           if(this.tra1 === true ){
            
            this._markerService.computeDistanceBetween();

           }else;

           if(this.tra0 === true ){

            this._markerService.computeDistanceBetween1();

           }else;

           if(this.obst === true ){

            this._markerService.computeDistanceBetweenTx1Ob();
             this._markerService.computeDistanceBetweenTx2Ob()

           }else;
           
          
    }

    uploadTx1(){

        var nuevoMarcador = {

               nombre: "Transmisor 1",
               lati: parseFloat(this.newLatTx1),
               longi: parseFloat(this.newLongTx1),
               arrastrable: true
            }   
            console.log(this.markers);
            this.markers.splice(0, 1);
            console.log(this.markers);
             this.markers.splice( 0, 0, nuevoMarcador  );
             console.log(this.markers);
                console.log(this.newLatTx1 ,this.newLongTx1 );
            this._markerService.updtTx1(this.markers , this.newLatTx1, this.newLongTx1);
    }

    uploadTx2(){
             var nuevoMarcador = {

               nombre: "Transmisor 2",
               lati: parseFloat(this.newLatTx2),
               longi: parseFloat(this.newLongTx2),
               arrastrable: true
            }
            this.markers.splice(1, 1);
             this.markers.splice( 1, 0, nuevoMarcador  );

            this._markerService.updtTx2(this.markers , this.newLatTx2, this.newLongTx2);


    }

    uploadRx(){
            var nuevoMarcador = {

               nombre: "Receptor",
               lati: parseFloat(this.newLatRx),
               longi: parseFloat(this.newLongRx),
               arrastrable: true
            }
            this.markers.splice(2, 1);
             this.markers.splice( 2, 0, nuevoMarcador  );

            this._markerService.updtRx(this.markers , this.newLatRx, this.newLongRx);


    }

    uploadOb(){
                     var nuevoMarcador = {

               nombre: "Obstaculo",
               lati: parseFloat(this.newLatOb),
               longi: parseFloat(this.newLongOb),
               arrastrable: true
            }
            this.markers.splice(3, 1);
             this.markers.splice( 3, 0, nuevoMarcador  );

            this._markerService.updtOb(this.markers , this.newLatOb, this.newLongOb);

    }

   
    
   // agregarMarcador(){
   //         console.log('Agregando Marcador');
//
    //        var nuevoMarcador = {
//
    //            nombre: this.nombreMarcador,
    //            lati: parseFloat(this.latitudMarcador),
     //           longi: parseFloat(this.longitudMarcador),
     //           arrastrable: true
     ///       }
     //       this.markers.push(nuevoMarcador);  
     //       this._markerService.agregarMarcador(nuevoMarcador);   
   // }

}

  
