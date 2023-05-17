import { Ejercicio003Service } from './../../services/ejercicio003.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio003',
  templateUrl: './ejercicio003.component.html',
  styleUrls: ['./ejercicio003.component.css']
})
export class Ejercicio003Component implements OnInit{


  //##################
  //LISTA DE VARIABLES
  //##################

  /**Objetos entrada del JSON remoto que vamos a obtener de la API*/
  entradas:any;

  //#############
  //CONSTRUCTORES
  //#############

  /**
   * Constructor genérico para el ejercicio 003, que trabaja con una API REST
   * @param Ejercicio003Service Servicio diseñado para el ejercicio 003
   */
    constructor(private Ejercicio003Service: Ejercicio003Service){

    }

  /**
   * Muestra al inicio todos los datos contenidos en la API
   */
  ngOnInit(): void {
      this.mostrarTodos();
  }



  /**
   * Carga todas las entradas en una variable para ser utilizadas posteriormente en el HTML
   */
  mostrarTodos(){
    this.Ejercicio003Service.mostrarTodos().subscribe(result => this.entradas=result);
  }

}
