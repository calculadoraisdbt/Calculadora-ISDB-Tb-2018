import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CodificadorComponent } from './codificador.component';

const routes: Routes = [
    { path: '', component: CodificadorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class CodificadorRoutingModule { }
