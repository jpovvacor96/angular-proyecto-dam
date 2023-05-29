import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruta } from '../interfaces/Fruta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ejercicio004Service {

  constructor(private http: HttpClient) { }

  url='http://localhost:3000/frutas';

  recuperarFrutas(): Observable<Fruta[]>{
    return this.http.get<Fruta[]>(`${this.url}?_sort=id&_order=asc`);
  }

  insertar(fruta: Fruta): Observable<Fruta>{
    return this.http.post<Fruta>(this.url, fruta);
  }

  modificar(id:number, fruta:Fruta): Observable<Fruta>{
    return this.http.put<Fruta>(`${this.url}/${id}`, fruta);
  }

  eliminar(id:number){
    return this.http.delete<Fruta>(`${this.url}/${id}`);
  }

  //Para alta usar POST y el tipo fruta normal
}
