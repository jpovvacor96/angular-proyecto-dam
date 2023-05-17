import { Router } from '@angular/router';
import { Ejercicio004Service } from './../../services/ejercicio004.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio004',
  templateUrl: './ejercicio004.component.html',
  styleUrls: ['./ejercicio004.component.css']
})
export class Ejercicio004Component implements OnInit{

  ngOnInit(): void {
    this.recuperarTodos();
  }

  empleados:any;

  constructor(private Ejercicio004Service: Ejercicio004Service, private router: Router){

  }

  recuperarTodos(){
    this.Ejercicio004Service.recuperarTodos().subscribe(result => this.empleados=result);
  }

  mostrarDetalle(id: number){
    this.router.navigate(['detalle', id]);
  }

}
