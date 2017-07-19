import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GlobalesComponent } from './globales.component';

const routes: Routes = [
    { path: '', component: GlobalesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class GlobalesRoutingModule { }