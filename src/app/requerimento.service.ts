import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Requerimento } from './requerimento';
import { FormGroup } from '@angular/forms';
// import { LocalDate } from '@js-joda/core';

@Injectable({
  providedIn: 'root',
})
export class RequerimentoService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  buscarTodosOsRequerimentos(): Observable<Requerimento[]> {
    const url = 'http://localhost:8080/requerimento';
    return this.http
      .get<Requerimento[]>(url)
      .pipe(
        catchError(
          this.handleError<Requerimento[]>('buscarTodosOsRequerimentos', [])
        )
      );
  }

  buscarRequerimentoPorId(idRequerimento: number): Observable<Requerimento> {
    const url = `http://localhost:8080/requerimento/${idRequerimento}`;
    return this.http
      .get<Requerimento>(url)
      .pipe(
        catchError(
          this.handleError<Requerimento>(
            `buscarRequerimentoPorId idRequerimento=${idRequerimento}`
          )
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

  buscarTodosRequerimentosPendentes(): Observable<Requerimento[]> {
    const url = `http://localhost:8080/requerimento/estado/pendente`;
    return this.http.get<Requerimento[]>(url)
    .pipe(
      catchError(
        this.handleError<Requerimento[]>(
          'buscarTodosRequerimentosPendentes idColaborador=${idColaborador}', []
        )
      )
    )
  }

  /**
   * Esse metodo precisa ser refatorado.
   * @param idColaborador
   * @param estado
   * @returns
   */
  buscarRequerimentosPorIdEEstadoColaborador(
    idColaborador: number,
    estado: string
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

  criarRequerimento(requerimentoFrom: any): any{
    let requerimento = {
      dataInicioFerias: requerimentoFrom.data,
      diasRequisitados: requerimentoFrom.diasFerias,
      diasVendidos: requerimentoFrom.dias_abono,
      mensagem: requerimentoFrom.mensagem,
    }
    return requerimento;
  }

  salvarRequerimento(
    idSaldo: number,
    requerimentoFrom: any
  ): Observable<Requerimento> {
    let requerimento = this.criarRequerimento(requerimentoFrom);
    const url = `http://localhost:8080/requerimento/${idSaldo}`;
    return this.http
      .post<Requerimento>(url, requerimento, this.httpOptions)
      .pipe(catchError(this.handleError<Requerimento>('salvarRequerimento')));
  }

  desativarRequerimento(idRequerimento: number): Observable<any> {
    const url = `http://localhost:8080/requerimento/${idRequerimento}`;
    return this.http
      .delete(url, this.httpOptions)
      .pipe(catchError(this.handleError<any>('desativarRequerimento')));
  }

  avaliarRequerimento(idRequerimento: number, estado: string): Observable<any> {
    const url = `http://localhost:8080/requerimento/avaliar/${idRequerimento}`;
    return this.http
      .put(url, JSON.stringify(estado), this.httpOptions)
      .pipe(catchError(this.handleError<any>('avaliarRequerimento')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
