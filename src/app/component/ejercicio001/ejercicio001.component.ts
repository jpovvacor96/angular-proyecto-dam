import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio001',
  templateUrl: './ejercicio001.component.html',
  styleUrls: ['./ejercicio001.component.css']
})
export class Ejercicio001Component {

  art={
    ID:0,
    Nombre:"",
    Email:"",
    Edad:0,
    Idioma:"",
  };

  personas=[{ID:1, Nombre:"José", Email:"pepe@gmail.com", Edad:32, Idioma:"Francés",},
    {ID:2, Nombre:"María", Email:"maria@gmail.com", Edad:23, Idioma:"Español",},
    {ID:3, Nombre:"Marta", Email:"marta@gmail.com", Edad:41, Idioma:"Inglés",},
    {ID:4, Nombre:"Valeria", Email:"valeria@gmail.com", Edad:26, Idioma:"Alemán",},
    {ID:5, Nombre:"Manuel", Email:"manuel@gmail.com", Edad:12, Idioma:"Ucraniano",}];

    hayRegistros(){
      return this.personas.length>0;
    }

    borrar(ID:number){
      for (let x=0;x<this.personas.length;x++){
        if (this.personas[x].ID==ID){
          this.personas.splice(x,1);
          return;
        }
      }
    }

    agregar(){
      if (this.art.ID==0){
        alert('Debe ingresar un código de artículo distinto de cero');
        return;
      }
      for(let x=0;x<=this.personas.length-1;x++){
        if (this.personas[x].ID==this.art.ID){
          alert('Ya existe una persona con dicho ID');
          return;
        }
      }
      this.personas.push({ID:this.art.ID, Nombre:this.art.Nombre, Email:this.art.Email, Edad:this.art.Edad, Idioma:this.art.Idioma});
      this.art.ID=0;
      this.art.Nombre='';
      this.art.Email='';
      this.art.Edad=0;
      this.art.Idioma='';
    }

    seleccionar(art:{ID:number; Nombre:string; Email:string; Edad:number; Idioma:string;}){
      this.art.ID=art.ID;
      this.art.Nombre=art.Nombre;
      this.art.Email=art.Email;
      this.art.Edad=art.Edad;
      this.art.Idioma=art.Idioma;
    }

    modificar(){
      for (let x=0;x<=this.personas.length-1;x++){
        if (this.personas[x].ID==this.art.ID){
          this.personas[x].Nombre=this.art.Nombre;
          this.personas[x].Email=this.art.Email;
          this.personas[x].Edad=this.art.Edad;
          this.personas[x].Idioma=this.art.Idioma;
          return;
        }
        alert('No existe el ID de la persona indicada');
      }
    }

}
