import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Saldo } from './saldo';
import { SaldoService } from './saldo.service';
import { Requerimento } from './requerimento';
import { RequerimentoService } from './requerimento.service';
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
  saldoBuscadoPorId: Saldo = {
    idColaborador: 0,
    diasDisponiveisDeFerias: 0,
  };
  saldoCriado: Saldo = {
    idColaborador: 0,
    diasDisponiveisDeFerias: 0,
  };
  saldoAtualizado: Saldo = {
    idColaborador: 0,
    diasDisponiveisDeFerias: 0,
  };

  requerimentos: Requerimento[] = [];
  requerimentoBuscadoPorId: Requerimento = {
    idGestor: 0,
    dataAbertura: '',
    dataFechamento: '',
    prazoAnalise: '',
    estado: '',
    mensagem: '',
    resposta: '',
    diasRequisitados: 0,
    diasVendidos: 0,
    dataInicioFerias: '',
  };
  requerimentosBuscadoPorIdColaborador: Requerimento[] = [];
  requerimentoCriado: Requerimento = {
    idGestor: 0,
    dataAbertura: '',
    dataFechamento: '',
    prazoAnalise: '',
    estado: '',
    mensagem: '',
    resposta: '',
    diasRequisitados: 0,
    diasVendidos: 0,
    dataInicioFerias: '',
  };
  requerimentoAtualizado: Requerimento = {
    idGestor: 0,
    dataAbertura: '',
    dataFechamento: '',
    prazoAnalise: '',
    estado: '',
    mensagem: '',
    resposta: '',
    diasRequisitados: 0,
    diasVendidos: 0,
    dataInicioFerias: '',
  };

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
    private requerimentoService: RequerimentoService,
    private feriasService: FeriasService
  ) {}

  ngOnInit(): void {
    this.buscarTodosOsSaldos();
    this.buscarSaldoPorIdColaborador(666);
    this.buscarTodosOsRequerimentos();
    this.buscarRequerimentoPorId(10);
    this.buscarTodosOsRequerimentosPorIdColaborador(666);
    this.buscarTodasAsFerias();
    this.buscarFeriasPorId(5);
    this.buscarTodasAsFeriasPorIdColaborador(666);
    this.buscarFeriasAUsufruirPorIdColaborador(666);
    this.buscarFeriasAUsufruirDosSubordinados(444);
    this.buscarFeriasUsufruindoDosSubordinados(444);
  }

  buscarTodosOsSaldos() {
    this.saldoService
      .buscarTodosOsSaldos()
      .subscribe((saldo) => (this.saldos = saldo));
  }

  buscarSaldoPorIdColaborador(idColaborador: number) {
    this.saldoService
      .buscarSaldoPorIdColaborador(idColaborador)
      .subscribe((saldo) => {
        this.saldoBuscadoPorId = saldo;
      });
  }

  criarSaldo(saldo: Saldo) {
    this.saldoService
      .criarSaldo(saldo)
      .subscribe((saldo) => (this.saldoCriado = saldo));
  }

  atualizarSaldo(saldo: Saldo) {
    if (saldo) {
      this.saldoService
        .atualizarSaldo(saldo)
        .subscribe((saldo) => (this.saldoAtualizado = saldo));
    }
  }

  buscarTodosOsRequerimentos() {
    this.requerimentoService
      .buscarTodosOsRequerimentos()
      .subscribe((requerimento) => (this.requerimentos = requerimento));
  }

  buscarRequerimentoPorId(idRequerimento: number) {
    this.requerimentoService
      .buscarRequerimentoPorId(idRequerimento)
      .subscribe(
        (requerimento) => (this.requerimentoBuscadoPorId = requerimento)
      );
  }

  buscarTodosOsRequerimentosPorIdColaborador(idColaborador: number) {
    this.requerimentoService
      .buscarTodosOsRequerimentosPorIdColaborador(idColaborador)
      .subscribe(
        (requerimento) =>
          (this.requerimentosBuscadoPorIdColaborador = requerimento)
      );
  }

  buscarRequerimentosPorIdEEstadoColaborador() {}

  // criarRequerimento(idSaldo: number, requerimento: Requerimento) {
  //   this.requerimentoService
  //     .criarRequerimento(idSaldo, requerimento)
  //     .subscribe((requerimento) => (this.requerimentoCriado = requerimento));
  // }

  desativarRequerimento(idRequerimento: number) {
    this.requerimentoService.desativarRequerimento(idRequerimento);
  }

  avaliarRequerimento(idRequerimento: number, estado: string) {
    this.requerimentoService
      .avaliarRequerimento(idRequerimento, estado)
      .subscribe(
        (requerimento) => (this.requerimentoAtualizado = requerimento)
      );
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
    this.feriasService
      .buscarTodasAsFeriasPorIdColaborador(idColaborador)
      .subscribe((ferias) => {
        this.feriasBuscadasPorIdColaborador = ferias;
      });
  }

  buscarFeriasAUsufruirPorIdColaborador(idColaborador: number) {
    this.feriasService
      .buscarFeriasAUsufruirPorIdColaborador(idColaborador)
      .subscribe((ferias) => {
        this.feriasAUsufruirBuscadasPorIdColaborador = ferias;
      });
  }

  buscarFeriasAUsufruirDosSubordinados(idGestor: number) {
    this.feriasService
      .buscarFeriasAUsufruirDosSubordinados(idGestor)
      .subscribe((ferias) => {
        this.feriasAUsufruirDosSubordinados = ferias;
      });
  }

  buscarFeriasUsufruindoDosSubordinados(idGestor: number) {
    this.feriasService
      .buscarFeriasUsufruindoDosSubordinados(idGestor)
      .subscribe((ferias) => {
        this.feriasUsufruindoDosSubordinados = ferias;
      });
  }

  cancelarFerias(idFerias: number) {
    this.feriasService.cancelarFerias(idFerias);
  }
}
