import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { FormsModule} from '@angular/forms';    //se agrega para poder usar la banana en la caja: [(ngModel)]
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule  //agregar aqui tambien por lo de la banana en la caja...
  ],
  declarations: [AltaClienteComponent, ListadoClientesComponent],
  providers: [
    ClientesService
  ],
  exports: [ 
    AltaClienteComponent,     //agrego el componente que quiero usar desde afuera del modulo
    ListadoClientesComponent  //agrego el componente que quiero usar desde afuera del modulo
  ]  
})
export class ClientesModule { }
