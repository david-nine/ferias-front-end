import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'requerimento-colaborador',
  templateUrl: './requerimento-colaborador.component.html',
  styleUrls: ['./requerimento-colaborador.component.css']
})
export class RequerimentoColaboradorComponent implements OnInit {

  constructor(private location: Location) { }

  formRequerimento = new FormGroup({
    data: new FormControl(null, Validators.required),
    diasFerias: new FormControl(null, [Validators.max(30), Validators.required]),
    diasAbono: new FormControl(null, Validators.max(10)),
    mensagem: new FormControl('', Validators.maxLength(300)),
  })

  ngOnInit(): void {
  }

  onSubmit(): void{
    //this.formRequerimento.value.data;
    if (this.formRequerimento.valid){
      console.warn(this.formRequerimento.value);
      this.location.go('');
      window.location.reload(); 
    }
  }
  cancelar(){
    this.location.go('');
    window.location.reload(); 
  }
}