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
    mostLati : string ;
    mostLongi : string ;
    mostLati1 : string ;
    mostLongi1 : string ;
    mostLati2 : string ;
    mostLongi2 : string ;
    mostLati3 : string ;
    mostLongi3 : string ;
    mostLati4 : string ;
    mostLongi4 : string ;
    mostLati5 : string ;
    mostLongi5 : string ;
    mostLati6 : string ;
    mostLongi6 : string ;
   // nombreMarcador : string;
   // latitudMarcador: string;
   // longitudMarcador: string;
    posicionFinalMarcador(marcador:any,$event:any){

            console.log($event);

            var nuevaLati = $event.coords.lat;
            var nuevaLongi = $event.coords.lng;
            if(marcador === this.markers[0]){
                    this.mostLati = $event.coords.lat;
                    this.mostLongi = $event.coords.lng;
            }
            if(marcador === this.markers[1]){
                    this.mostLati1 = $event.coords.lat;
                    this.mostLongi1 = $event.coords.lng;
            }
             if(marcador === this.markers[2]){
                    this.mostLati2 = $event.coords.lat;
                    this.mostLongi2 = $event.coords.lng;
            }
             if(marcador === this.markers[3]){
                    this.mostLati3 = $event.coords.lat;
                    this.mostLongi3 = $event.coords.lng;
            }
             if(marcador === this.markers[4]){
                    this.mostLati4 = $event.coords.lat;
                    this.mostLongi4 = $event.coords.lng;
            }
             if(marcador === this.markers[5]){
                    this.mostLati5 = $event.coords.lat;
                    this.mostLongi5 = $event.coords.lng;
            }
                 if(marcador === this.markers[6]){
                    this.mostLati6 = $event.coords.lat;
                    this.mostLongi6 = $event.coords.lng;
            }
            
            console.log( this.mostLati, this.mostLongi );
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
            this._markerService.computeDistanceBetweenTx1Rx2()

           }else;

           if(this.tra0 === true ){

            this._markerService.computeDistanceBetween1();
            this._markerService.computeDistanceBetweenTx2Rx2()

           }else;
           if(this.tra2 === true ){

            this._markerService.computeDistanceBetweenTx3Rx1();
            this._markerService.computeDistanceBetweenTx3Rx2();
           }else;
          if(this.tra3 === true ){

            this._markerService.computeDistanceBetweenTx4Rx1();
            this._markerService.computeDistanceBetweenTx4Rx2();
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
             this.mostLati = this.newLatTx1;
             this.mostLongi = this.newLongTx1;
            this.markers.splice(0, 1);
             this.markers.splice( 0, 0, nuevoMarcador  );
            this._markerService.updtTx1(this.markers , this.newLatTx1, this.newLongTx1);
    }

    uploadTx2(){
             var nuevoMarcador = {

               nombre: "Transmisor 2",
               lati: parseFloat(this.newLatTx2),
               longi: parseFloat(this.newLongTx2),
               arrastrable: true
            }
             this.mostLati1 = this.newLatTx2;
             this.mostLongi1 = this.newLongTx2;
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
            this.mostLati2 = this.newLatRx;
            this.mostLongi2 = this.newLongRx;
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
            this.mostLati3 = this.newLatOb;
            this.mostLongi3 = this.newLongOb;
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
            this.mostLati4 = this.newLatTx3;
            this.mostLongi4 = this.newLongTx3;
            
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
            this.mostLati5 = this.newLatTx4;
            this.mostLongi5 = this.newLongTx4;
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
            this.mostLati6 = this.newLatRx2;
            this.mostLongi6 = this.newLongRx2;
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

  
