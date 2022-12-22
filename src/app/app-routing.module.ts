import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoComponent } from './pages/historico/historico.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
