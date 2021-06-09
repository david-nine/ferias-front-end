import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RequerimentoColaboradorComponent } from './requerimento-colaborador/requerimento-colaborador.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AvaliacaoGestorComponent } from './avaliacao-gestor/avaliacao-gestor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RequerimentoColaboradorComponent,
    FooterComponent,
    HomeComponent,
    AvaliacaoGestorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})  

export class AppModule { }
