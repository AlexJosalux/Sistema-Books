import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { UsuarioService } from './usuario-service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private router = inject(Router)

  private usuario: User | null = null;
  private auth = getAuth();

  private servicioUsuario = inject(UsuarioService)
  sesionInciada = signal<boolean>(localStorage.getItem('sesion')==='true')
  rolActual = signal<string | null>(localStorage.getItem('rol'));

  login(email: string, password: string):Observable<boolean>{
    return this.servicioUsuario.getUsuarios().pipe(
      map(usuarios => {
        const usuarioCoincide = usuarios.find(u=> u.email=== email && u.password === password);
        if (usuarioCoincide){
          localStorage.setItem('sesion', 'true')
          localStorage.setItem('user', JSON.stringify(usuarioCoincide));
          localStorage.setItem('rol', usuarioCoincide.rol)
          this.rolActual.set(usuarioCoincide.rol)
          this.sesionInciada.set(true)
          return true;
        }
        return false;
      })
    )

    //Metodo de dfirebase auth para
    //signInWithEmailAndPassword(this.auth, email, password)
    //ejecutar cuando el incioi de sesion es exitoso
    //.then(usuarioAutenticado => {
      //this.router.navigate(['usuarios'])
      //this.usuario = usuarioAutenticado.user})
    //Ejecutar cuando falla el inicio de sesion
    //.catch(err => this.router.navigate(['login']));
  }

  logout(){
    localStorage.removeItem('sesion');
    localStorage.removeItem('user');
    localStorage.removeItem('rol')
    this.sesionInciada.set(false);
    this.rolActual.set(null)
  }

  
}
