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
       // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];
 // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
        * (My guess), for Angular to recognize the change in the dataset
        * it has to change the dataset variable directly,
        * so one way around it, is to clone the data, change it and then
        * assign it;
        */
    }
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
    recep2: boolean = false;
    obst: boolean = false;
    tra2: boolean = false;
    tra3: boolean = false;
    newLatTx1 : string ;     
    newLongTx1 : string ;    
    newLatTx2  : string ;  
    newLongTx2 : string ;  
    newLatRx : string ;  
    newLongRx : string ;  
    newLatRx2 : string ;  
    newLongRx2 : string ;  
    newLatOb : string ;  
    newLongOb : string ;  
    newLatTx3  : string ;  
    newLongTx3 : string ; 
    newLatTx4  : string ;  
    newLongTx4 : string ; 
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

               nombre: "Receptor 1",
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

     uploadTx3(){
             var nuevoMarcador = {

               nombre: "Transmisor 3",
               lati: parseFloat(this.newLatTx3),
               longi: parseFloat(this.newLongTx3),
               arrastrable: true
            }
            this.markers.splice(4, 1);
             this.markers.splice( 4, 0, nuevoMarcador  );

            this._markerService.updtTx3(this.markers , this.newLatTx3, this.newLongTx3);


    }

     uploadTx4(){
             var nuevoMarcador = {

               nombre: "Transmisor 4",
               lati: parseFloat(this.newLatTx4),
               longi: parseFloat(this.newLongTx4),
               arrastrable: true
            }
            this.markers.splice(5, 1);
             this.markers.splice( 5, 0, nuevoMarcador  );

            this._markerService.updtTx4(this.markers , this.newLatTx4, this.newLongTx4);


    }

    uploadRx2(){
            var nuevoMarcador = {

               nombre: "Receptor 2",
               lati: parseFloat(this.newLatRx2),
               longi: parseFloat(this.newLongRx2),
               arrastrable: true
            }
            this.markers.splice(6, 1);
             this.markers.splice( 6, 0, nuevoMarcador  );

            this._markerService.updtRx2(this.markers , this.newLatRx2, this.newLongRx2);


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

  
