import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RemultiplexorRoutingModule } from './remultiplexor-routing.module';
import { RemultiplexorComponent } from './remultiplexor.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from 'app/layout/bs-component/components';

@NgModule({
  imports: [
    CommonModule,
    RemultiplexorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    
  ],
  declarations: [RemultiplexorComponent,TabsComponent,
   

  ]
})
export class RemultiplexorModule { }
