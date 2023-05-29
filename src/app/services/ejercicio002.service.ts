import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * Servicio del ejercicio 003 para trabajar con los datos de la API REST
 */
export class Ejercicio002Service {

  constructor(private http: HttpClient) { }

  url='https://jsonplaceholder.typicode.com/posts';

  mostrarTodos(){
    return this.http.get(this.url);
  }
}
