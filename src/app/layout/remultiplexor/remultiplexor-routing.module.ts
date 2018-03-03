import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RemultiplexorComponent } from './remultiplexor.component';

const routes: Routes = [
    { path: '', component: RemultiplexorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class RemultiplexorRoutingModule { }
