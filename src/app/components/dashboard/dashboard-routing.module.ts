import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClientesComponent } from './clientes/clientes.component';
import { GruposComponent } from './grupos/grupos.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {path:'',component: DashboardComponent, children:[
    {path: '',component:InicioComponent},
    {path: 'clientes',component:ClientesComponent},
    {path: 'grupos',component:GruposComponent},
    {path: 'reportes',component:ReportesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
