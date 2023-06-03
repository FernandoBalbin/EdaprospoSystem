import { Component, ViewChild } from '@angular/core';
import {ClientesService} from '../../../services/clientes.service'
import {Clientes} from '../../../interfaces/clientes'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


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
