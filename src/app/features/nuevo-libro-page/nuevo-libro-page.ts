import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LibrosService } from '../../services/libros-service';

@Component({
  selector: 'app-nuevo-libro-page',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './nuevo-libro-page.html',
  styleUrl: './nuevo-libro-page.css',
})
export class NuevoLibroPage {
  private librosService = inject(LibrosService);
  private router = inject(Router);
  public cargando: boolean = false;

  public formularioLibro = new FormGroup({
    titulo: new FormControl('', [
      Validators.required, 
      Validators.minLength(3)
    ]),
    autor: new FormControl('', [
      Validators.required
    ]),
    anio: new FormControl(null, [
      Validators.required,
      Validators.min(1901),
      Validators.pattern('^[0-9]*$') 
    ]),
    precio: new FormControl(0, [
      Validators.required, 
      Validators.min(0.1)
    ]),
    descripcion: new FormControl('')
  });

  canDeactivate(): boolean {
    if (this.formularioLibro.dirty) {
      return confirm('Tienes cambios sin guardar. ¿Estás seguro de que quieres salir?');
    }
    return true; 
  }

  guardarLibro() {
    if (this.formularioLibro.valid) {
      this.cargando = true; 
      this.librosService.postLibro(this.formularioLibro.value).subscribe({
        next: () => {
          this.formularioLibro.markAsPristine(); 
          this.router.navigate(['/libros']);  
        },
        error: (err) => {
          console.error(err);
          this.cargando = false;
        }
      });
    }
  }
}