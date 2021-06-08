import { SaldoService } from './saldo.service';
import { Component } from '@angular/core';
import { Saldo } from './saldo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';

  saldos: Saldo[] = [];

  constructor(private saldoService: SaldoService) {
  }

  ngOnInit(): void {
    this.getSaldos();
  }

  getSaldos() {
    this.saldoService.getSaldos().subscribe(saldo => this.saldos = saldo);
  }
}
