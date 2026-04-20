import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  year: number = new Date().getFullYear();
  enlaces = [
    { texto: 'Inicio', link: '/' },
    { texto: 'Catálogo de Libros', link: '/libros' },
    { texto: 'Registrar Nuevo', link: '/nuevo-libro' },
    { texto: 'Mi Cuenta', link: '/login' },
    { texto: 'Soporte', link: '#' },
  ];
}