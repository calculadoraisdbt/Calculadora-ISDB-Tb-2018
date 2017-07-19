import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';


import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BlankPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB5xpNuUxAIDycwpjFDdU9e3bICgrDG7Jw',
      libraries: ['geometry']
    }),
    FormsModule,
  ],
  declarations: [BlankPageComponent,

  ]
})
export class BlankPageModule { }
