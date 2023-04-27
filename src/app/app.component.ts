import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoPrueba';
  nombre='José Palomino Ochoa';
  edad='26';
  email='jpovvacor96@gmail.com';
  sueldos=[1500, 1800, 1200];
  activo=true;

  esActivo(){
    if (this.activo){
      return 'El trabajador se encuentra en activo';
    }
    else{
      return 'El trabajador no se encuentra en activo';
    }
  }

  sumaSueldos(){
    let suma=0;
    for (let x=0;x<=this.sueldos.length;x++){
      suma=suma+this.sueldos[x];
    }
    return suma;
  }
}
