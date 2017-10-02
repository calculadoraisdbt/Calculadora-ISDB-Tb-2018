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

  constructor(private _remuxService:RemuxService) {
    this.idModuladores = this._remuxService.obteneridModuladores();
   }

  ngOnInit() {
  }
mod1(){

  this._remuxService.actualizaridModuladores(this.idModuladores);
}
mod2(){
  
    this._remuxService.actualizaridModuladores(this.idModuladores);
}
mod3(){
    
      this._remuxService.actualizaridModuladores(this.idModuladores);
}
mod4(){
      
        this._remuxService.actualizaridModuladores(this.idModuladores);
}  
}
