import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RequerimentoColaboradorComponent } from './requerimento-colaborador/requerimento-colaborador.component';
import { FooterComponent } from './footer/footer.component';
import { AvaliacaoGestorComponent } from './avaliacao-gestor/avaliacao-gestor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RequerimentoColaboradorComponent,
    FooterComponent,
    AvaliacaoGestorComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: RequerimentoColaboradorComponent },
      { path: 'gestor', component: AvaliacaoGestorComponent },
    ]),
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
