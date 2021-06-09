import { Component, OnInit } from '@angular/core';

import { RequerimentoService } from './../requerimento.service';
import { SaldoService } from './../saldo.service';

import { Requerimento } from '../requerimento';
import { Saldo } from './../saldo';


@Component({
  selector: 'app-avaliacao-gestor',
  templateUrl: './avaliacao-gestor.component.html',
  styleUrls: ['./avaliacao-gestor.component.css']
})
export class AvaliacaoGestorComponent implements OnInit {

  constructor(
    private requerimentoService: RequerimentoService,
    private saldoService: SaldoService
    ) { }

  requerimentos: Requerimento[] = [];
  requerimentosPorData: Requerimento[] = [];

  ngOnInit(): void {
    this.buscarTodosRequerimentos();
  }

  buscarTodosRequerimentos(): void {
    this.requerimentoService.buscarTodosOsRequerimentos()
    .subscribe((requerimento) => (this.requerimentos = requerimento));
  }
}
