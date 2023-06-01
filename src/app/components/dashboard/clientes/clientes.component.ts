import { Component } from '@angular/core';
import {ClientesService} from '../../../services/clientes.service'
import {Clientes} from '../../../interfaces/clientes'
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {
  get clientes():Clientes[]{
    return this.clienteService.clientes
  }
  constructor(private clienteService: ClientesService) {
    
   }
   ngOnInit(): void {
    this.clienteService.getCliente().subscribe();
  }
}
