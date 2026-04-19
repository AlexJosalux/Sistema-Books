import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasPage } from './mascotas-page';

describe('MascotasPage', () => {
  let component: MascotasPage;
  let fixture: ComponentFixture<MascotasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MascotasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotasPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
