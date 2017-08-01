import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MultiplexorRoutingModule } from './multiplexor-routing.module';
import { MultiplexorComponent } from './multiplexor.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    MultiplexorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    
  ],
  declarations: [MultiplexorComponent,
   

  ]
})
export class MultiplexorModule { }
