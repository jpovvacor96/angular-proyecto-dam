import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actividad1Component } from './actividad1/actividad1.component';
import { Actividad2Component } from './actividad2/actividad2.component';
import { Problema2Component } from './problema2/problema2.component';
import { BarramenuComponent } from './barramenu/barramenu.component';
const routes: Routes = [
  {path: 'actividad1', component: Actividad1Component},
  {path: 'actividad2', component: Actividad2Component},
  {path: 'problema2', component: Problema2Component},
  {path: 'barramenu', component: BarramenuComponent}
 ];
@NgModule({
exports: [RouterModule],
imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
