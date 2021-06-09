import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Saldo } from './saldo';
import { SaldoService } from './saldo.service';
import { Ferias } from './ferias';
import { FeriasService } from './ferias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularProject';

  saldos: Saldo[] = [];
  ferias: Ferias[] = [];
  feriasBuscadaPorId: Ferias = {
    id: 0,
    estado: '',
    dataInicio: '',
    dataFim: '',
    dias: 0,
    diasVendidos: 0,
  };
  feriasBuscadasPorIdColaborador: Ferias[] = [];
  feriasAUsufruirBuscadasPorIdColaborador: Ferias[] = [];
  feriasAUsufruirDosSubordinados: Ferias[] = [];
  feriasUsufruindoDosSubordinados: Ferias[] = [];

  constructor(
    private saldoService: SaldoService,
    private feriasService: FeriasService
  ) {}

  ngOnInit(): void {
    this.getSaldos();
    this.buscarTodasAsFerias();
    this.buscarFeriasPorId(5);
    this.buscarTodasAsFeriasPorIdColaborador(666);
    this.buscarFeriasAUsufruirPorIdColaborador(666);
    this.buscarFeriasAUsufruirDosSubordinados(444);
    this.buscarFeriasUsufruindoDosSubordinados(444);
  }

  getSaldos() {
    this.saldoService.getSaldos().subscribe((saldo) => (this.saldos = saldo));
  }

  buscarTodasAsFerias() {
    this.feriasService.buscarTodasAsFerias().subscribe((ferias) => {
      this.ferias = ferias;
    });
  }

  buscarFeriasPorId(idFerias: number) {
    this.feriasService.buscarFeriasPorId(idFerias).subscribe((ferias) => {
      this.feriasBuscadaPorId = ferias;
    });
  }

  buscarTodasAsFeriasPorIdColaborador(idColaborador: number) {
    this.feriasService.buscarTodasAsFeriasPorIdColaborador(idColaborador).subscribe((ferias) => {
      this.feriasBuscadasPorIdColaborador = ferias;
    });
  }

  buscarFeriasAUsufruirPorIdColaborador(idColaborador: number) {
    this.feriasService.buscarFeriasAUsufruirPorIdColaborador(idColaborador).subscribe((ferias) => {
      this.feriasAUsufruirBuscadasPorIdColaborador = ferias;
    });
  }

  buscarFeriasAUsufruirDosSubordinados(idGestor: number) {
    this.feriasService.buscarFeriasAUsufruirDosSubordinados(idGestor).subscribe((ferias) => {
      this.feriasAUsufruirDosSubordinados = ferias;
    });
  }

  buscarFeriasUsufruindoDosSubordinados(idGestor: number) {
    this.feriasService.buscarFeriasUsufruindoDosSubordinados(idGestor).subscribe((ferias) => {
      this.feriasUsufruindoDosSubordinados = ferias;
    });
  }

  cancelarFerias(idFerias: number) {
    this.feriasService.cancelarFerias(idFerias);
  }

}
