import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Actividad1Component } from './actividad1/actividad1.component';
import { Actividad2Component } from './actividad2/actividad2.component';
import { FormsModule } from '@angular/forms';
import { Problema2Component } from './problema2/problema2.component';
import { AppRoutingModule } from './app-routing.module';
import { BarramenuComponent } from './barramenu/barramenu.component';

@NgModule({
  declarations: [
    AppComponent,
    Actividad1Component,
    Actividad2Component,
    Problema2Component,
    BarramenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
