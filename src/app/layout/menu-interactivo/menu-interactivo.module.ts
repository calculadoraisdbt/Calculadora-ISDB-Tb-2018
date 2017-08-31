import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenuInteractivoRoutingModule } from './menu-interactivo-routing.module';
import { MenuInteractivoComponent } from './menu-interactivo.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    MenuInteractivoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    
  ],
  declarations: [MenuInteractivoComponent,
   

  ]
})
export class MenuInteractivoModule { }
