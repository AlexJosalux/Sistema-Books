import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosService } from '../../services/libros-service';
import { Libro } from '../../models/libro'; 
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-libros-page',
  imports: [CommonModule, RouterLink], 
  templateUrl: './libros-page.html',
  styleUrl: './libros-page.css',
})
export class LibrosPage implements OnInit {
  private librosService = inject(LibrosService);
  private cd = inject(ChangeDetectorRef);
  public listaLibros: Libro[] = [];

  ngOnInit() {
    this.obtenerLibros();
  }

  obtenerLibros() {
      this.librosService.getLibros().subscribe(res => {
      this.listaLibros = res;
      this.cd.detectChanges(); 
    });  
  }

  eliminar(id: string): void {
  if (confirm('¿Estás seguro de eliminar este libro?')) {
    this.librosService.deleteLibro(id).subscribe({
      next: () => {
        alert('Eliminado con éxito');
        this.obtenerLibros(); 
      },
      error: (err) => {
        console.error('Error al eliminar:', err);
        alert('No se pudo eliminar el libro');
      }
    });
  }
  }
}