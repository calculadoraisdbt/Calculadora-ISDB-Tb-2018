import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GlobalesRoutingModule } from './globales-routing.module';
import { GlobalesComponent } from './globales.component';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GlobalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [GlobalesComponent,
   

  ]
})
export class GlobalesModule { }
