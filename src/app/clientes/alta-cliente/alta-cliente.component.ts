import { Component, OnInit } from '@angular/core';
import { ClientesService} from '../clientes.service';             //importar el servicio para usarlo, luego agregarlo al constructor
import { Cliente, Grupo } from '../cliente.model';                //importar el modelo de datos

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  cliente: Cliente;                                             //el componente declara dos propiedades, el cliente y el array de grupos
  grupos: Grupo[];

  constructor(private clientesService: ClientesService) { }     //agregar el servicio al constructor para instanciar variable del servicio
                                                                //por medio de inyeccion de dependencias
  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();         //al ejecutar ngOnInit ya se instanció el servicio por lo tanto se lo puede
    this.grupos = this.clientesService.getGrupos();             //usar para generar los valores necesarios
  }

  nuevoCliente(): void {                                        //el metodo nuevoCliente se ejecuta cuando desde la vista se produce el envio de datos
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }
}
