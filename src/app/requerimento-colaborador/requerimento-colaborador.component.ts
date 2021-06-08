import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'requerimento-colaborador',
  templateUrl: './requerimento-colaborador.component.html',
  styleUrls: ['./requerimento-colaborador.component.css']
})
export class RequerimentoColaboradorComponent implements OnInit {

  constructor(private location: Location) { }

  formRequerimento = new FormGroup({
    data: new FormControl(null),
    diasFerias: new FormControl(null),
    diasAbono: new FormControl(null),
    mensagem: new FormControl(''),
  })

  ngOnInit(): void {
  }

  enviarRequerimento(){
    this.location.go('');
    window.location.reload()
  }

}
