import { Component, inject, signal } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { Pet } from '../../models/pets';

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {

  ngOnInit(){
    this.leerMascotas();
  }

  private servicioPet = inject(PetService)

  //Signal indica que es una vaiable reactiva, es decir que Angular puede vigilar de manera automática
  mascotas = signal<Pet[]>([])

  leerMascotas(){
    this.servicioPet.getPets().subscribe(datos =>{
      this.mascotas.set(datos.data)
    })
  }
  
  adoptar(){
    alert('Gracias por adoptarme')
  }

}
