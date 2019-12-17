import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoteCatModule } from './views/vote-cat/vote-cat.module';

const routes: Routes = [
  { path: '', redirectTo: 'kinder',  pathMatch: 'full'},
  { path: 'kinder', loadChildren: () => VoteCatModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
