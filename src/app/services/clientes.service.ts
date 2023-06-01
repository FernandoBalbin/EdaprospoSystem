import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../interfaces/clientes';
import { tap, of, catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private _clientes: Clientes[]

  get clientes() {
    return [...this._clientes]
  }
  constructor(private http:HttpClient) {
    this._clientes = []
   }
   getCliente() {
    const URL = `http://localhost:9000/api/listarClientes`
    return this.http.get<Clientes[]>(URL)
    .pipe(
      tap(rest=>{
        this._clientes= rest
      }),
      catchError(err => of(false))
    )    
  }
  // getClientes(): Observable<Clientes[]>{
  //  return this.http.get<Clientes>('.');
  // }


}
