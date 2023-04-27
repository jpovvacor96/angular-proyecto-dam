import { Component } from '@angular/core';

@Component({
  selector: 'app-problema2',
  templateUrl: './problema2.component.html',
  styleUrls: ['./problema2.component.css']
})
export class Problema2Component {

  /**
   * Objeto que representa un artículo de la tienda
   */
  art={
    codigo:0 ,
    descripcion:"",
    precio:0
    }

  /**
   * Lista de artículos registrados
   */
  articulos = [{codigo:1, descripcion:'Patatas', precio:10.55},
    {codigo:2, descripcion:'Manzanas', precio:12.10},
    {codigo:3, descripcion:'Melones', precio:52.30},
    {codigo:4, descripcion:'Cebollas', precio:17},
    {codigo:5, descripcion:'Calabazas', precio:20},
    ];

  /**
   * Devuelve el número de productos almacenados
   * @returns Número de productos almacenados
   */
  hayRegistros(){
    return this.articulos.length>0;
  }

  seleccionar(art:{codigo:number; descripcion:string; precio:number;}){

  }

  agregar(){

  }

  borrar(codigo:number){

  }

  modificar(){

  }

}
