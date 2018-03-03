import { Component, OnInit } from '@angular/core';
import { RemuxService } from 'app/Services/remux.service';

@Component({
  selector: 'app-modulador',
  templateUrl: './modulador.component.html',
  styleUrls: ['./modulador.component.scss'],
  providers: [RemuxService ]
})
export class ModuladorComponent implements OnInit {
  idModuladores : any [] ;
  retardoBTS : any [] ;
  retardoDeTransmisor : any [] ;
  sumaRetardo = [] ;
  nombreEstacion : any [] ;

  constructor(private _remuxService:RemuxService) {
    this.nombreEstacion = this._remuxService.obtenerNombreEstacion();
    this.idModuladores = this._remuxService.obteneridModuladores();
    this.retardoBTS = this._remuxService.obtenerRetardoBTS();
    this.retardoDeTransmisor = this._remuxService.obtenerRetardoDeTransmisor();
    
   }

  ngOnInit() {
    this.nombreEstacion = this._remuxService.obtenerNombreEstacion();
    this.sumaTotal();
  }

mod(){
  this._remuxService.actualizaridModuladores(this.idModuladores);
}

RetardoBTS(){
    this._remuxService.actualizarRetardoBTS(this.retardoBTS);
    this.sumaTotal();
  }


  RetardoDeTransmisor(){
    
      this._remuxService.actualizarRetardoDeTransmisor(this.retardoDeTransmisor);
      this.sumaTotal();
    }

  sumaTotal(){

    this.sumaRetardo[0] = +this.retardoBTS[0] + +this.retardoDeTransmisor[0];
    this.sumaRetardo[1] = +this.retardoBTS[1] + +this.retardoDeTransmisor[1];
    this.sumaRetardo[2] = +this.retardoBTS[2] + +this.retardoDeTransmisor[2];
    this.sumaRetardo[3] = +this.retardoBTS[3] + +this.retardoDeTransmisor[3];
  }

  cambioNombre(){

    this._remuxService.actualizarNombreEstacion(this.nombreEstacion);
  }
  }