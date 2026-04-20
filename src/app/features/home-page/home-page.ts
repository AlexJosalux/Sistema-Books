import { Component } from '@angular/core';
import { HeroHome } from '../../shared/hero-home/hero-home';


@Component({
  selector: 'app-home-page',
  imports: [HeroHome],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
