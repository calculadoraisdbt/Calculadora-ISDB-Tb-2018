import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CodificadorRoutingModule } from './codificador-routing.module';
import { CodificadorComponent } from './codificador.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    CodificadorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  declarations: [CodificadorComponent,
   

  ]
})
export class CodificadorModule { }
