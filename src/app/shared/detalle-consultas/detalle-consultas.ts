import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-detalle-consultas',
  imports: [],
  templateUrl: './detalle-consultas.html',
  styleUrl: './detalle-consultas.css',
})
export class DetalleConsultas {

  //Componente Hijo

  @Input() mascota?: Mascota

  //Enviar un evento al compenente padre

  @Output() notificarAccion = new EventEmitter<string>();

  //Funcion qe determine lo que hace el evento
  avisarIngreso(): void{
    if(this.mascota){
      this.notificarAccion.emit(
        `El paciente ${this.mascota.nombre} ha ingresado a consulta`
      )    }
  }

}

