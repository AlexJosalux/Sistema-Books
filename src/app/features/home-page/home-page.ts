import { Component } from '@angular/core';
import { HeroHome } from '../../shared/hero-home/hero-home';
import { Servicios } from "../../shared/servicios/servicios";
import { PanelPacientes } from "../../shared/panel-pacientes/panel-pacientes";

@Component({
  selector: 'app-home-page',
  imports: [HeroHome, Servicios, PanelPacientes],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
