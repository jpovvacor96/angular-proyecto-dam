import { Fruta } from 'src/app/interfaces/fruta';
import { Ejercicio005Service } from './../../services/ejercicio005.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio005',
  templateUrl: './ejercicio005.component.html',
  styleUrls: ['./ejercicio005.component.css']
})
export class Ejercicio005Component implements OnInit{

  ngOnInit(): void {
    this.recuperarFrutas();
  }

  frutas!: Fruta[];

  fruta!: Fruta;

  constructor(private Ejercicio005Service: Ejercicio005Service){
    this.fruta={
      id:0,
      descripcion: "",
      precio: 0
    }
  }

  recuperarFrutas(){
    this.Ejercicio005Service.recuperarFrutas().subscribe(result=>this.frutas=result);
  }

  baja(id:number){

  }

  seleccionar(id:number){

  }

}
