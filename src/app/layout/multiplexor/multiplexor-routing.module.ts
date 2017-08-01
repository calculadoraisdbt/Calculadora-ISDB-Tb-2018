import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MultiplexorComponent } from './multiplexor.component';

const routes: Routes = [
    { path: '', component: MultiplexorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class MultiplexorRoutingModule { }
