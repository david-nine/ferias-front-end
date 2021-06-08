import { Component, OnInit, Directive, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, NgControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'requerimento-colaborador',
  templateUrl: './requerimento-colaborador.component.html',
  styleUrls: ['./requerimento-colaborador.component.css']
})

@Directive({
  selector: '[disableControl]'
})

export class RequerimentoColaboradorComponent implements OnInit {

  constructor(private location: Location, private ngControl: NgControl) { }
  condition: boolean = false;
  formRequerimento = new FormGroup({
    data: new FormControl(null, Validators.required),
    diasFerias: new FormControl(null, [Validators.max(30), Validators.required]),
    diasAbono: new FormControl(null, Validators.max(10)),
    mensagem: new FormControl('', Validators.maxLength(300)),
  })

  ngOnInit(): void {
  }

  @Input() disableControl() {
    const action = this.condition ? 'disable' : 'enable';
    this.ngControl.control[action]();
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
  reverter() {
  }
}