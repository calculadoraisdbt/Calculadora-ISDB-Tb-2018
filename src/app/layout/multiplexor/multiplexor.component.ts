import { Component, OnInit } from '@angular/core';
import { MultiplexorService } from 'app/Services/multiplexor.service';

@Component({
  selector: 'app-multiplexor',
  templateUrl: './multiplexor.component.html',
  styleUrls: ['./multiplexor.component.scss'],
  providers: [MultiplexorService ]
})
export class MultiplexorComponent implements OnInit {
  //ASI 1
  ASI1Input : any [] ;
  ASI1Layer : any [] ;
  ASI1Output : any [] ;
  ASI1Enable : any [] ;
  duplicate1 ;
  //ASI 2
  ASI2Input : any [] ;
  ASI2Layer : any [] ;
  ASI2Output : any [] ;
  ASI2Enable : any [] ;
  duplicate2 ;
  //ASI 3
  ASI3Input : any [] ;
  ASI3Layer : any [] ;
  ASI3Output : any [] ;
  ASI3Enable : any [] ;
  duplicate3 ;

  //TABLES

  TableLayer : any [] ;
  TablePmtPid : any [] ;
  TableEnable : any [] ;

  
  constructor(private _multiplexorService:MultiplexorService ) {
    //ASI 1
    this.ASI1Input = this._multiplexorService.obtenerASI1Input();
    this.ASI1Layer = this._multiplexorService.obtenerASI1Layer();
    this.ASI1Output = this._multiplexorService.obtenerASI1Output();
    this.ASI1Enable = this._multiplexorService.obtenerASI1Enable();
    //ASI 2
    this.ASI2Input = this._multiplexorService.obtenerASI2Input();
    this.ASI2Layer = this._multiplexorService.obtenerASI2Layer();
    this.ASI2Output = this._multiplexorService.obtenerASI2Output();
    this.ASI2Enable = this._multiplexorService.obtenerASI2Enable();
    //ASI 3
    this.ASI3Input = this._multiplexorService.obtenerASI3Input();
    this.ASI3Layer = this._multiplexorService.obtenerASI3Layer();
    this.ASI3Output = this._multiplexorService.obtenerASI3Output();
    this.ASI3Enable = this._multiplexorService.obtenerASI3Enable();
    //TABLAS
    this.TableLayer = this._multiplexorService.obtenerTableLayer();
    this.TablePmtPid = this._multiplexorService.obtenerTablePmtPid();
    this.TableEnable = this._multiplexorService.obtenerTableEnable();
   }

  ngOnInit() {
  }
  //ASI 1
  updateASI1(){
      this._multiplexorService.actualizarASI1Input(this.ASI1Input);
      this._multiplexorService.actualizarASI1Layer(this.ASI1Layer);
      this._multiplexorService.actualizarASI1Output(this.ASI1Output);
      this._multiplexorService.actualizarASI1Enable(this.ASI1Enable);
      this.pidOut1();
      

  }
//ASI 2
  updateASI2(){
    this._multiplexorService.actualizarASI2Input(this.ASI2Input);
    this._multiplexorService.actualizarASI2Layer(this.ASI2Layer);
    this._multiplexorService.actualizarASI2Output(this.ASI2Output);
    this._multiplexorService.actualizarASI2Enable(this.ASI2Enable);
    this.pidOut2();

}
 //ASI 3
updateASI3(){
  this._multiplexorService.actualizarASI3Input(this.ASI3Input);
  this._multiplexorService.actualizarASI3Layer(this.ASI3Layer);
  this._multiplexorService.actualizarASI3Output(this.ASI3Output);
  this._multiplexorService.actualizarASI3Enable(this.ASI3Enable);
  this.pidOut3();

}

//ASI 3
updateTables(){
  this._multiplexorService.actualizarTableLayer(this.TableLayer);
  this._multiplexorService.actualizarTablePmtPid(this.TablePmtPid);
  this._multiplexorService.actualizarTableEnable(this.TableEnable);


}

//PID OUT MULTIPLEXOR
pidOut1(){
 var habilitados1 : any = [] ;
  for(var i= 0; i<10;i++){
      
    if(this.ASI1Enable[i]=== true){
        habilitados1.push(this.ASI1Output[i]) ;
    }else{}
  }
  for (var j=0;j<habilitados1.length;j++)
  for (var k=j+1;k<habilitados1.length;k++)
    if (k!== j && habilitados1[k] === habilitados1[j] ){
       this.duplicate1=true;
    }
    else{ this.duplicate1=false;}  
  }
 
  pidOut2(){
    var habilitados2 : any = [] ;
     for(var i= 0; i<10;i++){
         
       if(this.ASI2Enable[i]=== true){
           habilitados2.push(this.ASI2Output[i]) ;
       }else{}
     }
     for (var j=0;j<habilitados2.length;j++)
     for (var k=j+1;k<habilitados2.length;k++)
       if (k!== j && habilitados2[k] === habilitados2[j] ){
          this.duplicate2=true;
       }
       else{ this.duplicate2=false;}  
     }

     pidOut3(){
      var habilitados3 : any = [] ;
       for(var i= 0; i<10;i++){
           
         if(this.ASI3Enable[i]=== true){
             habilitados3.push(this.ASI3Output[i]) ;
         }else{}
       }
       for (var j=0;j<habilitados3.length;j++)
       for (var k=j+1;k<habilitados3.length;k++)
         if (k!== j && habilitados3[k] === habilitados3[j] ){
            this.duplicate3=true;
         }
         else{ this.duplicate3=false;}  
       }
}
