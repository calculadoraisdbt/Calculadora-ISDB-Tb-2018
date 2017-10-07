import { Component, OnInit } from '@angular/core';
import { RemuxService } from 'app/Services/remux.service';

@Component({
  selector: 'app-remux',
  templateUrl: './remux.component.html',
  styleUrls: ['./remux.component.scss'],
  providers: [RemuxService ]
})
export class RemuxComponent implements OnInit {
  idModuladores : any [] ;
  retardoBTS : any [] ;
  retardoDeTransmisor : any [] ;

  constructor(private _remuxService:RemuxService) {
    this.idModuladores = this._remuxService.obteneridModuladores();
    this.retardoBTS = this._remuxService.obtenerRetardoBTS();
    this.retardoDeTransmisor = this._remuxService.obtenerRetardoDeTransmisor();
   }

  ngOnInit() {
  }

mod(){
  this._remuxService.actualizaridModuladores(this.idModuladores);
}

RetardoBTS(){
    this._remuxService.actualizarRetardoBTS(this.retardoBTS);
  }


  RetardoDeTransmisor(){
    
      this._remuxService.actualizarRetardoDeTransmisor(this.retardoDeTransmisor);
    }
  }