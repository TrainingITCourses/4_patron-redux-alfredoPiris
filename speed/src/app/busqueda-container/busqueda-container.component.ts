import { Component, OnInit} from '@angular/core';
import { StoreService, SearchAgencias, SearchMisiones, SearchEstados } from '../store.service';

@Component({
  selector: 'app-busqueda-container',
  templateUrl: './busqueda-container.component.html',
  styleUrls: ['./busqueda-container.component.css']
})
export class BusquedaContainerComponent implements OnInit {
  public resultado;
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.resultado = [];
    this.store.select$().subscribe(value => (this.resultado = value));
  }

  metodoBusqueda (busqueda: any) {
  }

  metodoBusquedaAgencias (busqueda: any) {
    this.store.dispatch(new SearchAgencias(busqueda));
  }

  metodoBusquedaMisiones (busqueda: any, keyUp: any = false) {
    this.store.dispatch(new SearchMisiones(busqueda));
  }

  metodoBusquedaEstados (busqueda: any, keyUp: any = false) {
    this.store.dispatch(new SearchEstados(busqueda));

  }

  metodoUnionArray () {
  }
}
