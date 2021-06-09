import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Requerimento } from './requerimento';

@Injectable({
  providedIn: 'root'
})
export class RequerimentoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  buscarTodosOsRequerimentos(): Observable<Requerimento[]> {
    const url = 'http://localhost:8080/requerimento';
    return this.http
      .get<Requerimento[]>(url)
      .pipe(catchError(this.handleError<Requerimento[]>('buscarTodosOsRequerimentos', [])));
  }

  buscarRequerimentoPorId(idRequerimento: number): Observable<Requerimento> {
    const url = `http://localhost:8080/requerimento/${idRequerimento}`;
    return this.http
      .get<Requerimento>(url)
      .pipe(
        catchError(
          this.handleError<Requerimento>(`buscarRequerimentoPorId idRequerimento=${idRequerimento}`)
        )
      );
  }

  buscarTodosOsRequerimentosPorIdColaborador(
    idColaborador: number
  ): Observable<Requerimento[]> {
    const url = `http://localhost:8080/requerimento/colaborador/${idColaborador}`;
    return this.http
      .get<Requerimento[]>(url)
      .pipe(
        catchError(
          this.handleError<Requerimento[]>(
            'buscarTodosOsRequerimentosPorIdColaborador idColaborador=${idColaborador}',
            []
          )
        )
      );
  }

  /**
   * Esse metodo precisa ser refatorado.
   * @param idColaborador 
   * @param estado 
   * @returns 
   */
  buscarRequerimentosPorIdEEstadoColaborador(
    idColaborador: number, estado: string
  ): Observable<Requerimento[]> {
    const url = `http://localhost:8080/requerimento/colaborador/${idColaborador}/${estado}`;
    return this.http
      .get<Requerimento[]>(url)
      .pipe(
        catchError(
          this.handleError<Requerimento[]>(
            'buscarRequerimentosPorIdEEstadoColaborador idColaborador=${idColaborador} estado=${estado}',
            []
          )
        )
      );
  }
}
