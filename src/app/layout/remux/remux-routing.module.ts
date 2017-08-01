import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RemuxComponent } from './remux.component';

const routes: Routes = [
    { path: '', component: RemuxComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class RemuxRoutingModule { }
