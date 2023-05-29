import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Problema2Component } from './problema2/problema2.component';
import { AppRoutingModule } from './app-routing.module';
import { BarramenuComponent } from './barramenu/barramenu.component';
import { HomeComponent } from './component/home/home.component';
import { Ejercicio001Component } from './component/ejercicio001/ejercicio001.component';
import { Ejercicio002Component } from './component/ejercicio002/ejercicio002.component';
import { Ejercicio003Component } from './component/ejercicio003/ejercicio003.component';
import {HttpClientModule} from '@angular/common/http';
import { Ejercicio004Component } from './component/ejercicio004/ejercicio004.component';
import { FooterComponent } from './footer/footer.component';
import { DetalleComponent } from './component/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    Problema2Component,
    BarramenuComponent,
    HomeComponent,
    Ejercicio001Component,
    Ejercicio002Component,
    Ejercicio003Component,
    Ejercicio004Component,
    FooterComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
