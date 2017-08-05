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
    public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
   public barChartLabels: any[] ;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [1, 0, 0, 0, 0], label: 'Tx1'},
    {data: [0, 1, 0, 0, 0], label: 'Tx2'},
    {data: [0, 0, 1, 0, 0], label: 'Tx3'},
    {data: [0, 0, 0, 1, 0], label: 'Tx4'},
    {data: [0, 0, 0, 0, 1], label: 'IG'},
  ];
 
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
    interfTx = [];

    //Retardos
    negativeOn1 : boolean = false ;    
    negativeOn2 : boolean = false ; 
    negativeOn3 : boolean = false ; 
    negativeOn4 : boolean = false ; 
    retardoRed;
    retardos = [];    
    intGua : number;
    retardosState = [];
    retardosPrueba = [] ;


     randomize():void {
        var c = 29.9792458;
       var distIntGua = ((this.intGua)*c);
       this.retardosPrueba = this._markerService.getDeltaT1();
        this.barChartLabels = [this.retardosPrueba[0],this.retardosPrueba[1],this.retardosPrueba[2],this.retardosPrueba[3],distIntGua];
        var someArray = [];
        someArray[this.barChartLabels[0]] = this.barChartData[0].label;
        console.log(someArray[this.barChartLabels[0]])
        someArray[this.barChartLabels[1]] = this.barChartData[1].label;
        someArray[this.barChartLabels[2]] = this.barChartData[2].label;
        someArray[this.barChartLabels[3]] = this.barChartData[3].label;
        someArray[this.barChartLabels[4]] = this.barChartData[4].label;
        this.barChartLabels.sort(function(a, b) {
        return a - b;
}); 
        this.barChartData[0].label = someArray[this.barChartLabels[0]];
        console.log(this.barChartData[0].label)
        this.barChartData[1].label = someArray[this.barChartLabels[1]];
        this.barChartData[2].label = someArray[this.barChartLabels[2]];
        this.barChartData[3].label = someArray[this.barChartLabels[3]];
        this.barChartData[4].label = someArray[this.barChartLabels[4]];
        
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
       var c = 29.9792458;
       var distIntGua = ((this.intGua)*c);
       var Deltas = this._markerService.getDeltaT1();
       console.log( "tiempo", this.intGua, "distancia", distIntGua)
       if(Deltas[0] >= distIntGua){
            this.interfTx[0] = "si";
       }else{
            this.interfTx[0] = "no";
       }
         if(Deltas[1] >= distIntGua ){
            this.interfTx[1] = "si";
       }else{
            this.interfTx[1] = "no";
       }
         if(Deltas[2] >= distIntGua){
            this.interfTx[2] = "si";
       }else{
            this.interfTx[2] = "no";
       }
         if(Deltas[3] >= distIntGua ){
            this.interfTx[3] = "si";
       }else{
            this.interfTx[3] = "no";
       }
        if(Deltas[4] >= distIntGua ){
            this.interfTx[4] = "si";
       }else{
            this.interfTx[4] = "no";
       }
        if(Deltas[5] >= distIntGua){
            this.interfTx[5] = "si";
       }else{
            this.interfTx[5] = "no";
       }
        if(Deltas[6] >= distIntGua){
            this.interfTx[6] = "si";
       }else{
            this.interfTx[6] = "no";
       }
        if(Deltas[7] >= distIntGua ){
            this.interfTx[7] = "si";
       }else{
            this.interfTx[7] = "no";
       }

    

  

}

   calculoDistanciasRx2(){
       this._markerService.distanciaMenorRx2();
       var c = 0.299792458;
       var distIntGua = ((this.intGua)*c);
       var Deltas2 = this._markerService.getDeltaT2();

   console.log(distIntGua ,Deltas2 );

  

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



  
