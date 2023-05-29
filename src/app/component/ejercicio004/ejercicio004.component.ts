import { Fruta } from 'src/app/interfaces/Fruta';
import { Ejercicio004Service } from './../../services/ejercicio004.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio004',
  templateUrl: './ejercicio004.component.html',
  styleUrls: ['./ejercicio004.component.css']
})
export class Ejercicio004Component implements OnInit{

  ngOnInit(): void {
    this.recuperarFrutas();
  }

  frutas!: Fruta[];

  fruta!: Fruta;

  constructor(private Ejercicio004Service: Ejercicio004Service){
    this.fruta={
      id:0,
      descripcion: "",
      precio: 0
    }
  }

  recuperarFrutas(){
    this.Ejercicio004Service.recuperarFrutas().subscribe(result=>this.frutas=result);
  }

  insertar(){
    this.Ejercicio004Service.insertar(this.fruta).subscribe((datos:any) => {
      if(datos){
        alert('Registro insertado correctamente');
        this.recuperarFrutas();
      }
    });
  }

  modificar(id:number){
    this.Ejercicio004Service.modificar(id, this.fruta).subscribe((datos:Fruta) => {
      if(datos){
        alert('Registro modificado correctamente');
        this.recuperarFrutas();
      }
    });
    this.fruta.descripcion="";
    this.fruta.precio=0;
    this.fruta.id=0;
  }

  eliminar(id:number){
    this.Ejercicio004Service.eliminar(id).subscribe((datos:Fruta) => {
      if(datos){
        alert('Registro eliminado correctamente');
        this.recuperarFrutas();
      }
    });
  }

  seleccionar(f:Fruta){
    this.fruta.descripcion=f.descripcion;
    this.fruta.precio=f.precio;
    this.fruta.id=f.id;
  }

}
