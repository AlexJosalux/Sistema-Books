import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleConsultas } from './detalle-consultas';

describe('DetalleConsultas', () => {
  let component: DetalleConsultas;
  let fixture: ComponentFixture<DetalleConsultas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleConsultas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleConsultas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
