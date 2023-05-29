import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class Ejercicio003Service {

  url = 'http://localhost:3000/empleados';

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(this.url);
  }

  recuperarUno(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

}
