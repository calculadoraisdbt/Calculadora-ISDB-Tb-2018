import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'menu-interactivo', loadChildren: './menu-interactivo/menu-interactivo.module#MenuInteractivoModule' },
            { path: 'SFN', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'remux', loadChildren: './modulador/resumen/resumen.module#ResumenModule' },
            { path: 'codificador', loadChildren: './codificador/codificador.module#CodificadorModule' },
            { path: 'modulador', loadChildren: './remux/remux.module#RemuxModule' },
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
