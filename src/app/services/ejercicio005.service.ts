import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruta } from '../interfaces/fruta';

@Injectable({
  providedIn: 'root'
})
export class Ejercicio005Service {

  constructor(private http: HttpClient) { }

  url='http://localhost:3000/frutas';

  recuperarFrutas(){
    return this.http.get<Fruta[]>(this.url);
  }

  //Para alta usar POST y el tipo fruta normal
}
