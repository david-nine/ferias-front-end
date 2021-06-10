import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { SaldoService } from '../saldo.service';
import { RequerimentoService } from '../requerimento.service';
import { Saldo } from '../saldo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-requerimento-colaborador',
  templateUrl: './requerimento-colaborador.component.html',
  styleUrls: ['./requerimento-colaborador.component.css']
})

export class RequerimentoColaboradorComponent implements OnInit {

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private saldoService: SaldoService,
    private requerimentoService: RequerimentoService
  ) {
    // let objSaldo:Observable<Saldo> = saldoService.buscarSaldoPorIdColaborador(1);
    this.requerimentoForm = this.fb.group({
      saldo: [{value: 30 , disabled: true}],
      data: [null, Validators.required],
      diasFerias: ['', [Validators.max(30), Validators.required, Validators.min(5)]],
      dias_abono: ['', Validators.max(10)],
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
      this.requerimentoService.salvarRequerimento(2, this.requerimentoForm.value)
      this.location.go('');
      window.location.reload(); 
    }else{
      alert("Preencha ou ajuste os campos necessários")
    }
  }
  cancelar(){
    this.location.go('');
    window.location.reload(); 
  }
  reverter() {
    this.isDisabled = !this.isDisabled;
  }

  get f() { return this.requerimentoForm.controls; }
}