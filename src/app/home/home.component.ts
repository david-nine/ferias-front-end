import { Ferias } from './../ferias';
import { FeriasService } from './../ferias.service';
import { Requerimento } from './../requerimento';
import { RequerimentoService } from './../requerimento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  requerimentos: Requerimento[] = [];
  ferias: Ferias[] = [];
  idColaborador: number = 666;

  constructor(
    private requerimentoService: RequerimentoService,
    private feriasService: FeriasService
  ) {}

  ngOnInit(): void {
    this.buscarTodosOsRequerimentosPorIdColaborador();
    this.buscarTodasAsFeriasPorIdColaborador();
  }

  buscarTodosOsRequerimentosPorIdColaborador() {
    this.requerimentoService
      .buscarTodosOsRequerimentosPorIdColaborador(this.idColaborador)
      .subscribe((requerimento) => (this.requerimentos = requerimento));
  }

  buscarTodasAsFeriasPorIdColaborador() {
    this.feriasService
      .buscarTodasAsFeriasPorIdColaborador(this.idColaborador)
      .subscribe((ferias) => (this.ferias = ferias));
  }
}
