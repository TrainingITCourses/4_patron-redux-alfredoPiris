import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busqueda-agencias-presenter',
  templateUrl: './busqueda-agencias-presenter.component.html',
  styleUrls: ['./busqueda-agencias-presenter.component.css']
})
export class BusquedaAgenciasPresenterComponent implements OnInit {
  @Output() public busqueda = new EventEmitter();
  @Output() public busquedaA = new EventEmitter();
  @Output() public busquedaM = new EventEmitter();
  @Output() public busquedaE = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public onKey (event: any) {
    this.busqueda.next(event.target.value.toLowerCase());
  }

  public busquedaAgencias (event: any) {
    this.busquedaA.next(event);
  }

  public busquedaMisionEstado (event: any) {
    this.busquedaM.next(event);
  }

  public busquedaVueloEstado (event: any) {
    this.busquedaE.next(event);
  }

}
