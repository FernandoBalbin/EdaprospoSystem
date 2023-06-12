import { Injectable } from '@angular/core';
import { Negocios } from '../interfaces/negocio';
import { HttpClient } from '@angular/common/http';
import { tap, of, catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {
  private _negocios: Negocios[]

  get negocios() {
    return [...this._negocios]
  }
  constructor(private http:HttpClient) {
    this._negocios = []
   }
   getNegocios() {
    const URL = `http://localhost:9000/api/listarNegocio`
    return this.http.get<Negocios[]>(URL)
    .pipe(
      tap(rest=>{
        this._negocios= rest,
        console.log(this._negocios);

      }),
      catchError(err => of(false))
    )    
  }
  // getClientes(): Observable<Clientes[]>{
  //  return this.http.get<Clientes>('.');
  // }

 
}
