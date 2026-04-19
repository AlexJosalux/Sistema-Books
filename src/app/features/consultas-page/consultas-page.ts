import { Component } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { PanelPacientes } from "../../shared/panel-pacientes/panel-pacientes";
import { DetalleConsultas } from "../../shared/detalle-consultas/detalle-consultas";
import { HeroHome } from "../../shared/hero-home/hero-home";

@Component({
  selector: 'app-consultas-page',
  imports: [PanelPacientes, DetalleConsultas, HeroHome],
  templateUrl: './consultas-page.html',
  styleUrl: './consultas-page.css',
})
export class ConsultasPage {

  mascotas: Mascota[]=[
    {id: 1, nombre: 'Ramón', especie:'Perro', historial:'Vacunas al día'},
    {id: 2, nombre: 'Rafael', especie:'Tortuga', historial:'Vacunas al día'},
    {id: 3, nombre: 'Florencia', especie:'Gato', historial:'Alta recuperada'}
  ]

  mascotaSeleccionada: Mascota | null = null; 

  //variable mensaje aviso
  //Gestionar le envento que envia el componente hijo
  mensajeAviso: string='';

  //Función que maneja el evento click sobre la lista de mascotas -Ver ficha
  verDetalles(mascota: Mascota){
    this.mascotaSeleccionada = mascota;
  }

  //Función que manehje el evento enviado desde el cpmponente hijo
  procesarAviso(mensaje:string){
    this.mensajeAviso = mensaje;
  }
}
