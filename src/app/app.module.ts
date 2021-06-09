import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RequerimentoService } from './requerimento.service';
import { SaldoService } from './saldo.service';
import { FeriasService } from './ferias.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RequerimentoColaboradorComponent } from './requerimento-colaborador/requerimento-colaborador.component';
import { AvaliacaoGestorComponent } from './avaliacao-gestor/avaliacao-gestor.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RequerimentoColaboradorComponent,
    FooterComponent,
    AvaliacaoGestorComponent
  ],
  imports: [
    ReactiveFormsModule
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
