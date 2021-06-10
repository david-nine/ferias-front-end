import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { SaldoService } from '../saldo.service';
import { Requerimento } from '../requerimento';
import { RequerimentoService } from '../requerimento.service';
import { Saldo } from '../saldo';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-requerimento-colaborador',
  templateUrl: './requerimento-colaborador.component.html',
  styleUrls: ['./requerimento-colaborador.component.css']
})

export class RequerimentoColaboradorComponent implements OnInit {

  idSaldo: number = 1;
  idColaborador: number = 666;
  idGestor: number = 444;


  constructor(
    private location: Location,
    private fb: FormBuilder,
    private saldoService: SaldoService,
    private requerimentoService: RequerimentoService
  ) {
    // let objSaldo:Observable<Saldo> = saldoService.buscarSaldoPorIdColaborador(1);
    this.requerimentoForm = this.fb.group({
      saldo: [{ value: 30, disabled: true }],
      data: [null, Validators.required],
      diasFerias: ['', [Validators.max(30), Validators.required, Validators.min(5)]],
      dias_abono: [{ value: '', disabled: true }, Validators.max(10), Validators.min(1)],
      mensagem: []
    })
  }

  requerimentoForm: FormGroup;
  isDisabled = true;
  submitted = false;

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.submitted = true;
    if (this.requerimentoForm.valid){
      let requerimento = this.criarRequerimento(this.requerimentoForm.value);
      this.requerimentoService.salvarRequerimento(this.idSaldo, requerimento).subscribe();
      this.location.go('');
      window.location.reload();
    }else{
      alert("Preencha ou ajuste os campos necessários")
    }
  }
  cancelar() {
    this.location.go('');
    window.location.reload();
  }
  reverter() {
    this.isDisabled = !this.isDisabled;
  }

  get f() { return this.requerimentoForm.controls; }

  criarRequerimento(requerimentoForm: any): Requerimento {
    let requerimento: Requerimento = {
      id: 0,
      idColaborador: this.idColaborador,
      dataAbertura: '2020-05-06',
      idGestor: this.idGestor,
      dataFechamento: '2020-06-06',
      prazoAnalise: '2020-05-17',
      estado: 'PENDENTE',
      resposta: '',
      dataInicioFerias: requerimentoForm.data,
      diasRequisitados: requerimentoForm.diasFerias,
      diasVendidos: requerimentoForm.dias_abono? requerimentoForm.dias_abono : 0,
      mensagem: requerimentoForm.mensagem,
    }
    return requerimento;
  }
}
