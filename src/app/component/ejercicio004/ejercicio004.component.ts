import { Ejercicio004Service } from './../../services/ejercicio004.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio004',
  templateUrl: './ejercicio004.component.html',
  styleUrls: ['./ejercicio004.component.css']
})
export class Ejercicio004Component implements OnInit{

  empleados:any;

  constructor(private Ejercicio004Service: Ejercicio004Service){

  }

  /**
   * Muestra al inicio todos los datos contenidos en la API
   */
  ngOnInit(): void {
    this.recuperarTodos();
  }

  recuperarTodos(){
    this.Ejercicio004Service.recuperarTodos().subscribe(result => this.empleados=result);
  }

}
