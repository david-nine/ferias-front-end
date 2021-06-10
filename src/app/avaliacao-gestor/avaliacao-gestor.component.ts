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
  requerimentosPendentes: Requerimento[] = [];
  saldos: Saldo[] = [];

  ngOnInit(): void {
    this.buscarTodosRequerimentos();
    this.buscarTodosSaldos();
    this.buscarRequerimentosPendentes();
  }

  ngOnChanges(): void {
    this.buscarTodosRequerimentos();
    this.buscarTodosSaldos();
    this.buscarRequerimentosPendentes();
  }

  buscarTodosRequerimentos(): void {
    this.requerimentoService.buscarTodosOsRequerimentos()
      .subscribe((requerimento) => (this.requerimentos = requerimento));
  }

  buscarRequerimentosPendentes(): void {
    for (let index = 0; index < this.requerimentos.length; index++) {
       const element = this.requerimentos[index];
       if(element.estado === "PENDENTE") {
         this.requerimentosPendentes.push(element);
       }
    }
   }

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

  aprovarRequerimento(idRequerimento: number) {
    let novoEstado = "APROVADO";
    this.requerimentoService.avaliarRequerimento(idRequerimento, novoEstado);
  }

  recusarRequerimento(idRequerimento: number) {
    let novoEstado = "RECUSADO";
    this.requerimentoService.avaliarRequerimento(idRequerimento, novoEstado);
  }
}
