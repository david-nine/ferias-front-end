import { Component, OnChanges, OnInit } from '@angular/core';

import { RequerimentoService } from './../requerimento.service';
import { SaldoService } from './../saldo.service';

import { Requerimento } from '../requerimento';
import { Saldo } from './../saldo';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-avaliacao-gestor',
  templateUrl: './avaliacao-gestor.component.html',
  styleUrls: ['./avaliacao-gestor.component.css']
})
export class AvaliacaoGestorComponent implements OnInit, OnChanges {

  constructor(
    private requerimentoService: RequerimentoService,
    private saldoService: SaldoService
  ) { }

  requerimentos: Requerimento[] = [];
  requerimentosPorData: Requerimento[] = [];
  saldos: Saldo[] = [];

  ngOnInit(): void {
    this.buscarTodosRequerimentos();
    this.buscarTodosSaldos();
  }

  ngOnChanges(): void {
    this.buscarTodosRequerimentos();
    this.buscarTodosSaldos();
  }

  buscarTodosRequerimentos(): void {
    this.requerimentoService.buscarTodosOsRequerimentos()
      .subscribe((requerimento) => (this.requerimentos = requerimento));
  }

  // buscarSaldoDiasPorIdColaborador(idColaborador: number): number {
  //   this.saldos.forEach(element => {
  //     if(element.idColaborador == idColaborador) {
  //       return element.diasDisponiveisDeFerias;
  //     }
  //     return ele;
  //   });
  //   return 0;
  // }

  buscarSaldoDiasPorIdColaborador(idColaborador: number): number {
   for (let index = 0; index < this.saldos.length; index++) {
      const element = this.saldos[index];
      if(element.idColaborador == idColaborador) {
        return element.diasDisponiveisDeFerias
      }
   }
   return 0;
  }

  buscarTodosSaldos(): void {
    this.saldoService.buscarTodosOsSaldos().subscribe((saldos) => this.saldos = saldos);
  }
}
