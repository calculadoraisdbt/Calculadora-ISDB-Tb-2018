import { Component, OnInit, } from '@angular/core';
import { Marker } from './marker';
import { MarkersService } from 'app/Services/markers.service';
import { FormControl, FormGroup,  } from '@angular/forms';
import { ModuladorService } from 'app/Services/modulador.service';




@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    providers: [MarkersService,ModuladorService ]
})

export class BlankPageComponent implements OnInit {

Deltas : any = this._markerService.getDeltasRx1();


intGua =  this._moduladorService.obtenerIntGua();
public lineChartData:Array<any> =  [
                 { label: 'IG',data : [{x: this.intGua ,y: 10,}, {x: this.intGua,y: 0}], borderDash : [ 10 , 5] },
                 { label: 'Tx1',data : [{x: this.Deltas[0],y: 0,}, {x: this.Deltas[0],y: 0}]},
                 { label: 'Tx2',data : [{x: this.Deltas[1],y: 0,}, {x: this.Deltas[1],y: 0}]},
                 { label: 'Tx3',data : [{x: this.Deltas[2],y: 0,}, {x: this.Deltas[2],y: 0}]},
                 { label: 'Tx4',data : [{x: this.Deltas[3],y: 0,}, {x: this.Deltas[3],y: 0}]}
      
];

public  lineChartOptions: any = {
    responsive: true,
    animation: false,
    scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
  };
public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(33,150,243,0.2)',
      borderColor: 'rgba(33,150,243,1)',
      pointBackgroundColor: 'rgba(33,150,243,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(33,150,243,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(76,175,80,0.2)',
      borderColor: 'rgba(76,175,80,1)',
      pointBackgroundColor: 'rgba(76,175,80,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(76,175,80,1)'
    },
    { // grey
      backgroundColor: 'rgba(244,67,54,0.2)',
      borderColor: 'rgba(244,67,54,1)',
      pointBackgroundColor: 'rgba(244,67,54,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(244,67,54,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(103,58,183,0.2)',
      borderColor: 'rgba(103,58,183,1)',
      pointBackgroundColor: 'rgba(103,58,183,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103,58,183,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(255,152,0,0.2)',
      borderColor: 'rgba(255,152,0,1)',
      pointBackgroundColor: 'rgba(255,152,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,152,0,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(96,125,139,0.2)',
      borderColor: 'rgba(96,125,139,1)',
      pointBackgroundColor: 'rgba(96,125,139,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(96,125,139,0.8)'
    }    
  ];

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'scatter';
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
   

  
        resultDist : number = 0;
         markers : Marker[];
        constructor( private _markerService:MarkersService ,private _moduladorService:ModuladorService ) { 
            this.markers = this._markerService.obtenerMarcadores();
            this.intGua =  this._moduladorService.obtenerIntGua();
            this.retardos = this._markerService.obtenerRetardos();
            this.retardosState = this._markerService.obtenerRetardosState();
            this.retardoRed = this._markerService.obtenerRetardoRed();
            this.Deltas = this._markerService.getDeltasRx1();
            
            
        }
        ngOnInit() {
            
        }
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
    distanciaTab : boolean = false;
    tiempoTab : boolean = false;
    interfTx = [] ;
    interfTxRx2 = [] ;
    //Retardos
    negativeOn1 : boolean = false ;    
    negativeOn2 : boolean = false ; 
    negativeOn3 : boolean = false ; 
    negativeOn4 : boolean = false ; 
    retardoRed;
    retardos = [];    
    retardosState = [];
    retardosPrueba = [] ;
    interfBoolean = [] ;
    interfBooleanRx2 = [] ;
    DeltasRx2 = [] ;
    altura0 ;
    altura1 ;
    altura2 ;
    altura3 ;


     ventanaSincro() {
             this.intGua =  this._moduladorService.obtenerIntGua();
             this.Deltas = this._markerService.getDeltasRx1();
             var DeltaPrueba : any = [ this.Deltas[0], this.Deltas[1], this.Deltas[2], this.Deltas[3]];
            console.log("aca",DeltaPrueba);
             
             for(var i = 0 ; i < 4 ; i++){
                
                 if(i === 0 ){
                     var altura = 10;

                 }
                 if(i === 1 ){
                    var altura = 8;
                }
                if(i === 2 ){
                    var altura = 5;
                }
                if(i === 3 ){
                    var altura = 3;
                }
                
                var menor = Math.min.apply(Math, DeltaPrueba);
                    console.log(menor)
                               if(menor === parseFloat(this.Deltas[0])  ){
                                   var index = DeltaPrueba.indexOf(this.Deltas[0]);
                                    DeltaPrueba.splice(index,1);
                                   this.altura0 = altura;
                                 }
                                 if(menor === parseFloat(this.Deltas[1]) ){
                                    var index = DeltaPrueba.indexOf(this.Deltas[1]);
                                    DeltaPrueba.splice(index,1);
                                    this.altura1 = altura;
                                    
                                }
                                 if(menor === parseFloat(this.Deltas[2]) ){
                                    var index = DeltaPrueba.indexOf(this.Deltas[2]);
                                    DeltaPrueba.splice(index,1);
                                   this.altura2 = altura;
                                 }
                                 if(menor === parseFloat(this.Deltas[3]) ){
                                    var index = DeltaPrueba.indexOf(this.Deltas[3]);
                                    DeltaPrueba.splice(index    ,1);
                                   this.altura3 = altura;
                                }

             }
           

             this.lineChartData =  [
                 { label: 'IG',data : [{x: this.intGua ,y: 10,}, {x: this.intGua,y: 0}], borderDash : [ 10 , 5]},
                 { label: 'Tx1',data : [{x: this.Deltas[0],y: this.altura0,}, {x: this.Deltas[0],y: 0}]},
                 { label: 'Tx2',data : [{x: this.Deltas[1],y: this.altura1,}, {x: this.Deltas[1],y: 0}]},
                 { label: 'Tx3',data : [{x: this.Deltas[2],y: this.altura2,}, {x: this.Deltas[2],y: 0}]},
                 { label: 'Tx4',data : [{x: this.Deltas[3],y: this.altura3,}, {x: this.Deltas[3],y: 0}]}
                
                ];




  }

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
            
            var actuaMarcador = {

                nombre: marcador.nombre,
                lati: parseFloat(marcador.lati),
                longi: parseFloat(marcador.longi),
                arrastrable: true,
                
                
            }

            
            
              
            this._markerService.actualizarMarcador(actuaMarcador, nuevaLati, nuevaLongi);
            
    }
    
show (){
    if(this.distanciaTab === true){            
        if(this.tra1 === true && this.recep === true  ){              //TRANSMIOR 2
                   
            this._markerService.computeDistanceBetween();
        }else;
        if(this.tra0 === true && this.recep2 === true){             //TRANSMISOR 1
            this._markerService.computeDistanceBetweenTx1Rx2();
        }else;

        if(this.tra0 === true  && this.recep === true ){            //TRANSMISOR 1
                  
            this._markerService.computeDistanceBetween1();
                    
        }else;
        if(this.tra1 === true  && this.recep2 === true){            //TRANSMIOR 2
            this._markerService.computeDistanceBetweenTx2Rx2();
        }else;
        if(this.tra2 === true && this.recep === true){
            this._markerService.computeDistanceBetweenTx3Rx1();
        }else;
        if(this.tra2 === true && this.recep2 === true ){
            this._markerService.computeDistanceBetweenTx3Rx2();
        }else;

        if(this.tra3 === true && this.recep === true ){
            this._markerService.computeDistanceBetweenTx4Rx1();
        }
        if(this.tra3 === true && this.recep2 === true){
            this._markerService.computeDistanceBetweenTx4Rx2();
        }else;
        if(this.obst === true && this.recep === true && this.tra0 === true){            //TRANSMISOR 1
              this._markerService.computeDistanceBetweenTx1Ob();
        }else;
        if(this.obst === true && this.recep2 === true && this.tra0 === true){       //TRANSMISOR 1
              this._markerService.computeDistanceBetweenTx1Rx2CR();
        }else;
        if(this.obst === true && this.recep === true && this.tra1 === true ){
             this._markerService.computeDistanceBetweenTx2Rx1CR();
        }
        if(this.obst === true && this.recep2 === true && this.tra1 === true ){
             this._markerService.computeDistanceBetweenTx2Rx2CR();
        }
        if(this.obst === true && this.recep === true && this.tra2 === true){
            this._markerService.computeDistanceBetweenTx3Rx1CR();
        }
        if(this.obst === true && this.recep2 === true && this.tra2 === true){
            this._markerService.computeDistanceBetweenTx3Rx2CR();
        }

        if(this.obst === true && this.recep === true && this.tra3 === true){
            this._markerService.computeDistanceBetweenTx4Rx1CR();
        }
         if(this.obst === true && this.recep2 === true && this.tra3 === true){
            this._markerService.computeDistanceBetweenTx4Rx2CR();
        }
            
    
    }
           
    if(this.tiempoTab === true){
            if(this.tra0 === true  && this.recep === true ){     
            this._markerService.computeTimeBetweenTx1Rx1();
    }else;
    if(this.tra0 === true && this.recep2 === true){  
            this._markerService.computeTimeBetweenTx1Rx2();
    }else;   

    if(this.recep === true && this.tra1 === true){
            this._markerService.computeTimeBetweenTx2Rx1();
    }else; 
    if( this.recep2 === true && this.tra1 === true ){
             this._markerService.computeTimeBetweenTx2Rx2();
    }else; 
    if(this.recep === true && this.tra2 === true){
            this._markerService.computeTimeBetweenTx3Rx1();
    }  else;       
    if(this.tra2 === true && this.recep2 === true){
            this._markerService.computeTimeBetweenTx3Rx2();
    }else; 
    if(this.tra3 === true && this.recep === true){
            this._markerService.computeTimeBetweenTx4Rx1();
    }else; 
    if(this.recep2 === true && this.tra3 === true){
            this._markerService.computeTimeBetweenTx4Rx2();  
    }else; 
    if(this.obst === true && this.recep === true && this.tra0 === true){
            this._markerService.computeTimeBetweenTx1Ob();

    }else; 
    if(this.obst === true && this.recep2 === true && this.tra0 === true){
            this._markerService.computeTimeBetweenTx1Rx2CR();
    }else; 
    if(this.obst === true && this.recep === true && this.tra1 === true ){
            this._markerService.computeTimeBetweenTx2Rx1CR();
    }else; 
    if(this.obst === true && this.recep2 === true && this.tra1 === true){
            this._markerService.computeTimeBetweenTx2Rx2CR();
    }else; 
    if(this.obst === true && this.recep === true && this.tra2 === true){
        this._markerService.computeTimeBetweenTx3Rx1CR();
    }else; 
    if(this.obst === true && this.recep2 === true && this.tra2 === true){
        this._markerService.computeTimeBetweenTx3Rx2CR();
    }else; 
    if(this.obst === true && this.recep === true && this.tra3 === true){
       this._markerService.computeTimeBetweenTx4Rx1CR();
    }
    if(this.obst === true && this.recep2 === true && this.tra3 === true){
        this._markerService.computeTimeBetweenTx4Rx2CR();
    }




    }      
      
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

   
   calculoDistanciasRx1(){
       
       this._markerService.distanciaMenorRx1();
       this.Deltas  = this._markerService.getDeltasRx1();
       this.Deltas[0] = ((this.Deltas[0]/299792458)*1000000).toFixed(2);
       this.Deltas[1] = ((this.Deltas[1]/299792458)*1000000).toFixed(2);
       this.Deltas[2] = ((this.Deltas[2]/299792458)*1000000).toFixed(2);
       this.Deltas[3] = ((this.Deltas[3]/299792458)*1000000).toFixed(2);
       this.Deltas[4] = ((this.Deltas[4]/299792458)*1000000).toFixed(2);
       this.Deltas[5] = ((this.Deltas[5]/299792458)*1000000).toFixed(2);
       this.Deltas[6] = ((this.Deltas[6]/299792458)*1000000).toFixed(2);
       this.Deltas[7] = ((this.Deltas[7]/299792458)*1000000).toFixed(2);

       this.interfTx = this.Deltas;  
       
     if(this.Deltas[0] >= this.intGua){
           this.interfBoolean[0] = true;
       }else{
            this.interfBoolean[0] = false;
       }
         if(this.Deltas[1] >= this.intGua ){
           this.interfBoolean[1] = true;
       }else{
            this.interfBoolean[1] = false;
       }
         if(this.Deltas[2] >= this.intGua){
           this.interfBoolean[2] = true;
       }else{
            this.interfBoolean[2] = false;
       }
         if(this.Deltas[3] >= this.intGua ){
           this.interfBoolean[3] = true;
       }else{
            this.interfBoolean[3] = false;
       }
        if(this.Deltas[4] >= this.intGua ){
           this.interfBoolean[4] = true;
       }else{
           this.interfBoolean[4] = false;
       }
        if(this.Deltas[5] >= this.intGua){
           this.interfBoolean[5] = true;
       }else{
            this.interfBoolean[5] = false;
       }
        if(this.Deltas[6] >= this.intGua){
           this.interfBoolean[6] = true;
       }else{
            this.interfBoolean[6] = false;
       }
        if(this.Deltas[7] >= this.intGua ){
           this.interfBoolean[7] = true;
       }else{
            this.interfBoolean[7] = false;
       }

    

}

   calculoDistanciasRx2(){
       
       this._markerService.distanciaMenorRx2();
       this.DeltasRx2  = this._markerService.getDeltasRx2();
       this.DeltasRx2[0] = ((this.DeltasRx2[0]/299792458)*1000000).toFixed(2);
       this.DeltasRx2[1] = ((this.DeltasRx2[1]/299792458)*1000000).toFixed(2);
       this.DeltasRx2[2] = ((this.DeltasRx2[2]/299792458)*1000000).toFixed(2);
       this.DeltasRx2[3] = ((this.DeltasRx2[3]/299792458)*1000000).toFixed(2);
       this.DeltasRx2[4] = ((this.DeltasRx2[4]/299792458)*1000000).toFixed(2);
       this.DeltasRx2[5] = ((this.DeltasRx2[5]/299792458)*1000000).toFixed(2);
       this.DeltasRx2[6] = ((this.DeltasRx2[6]/299792458)*1000000).toFixed(2);
       this.DeltasRx2[7] = ((this.DeltasRx2[7]/299792458)*1000000).toFixed(2);

       this.interfTxRx2 = this.DeltasRx2;  
       
     if(this.DeltasRx2[0] >= this.intGua){
           this.interfBooleanRx2[0] = true;
       }else{
            this.interfBooleanRx2[0] = false;
       }
         if(this.DeltasRx2[1] >= this.intGua ){
           this.interfBooleanRx2[1] = true;
       }else{
            this.interfBooleanRx2[1] = false;
       }
         if(this.DeltasRx2[2] >= this.intGua){
           this.interfBooleanRx2[2] = true;
       }else{
            this.interfBooleanRx2[2] = false;
       }
         if(this.DeltasRx2[3] >= this.intGua ){
           this.interfBooleanRx2[3] = true;
       }else{
            this.interfBooleanRx2[3] = false;
       }
        if(this.DeltasRx2[4] >= this.intGua ){
           this.interfBooleanRx2[4] = true;
       }else{
           this.interfBooleanRx2[4] = false;
       }
        if(this.DeltasRx2[5] >= this.intGua){
           this.interfBooleanRx2[5] = true;
       }else{
            this.interfBooleanRx2[5] = false;
       }
        if(this.DeltasRx2[6] >= this.intGua){
           this.interfBooleanRx2[6] = true;
       }else{
            this.interfBooleanRx2[6] = false;
       }
        if(this.DeltasRx2[7] >= this.intGua ){
           this.interfBooleanRx2[7] = true;
       }else{
            this.interfBooleanRx2[7] = false;
       }

    

}

cambio(value, id){

   
       
        if(id === 'Tx1'){
             if(value === "Negative" ){
                this.negativeOn1 = true;
             }     
        
        else{
             this.negativeOn1 = false;
        }
        }
        if(id === 'Tx2'){
             if(value === "Negative" ){
                this.negativeOn2 = true;
             }     
        
        else{
             this.negativeOn2 = false;
        }  
        }  
        if(id === 'Tx3'){
             if(value === "Negative" ){
                this.negativeOn3 = true;
             }     

        else{
             this.negativeOn3 = false;
        }
        }
        if(id === 'Tx4'){
             if(value === "Negative" ){
                this.negativeOn4 = true;
             }     
        
        else{
             this.negativeOn4 = false;
        } 
        }
}   

aplicarCambios(){
    this._markerService.actualizarRetardoRed(this.retardoRed);
    if(this.retardosState[0]){
            this._markerService.sumaRetardoTx1(this.retardos[0], this.retardosState[0]);
    }else{
         this.retardos[0] = 0;
        this._markerService.sumaRetardoTx1(this.retardos[0], this.retardosState[0]);}

    if(this.retardosState[1]){
            this._markerService.sumaRetardoTx2(this.retardos[1], this.retardosState[1]);
    }else{
         this.retardos[1] = 0;
        this._markerService.sumaRetardoTx2(this.retardos[1], this.retardosState[1]);}

    if(this.retardosState[2]){
            this._markerService.sumaRetardoTx3(this.retardos[2], this.retardosState[2]);
    }else{
         this.retardos[2] = 0;
        this._markerService.sumaRetardoTx3(this.retardos[2], this.retardosState[2]);}

    if(this.retardosState[3]){
            this._markerService.sumaRetardoTx4(this.retardos[3], this.retardosState[3]);
    }else{
         this.retardos[3] = 0;
        this._markerService.sumaRetardoTx4(this.retardos[3], this.retardosState[3]);}

        
        

}


}



  
