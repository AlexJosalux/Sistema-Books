import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  year: number = new Date().getFullYear();

  enlaces= [
    {texto: 'Home', link: ''},
    {texto: 'Consultas', link: '#'},
    {texto: 'Servicios', link: '#'},
    {texto: 'Mascotas', link: '#'},
    {texto: 'Contacto', link: '#'},
  ]

}
