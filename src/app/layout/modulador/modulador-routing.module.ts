import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ModuladorComponent } from './modulador.component';

const routes: Routes = [
    { path: '', component: ModuladorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class ModuladorRoutingModule { }
