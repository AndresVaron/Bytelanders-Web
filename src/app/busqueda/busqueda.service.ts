import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


import {environment} from '../../environments/environment';
import {Busqueda} from './Busqueda';
const API_URL = environment.apiURL;
const busquedas = '/direccionerrada';


/**
* The service provider for everything related to authors
*/
@Injectable()
export class BusquedaService {

    constructor(private http: HttpClient) {}

    /**
    * Creates an author
    * @param author The new author
    * @returns The confirmation that the author was created
    */
    createAuthor(busqueda: string, localidad: string, ciudad: string): Observable<Busqueda> {
        return this.http.get<Busqueda>(API_URL + busquedas + '/' + busqueda + '/' + localidad + '/' + ciudad);
    }

}
