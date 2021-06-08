import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RequerimentoColaboradorComponent } from './requerimento-colaborador/requerimento-colaborador.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RequerimentoColaboradorComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: RequerimentoColaboradorComponent },
    ]),
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})  

export class AppModule { }
