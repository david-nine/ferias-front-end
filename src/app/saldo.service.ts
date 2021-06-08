import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Saldo } from './saldo';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  private saldoUrl = 'http://localhost:8080/saldo';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET saldoes from the server */
  getSaldos(): Observable<Saldo[]> {
    return this.http.get<Saldo[]>(this.saldoUrl)
      .pipe(catchError(this.handleError<Saldo[]>('getSaldos', []))
      );
  }

   /** GET saldo by id. Return `undefined` when id not found */
   getSaldoNo404<Data>(id: number): Observable<Saldo> {
    const url = `${this.saldoUrl}/?id=${id}`;
    return this.http.get<Saldo[]>(url)
      .pipe(
        map(saldoes => saldoes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<Saldo>(`getSaldo id=${id}`))
      );
  }

  /** GET saldo by id. Will 404 if id not found */
  getSaldo(id: number): Observable<Saldo> {
    const url = `${this.saldoUrl}/${id}`;
    return this.http.get<Saldo>(url).pipe(catchError(this.handleError<Saldo>(`getSaldo id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new saldo to the server */
  addSaldo(saldo: Saldo): Observable<Saldo> {
    return this.http.post<Saldo>(this.saldoUrl, saldo, this.httpOptions).pipe(catchError(this.handleError<Saldo>('addSaldo'))
    );
  }

  /** DELETE: delete the saldo from the server */
  deleteSaldo(id: number): Observable<Saldo> {
    const url = `${this.saldoUrl}/${id}`;

    return this.http.delete<Saldo>(url, this.httpOptions).pipe(catchError(this.handleError<Saldo>('deleteSaldo'))
    );
  }

  /** PUT: update the saldo on the server */
  updateSaldo(saldo: Saldo): Observable<any> {
    return this.http.put(this.saldoUrl, saldo, this.httpOptions).pipe(catchError(this.handleError<any>('updateSaldo'))
    );
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
