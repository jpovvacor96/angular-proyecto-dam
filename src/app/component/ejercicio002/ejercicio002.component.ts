import { Ejercicio002Service } from './../../services/ejercicio002.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio002',
  templateUrl: './ejercicio002.component.html',
  styleUrls: ['./ejercicio002.component.css']
})
export class Ejercicio002Component implements OnInit{


  //##################
  //LISTA DE VARIABLES
  //##################

  /**Objetos entrada del JSON remoto que vamos a obtener de la API*/
  entradas:any;

  //#############
  //CONSTRUCTORES
  //#############

  /**
   * Constructor genérico para el ejercicio 002, que trabaja con una API REST
   * @param Ejercicio002Service Servicio diseñado para el ejercicio 002
   */
    constructor(private Ejercicio002Service: Ejercicio002Service){

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
    this.Ejercicio002Service.mostrarTodos().subscribe(result => this.entradas=result);
  }

}
