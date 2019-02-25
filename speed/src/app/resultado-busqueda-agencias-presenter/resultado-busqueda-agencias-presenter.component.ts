import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado-busqueda-agencias-presenter',
  templateUrl: './resultado-busqueda-agencias-presenter.component.html',
  styleUrls: ['./resultado-busqueda-agencias-presenter.component.css']
})
export class ResultadoBusquedaAgenciasPresenterComponent implements OnInit {
  @Input() public resultado;
  constructor() { }

  ngOnInit() {
  }

}
