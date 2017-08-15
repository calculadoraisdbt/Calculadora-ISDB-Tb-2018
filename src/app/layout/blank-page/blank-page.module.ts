import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    BlankPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB5xpNuUxAIDycwpjFDdU9e3bICgrDG7Jw',
      libraries: ['geometry']
    }),
    FormsModule,
     NgbModule.forRoot(),
  ],
  declarations: [BlankPageComponent,

  ]
})
export class BlankPageModule { }
