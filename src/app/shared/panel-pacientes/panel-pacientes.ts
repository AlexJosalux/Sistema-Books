import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel-pacientes',
  imports: [CommonModule, FormsModule],
  templateUrl: './panel-pacientes.html',
  styleUrl: './panel-pacientes.css',
})
export class PanelPacientes {
  nombreFiltro: string = "";

  pacientes = [
    {nombre: 'Ramón', especie: 'Perro', urgencia: 'alta', recuperacion:85},
    {nombre: 'Raquel', especie: 'Gato', urgencia: 'media', recuperacion:40},
    {nombre: 'Rafael', especie: 'Tortuga', urgencia: 'baja', recuperacion:10},
    {nombre: 'Nacho', especie: 'Gallo', urgencia: 'alta', recuperacion:90}
  ]
    

}
