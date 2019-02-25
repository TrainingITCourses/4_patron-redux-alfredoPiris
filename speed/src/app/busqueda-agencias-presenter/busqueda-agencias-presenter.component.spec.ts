import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaAgenciasPresenterComponent } from './busqueda-agencias-presenter.component';

describe('BusquedaAgenciasPresenterComponent', () => {
  let component: BusquedaAgenciasPresenterComponent;
  let fixture: ComponentFixture<BusquedaAgenciasPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaAgenciasPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaAgenciasPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
