import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'requerimento-colaborador',
  templateUrl: './requerimento-colaborador.component.html',
  styleUrls: ['./requerimento-colaborador.component.css']
})

export class RequerimentoColaboradorComponent implements OnInit {

  constructor(
    private location: Location,
    private fb: FormBuilder,
  ) {
    this.requerimentoForm = this.fb.group({
      data: [null, Validators.required],
      diasFerias: [null, [Validators.max(30), Validators.required, Validators.min(5)]],
      diasAbono: [{value: null, disabled: true}, Validators.max(10)],
      mensagem: [null, Validators.maxLength(300)],
    })
  }

  requerimentoForm: FormGroup;
  isDisabled = true;
  submitted = false;

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.submitted = true;  
    //this.formRequerimento.value.data;
    if (this.requerimentoForm.valid){
      console.warn(this.requerimentoForm.value);
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