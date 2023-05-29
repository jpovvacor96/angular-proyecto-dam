import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actividad1Component } from './actividad1/actividad1.component';
import { Actividad2Component } from './actividad2/actividad2.component';
import { Problema2Component } from './problema2/problema2.component';
import { BarramenuComponent } from './barramenu/barramenu.component';
import { HomeComponent } from './component/home/home.component';
import { Ejercicio001Component } from './component/ejercicio001/ejercicio001.component';
import { Ejercicio002Component } from './component/ejercicio002/ejercicio002.component';
import { Ejercicio003Component } from './component/ejercicio003/ejercicio003.component';
import { Ejercicio004Component } from './component/ejercicio004/ejercicio004.component';
import { Ejercicio005Component } from './component/ejercicio005/ejercicio005.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  {path: 'actividad1', component: Actividad1Component},
  {path: 'actividad2', component: Actividad2Component},
  {path: 'problema2', component: Problema2Component},
  {path: 'barramenu', component: BarramenuComponent},
  {path: 'home', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'ejercicio001', component: Ejercicio001Component},
  {path: 'ejercicio002', component: Ejercicio002Component},
  {path: 'ejercicio003', component: Ejercicio003Component},
  {path: 'ejercicio004', component: Ejercicio004Component},
  {path: 'ejercicio005', component: Ejercicio005Component},
  //Redirige por defecto a la carpeta home
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home"}
 ];
@NgModule({
exports: [RouterModule],
imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
