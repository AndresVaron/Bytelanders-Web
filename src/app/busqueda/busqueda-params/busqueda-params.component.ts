import {Component, OnInit, NgModule, ViewChild} from '@angular/core';

import {BusquedaService} from '../busqueda.service';
import {Busqueda} from '../Busqueda';
/**
* The author's list component
*/
@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda-params.component.html',
    styleUrls: ['./busqueda-params.component.css']
})
export class BusquedaParamsComponents implements OnInit {

    constructor(
        private busquedaService: BusquedaService
    ) {}

    busqueda: Busqueda;

    ngOnInit() {
        this.busqueda = new Busqueda();
    }

}
