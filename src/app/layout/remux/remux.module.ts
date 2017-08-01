import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RemuxRoutingModule } from './remux-routing.module';
import { RemuxComponent } from './remux.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    RemuxRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    
  ],
  declarations: [RemuxComponent,
   

  ]
})
export class RemuxModule { }
