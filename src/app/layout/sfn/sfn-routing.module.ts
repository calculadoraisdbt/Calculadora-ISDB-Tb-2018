import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SfnComponent } from './sfn.component';

const routes: Routes = [
    { path: '', component: SfnComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class SfnRoutingModule { }
