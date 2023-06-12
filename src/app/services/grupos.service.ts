import { Injectable } from '@angular/core';
import { Grupos } from '../interfaces/grupos';
import { HttpClient } from '@angular/common/http';
import { tap, of, catchError, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GruposService {
  private _grupos: Grupos[]

  get grupos() {
    return [...this._grupos]
  }
  constructor(private http:HttpClient) {
    this._grupos = []
   }
   getGrupos() {
    const URL = `http://localhost:9000/api/listarGrupos`
    return this.http.get<Grupos[]>(URL)
    .pipe(
      tap(rest=>{
        this._grupos= rest
      }),
      catchError(err => of(false))
    )    
  }
}
