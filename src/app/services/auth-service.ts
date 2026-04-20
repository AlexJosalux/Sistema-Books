import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'; 
import { UsuarioService } from './usuario-service';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private router = inject(Router);
  private auth = getAuth();
  private usuarioService = inject(UsuarioService);

  sesionInciada = signal<boolean>(localStorage.getItem('sesion') === 'true');
  rolActual = signal<string | null>(localStorage.getItem('rol'));

  login(email: string, password: string): Observable<boolean> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map(userCredential => {
        if (userCredential.user) {

          localStorage.setItem('sesion', 'true');
          this.sesionInciada.set(true);

          this.router.navigate(['/libros']); 
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    signOut(this.auth).then(() => {
      localStorage.removeItem('sesion');
      localStorage.removeItem('user');
      localStorage.removeItem('rol');
      this.sesionInciada.set(false);
      this.rolActual.set(null);
      this.router.navigate(['/login']);
    });
  }
}