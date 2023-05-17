import { ActivatedRoute } from '@angular/router';
import { Ejercicio004Service } from './../../../services/ejercicio004.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{

  gOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
    this.nro = parseInt(parametros.get("id")!);
    })
    this.recuperarUno(this.nro)
    }

  constructor(private ejercicio004Service: Ejercicio004Service, private activatedRoute: ActivatedRoute){

  }

  detalle: any;

  recuperarUno(id: number){
    this.ejercicio004Service.recuperarUno(id).subscribe( result => this.detalle = result)
  }

}
