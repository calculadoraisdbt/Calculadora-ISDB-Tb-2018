import { Component, OnInit, } from '@angular/core';
import { Marker } from './marker';
import { MarkersService } from 'app/Services/markers.service';
import { FormControl, FormGroup,  } from '@angular/forms';
import { ModuladorService } from 'app/Services/modulador.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import {RemuxService} from 'app/Services/remux.service'

declare var google: any;

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    providers: [MarkersService,ModuladorService,RemuxService ]
})


export class BlankPageComponent implements OnInit {

Deltas : any = this._markerService.getDeltasRx1();


intGua =  this._moduladorService.obtenerIntGua();
public lineChartData:any[] =  [
    { label: 'IG',data : [{x: this.intGua ,y: 60,}, {x: this.intGua,y: 0}], borderDash : [ 60 , 5]},
    
      
];
public chart_visible: boolean = true

public  lineChartOptions: any = {
    responsive: true,
    animation: false,
    scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                scaleLabel: {
                    display: true,
                    labelString: 'Tiempo [µs]'
                  }
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
 
 //CHART PARA RX2
 
 public lineChartData2:any[] =  [
    { label: 'IG',data : [{x: this.intGua ,y: 60,}, {x: this.intGua,y: 0}], borderDash : [ 60 , 5]},
    
      
];
public chart_visible2: boolean = true

public  lineChartOptions2: any = {
    responsive: true,
    animation: false,
    scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                scaleLabel: {
                    display: true,
                    labelString: 'Tiempo [µs]'
                  }
            }]
        }
  };
public lineChartColors2: Array<any> = [
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

  public lineChartLegend2: boolean = true;
  public lineChartType2: string = 'scatter';
        
        resultDist : number = 0;
         markers : Marker[];
        constructor( private _markerService:MarkersService ,private _moduladorService:ModuladorService,private _remuxService:RemuxService ) { 
            this.markers = this._markerService.obtenerMarcadores();
            this.intGua =  this._moduladorService.obtenerIntGua();
            this.retardos = this._markerService.obtenerRetardos();
            this.retardosState = this._markerService.obtenerRetardosState();
            this.retardoRed = this._markerService.obtenerRetardoRed();
            this.Deltas = this._markerService.getDeltasRx1();
            this.tra0 = this._markerService.obtenerTra0();
            this.tra1 = this._markerService.obtenerTra1();
            this.tra2 = this._markerService.obtenerTra2();
            this.tra3 = this._markerService.obtenerTra3();
            this.recep = this._markerService.obtenerRecep();
            this.recep2 = this._markerService.obtenerRecep2();
            this.obst = this._markerService.obtenerObst();
            this.polarity = this._markerService.obtenerPolarity();
            this.idModulador = this._markerService.obteneridModuladores();
            this.modo = this._markerService.obtenerModo();
            this.negativeOn1 = this._markerService.obtenerNegativeOn1();
            this.negativeOn2 = this._markerService.obtenerNegativeOn2();
            this.negativeOn3 = this._markerService.obtenerNegativeOn3();
            this.negativeOn4 = this._markerService.obtenerNegativeOn4();
            this.retardosState = this._markerService.obtenerRetardosState();
            this.enableSFN = this._markerService.obtenerEnableSFN();
            this.retardoBTS = this._remuxService.obtenerRetardoBTS();
            this.retardoDeTransmisor = this._remuxService.obtenerRetardoDeTransmisor();
            this.estan = this._markerService.obtenerEstancados();
            this.nombreEstacion = this._remuxService.obtenerNombreEstacion();
        }
        ngOnInit() {
                if(this.modo[0] === "Estatico"){
                    this.retardosStatic[0] = +this.retardoBTS[0] + +this.retardoDeTransmisor[0];
                    
                }
                if(this.modo[0] === "Dinamico"){ this.retardosStatic[0] = 0;}
                if(this.modo[1] === "Estatico"){
                    this.retardosStatic[1] = +this.retardoBTS[1] + +this.retardoDeTransmisor[1];
                    
                }
                if(this.modo[1] === "Dinamico"){ this.retardosStatic[1] = 0;}
                if(this.modo[2] === "Estatico"){
                    this.retardosStatic[2] = +this.retardoBTS[2] + +this.retardoDeTransmisor[2];
                    
                }
                if(this.modo[2] === "Dinamico"){ this.retardosStatic[2] = 0;}
                if(this.modo[3] === "Estatico"){
                    this.retardosStatic[3] = +this.retardoBTS[3] + +this.retardoDeTransmisor[3];
                    
                }
                if(this.modo[3] === "Dinamico"){ this.retardosStatic[3] = 0;}
                this._markerService.actualizarRetardosEstaticos(this.retardosStatic);
                this.estancarTx1();
                this.estancarTx2();
                this.estancarTx3();
                this.estancarTx4();
                this.estancarRx1();
                this.estancarRx2();
                this.estancarObst();
                if( this.modo[0] === "Estatico" || this.modo[1] === "Static" || this.modo[2] === "Estatico" ||
                this.modo[3] === "Estatico"){this.staticAlert = true;}
                else{this.staticAlert = false;}


}
    //Posicion inicial Mapa
    lat: number = -31.416667 ;
    lng: number = -64.183333; 
    zoom: number = 8;
    mapType = ['roadmap', 'satellite'];
    gesture = 'auto';
    tra0;
    tra1;
    recep;
    recep2;
    obst;
    tra2;
    tra3;
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
    polarity ;
    selector = [] ;
    idModulador : any [] ;
    modo   = [] ;
    enableSFN ;
    retardoBTS : any [];
    retardoDeTransmisor : any [];
    retardosStatic = [] ;
    estan = [];
    staticAlert = false;
    nombreEstacion = [];
    public activeButtonName: string = '';

    test( id){
        if(id === "tx1"){
            this.activeButtonName = id;
            this.selector[0] = true;
            this.selector[1] = false;
            this.selector[2] = false;
            this.selector[3] = false;
            this.selector[4] = false;
            this.selector[5] = false;
            this.selector[6] = false; }
         if(id === "tx2"){
            this.activeButtonName = id;
            this.selector[0] = false;
            this.selector[1] = true;
            this.selector[2] = false;
            this.selector[3] = false;
            this.selector[4] = false;
            this.selector[5] = false;
            this.selector[6] = false; }
         if(id === "tx3"){
            this.activeButtonName = id;
            this.selector[0] = false;
            this.selector[1] = false;
            this.selector[2] = true;
            this.selector[3] = false;
            this.selector[4] = false;
            this.selector[5] = false;
            this.selector[6] = false; }
        if(id === "tx4"){
            this.activeButtonName = id;
            this.selector[0] = false;
            this.selector[1] = false;
            this.selector[2] = false;
            this.selector[3] = true;
            this.selector[4] = false;
            this.selector[5] = false;
            this.selector[6] = false; }
        if(id === "rx1"){
            this.activeButtonName = id;
            this.selector[0] = false;
            this.selector[1] = false;
            this.selector[2] = false;
            this.selector[3] = false;
            this.selector[4] = true;
            this.selector[5] = false;
            this.selector[6] = false; }
        if(id === "rx2"){
            this.activeButtonName = id;
            this.selector[0] = false;
            this.selector[1] = false;
            this.selector[2] = false;
            this.selector[3] = false;
            this.selector[4] = false;
            this.selector[5] = true;
            this.selector[6] = false; }  
        if(id === "obst"){
            this.activeButtonName = id;
            this.selector[0] = false;
            this.selector[1] = false;
            this.selector[2] = false;
            this.selector[3] = false;
            this.selector[4] = false;
            this.selector[5] = false;
            this.selector[6] = true; }                      
    }
     ventanaSincro() {
       
          
        this.show1();
        this.calculoDistanciasRx1()
             this.intGua =  this._moduladorService.obtenerIntGua();
             this.Deltas = this._markerService.getDeltasRx1();
             var DeltaPrueba : any = [ this.Deltas[0], this.Deltas[1], this.Deltas[2], this.Deltas[3]];
             var DeltaCR : any = [ this.Deltas[4], this.Deltas[5], this.Deltas[6], this.Deltas[7]];
             var DistanciaRx1 = this._markerService.getDistanacias();
             
                let temp = [{  label: this.nombreEstacion[0]    ,data : [{x: this.Deltas[0],y: DistanciaRx1[0],}, {x: this.Deltas[0],y: 0}]},
                { label: this.nombreEstacion[1],data : [{x: this.Deltas[1],y: DistanciaRx1[1]}, {x: this.Deltas[1],y: 0}]},
                { label: this.nombreEstacion[2],data : [{x: this.Deltas[2],y: DistanciaRx1[2]}, {x: this.Deltas[2],y: 0}],},
                { label: this.nombreEstacion[3],data : [{x: this.Deltas[3],y: DistanciaRx1[3]}, {x: this.Deltas[3],y: 0}]},
                { label: this.nombreEstacion[0]+'-CR',data : [{x: this.Deltas[4],y: DistanciaRx1[4]}, {x: this.Deltas[4],y: 0}]},
                { label: this.nombreEstacion[1]+'-CR',data : [{x: this.Deltas[5],y: DistanciaRx1[5]}, {x: this.Deltas[5],y: 0}]},
                { label: this.nombreEstacion[2]+'-CR',data : [{x: this.Deltas[6],y: DistanciaRx1[6]}, {x: this.Deltas[6],y: 0}]},
                { label: this.nombreEstacion[3]+'-CR',data : [{x: this.Deltas[7],y: DistanciaRx1[7]}, {x: this.Deltas[7],y: 0}]},
                ]
   
           
            this.chart_visible = false;
           
            let lineChartData:any[] =  Object.assign([],[
                 { label: 'IG',data : [{x: this.intGua ,y: 60,}, {x: this.intGua,y: 0}], borderDash : [ 60 , 5]},
                 
        
                ]);
           
            for (let i=0; i<=3; i++){
                let val = this['tra'+i];
                console.log(val)
                if (val){
                    lineChartData.push(temp[i]);
                }
            }
            if(this.obst && this.tra0){
                lineChartData.push(temp[4]);
            }    
            if(this.obst && this.tra1){
                lineChartData.push(temp[5]);
            }    
            if(this.obst && this.tra2){
                lineChartData.push(temp[6]);
            }    
            if(this.obst && this.tra3){
                lineChartData.push(temp[7]);
            }    
            this.lineChartData = Object.assign([],lineChartData)
            this.lineChartOptions = Object.assign({}, this.lineChartOptions)
            console.log(lineChartData)
            setTimeout(()=>{
                this.chart_visible = true
            })

          


  }

  ventanaSincro2() {
      this.show2();
      this.calculoDistanciasRx2()
      

    this.intGua =  this._moduladorService.obtenerIntGua();
    this.Deltas = this._markerService.getDeltasRx2();
   var DeltaPrueba : any = [ this.Deltas[0], this.Deltas[1], this.Deltas[2], this.Deltas[3]];
   var DeltaCR : any = [ this.Deltas[4], this.Deltas[5], this.Deltas[6], this.Deltas[7]];
    var DistanciaRx2 = this._markerService.getDistanacias2();
   

       let temp = [{  label: this.nombreEstacion[0],data : [{x: this.Deltas[0],y: DistanciaRx2[0],}, {x: this.Deltas[0],y: 0}]},
       { label: this.nombreEstacion[1],data : [{x: this.Deltas[1],y: DistanciaRx2[1]}, {x: this.Deltas[1],y: 0}]},
       { label: this.nombreEstacion[2],data : [{x: this.Deltas[2],y: DistanciaRx2[2]}, {x: this.Deltas[2],y: 0}]},
       { label: this.nombreEstacion[3],data : [{x: this.Deltas[3],y: DistanciaRx2[3]}, {x: this.Deltas[3],y: 0}]},
       { label: this.nombreEstacion[0]+'-CR',data : [{x: this.Deltas[4],y: DistanciaRx2[4]}, {x: this.Deltas[4],y: 0}]},
       { label: this.nombreEstacion[1]+'-CR',data : [{x: this.Deltas[5],y: DistanciaRx2[5]}, {x: this.Deltas[5],y: 0}]},
       { label: this.nombreEstacion[2]+'-CR',data : [{x: this.Deltas[6],y: DistanciaRx2[6]}, {x: this.Deltas[6],y: 0}]},
       { label: this.nombreEstacion[3]+'-CR',data : [{x: this.Deltas[7],y: DistanciaRx2[7]}, {x: this.Deltas[7],y: 0}]},
       ]

  
   this.chart_visible2 = false
   let lineChartData2:any[] =  Object.assign([],[
        { label: 'IG',data : [{x: this.intGua ,y: 60,}, {x: this.intGua,y: 0}], borderDash : [ 60 , 5]},
        

       ]);
  
   for (let i=0; i<=3; i++){
       let val = this['tra'+i];
       console.log(val)
       if (val){
           lineChartData2.push(temp[i]);
       }
   }
   if(this.obst && this.tra0){
       lineChartData2.push(temp[4]);
   }    
   if(this.obst && this.tra1){
       lineChartData2.push(temp[5]);
   }    
   if(this.obst && this.tra2){
       lineChartData2.push(temp[6]);
   }    
   if(this.obst && this.tra3){
       lineChartData2.push(temp[7]);
   }    
   this.lineChartData2 = Object.assign([],lineChartData2)
   this.lineChartOptions2 = Object.assign({}, this.lineChartOptions2)
   console.log(lineChartData2)
   setTimeout(()=>{
       this.chart_visible2 = true
   })




}


    posicionFinalMarcador(marcador:any,$event:any){

            var nuevaLati = $event.coords.lat;
            var nuevaLongi = $event.coords.lng;
            if(marcador === this.markers[0]){
                    this.mostLati = $event.coords.lat.toFixed(7) ;
                    this.mostLongi = $event.coords.lng.toFixed(7) ;

                    var nuevoMarcador = {
                        
                                       nombre: "Transmisor 1",
                                       lati: parseFloat(this.mostLati),
                                       longi: parseFloat(this.mostLongi),
                                       arrastrable: true
                                    }   
                                    this.markers.splice(0, 1);
                                     this.markers.splice( 0, 0, nuevoMarcador  );
                                     this._markerService.updtTx1(this.markers , this.mostLati, this.mostLongi);
            }
            if(marcador === this.markers[1]){
                    this.mostLati1 = $event.coords.lat.toFixed(7);
                    this.mostLongi1 = $event.coords.lng.toFixed(7);

                    var nuevoMarcador = {
                        
                                       nombre: "Transmisor 2",
                                       lati: parseFloat(this.mostLati1),
                                       longi: parseFloat(this.mostLongi1),
                                       arrastrable: true
                                    }
                                    this.markers.splice(1, 1);
                                     this.markers.splice( 1, 0, nuevoMarcador  );
                                    this._markerService.updtTx2(this.markers , this.mostLati1, this.mostLongi1);


            }
             if(marcador === this.markers[2]){
                    this.mostLati2 = $event.coords.lat.toFixed(7);
                    this.mostLongi2 = $event.coords.lng.toFixed(7);
                    var nuevoMarcador = {
                        
                                       nombre: "Receptor 1",
                                       lati: parseFloat(this.mostLati2),
                                       longi: parseFloat(this.mostLongi2),
                                       arrastrable: true
                                    }
                                    this.markers.splice(2, 1);
                                     this.markers.splice( 2, 0, nuevoMarcador  );
                        
                                    this._markerService.updtRx(this.markers , this.mostLati2, this.mostLongi2);
            }
             if(marcador === this.markers[3]){
                    this.mostLati3 = $event.coords.lat.toFixed(7);
                    this.mostLongi3 = $event.coords.lng.toFixed(7);
                    var nuevoMarcador = {
                        
                                       nombre: "Obstaculo",
                                       lati: parseFloat(this.mostLati3),
                                       longi: parseFloat(this.mostLongi3),
                                       arrastrable: true
                                    }
                                    this.markers.splice(3, 1);
                                     this.markers.splice( 3, 0, nuevoMarcador  );
                        
                                    this._markerService.updtOb(this.markers , this.mostLati3,this.mostLongi3);
            }
             if(marcador === this.markers[4]){
                    this.mostLati4 = $event.coords.lat.toFixed(7);
                    this.mostLongi4 = $event.coords.lng.toFixed(7);
                    var nuevoMarcador = {
                        
                                       nombre: "Transmisor 3",
                                       lati: parseFloat(this.mostLati4),
                                       longi: parseFloat( this.mostLongi4),
                                       arrastrable: true
                                    }
                                    this.markers.splice(4, 1);
                                     this.markers.splice( 4, 0, nuevoMarcador  );
                        
                                    this._markerService.updtTx3(this.markers , this.mostLati4,  this.mostLongi4);
            }
             if(marcador === this.markers[5]){
                    this.mostLati5 = $event.coords.lat.toFixed(7);
                    this.mostLongi5 = $event.coords.lng.toFixed(7);
                    var nuevoMarcador = {
                        
                                       nombre: "Transmisor 4",
                                       lati: parseFloat(this.mostLati5),
                                       longi: parseFloat(this.mostLongi5),
                                       arrastrable: true
                                    }
                                    this.markers.splice(5, 1);
                                     this.markers.splice( 5, 0, nuevoMarcador  );
                        
                                    this._markerService.updtTx4(this.markers , this.mostLongi5, this.mostLongi5);
            }
                 if(marcador === this.markers[6]){
                    this.mostLati6 = $event.coords.lat.toFixed(7);
                    this.mostLongi6 = $event.coords.lng.toFixed(7);
                    var nuevoMarcador = {
                        
                                       nombre: "Receptor 2",
                                       lati: parseFloat( this.mostLati6),
                                       longi: parseFloat(this.mostLongi6),
                                       arrastrable: true
                                    }
                                    this.markers.splice(6, 1);
                                     this.markers.splice( 6, 0, nuevoMarcador  );
                        
                                    this._markerService.updtRx2(this.markers ,  this.mostLati6, this.mostLongi6);
            }
            
            var actuaMarcador = {

                nombre: marcador.nombre,
                lati: parseFloat(marcador.lati),
                longi: parseFloat(marcador.longi),
                arrastrable: true,
                
                
            }

            
            
              
            this._markerService.actualizarMarcador(actuaMarcador, nuevaLati, nuevaLongi);
    }
    
show1 (){           
        if(this.tra1 === true && this.recep === true  ){              //TRANSMIOR 2
                   
            this._markerService.computeDistanceBetween();
        }else;
 /*       if(this.tra0 === true && this.recep2 === true){             //TRANSMISOR 1
            this._markerService.computeDistanceBetweenTx1Rx2();
        }else;*/

        if(this.tra0 === true  && this.recep === true ){            //TRANSMISOR 1
                  
            this._markerService.computeDistanceBetween1();
                    
        }else;
 /*       if(this.tra1 === true  && this.recep2 === true){            //TRANSMIOR 2
            this._markerService.computeDistanceBetweenTx2Rx2();
        }else;*/
        if(this.tra2 === true && this.recep === true){
            this._markerService.computeDistanceBetweenTx3Rx1();
        }else;
  /*      if(this.tra2 === true && this.recep2 === true ){
            this._markerService.computeDistanceBetweenTx3Rx2();
        }else;*/

        if(this.tra3 === true && this.recep === true ){
            this._markerService.computeDistanceBetweenTx4Rx1();
        }
   /*     if(this.tra3 === true && this.recep2 === true){
            this._markerService.computeDistanceBetweenTx4Rx2();
        }else;*/
        if(this.obst === true && this.recep === true && this.tra0 === true){            //TRANSMISOR 1
              this._markerService.computeDistanceBetweenTx1Ob();
        }else;
 /*       if(this.obst === true && this.recep2 === true && this.tra0 === true){       //TRANSMISOR 1
              this._markerService.computeDistanceBetweenTx1Rx2CR();
        }else;*/
        if(this.obst === true && this.recep === true && this.tra1 === true ){
             this._markerService.computeDistanceBetweenTx2Rx1CR();
        }
 /*       if(this.obst === true && this.recep2 === true && this.tra1 === true ){
             this._markerService.computeDistanceBetweenTx2Rx2CR();
        }*/
        if(this.obst === true && this.recep === true && this.tra2 === true){
            this._markerService.computeDistanceBetweenTx3Rx1CR();
        }
 /*       if(this.obst === true && this.recep2 === true && this.tra2 === true){
            this._markerService.computeDistanceBetweenTx3Rx2CR();
        }*/

        if(this.obst === true && this.recep === true && this.tra3 === true){
            this._markerService.computeDistanceBetweenTx4Rx1CR();
        }
 /*        if(this.obst === true && this.recep2 === true && this.tra3 === true){
            this._markerService.computeDistanceBetweenTx4Rx2CR();
        }*/
            
  /*         
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




    }      */
      
    }

    show2(){
        
       
     if(this.tra0 === true && this.recep2 === true){             //TRANSMISOR 1
     this._markerService.computeDistanceBetweenTx1Rx2();
        }else;


  if(this.tra1 === true  && this.recep2 === true){            //TRANSMIOR 2
     this._markerService.computeDistanceBetweenTx2Rx2();
 }else;
 
 if(this.tra2 === true && this.recep2 === true ){
     this._markerService.computeDistanceBetweenTx3Rx2();
 }else;

 if(this.tra3 === true && this.recep2 === true){
     this._markerService.computeDistanceBetweenTx4Rx2();
 }else;
 
if(this.obst === true && this.recep2 === true && this.tra0 === true){       //TRANSMISOR 1
       this._markerService.computeDistanceBetweenTx1Rx2CR();
 }else;

if(this.obst === true && this.recep2 === true && this.tra1 === true ){
      this._markerService.computeDistanceBetweenTx2Rx2CR();
 }

      if(this.obst === true && this.recep2 === true && this.tra2 === true){
     this._markerService.computeDistanceBetweenTx3Rx2CR();
 }

     if(this.obst === true && this.recep2 === true && this.tra3 === true){
     this._markerService.computeDistanceBetweenTx4Rx2CR();
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
                 if(value === "Adelanto (-)" ){
                    this.negativeOn1 = true;
                    this.modo[0] = "Dinamico";
                 }     
            
            else{
                 this.negativeOn1 = false;
            }
            }
            if(id === 'Tx2'){
                 if(value === "Adelanto (-)" ){
                    this.negativeOn2 = true;
                    this.modo[1] = "Dinamico";
                 }     
            
            else{
                 this.negativeOn2 = false;
            }  
            }  
            if(id === 'Tx3'){
                 if(value === "Adelanto (-)" ){
                    this.negativeOn3 = true;
                    this.modo[2] = "Dinamico";
                 }     
    
            else{
                 this.negativeOn3 = false;
            }
            }
            if(id === 'Tx4'){
                 if(value === "Adelanto (-)" ){
                    this.negativeOn4 = true;
                    this.modo[3] = "Dinamico";
                 }     
            
            else{
                 this.negativeOn4 = false;
            } 
            }
    }
aplicarCambios(){
    this._markerService.actualizarRetardoRed(this.retardoRed);
    this._markerService.actualizarPolarity(this.polarity);
    this._markerService.actualizarModo(this.modo);
    this._markerService.actualizarNegativeOn1(this.negativeOn1);
    this._markerService.actualizarNegativeOn2(this.negativeOn2);
    this._markerService.actualizarNegativeOn3(this.negativeOn3);
    this._markerService.actualizarNegativeOn4(this.negativeOn4);
    this._markerService.actualizarRetardoState(this.retardosState);
    this._markerService.actualizarEnableSFN(this.enableSFN);

    if(this.retardosState[0]){

            if(this.polarity[0] === "Adelanto (-)" ){
                this.retardos[0] = -Math.abs(this.retardos[0]);
                console.log("negativo", this.retardos[0]);
             }     
             if(this.polarity[0] === "Atraso (+)" ){
                    this.retardos[0] = Math.abs(this.retardos[0]);
                    console.log("positivo", this.retardos[0]);
                }
             
    this._markerService.sumaRetardoTx1(this.retardos[0], this.retardosState[0]);            
    }else{
         this.retardos[0] = 0;
        this._markerService.sumaRetardoTx1(this.retardos[0], this.retardosState[0]);}


    if(this.retardosState[1]){
        if(this.polarity[1] === "Adelanto (-)" ){
            this.retardos[1] = -Math.abs(this.retardos[1]);
            console.log("negativo", this.retardos[0]);
         }     
         if(this.polarity[1] === "Atraso (+)" ){
                this.retardos[1] = Math.abs(this.retardos[1]);
                console.log("positivo", this.retardos[1]);
            }
            this._markerService.sumaRetardoTx2(this.retardos[1], this.retardosState[1]);
    }else{
         this.retardos[1] = 0;
        this._markerService.sumaRetardoTx2(this.retardos[1], this.retardosState[1]);}

    if(this.retardosState[2]){
        if(this.polarity[2] === "Adelanto (-)" ){
            this.retardos[2] = -Math.abs(this.retardos[2]);
            console.log("negativo", this.retardos[2]);
         }     
         if(this.polarity[2] === "Atraso (+)" ){
                this.retardos[2] = Math.abs(this.retardos[2]);
                console.log("positivo", this.retardos[2]);
            }
            this._markerService.sumaRetardoTx3(this.retardos[2], this.retardosState[2]);
    }else{
         this.retardos[2] = 0;
        this._markerService.sumaRetardoTx3(this.retardos[2], this.retardosState[2]);}

    if(this.retardosState[3]){
        if(this.polarity[3] === "Adelanto (-)" ){
            this.retardos[3] = -Math.abs(this.retardos[3]);
            console.log("negativo", this.retardos[3]);
         }     
         if(this.polarity[3] === "Atraso (+)" ){
                this.retardos[3] = Math.abs(this.retardos[3]);
                console.log("positivo", this.retardos[3]);
            }
            this._markerService.sumaRetardoTx4(this.retardos[3], this.retardosState[3]);
    }else{
         this.retardos[3] = 0;
        this._markerService.sumaRetardoTx4(this.retardos[3], this.retardosState[3]);}

        
        

}

cambioTx1(){
    this._markerService.actualizarTra0(this.tra0);
}

cambioTx2(){
    this._markerService.actualizarTra1(this.tra1);
}

cambioTx3(){
    this._markerService.actualizarTra2(this.tra2);
}

cambioTx4(){
    this._markerService.actualizarTra3(this.tra3);
}

cambioRx1(){
    this._markerService.actualizarRecep(this.recep);
}

cambioRx2(){
    this._markerService.actualizarRecep2(this.recep2);
}

cambioObst(){
    this._markerService.actualizarObst(this.obst);
}

//ID MODULADORES EN RETARDO
mod(){
    this._markerService.actualizaridModuladores(this.idModulador);
  }

  // MODO EN RETARDO
  cambioModo(value, id){
      console.log(value,id)
    if(id === 'Tx1'){
        this.modo[0]= value;
    }else{}
    if(id === 'Tx2'){
        this.modo[1]= value;
    }else{}
    if(id === 'Tx3'){
        this.modo[2]= value;
    }else{}
    if(id === 'Tx4'){
        this.modo[3]= value;
    }else{}
    this._markerService.actualizarModo(this.modo);
    if( this.modo[0] === "Estatico" || this.modo[1] === "Estatico" || this.modo[2] === "Estatico" ||
    this.modo[3] === "Estatico"){this.staticAlert = true;}
    else{this.staticAlert = false;}
  }

    estancarTx1(){   
    if(this.estan[0] === true ){
        this.markers[0].arrastrable = false;
    }else{this.markers[0].arrastrable = true;}
    this._markerService.actualizarEstancados(this.estan);

  }
    estancarTx2(){
        
    if(this.estan[1] === true ){
        this.markers[1].arrastrable = false;
    }else{this.markers[1].arrastrable = true;}
    this._markerService.actualizarEstancados(this.estan)
    }
    estancarTx3(){
    if(this.estan[2] === true ){
        this.markers[4].arrastrable = false;
    }else{this.markers[4].arrastrable = true;}
    this._markerService.actualizarEstancados(this.estan)   
    }
    estancarTx4(){
    if(this.estan[3] === true ){
        this.markers[5].arrastrable = false;
    }else{this.markers[5].arrastrable = true;}
    this._markerService.actualizarEstancados(this.estan)       
    }   
    
    estancarRx1(){
    
    if(this.estan[4] === true ){
    this.markers[2].arrastrable = false;
    }else{this.markers[2].arrastrable = true;}
    this._markerService.actualizarEstancados(this.estan)
    }    

    estancarRx2(){
    if(this.estan[5] === true ){
    this.markers[6].arrastrable = false;
    }else{this.markers[6].arrastrable = true;}
    this._markerService.actualizarEstancados(this.estan)
    }    

    estancarObst(){
    if(this.estan[6] === true ){
        this.markers[3].arrastrable = false;
    }else{this.markers[3].arrastrable = true;}
    this._markerService.actualizarEstancados(this.estan)
    }    
}



  
