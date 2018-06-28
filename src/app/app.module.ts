import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClientesModule } from './clientes/clientes.module';  //declarar que se utilizaran componentes que vienen del modulo clientes

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClientesModule   //declarar aca tambien el modulo de clientes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
