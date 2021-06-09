import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Saldo } from './saldo';

@Injectable({
  providedIn: 'root',
})
export class SaldoService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  buscarTodosOsSaldos(): Observable<Saldo[]> {
    const url = 'http://localhost:8080/saldo';
    return this.http
      .get<Saldo[]>(url)
      .pipe(catchError(this.handleError<Saldo[]>('buscarTodosOsSaldos', [])));
  }

  buscarSaldoPorIdColaborador(idSaldo: number): Observable<Saldo> {
    const url = `http://localhost:8080/colaborador/${idSaldo}/saldo`;
    return this.http
      .get<Saldo>(url)
      .pipe(
        catchError(
          this.handleError<Saldo>(`buscarPorIdColaborador idSaldo=${idSaldo}`)
        )
      );
  }

  criarSaldo(saldo: Saldo): Observable<Saldo> {
    const url = 'http://localhost:8080/saldo';
    return this.http
      .post<Saldo>(url, saldo, this.httpOptions)
      .pipe(catchError(this.handleError<Saldo>('criarSaldo')));
  }

  atualizarSaldo(saldo: Saldo): Observable<any> {
    const url = 'http://localhost:8080/saldo';
    return this.http
      .put(url, saldo, this.httpOptions)
      .pipe(catchError(this.handleError<any>('atualizarSaldo')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
