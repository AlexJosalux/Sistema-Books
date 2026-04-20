import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, CommonModule], 
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  public servicioAuth = inject(AuthService);
  private router = inject(Router);

  isLoggedIn = this.servicioAuth.sesionInciada;

  cerrarSesion() {
    this.servicioAuth.logout();
    alert('Sesión cerrada');

    this.router.navigate(['/login']);
  }
}
