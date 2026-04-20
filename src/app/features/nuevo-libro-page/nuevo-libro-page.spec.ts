import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoLibroPage } from './nuevo-libro-page';

describe('NuevoLibroPage', () => {
  let component: NuevoLibroPage;
  let fixture: ComponentFixture<NuevoLibroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoLibroPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoLibroPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
