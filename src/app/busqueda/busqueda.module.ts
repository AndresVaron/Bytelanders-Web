import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusquedaService} from './busqueda.service';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {BusquedaParamsComponents} from './busqueda-params/busqueda-params.component'

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        BusquedaParamsComponents
    ],
    providers: [BusquedaService],
    bootstrap: [BusquedaParamsComponents]
})
export class BusquedaModule {}
