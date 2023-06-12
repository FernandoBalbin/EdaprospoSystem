import { Component } from '@angular/core';
import { NegocioService } from '../../../../services/negocio.service';
import { Negocios } from '../../../../interfaces/negocio';
import { GruposService } from '../../../../services/grupos.service';
import { Grupos } from '../../../../interfaces/grupos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css'],
})
export class CrearClientesComponent {
  clientesForm: FormGroup;

  sexo = [
    {
      nombre: 'Femenino',
    },
    {
      nombre: 'Masculino',
    },
    {
      nombre: 'Otro',
    },
  ];
  distrito = [
    { nombre: 'Huancayo' },
    { nombre: 'Chilca' },
    { nombre: 'Chongos Bajo' },
    { nombre: 'Chupaca' },
    { nombre: 'El Tambo' },
    { nombre: 'Huancán' },
    { nombre: 'Huancavelica' },
    { nombre: 'Huayucachi' },
    { nombre: 'Ingenio' },
    { nombre: 'Pariahuanca' },
    { nombre: 'Pilcomayo' },
    { nombre: 'Pucará' },
    { nombre: 'Quichuay' },
    { nombre: 'Quilcas' },
    { nombre: 'San Agustín' },
    { nombre: 'San Jerónimo de Tunán' },
    { nombre: 'San Pedro de Saño' },
    { nombre: 'Santo Domingo de Acobamba' },
    { nombre: 'Sapallanga' },
    { nombre: 'Sicaya' },
    { nombre: 'Viques' },
  ];

  get negocios(): Negocios[] {
    return this.negocioService.negocios;
  }
  get grupos(): Grupos[] {
    return this.grupoService.grupos;
  }

  constructor(
    private negocioService: NegocioService,
    private grupoService: GruposService,
    private formBuilder: FormBuilder
  ) {
    this.clientesForm = this.formBuilder.group({
      dni: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.negocioService.getNegocios().subscribe();
    this.grupoService.getGrupos().subscribe();
  }

  // agregarCliente(){
  //   if(this.clientesForm.valid){
  //     const usuario=1;
  //     // const data: NuevoCliente={

  //     // }
  //   }
  // }
}
