import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CreditosRoutingModule } from './creditos-routing.module';
import { CreditosComponent } from './creditos.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    CreditosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  declarations: [CreditosComponent,
   

  ]
})
export class CreditosModule { }
