import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  private http = inject(HttpClient);

  private API_URL = 'https://minibooks-efa1c-default-rtdb.firebaseio.com';

  getLibros(): Observable<Libro[]> {
    return this.http.get<{ [key: string]: Libro }>(`${this.API_URL}/libros.json`).pipe(
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

  postLibro(libro: any): Observable<any> {
    return this.http.post(`${this.API_URL}/libros.json`, libro);
  }

  putLibro(id: string, libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(`${this.API_URL}/libros/${id}.json`, libro);
  }

  deleteLibro(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/libros/${id}.json`);
  }
  private actualizarListaSource = new Subject<void>();
  actualizarLista$ = this.actualizarListaSource.asObservable();

  dispararActualizacion() {
    this.actualizarListaSource.next();
  }
} 