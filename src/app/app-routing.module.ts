import { RequerimentoColaboradorComponent } from './requerimento-colaborador/requerimento-colaborador.component';
import { AvaliacaoGestorComponent } from './avaliacao-gestor/avaliacao-gestor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RequerimentoColaboradorComponent },
  { path: 'gestor', component: AvaliacaoGestorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
