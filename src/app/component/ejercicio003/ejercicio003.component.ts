import { Ejercicio003Service } from './../../services/ejercicio003.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio003',
  templateUrl: './ejercicio003.component.html',
  styleUrls: ['./ejercicio003.component.css']
})
export class Ejercicio003Component implements OnInit{

  empleados:any;

  constructor(private Ejercicio003Service: Ejercicio003Service){

  }

  /**
   * Muestra al inicio todos los datos contenidos en la API
   */
  ngOnInit(): void {
    this.recuperarTodos();
  }

  recuperarTodos(){
    this.Ejercicio003Service.recuperarTodos().subscribe(result => this.empleados=result);
  }

}
