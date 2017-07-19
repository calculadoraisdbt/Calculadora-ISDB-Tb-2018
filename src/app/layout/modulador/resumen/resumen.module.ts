import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ResumenRoutingModule } from './resumen-routing.module';
import { ResumenComponent } from './resumen.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from 'app/layout/bs-component/components';

@NgModule({
  imports: [
    CommonModule,
    ResumenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    
  ],
  declarations: [ResumenComponent,TabsComponent,
   

  ]
})
export class ResumenModule { }
