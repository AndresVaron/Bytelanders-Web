import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BusquedaParamsComponents} from '../busqueda/busqueda-params/busqueda-params.component';

const routes: Routes = [
    {
        path: 'busqueda',
        component: BusquedaParamsComponents
    },
    {
        path: 'home',
        component: BusquedaParamsComponents
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
