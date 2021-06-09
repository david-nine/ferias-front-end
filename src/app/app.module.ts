import { RequerimentoService } from './requerimento.service';
import { SaldoService } from './saldo.service';
import { AvaliacaoGestorComponent } from './avaliacao-gestor/avaliacao-gestor.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RequerimentoColaboradorComponent } from './requerimento-colaborador/requerimento-colaborador.component';
import { FooterComponent } from './footer/footer.component';

import { FeriasService } from './ferias.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RequerimentoColaboradorComponent,
    FooterComponent,
    AvaliacaoGestorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[
    FeriasService,
    SaldoService,
    RequerimentoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
