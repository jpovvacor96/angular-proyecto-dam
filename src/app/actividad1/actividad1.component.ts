import { Component } from '@angular/core';

@Component({
  selector: 'app-actividad1',
  templateUrl: './actividad1.component.html',
  styleUrls: ['./actividad1.component.css']
})
export class Actividad1Component {
  contador: number=1;

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

  resetear(){
    this.contador=1;
  }
}
