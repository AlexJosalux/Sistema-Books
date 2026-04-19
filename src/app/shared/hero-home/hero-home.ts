import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-home',
  imports: [],
  templateUrl: './hero-home.html',
  styleUrl: './hero-home.css',
})
export class HeroHome {

  @Input() titulo!: string;
  @Input() descripcion!: string;
  @Input() imagen!: string;
  @Input() textBoton!: string;

}
