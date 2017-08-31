import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'menu-interactivo', loadChildren: './menu-interactivo/menu-interactivo.module#MenuInteractivoModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'modulador', loadChildren: './modulador/resumen/resumen.module#ResumenModule' },
            { path: 'codificador', loadChildren: './codificador/codificador.module#CodificadorModule' },
            { path: 'remux', loadChildren: './remux/remux.module#RemuxModule' },
            { path: 'multiplexor', loadChildren: './multiplexor/multiplexor.module#MultiplexorModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
