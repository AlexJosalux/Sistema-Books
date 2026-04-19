import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPacientes } from './panel-pacientes';

describe('PanelPacientes', () => {
  let component: PanelPacientes;
  let fixture: ComponentFixture<PanelPacientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelPacientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelPacientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
