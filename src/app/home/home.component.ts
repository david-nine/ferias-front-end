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

  constructor(
    private requerimentoService: RequerimentoService,
    private feriasService: FeriasService
  ) {}

  ngOnInit(): void {
    this.buscarTodosOsRequerimentos();
    this.buscarTodasAsFerias();
  }

  buscarTodosOsRequerimentos() {
    this.requerimentoService
      .buscarTodosOsRequerimentos()
      .subscribe((requerimento) => (this.requerimentos = requerimento));
  }

  buscarTodasAsFerias() {
    this.feriasService
      .buscarTodasAsFerias()
      .subscribe((ferias) => (this.ferias = ferias));
  }
}
