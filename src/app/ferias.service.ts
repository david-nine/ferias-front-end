import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ferias } from './ferias';

@Injectable({
  providedIn: 'root',
})
export class FeriasService {
  constructor(private http: HttpClient) {}

  buscarTodasAsFerias(): Observable<Ferias[]> {
    const url = 'http://localhost:8080/ferias';
    return this.http
      .get<Ferias[]>(url)
      .pipe(catchError(this.handleError<Ferias[]>('buscarTodasAsFerias', [])));
  }

  buscarFeriasPorId(idFerias: number): Observable<Ferias> {
    const url = `http://localhost:8080/ferias/${idFerias}`;
    return this.http
      .get<Ferias>(url)
      .pipe(
        catchError(
          this.handleError<Ferias>(`buscarFeriasPorId idFerias=${idFerias}`)
        )
      );
  }

  buscarTodasAsFeriasPorIdColaborador(
    idColaborador: number
  ): Observable<Ferias[]> {
    const url = `http://localhost:8080/ferias/colaborador/${idColaborador}`;
    return this.http
      .get<Ferias[]>(url)
      .pipe(
        catchError(
          this.handleError<Ferias[]>(
            'buscarTodasAsFeriasPorIdColaborador idColaborador=${idColaborador}',
            []
          )
        )
      );
  }

  buscarFeriasAUsufruirPorIdColaborador(idColaborador: number) {}

  buscarFeriasAUsufruirDosSubordinados(idGestor: number) {}

  buscarFeriasUsufruindoDosSubordinados(idGestor: number) {}

  cancelarFerias(idFerias: number) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
