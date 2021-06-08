import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequerimentoColaboradorComponent } from './requerimento-colaborador/requerimento-colaborador.component';

const routes: Routes = [
  {path: 'requerimentoFerias', component: RequerimentoColaboradorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
