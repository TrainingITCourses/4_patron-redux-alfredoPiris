import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaContainerComponent } from './busqueda-container.component';

describe('BusquedaContainerComponent', () => {
  let component: BusquedaContainerComponent;
  let fixture: ComponentFixture<BusquedaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
