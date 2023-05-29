import { ActivatedRoute, ParamMap } from '@angular/router';
import { Ejercicio003Service } from './../../services/ejercicio003.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{

  detalle:any;

  nro!:number;

  constructor(private Ejercicio003Service: Ejercicio003Service, private ActivatedRoute: ActivatedRoute){

  }

  recuperarUno(id: number) {
    this.Ejercicio003Service.recuperarUno(id).subscribe( result => this.detalle = result)
  }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((parametros: ParamMap) => {
    this.nro = parseInt(parametros.get("id")!);
    })
    this.recuperarUno(this.nro)
    }

}
