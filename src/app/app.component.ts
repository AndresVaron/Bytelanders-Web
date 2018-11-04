import {Component, OnInit} from '@angular/core';
import {AgmCoreModule} from '@agm/core';

import {Service} from './service';
import {Busqueda} from './Busqueda';
/** 
 * The app component. This component is the base of the BookStore
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    direccion: string;
    localidad: string;
    ciudad: string;

    busqueda: Busqueda;
    busquedas: Busqueda[];

    showPagina0: boolean;
    showPagina1: boolean;
    showPagina2: boolean;
    showPagina3: boolean;

    showPagina1C(): void {
        this.showPagina0 = false;
        this.showPagina1 = true;
        this.showPagina2 = false;
        this.showPagina3 = false;
    }

    showPagina2C(): void {
        this.service.getDirecciones()
            .subscribe(busquedas => {
                this.showPagina0 = false;
                this.showPagina1 = false;
                this.showPagina2 = true;
                this.showPagina3 = false;
                this.busquedas = busquedas;
                this.showPagina1C();
            });

    }

    showPagina3C(): void {
        this.showPagina0 = false;
        this.showPagina1 = false;
        this.showPagina2 = false;
        this.showPagina3 = true;
    }
    showPagina0C(): void {
        this.showPagina0 = true;
        this.showPagina1 = false;
        this.showPagina2 = false;
        this.showPagina3 = false;
    }

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "MoviApp";
        this.showPagina0 = true;
        this.showPagina1 = false;
        this.showPagina2 = false;
        this.showPagina3 = false
        this.busqueda = new Busqueda();

    }

    submitCalculo() {
        this.service.getDireccion(this.direccion, this.localidad, this.ciudad)
            .subscribe(busqueda => {
                this.busqueda = busqueda;
                this.showPagina1C();
            });
        this.showPagina1C();
    }

    /**
     * @ignore
     */
    constructor(private service: Service) {}

}





