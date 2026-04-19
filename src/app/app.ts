import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './shared/nav-bar/nav-bar';
import { HomePage } from './features/home-page/home-page';
import { Footer } from "./shared/footer/footer";
import { ConsultasPage } from './features/consultas-page/consultas-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, HomePage, Footer, ConsultasPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('veterinaria');
}
