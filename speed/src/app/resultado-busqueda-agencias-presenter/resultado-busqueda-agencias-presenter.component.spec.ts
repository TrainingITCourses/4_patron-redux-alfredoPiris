import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBusquedaAgenciasPresenterComponent } from './resultado-busqueda-agencias-presenter.component';

describe('ResultadoBusquedaAgenciasPresenterComponent', () => {
  let component: ResultadoBusquedaAgenciasPresenterComponent;
  let fixture: ComponentFixture<ResultadoBusquedaAgenciasPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoBusquedaAgenciasPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoBusquedaAgenciasPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
