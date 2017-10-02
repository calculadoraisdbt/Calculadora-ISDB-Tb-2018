import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MenuInteractivoComponent } from './menu-interactivo.component';

const routes: Routes = [
    { path: '', component: MenuInteractivoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class MenuInteractivoRoutingModule {


 
 }
