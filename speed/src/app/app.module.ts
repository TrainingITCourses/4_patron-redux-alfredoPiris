import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaContainerComponent } from './busqueda-container/busqueda-container.component';
import { BusquedaAgenciasPresenterComponent } from './busqueda-agencias-presenter/busqueda-agencias-presenter.component';
import { ResultadoBusquedaAgenciasPresenterComponent } from './resultado-busqueda-agencias-presenter/resultado-busqueda-agencias-presenter.component';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaContainerComponent,
    BusquedaAgenciasPresenterComponent,
    ResultadoBusquedaAgenciasPresenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
