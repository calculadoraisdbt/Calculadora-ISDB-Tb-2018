import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'menu-interactivo', loadChildren: './menu-interactivo/menu-interactivo.module#MenuInteractivoModule' },
            { path: 'SFN', loadChildren: './sfn/sfn.module#SfnModule' },
            { path: 'remux', loadChildren: './remultiplexor/remultiplexor.module#RemultiplexorModule' },
            { path: 'codificador', loadChildren: './codificador/codificador.module#CodificadorModule' },
            { path: 'modulador', loadChildren: './modulador/modulador.module#ModuladorModule' },
            { path: 'multiplexor', loadChildren: './multiplexor/multiplexor.module#MultiplexorModule' },
            { path: 'creditos', loadChildren: './creditos/creditos.module#CreditosModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
