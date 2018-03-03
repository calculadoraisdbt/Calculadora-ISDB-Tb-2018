import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModuladorRoutingModule } from './modulador-routing.module';
import { ModuladorComponent } from './modulador.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    ModuladorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    
  ],
  declarations: [ModuladorComponent,
   

  ]
})
export class ModuladorModule { }
