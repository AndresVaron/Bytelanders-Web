import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Busqueda} from './Busqueda';
import {Actualizacion} from './Actualizacion';

/**
* The service provider for everything related to books
*/
@Injectable()
export class Service {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    getDireccion(direccion: string, localidad: string, ciudad: string): Observable<Busqueda> {
        direccion = direccion.replace(" ", "_");
        direccion = direccion.replace("#", "*");
        return this.http.get<Busqueda>("http://157.253.238.75/bytelanders/api/direccionerrada/" + direccion + "/" + localidad + "/" + ciudad);
    }


    getDirecciones(): Observable<Busqueda[]> {
        return this.http.get<Busqueda[]>("http://157.253.238.75/bytelanders/api/direccionerrada");
    }

    getActualizaciones(): Observable<Actualizacion[]> {
        return this.http.get<Actualizacion[]>("http://157.253.238.75/bytelanders/api/geoactualizacion");
    }
}
