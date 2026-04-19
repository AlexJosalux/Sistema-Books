import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

  subtitulo = "Cuidamos a los que más qiueres con servicios de alta calidad";

  servicioSeleccionado= ""

  //Arreglo de servicios
  servicios = [
    {
    id: 1,
    nombre: "Consulta General",
    descripcion: "Evalucación completa del paciente",
    imagen: "https://purina.com.ec/sites/default/files/2022-10/purina-consulta-veterinaria-para-mascotas-lo-que-debes-saber.jpg",
    activo: true
  },
  {    
    id: 2,
    nombre: "Peluquería",
    descripcion: "El mejor estilo para tu mascota",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAo4tEvYQWU517Njpy-0NRnY_sieYKaIReA&s",
    activo: true
  },
  {    
    id: 3,
    nombre: "Emergencias",
    descripcion: "Servicio de ambulancía al instante",
    imagen: "https://s2.ppllstatics.com/lasprovincias/www/multimedia/201808/11/media/cortadas/127892335--624x350.jpg",
    activo: false
  }
]

//Arreglo para filtrar los servicios
serviciosFiltrados = this.servicios;
  seleccionar(nombre: string){
    this.servicioSeleccionado= nombre; 
  }

  busqueda(event : Event){
    const valor = (event.target as HTMLInputElement).value;
    this.subtitulo=`Resultado para: ${valor}`;
    this.serviciosFiltrados = this.servicios.filter(s=>s.nombre.toLowerCase().includes(valor.toLowerCase()))
  }

}
