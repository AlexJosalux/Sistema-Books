import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private http = inject(HttpClient);

  private API_USUARIOS = 'https://minibooks-efa1c-default-rtdb.firebaseio.com';

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<{ [key: string]: Usuario }>(`${this.API_USUARIOS}/users.json`).pipe(
      map(response => {
        if (!response) {
          return [];
        }
        return Object.keys(response).map(id => ({
          ...response[id],
          id: id 
        }));
      })
    );
  }

  postUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.API_USUARIOS}/users.json`, usuario);
  }

  putUsuario(id: string, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API_USUARIOS}/users/${id}.json`, usuario);
  }


  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.API_USUARIOS}/users/${id}.json`);
  }
}