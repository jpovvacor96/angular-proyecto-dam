import { Component } from '@angular/core';

@Component({
  selector: 'app-problema2',
  templateUrl: './problema2.component.html',
  styleUrls: ['./problema2.component.css']
})

/**
 * Representa una aplicación de gestión de un inventario de productos de una tienda. Permite visualizar, seleccionar
 * modificar, borrar o insertar nuevos productos
 *
 * @author José Palomino Ochoa
 */
export class Problema2Component {

  /**Representa la estructura básica de un objeto artículo, que representa un producto de la tienda*/
  art={
    codigo:0,
    descripcion:"",
    precio:0
  };

  /**Contiene los productos de la tienda establecidos por defecto, y posteriormente los incluidos por el usuario*/
  articulos=[{codigo:1, descripcion:'Patatas', precio:10.55},
    {codigo:2, descripcion:'Manzanas', precio:12.10},
    {codigo:3, descripcion:'Melón', precio:52.30},
    {codigo:4, descripcion:'Cebollas', precio:17},
    {codigo:5, descripcion:'Calabaza', precio:20}];

  /**
   * Verifica si existen productos registrados en el sistema o no
   * @returns Booleano que indica si hay artículos registrados
   */
  hayRegistros(){
    return this.articulos.length>0;
  }

  /**
   * Borra el producto con un código determinado que se le pasa como parámetro. Comprueba si efectivamente existe un artículo
   * con dicho código
   * @param codigo Código del producto que deseamos eliminar
   * @returns Booleano que indica si ha sido posible la eliminación del producto
   */
  borrar(codigo:number){
    for (let x=0;x<this.articulos.length;x++){
      if (this.articulos[x].codigo==codigo){
        this.articulos.splice(x,1);
        return;
      }
    }
  }

  /**
   * Agrega un nuevo producto con las características
   * @returns
   */
  agregar(){
    if (this.art.codigo==0){
      alert('Debe ingresar un código de artículo distinto de cero');
      return;
    }
    for(let x=0;x<=this.articulos.length-1;x++){
      if (this.articulos[x].codigo==this.art.codigo){
        alert('Ya existe un artículo con dicho código');
        return;
      }
    }
    this.articulos.push({codigo:this.art.codigo, descripcion:this.art.descripcion, precio:this.art.precio});
    this.art.codigo=0;
    this.art.descripcion='';
    this.art.precio=0;
  }

  seleccionar(art:{codigo:number; descripcion:string; precio:number;}){
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  }


  modificar(){
    for (let x=0;x<=this.articulos.length-1;x++){
      if (this.articulos[x].codigo==this.art.codigo){
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
        return;
      }
      alert('No existe el código de artículo ingresado');
    }
  }



}
