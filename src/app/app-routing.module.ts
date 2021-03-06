import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequerimentoColaboradorComponent } from './requerimento-colaborador/requerimento-colaborador.component';
import { AvaliacaoGestorComponent } from './avaliacao-gestor/avaliacao-gestor.component';
import { TestpageServicesComponent } from './testpage-services/testpage-services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'requerimento-colaborador',
    component: RequerimentoColaboradorComponent,
  },
  { path: 'avaliacao-gestor', component: AvaliacaoGestorComponent },
  { path: 'secret-test-page', component: TestpageServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
